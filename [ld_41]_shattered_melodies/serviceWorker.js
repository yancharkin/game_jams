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
    "/game_jams/[ld_41]_shattered_melodies/",
    "/game_jams/[ld_41]_shattered_melodies/coi-serviceworker.js",
    "/game_jams/[ld_41]_shattered_melodies/index.apple-touch-icon.png",
    "/game_jams/[ld_41]_shattered_melodies/index.audio.worklet.js",
    "/game_jams/[ld_41]_shattered_melodies/index.html",
    "/game_jams/[ld_41]_shattered_melodies/index.icon.png",
    "/game_jams/[ld_41]_shattered_melodies/index.js",
    "/game_jams/[ld_41]_shattered_melodies/index.pck",
    "/game_jams/[ld_41]_shattered_melodies/index.png",
    "/game_jams/[ld_41]_shattered_melodies/index.wasm",
    "/game_jams/[ld_41]_shattered_melodies/icons/icon-192.png",
    "/game_jams/[ld_41]_shattered_melodies/icons/icon-512.png",
    "/game_jams/[ld_41]_shattered_melodies/screenshots/screenshot_00.webp",
    "/game_jams/[ld_41]_shattered_melodies/screenshots/screenshot_01.webp"
]
