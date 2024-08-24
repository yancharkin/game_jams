const cacheName = 'HPBAR-v1';

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
    "/game_jams/[ld_40]_hp_bar/",
    "/game_jams/[ld_40]_hp_bar/audio/bgm/Track1.m4a",
    "/game_jams/[ld_40]_hp_bar/audio/bgm/Track1.ogg",
    "/game_jams/[ld_40]_hp_bar/audio/bgm/Track2.m4a",
    "/game_jams/[ld_40]_hp_bar/audio/bgm/Track2.ogg",
    "/game_jams/[ld_40]_hp_bar/audio/bgm/Track3_5.m4a",
    "/game_jams/[ld_40]_hp_bar/audio/bgm/Track3_5.ogg",
    "/game_jams/[ld_40]_hp_bar/audio/bgm/Track3.m4a",
    "/game_jams/[ld_40]_hp_bar/audio/bgm/Track3.ogg",
    "/game_jams/[ld_40]_hp_bar/audio/bgs/Nature.m4a",
    "/game_jams/[ld_40]_hp_bar/audio/bgs/Nature.ogg",
    "/game_jams/[ld_40]_hp_bar/audio/bgs/Rain.m4a",
    "/game_jams/[ld_40]_hp_bar/audio/bgs/Rain.ogg",
    "/game_jams/[ld_40]_hp_bar/audio/bgs/Wind.m4a",
    "/game_jams/[ld_40]_hp_bar/audio/bgs/Wind.ogg",
    "/game_jams/[ld_40]_hp_bar/audio/me/Track1.m4a",
    "/game_jams/[ld_40]_hp_bar/audio/me/Track1.ogg",
    "/game_jams/[ld_40]_hp_bar/audio/se/BamBam.m4a",
    "/game_jams/[ld_40]_hp_bar/audio/se/BamBam.ogg",
    "/game_jams/[ld_40]_hp_bar/audio/se/Buzzer.m4a",
    "/game_jams/[ld_40]_hp_bar/audio/se/Buzzer.ogg",
    "/game_jams/[ld_40]_hp_bar/audio/se/Cancel.m4a",
    "/game_jams/[ld_40]_hp_bar/audio/se/Cancel.ogg",
    "/game_jams/[ld_40]_hp_bar/audio/se/Cursor.m4a",
    "/game_jams/[ld_40]_hp_bar/audio/se/Cursor.ogg",
    "/game_jams/[ld_40]_hp_bar/audio/se/Fall.m4a",
    "/game_jams/[ld_40]_hp_bar/audio/se/Fall.ogg",
    "/game_jams/[ld_40]_hp_bar/audio/se/Hit2.m4a",
    "/game_jams/[ld_40]_hp_bar/audio/se/Hit2.ogg",
    "/game_jams/[ld_40]_hp_bar/audio/se/Hit.m4a",
    "/game_jams/[ld_40]_hp_bar/audio/se/Hit.ogg",
    "/game_jams/[ld_40]_hp_bar/audio/se/Load.m4a",
    "/game_jams/[ld_40]_hp_bar/audio/se/Load.ogg",
    "/game_jams/[ld_40]_hp_bar/audio/se/OK.m4a",
    "/game_jams/[ld_40]_hp_bar/audio/se/OK.ogg",
    "/game_jams/[ld_40]_hp_bar/audio/se/Save.m4a",
    "/game_jams/[ld_40]_hp_bar/audio/se/Save.ogg",
    "/game_jams/[ld_40]_hp_bar/audio/se/Thunder.m4a",
    "/game_jams/[ld_40]_hp_bar/audio/se/Thunder.ogg",
    "/game_jams/[ld_40]_hp_bar/data/Actors.json",
    "/game_jams/[ld_40]_hp_bar/data/Animations.json",
    "/game_jams/[ld_40]_hp_bar/data/Armors.json",
    "/game_jams/[ld_40]_hp_bar/data/BattleHUD.json",
    "/game_jams/[ld_40]_hp_bar/data/Classes.json",
    "/game_jams/[ld_40]_hp_bar/data/CommonEvents.json",
    "/game_jams/[ld_40]_hp_bar/data/Enemies.json",
    "/game_jams/[ld_40]_hp_bar/data/Items.json",
    "/game_jams/[ld_40]_hp_bar/data/Map001.json",
    "/game_jams/[ld_40]_hp_bar/data/Map002.json",
    "/game_jams/[ld_40]_hp_bar/data/Map003.json",
    "/game_jams/[ld_40]_hp_bar/data/Map004.json",
    "/game_jams/[ld_40]_hp_bar/data/Map005.json",
    "/game_jams/[ld_40]_hp_bar/data/Map006.json",
    "/game_jams/[ld_40]_hp_bar/data/Map007.json",
    "/game_jams/[ld_40]_hp_bar/data/Map008.json",
    "/game_jams/[ld_40]_hp_bar/data/Map009.json",
    "/game_jams/[ld_40]_hp_bar/data/Map010.json",
    "/game_jams/[ld_40]_hp_bar/data/Map011.json",
    "/game_jams/[ld_40]_hp_bar/data/MapHUD.json",
    "/game_jams/[ld_40]_hp_bar/data/MapInfos.json",
    "/game_jams/[ld_40]_hp_bar/data/Skills.json",
    "/game_jams/[ld_40]_hp_bar/data/States.json",
    "/game_jams/[ld_40]_hp_bar/data/System.json",
    "/game_jams/[ld_40]_hp_bar/data/Tilesets.json",
    "/game_jams/[ld_40]_hp_bar/data/Troops.json",
    "/game_jams/[ld_40]_hp_bar/data/Weapons.json",
    "/game_jams/[ld_40]_hp_bar/fonts/gamefont.css",
    "/game_jams/[ld_40]_hp_bar/fonts/yoster.ttf",
    "/game_jams/[ld_40]_hp_bar/icon/icon.png",
    "/game_jams/[ld_40]_hp_bar/icon/icon-192.png",
    "/game_jams/[ld_40]_hp_bar/icon/icon-512.png",
    "/game_jams/[ld_40]_hp_bar/img/animations/Heal.png",
    "/game_jams/[ld_40]_hp_bar/img/animations/Hit1.png",
    "/game_jams/[ld_40]_hp_bar/img/animations/HitFire.png",
    "/game_jams/[ld_40]_hp_bar/img/battlebacks1/BattlebackMaze.png",
    "/game_jams/[ld_40]_hp_bar/img/characters/$Arrow.png",
    "/game_jams/[ld_40]_hp_bar/img/characters/!$ArrowSmall.png",
    "/game_jams/[ld_40]_hp_bar/img/characters/!$BlueFalling1.png",
    "/game_jams/[ld_40]_hp_bar/img/characters/!$BlueFalling2.png",
    "/game_jams/[ld_40]_hp_bar/img/characters/!$BlueFalling3.png",
    "/game_jams/[ld_40]_hp_bar/img/characters/!$BrownCorpse.png",
    "/game_jams/[ld_40]_hp_bar/img/characters/!$Corpse.png",
    "/game_jams/[ld_40]_hp_bar/img/characters/!$Hole1.png",
    "/game_jams/[ld_40]_hp_bar/img/characters/!$Hole2.png",
    "/game_jams/[ld_40]_hp_bar/img/characters/!$Hole3.png",
    "/game_jams/[ld_40]_hp_bar/img/characters/!$OrangeCorpse.png",
    "/game_jams/[ld_40]_hp_bar/img/characters/!$PurpleCorpse.png",
    "/game_jams/[ld_40]_hp_bar/img/characters/$Torch.png",
    "/game_jams/[ld_40]_hp_bar/img/characters/!$Tree.png",
    "/game_jams/[ld_40]_hp_bar/img/characters/Characters.png",
    "/game_jams/[ld_40]_hp_bar/img/characters/People.png",
    "/game_jams/[ld_40]_hp_bar/img/characters/Vehicle.png",
    "/game_jams/[ld_40]_hp_bar/img/faces/Faces1.png",
    "/game_jams/[ld_40]_hp_bar/img/parallaxes/Title.png",
    "/game_jams/[ld_40]_hp_bar/img/pictures/15YearsLater.png",
    "/game_jams/[ld_40]_hp_bar/img/pictures/Black.png",
    "/game_jams/[ld_40]_hp_bar/img/pictures/YearsLater.png",
    "/game_jams/[ld_40]_hp_bar/img/sfonts/yoster_black.png",
    "/game_jams/[ld_40]_hp_bar/img/sfonts/yoster_blue.png",
    "/game_jams/[ld_40]_hp_bar/img/sfonts/yoster_green.png",
    "/game_jams/[ld_40]_hp_bar/img/sfonts/yoster_grey.png",
    "/game_jams/[ld_40]_hp_bar/img/sfonts/yoster_orange.png",
    "/game_jams/[ld_40]_hp_bar/img/sfonts/yoster_red.png",
    "/game_jams/[ld_40]_hp_bar/img/sfonts/yoster_white.png",
    "/game_jams/[ld_40]_hp_bar/img/sfonts/yoster_yellow.png",
    "/game_jams/[ld_40]_hp_bar/img/sv_actors/Blue.png",
    "/game_jams/[ld_40]_hp_bar/img/sv_actors/Brown.png",
    "/game_jams/[ld_40]_hp_bar/img/sv_actors/Orange.png",
    "/game_jams/[ld_40]_hp_bar/img/sv_actors/Purple.png",
    "/game_jams/[ld_40]_hp_bar/img/sv_enemies/Enemy.png",
    "/game_jams/[ld_40]_hp_bar/img/system/Balloon.png",
    "/game_jams/[ld_40]_hp_bar/img/system/ButtonSet.png",
    "/game_jams/[ld_40]_hp_bar/img/system/Damage.png",
    "/game_jams/[ld_40]_hp_bar/img/system/GameOver.png",
    "/game_jams/[ld_40]_hp_bar/img/system/IconSet.png",
    "/game_jams/[ld_40]_hp_bar/img/system/Loading.png",
    "/game_jams/[ld_40]_hp_bar/img/system/Shadow1.png",
    "/game_jams/[ld_40]_hp_bar/img/system/Shadow2.png",
    "/game_jams/[ld_40]_hp_bar/img/system/StartImage.png",
    "/game_jams/[ld_40]_hp_bar/img/system/States.png",
    "/game_jams/[ld_40]_hp_bar/img/system/TitleChar.png",
    "/game_jams/[ld_40]_hp_bar/img/system/TurnIndicator.png",
    "/game_jams/[ld_40]_hp_bar/img/system/Weapons1.png",
    "/game_jams/[ld_40]_hp_bar/img/system/Weapons2.png",
    "/game_jams/[ld_40]_hp_bar/img/system/Weapons3.png",
    "/game_jams/[ld_40]_hp_bar/img/system/Window.png",
    "/game_jams/[ld_40]_hp_bar/img/tilesets/A2.png",
    "/game_jams/[ld_40]_hp_bar/img/tilesets/A2v3.png",
    "/game_jams/[ld_40]_hp_bar/img/tilesets/A4.png",
    "/game_jams/[ld_40]_hp_bar/img/tilesets/B.png",
    "/game_jams/[ld_40]_hp_bar/img/tilesets/Bv2.png",
    "/game_jams/[ld_40]_hp_bar/img/tilesets/Bv3.png",
    "/game_jams/[ld_40]_hp_bar/img/VirtualButtons/ButtonCancelHot.png",
    "/game_jams/[ld_40]_hp_bar/img/VirtualButtons/ButtonCancel.png",
    "/game_jams/[ld_40]_hp_bar/img/VirtualButtons/ButtonOkHot.png",
    "/game_jams/[ld_40]_hp_bar/img/VirtualButtons/ButtonOk.png",
    "/game_jams/[ld_40]_hp_bar/img/VirtualButtons/DPadHot.png",
    "/game_jams/[ld_40]_hp_bar/img/VirtualButtons/DPad.png",
    "/game_jams/[ld_40]_hp_bar/img/weather/Leaf.png",
    "/game_jams/[ld_40]_hp_bar/img/weather/Lights.png",
    "/game_jams/[ld_40]_hp_bar/img/weather/Sand.png",
    "/game_jams/[ld_40]_hp_bar/index.html",
    "/game_jams/[ld_40]_hp_bar/js/libs/fpsmeter.js",
    "/game_jams/[ld_40]_hp_bar/js/libs/iphone-inline-video.browser.js",
    "/game_jams/[ld_40]_hp_bar/js/libs/lz-string.js",
    "/game_jams/[ld_40]_hp_bar/js/libs/pixi.js",
    "/game_jams/[ld_40]_hp_bar/js/libs/pixi-picture.js",
    "/game_jams/[ld_40]_hp_bar/js/libs/pixi-tilemap.js",
    "/game_jams/[ld_40]_hp_bar/js/main.js",
    "/game_jams/[ld_40]_hp_bar/js/plugins/ALOE_VirtualButtons_Addon.js",
    "/game_jams/[ld_40]_hp_bar/js/plugins/ALOE_VirtualButtons.js",
    "/game_jams/[ld_40]_hp_bar/js/plugins/Community_Basic.js",
    "/game_jams/[ld_40]_hp_bar/js/plugins/CXJ_Exit.js",
    "/game_jams/[ld_40]_hp_bar/js/plugins/FullscreenOptions.js",
    "/game_jams/[ld_40]_hp_bar/js/plugins/GALV_CustomTitle.js",
    "/game_jams/[ld_40]_hp_bar/js/plugins/GALV_DiagonalMovement.js",
    "/game_jams/[ld_40]_hp_bar/js/plugins/GALV_MessageStyles.js",
    "/game_jams/[ld_40]_hp_bar/js/plugins/MOG_ActorTurnIndicator.js",
    "/game_jams/[ld_40]_hp_bar/js/plugins/MOG_Weather_EX.js",
    "/game_jams/[ld_40]_hp_bar/js/plugins/SRD_BattleStatusCustomizer.js",
    "/game_jams/[ld_40]_hp_bar/js/plugins/SRD_BattleStatusCustomizer_Part2.js",
    "/game_jams/[ld_40]_hp_bar/js/plugins/VE_BasicModule.js",
    "/game_jams/[ld_40]_hp_bar/js/plugins/VE_SFont.js",
    "/game_jams/[ld_40]_hp_bar/js/plugins/YAN_Battle_Scene_Remake.js",
    "/game_jams/[ld_40]_hp_bar/js/plugins/YAN_CustomizeOptions.js",
    "/game_jams/[ld_40]_hp_bar/js/plugins/YAN_HideInactiveCursor.js",
    "/game_jams/[ld_40]_hp_bar/js/plugins/YAN_HP_Bar.js",
    "/game_jams/[ld_40]_hp_bar/js/plugins/YAN_Mixed_Edits_To_Core_Files.js",
    "/game_jams/[ld_40]_hp_bar/js/plugins/YAN_NoAccidentalDialogSkip.js",
    "/game_jams/[ld_40]_hp_bar/js/plugins/YAN_SavefileList_Remake.js",
    "/game_jams/[ld_40]_hp_bar/js/plugins/YAN_SetRenderer.js",
    "/game_jams/[ld_40]_hp_bar/js/plugins/YAN_Simpler_Sound_Control.js",
    "/game_jams/[ld_40]_hp_bar/js/plugins/YAN_SingleClickCommands.js",
    "/game_jams/[ld_40]_hp_bar/js/plugins/YAN_TurnSwitchesOnStart.js",
    "/game_jams/[ld_40]_hp_bar/js/plugins/YAN_WASD_Controls+.js",
    "/game_jams/[ld_40]_hp_bar/js/plugins/YEP_BattleEngineCore.js",
    "/game_jams/[ld_40]_hp_bar/js/plugins/YEP_FpsSynchOption.js",
    "/game_jams/[ld_40]_hp_bar/js/plugins/YEP_MainMenuManager.js",
    "/game_jams/[ld_40]_hp_bar/js/plugins/YEP_RegionRestrictions.js",
    "/game_jams/[ld_40]_hp_bar/js/plugins/YEP_X_VisualHpGauge.js",
    "/game_jams/[ld_40]_hp_bar/js/plugins/YSP_Preloader.js",
    "/game_jams/[ld_40]_hp_bar/js/plugins.js",
    "/game_jams/[ld_40]_hp_bar/js/rpg_core.js",
    "/game_jams/[ld_40]_hp_bar/js/rpg_managers.js",
    "/game_jams/[ld_40]_hp_bar/js/rpg_objects.js",
    "/game_jams/[ld_40]_hp_bar/js/rpg_scenes.js",
    "/game_jams/[ld_40]_hp_bar/js/rpg_sprites.js",
    "/game_jams/[ld_40]_hp_bar/js/rpg_windows.js",
    "/game_jams/[ld_40]_hp_bar/screenshots/screenshot_00.webp",
    "/game_jams/[ld_40]_hp_bar/screenshots/screenshot_01.webp"
]
