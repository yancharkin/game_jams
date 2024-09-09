const cacheName = 'MELODIES-v1';

let coepCredentialless = false;

self.addEventListener("install", (event) => {
    console.log("[Service Worker] Install");
    event.waitUntil(
        (async () => {
            const cache = await caches.open(cacheName);
            console.log("[Service Worker] Caching everything");
            try {
                await cache.addAll(filesList);
            } catch (error) {
                console.error(`[Service Worker] ${error}`);
                for (let f of filesList) {
                    try {
                        //console.log(`[Service Worker] Caching ${f}`);
                        await cache.add(f);
                    } catch (error) {
                        console.error(`[Service Worker] ${error}:`, f);
                    }
                }
            }
        })(),
    );
});

self.addEventListener("activate", (e) => {
    e.waitUntil(
        caches.keys().then((keyList) => {
            return Promise.all(
                keyList.map((key) => {
                    if (key === cacheName) {
                        return;
                    }
                    console.warn(`[Service Worker] Cache removed: ${key}`);
                    return caches.delete(key);
                }),
            );
        }),
    );
});

self.addEventListener("fetch", (event) => {
    event.respondWith(
        (async () => {
            const cachedResponse = await caches.match(event.request,{ignoreMethod:true});
            if (cachedResponse) {
                console.log(`[Service Worker] Fetching resource: ${event.request.url}`);
                return addHeaders(cachedResponse);
            }
            try {
                const networkResponse = await fetch(event.request);
                if (networkResponse.ok) {
                    const cache = await caches.open(cacheName);
                    console.log(`[Service Worker] Caching new resource: ${event.request.url}`);
                    cache.put(event.request, networkResponse.clone());
                }
                return addHeaders(networkResponse);
            } catch (error) {
                console.error(`[Service Worker] ${error}`, event.request.url);
                return Response.error();
            }
        })(),
    );
});

function addHeaders(response) {
    const newHeaders = new Headers(response.headers);
    newHeaders.set("Cross-Origin-Embedder-Policy",
        coepCredentialless ? "credentialless" : "require-corp"
    );
    if (!coepCredentialless) {
        newHeaders.set("Cross-Origin-Resource-Policy", "cross-origin");
    }
    newHeaders.set("Cross-Origin-Opener-Policy", "same-origin");

    return new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers: newHeaders,
    });
}

const filesList = [
    "/",
    "/coi-serviceworker.js",
    "/index.apple-touch-icon.png",
    "/index.audio.worklet.js",
    "/index.html",
    "/index.icon.png",
    "/index.js",
    "/index.pck",
    "/index.png",
    "/index.wasm",
    "/icons/icon-192.png",
    "/icons/icon-512.png",
    "/screenshots/screenshot_00.webp",
    "/screenshots/screenshot_01.webp"
]
