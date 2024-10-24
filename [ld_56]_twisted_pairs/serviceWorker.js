const cacheName = 'TWISTED-v1.0';

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
                return cachedResponse;
            }
            try {
                const networkResponse = await fetch(event.request);
                if (networkResponse.ok) {
                    const cache = await caches.open(cacheName);
                    console.log(`[Service Worker] Caching new resource: ${event.request.url}`);
                    cache.put(event.request, networkResponse.clone());
                }
                return networkResponse;
            } catch (error) {
                console.error(`[Service Worker] ${error}`, event.request.url);
                return Response.error();
            }
        })(),
    );
});

const filesList = [
    "/game_jams/[ld_56]_twisted_pairs/",
    "/game_jams/[ld_56]_twisted_pairs/002.png",
    "/game_jams/[ld_56]_twisted_pairs/003.png",
    "/game_jams/[ld_56]_twisted_pairs/00.png",
    "/game_jams/[ld_56]_twisted_pairs/012.png",
    "/game_jams/[ld_56]_twisted_pairs/013.png",
    "/game_jams/[ld_56]_twisted_pairs/01.png",
    "/game_jams/[ld_56]_twisted_pairs/022.png",
    "/game_jams/[ld_56]_twisted_pairs/023.png",
    "/game_jams/[ld_56]_twisted_pairs/02.png",
    "/game_jams/[ld_56]_twisted_pairs/032.png",
    "/game_jams/[ld_56]_twisted_pairs/033.png",
    "/game_jams/[ld_56]_twisted_pairs/03.png",
    "/game_jams/[ld_56]_twisted_pairs/042.png",
    "/game_jams/[ld_56]_twisted_pairs/043.png",
    "/game_jams/[ld_56]_twisted_pairs/04.png",
    "/game_jams/[ld_56]_twisted_pairs/052.png",
    "/game_jams/[ld_56]_twisted_pairs/053.png",
    "/game_jams/[ld_56]_twisted_pairs/05.png",
    "/game_jams/[ld_56]_twisted_pairs/062.png",
    "/game_jams/[ld_56]_twisted_pairs/063.png",
    "/game_jams/[ld_56]_twisted_pairs/06.png",
    "/game_jams/[ld_56]_twisted_pairs/072.png",
    "/game_jams/[ld_56]_twisted_pairs/073.png",
    "/game_jams/[ld_56]_twisted_pairs/07.png",
    "/game_jams/[ld_56]_twisted_pairs/082.png",
    "/game_jams/[ld_56]_twisted_pairs/083.png",
    "/game_jams/[ld_56]_twisted_pairs/08.png",
    "/game_jams/[ld_56]_twisted_pairs/092.png",
    "/game_jams/[ld_56]_twisted_pairs/093.png",
    "/game_jams/[ld_56]_twisted_pairs/09.png",
    "/game_jams/[ld_56]_twisted_pairs/affinetransformation.js",
    "/game_jams/[ld_56]_twisted_pairs/ammo8.png",
    "/game_jams/[ld_56]_twisted_pairs/AsyncTasksManager.js",
    "/game_jams/[ld_56]_twisted_pairs/aurora.png",
    "/game_jams/[ld_56]_twisted_pairs/background.png",
    "/game_jams/[ld_56]_twisted_pairs/bastille.png",
    "/game_jams/[ld_56]_twisted_pairs/click.wav",
    "/game_jams/[ld_56]_twisted_pairs/cockroach0.png",
    "/game_jams/[ld_56]_twisted_pairs/cockroach11.png",
    "/game_jams/[ld_56]_twisted_pairs/cockroach1.png",
    "/game_jams/[ld_56]_twisted_pairs/cockroach2.png",
    "/game_jams/[ld_56]_twisted_pairs/cockroach3.png",
    "/game_jams/[ld_56]_twisted_pairs/code0.js",
    "/game_jams/[ld_56]_twisted_pairs/code1.js",
    "/game_jams/[ld_56]_twisted_pairs/CustomRuntimeObject2D.js",
    "/game_jams/[ld_56]_twisted_pairs/CustomRuntimeObjectInstanceContainer.js",
    "/game_jams/[ld_56]_twisted_pairs/CustomRuntimeObject.js",
    "/game_jams/[ld_56]_twisted_pairs/data.js",
    "/game_jams/[ld_56]_twisted_pairs/dead0.png",
    "/game_jams/[ld_56]_twisted_pairs/dead1.png",
    "/game_jams/[ld_56]_twisted_pairs/dead2.png",
    "/game_jams/[ld_56]_twisted_pairs/enter.png",
    "/game_jams/[ld_56]_twisted_pairs/events-tools/cameratools.js",
    "/game_jams/[ld_56]_twisted_pairs/events-tools/commontools.js",
    "/game_jams/[ld_56]_twisted_pairs/events-tools/inputtools.js",
    "/game_jams/[ld_56]_twisted_pairs/events-tools/networktools.js",
    "/game_jams/[ld_56]_twisted_pairs/events-tools/objecttools.js",
    "/game_jams/[ld_56]_twisted_pairs/events-tools/runtimescenetools.js",
    "/game_jams/[ld_56]_twisted_pairs/events-tools/soundtools.js",
    "/game_jams/[ld_56]_twisted_pairs/events-tools/storagetools.js",
    "/game_jams/[ld_56]_twisted_pairs/events-tools/stringtools.js",
    "/game_jams/[ld_56]_twisted_pairs/events-tools/variabletools.js",
    "/game_jams/[ld_56]_twisted_pairs/events-tools/windowtools.js",
    "/game_jams/[ld_56]_twisted_pairs/Extensions/AnchorBehavior/anchorruntimebehavior.js",
    "/game_jams/[ld_56]_twisted_pairs/Extensions/Effects/crt-pixi-filter.js",
    "/game_jams/[ld_56]_twisted_pairs/Extensions/Effects/pixi-filters/filter-crt.js",
    "/game_jams/[ld_56]_twisted_pairs/Extensions/Leaderboards/leaderboardstools.js",
    "/game_jams/[ld_56]_twisted_pairs/Extensions/Leaderboards/sha256.js",
    "/game_jams/[ld_56]_twisted_pairs/Extensions/PlayerAuthentication/playerauthenticationcomponents.js",
    "/game_jams/[ld_56]_twisted_pairs/Extensions/PlayerAuthentication/playerauthenticationtools.js",
    "/game_jams/[ld_56]_twisted_pairs/Extensions/TextInput/textinputruntimeobject.js",
    "/game_jams/[ld_56]_twisted_pairs/Extensions/TextInput/textinputruntimeobject-pixi-renderer.js",
    "/game_jams/[ld_56]_twisted_pairs/Extensions/TextObject/textruntimeobject.js",
    "/game_jams/[ld_56]_twisted_pairs/Extensions/TextObject/textruntimeobject-pixi-renderer.js",
    "/game_jams/[ld_56]_twisted_pairs/Extensions/TiledSpriteObject/tiledspriteruntimeobject.js",
    "/game_jams/[ld_56]_twisted_pairs/Extensions/TiledSpriteObject/tiledspriteruntimeobject-pixi-renderer.js",
    "/game_jams/[ld_56]_twisted_pairs/fontfaceobserver-font-manager/fontfaceobserver-font-manager.js",
    "/game_jams/[ld_56]_twisted_pairs/fontfaceobserver-font-manager/fontfaceobserver.js",
    "/game_jams/[ld_56]_twisted_pairs/force.js",
    "/game_jams/[ld_56]_twisted_pairs/fullscreen_off2.png",
    "/game_jams/[ld_56]_twisted_pairs/fullscreen_off3.png",
    "/game_jams/[ld_56]_twisted_pairs/fullscreen_off.png",
    "/game_jams/[ld_56]_twisted_pairs/fullscreen_on2.png",
    "/game_jams/[ld_56]_twisted_pairs/fullscreen_on3.png",
    "/game_jams/[ld_56]_twisted_pairs/fullscreen_on.png",
    "/game_jams/[ld_56]_twisted_pairs/gd.js",
    "/game_jams/[ld_56]_twisted_pairs/highlight.png",
    "/game_jams/[ld_56]_twisted_pairs/howler-sound-manager/howler.min.js",
    "/game_jams/[ld_56]_twisted_pairs/howler-sound-manager/howler-sound-manager.js",
    "/game_jams/[ld_56]_twisted_pairs/icon-192.png",
    "/game_jams/[ld_56]_twisted_pairs/icon-512.png",
    "/game_jams/[ld_56]_twisted_pairs/icon.png",
    "/game_jams/[ld_56]_twisted_pairs/index.html",
    "/game_jams/[ld_56]_twisted_pairs/inputmanager.js",
    "/game_jams/[ld_56]_twisted_pairs/jsonmanager.js",
    "/game_jams/[ld_56]_twisted_pairs/kill.wav",
    "/game_jams/[ld_56]_twisted_pairs/layer.js",
    "/game_jams/[ld_56]_twisted_pairs/lets_do_it.wav",
    "/game_jams/[ld_56]_twisted_pairs/libs/jshashtable.js",
    "/game_jams/[ld_56]_twisted_pairs/libs/rbush.js",
    "/game_jams/[ld_56]_twisted_pairs/LICENSE.GDevelop.txt",
    "/game_jams/[ld_56]_twisted_pairs/loading_screen.png",
    "/game_jams/[ld_56]_twisted_pairs/logger.js",
    "/game_jams/[ld_56]_twisted_pairs/Model3DManager.js",
    "/game_jams/[ld_56]_twisted_pairs/music.wav",
    "/game_jams/[ld_56]_twisted_pairs/object-capabilities/AnimatableBehavior.js",
    "/game_jams/[ld_56]_twisted_pairs/object-capabilities/EffectBehavior.js",
    "/game_jams/[ld_56]_twisted_pairs/object-capabilities/FlippableBehavior.js",
    "/game_jams/[ld_56]_twisted_pairs/object-capabilities/OpacityBehavior.js",
    "/game_jams/[ld_56]_twisted_pairs/object-capabilities/ResizableBehavior.js",
    "/game_jams/[ld_56]_twisted_pairs/object-capabilities/ScalableBehavior.js",
    "/game_jams/[ld_56]_twisted_pairs/object-capabilities/TextContainerBehavior.js",
    "/game_jams/[ld_56]_twisted_pairs/okey-dokey.wav",
    "/game_jams/[ld_56]_twisted_pairs/ok.wav",
    "/game_jams/[ld_56]_twisted_pairs/oncetriggers.js",
    "/game_jams/[ld_56]_twisted_pairs/pixi-renderers/CustomRuntimeObject2DPixiRenderer.js",
    "/game_jams/[ld_56]_twisted_pairs/pixi-renderers/DebuggerPixiRenderer.js",
    "/game_jams/[ld_56]_twisted_pairs/pixi-renderers/layer-pixi-renderer.js",
    "/game_jams/[ld_56]_twisted_pairs/pixi-renderers/loadingscreen-pixi-renderer.js",
    "/game_jams/[ld_56]_twisted_pairs/pixi-renderers/pixi-bitmapfont-manager.js",
    "/game_jams/[ld_56]_twisted_pairs/pixi-renderers/pixi-effects-manager.js",
    "/game_jams/[ld_56]_twisted_pairs/pixi-renderers/pixi-filters-tools.js",
    "/game_jams/[ld_56]_twisted_pairs/pixi-renderers/pixi-image-manager.js",
    "/game_jams/[ld_56]_twisted_pairs/pixi-renderers/pixi.js",
    "/game_jams/[ld_56]_twisted_pairs/pixi-renderers/runtimegame-pixi-renderer.js",
    "/game_jams/[ld_56]_twisted_pairs/pixi-renderers/runtimescene-pixi-renderer.js",
    "/game_jams/[ld_56]_twisted_pairs/pixi-renderers/spriteruntimeobject-pixi-renderer.js",
    "/game_jams/[ld_56]_twisted_pairs/polygon.js",
    "/game_jams/[ld_56]_twisted_pairs/profiler.js",
    "/game_jams/[ld_56]_twisted_pairs/ResourceCache.js",
    "/game_jams/[ld_56]_twisted_pairs/ResourceLoader.js",
    "/game_jams/[ld_56]_twisted_pairs/runtimebehavior.js",
    "/game_jams/[ld_56]_twisted_pairs/RuntimeCustomObjectLayer.js",
    "/game_jams/[ld_56]_twisted_pairs/runtimegame.js",
    "/game_jams/[ld_56]_twisted_pairs/RuntimeInstanceContainer.js",
    "/game_jams/[ld_56]_twisted_pairs/RuntimeLayer.js",
    "/game_jams/[ld_56]_twisted_pairs/runtimeobject.js",
    "/game_jams/[ld_56]_twisted_pairs/runtimescene.js",
    "/game_jams/[ld_56]_twisted_pairs/runtimewatermark.js",
    "/game_jams/[ld_56]_twisted_pairs/scenestack.js",
    "/game_jams/[ld_56]_twisted_pairs/screenshots/screenshot_00.webp",
    "/game_jams/[ld_56]_twisted_pairs/screenshots/screenshot_01.webp",
    "/game_jams/[ld_56]_twisted_pairs/sound_off2.png",
    "/game_jams/[ld_56]_twisted_pairs/sound_off3.png",
    "/game_jams/[ld_56]_twisted_pairs/sound_off.png",
    "/game_jams/[ld_56]_twisted_pairs/sound_on2.png",
    "/game_jams/[ld_56]_twisted_pairs/sound_on3.png",
    "/game_jams/[ld_56]_twisted_pairs/sound_on.png",
    "/game_jams/[ld_56]_twisted_pairs/spawner.png",
    "/game_jams/[ld_56]_twisted_pairs/splash/gd-logo-light.js",
    "/game_jams/[ld_56]_twisted_pairs/SpriteAnimator.js",
    "/game_jams/[ld_56]_twisted_pairs/spriteruntimeobject.js",
    "/game_jams/[ld_56]_twisted_pairs/timemanager.js",
    "/game_jams/[ld_56]_twisted_pairs/timer.js",
    "/game_jams/[ld_56]_twisted_pairs/variable.js",
    "/game_jams/[ld_56]_twisted_pairs/variablescontainer.js",
    "/game_jams/[ld_56]_twisted_pairs/you_lose.wav",
    "/game_jams/[ld_56]_twisted_pairs/you_win.wav"
]
