import { readFile, writeFile } from "node:fs/promises";
import { extname, join, normalize, resolve, sep } from "node:path";
import worker from "../dist/server/index.js";

const root = process.cwd();
const clientDir = resolve(root, "dist/client");
const outputFile = join(clientDir, "index.html");

const contentTypes = {
  ".css": "text/css; charset=utf-8",
  ".gif": "image/gif",
  ".ico": "image/x-icon",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
};

function toAssetPath(request) {
  const url = new URL(request.url);
  const pathname = decodeURIComponent(url.pathname);
  const relativePath = normalize(pathname.replace(/^\/+/, ""));
  const assetPath = resolve(clientDir, relativePath);

  if (assetPath !== clientDir && !assetPath.startsWith(`${clientDir}${sep}`)) {
    throw new Error(`Refusing to read outside dist/client: ${pathname}`);
  }

  return assetPath;
}

async function fetchAsset(request) {
  try {
    const assetPath = toAssetPath(request);
    const body = await readFile(assetPath);
    const contentType = contentTypes[extname(assetPath).toLowerCase()] ?? "application/octet-stream";

    return new Response(body, {
      headers: {
        "Content-Type": contentType,
      },
    });
  } catch {
    return new Response("Not Found", { status: 404 });
  }
}

const response = await worker.fetch(
  new Request("https://g5-deli.pages.dev/"),
  {
    ASSETS: { fetch: fetchAsset },
    IMAGES: null,
  },
  {
    waitUntil() {},
    passThroughOnException() {},
  },
);

if (!response.ok) {
  throw new Error(`Static export failed with HTTP ${response.status}`);
}

const html = await response.text();

if (!html.includes("G5 Deli") || !html.includes("<!DOCTYPE html>")) {
  throw new Error("Static export did not look like the G5 Deli homepage.");
}

await writeFile(outputFile, html);
console.log(`Exported ${outputFile}`);
