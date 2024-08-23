/*=============================================================================
* Fullscreen_Options.js
*=============================================================================*/

/*:=============================================================================
* @plugindesc Add fullscreen option, force fullscreen in Stretch Mode and disable F3.
* Mods by yancharkin: do no show option if running as standalone PWA on mobile,
* ability to disable option on the specific site.
* @author Krimer
*
* @param fullscreenOptionName
* @desc Fullscreen option name
* Default: Fullscreen
* @default Fullscreen
*
* @param forceFullscreen
* @desc Force fullscreen during first game start? true or false Default: false
* @default false
*
* @param siteWithoutFullscreenOption
* @desc Disable fullscreen option on this site
* @default itch
*
* @help
* "config.rpgsave" from "save" folder must be deleted to perform clean
* first start.
* After clean first start the "config.rpgsave" would be created
* and all changes in 'Options' would be saved there.
* =============================================================================*/

(function() {

    var parameters = PluginManager.parameters('FullscreenOptions');
    var noFsOption = String(parameters['siteWithoutFullscreenOption']) || 'itch';
    var isStandaloneMobilePWA = Utils.isMobileDevice() && !window.matchMedia("(display-mode: browser)").matches;

    /* Overwrite */
    Graphics._defaultStretchMode = function() {
    return true;
    };

    /* Overwrite */
    Graphics._onKeyDown = function(event) {
        if (!event.ctrlKey && !event.altKey) {
            switch (event.keyCode) {
                case 113: /* F2 */
                event.preventDefault();
                this._switchFPSMeter();
                break;
                case 114: /* F3 */
                event.preventDefault();
                break;
                case 115: /* F4 */
                event.preventDefault();
                this._switchFullScreen();
                break;
            }
        }
    };

    if (!isStandaloneMobilePWA && (window.location.href.indexOf(noFsOption) == -1)) {

        var fullscreenOptionName = String(parameters['fullscreenOptionName']) || 'Fullscreen';
        var forceFullscreen = String(parameters['forceFullscreen']);

        /* Alias */
        var _ConfigManager_makeData_Alias = ConfigManager.makeData;
        ConfigManager.makeData = function() {
        var config = _ConfigManager_makeData_Alias.call(this);
        config.callFullscreen = this.callFullscreen;
        return config;
        };

        /* Alias */
        var _ConfigManager_applyData_Alias = ConfigManager.applyData;
        ConfigManager.applyData = function(config) {
        this.callFullscreen = this.readFlag(config, 'callFullscreen');
        _ConfigManager_applyData_Alias.call(this, config);
        };

        /* Alias */
        var _Scene_Title_start_Alias = Scene_Title.prototype.start;
        Scene_Title.prototype.start = function() {
        if (ConfigManager.callFullscreen && StorageManager.exists(-1)) {
        Graphics._requestFullScreen();
        } else if (!ConfigManager.callFullscreen && StorageManager.exists(-1)) {
        Graphics._cancelFullScreen();
        }
        if (!StorageManager.exists(-1) && eval(forceFullscreen)){
        Graphics._switchFullScreen();
        ConfigManager.callFullscreen = eval(forceFullscreen);
        }
        ConfigManager.save();
        _Scene_Title_start_Alias.call(this)
        };

        /* Alias */
        var _Window_Options_addGeneralOptions_Alias = Window_Options.prototype.addGeneralOptions;
        Window_Options.prototype.addGeneralOptions = function() {
        this.addCommand(fullscreenOptionName, 'callFullscreen');
        _Window_Options_addGeneralOptions_Alias.call(this)
        };

        /* Alias */
        var _Window_Options_processOk_Alias = Window_Options.prototype.processOk;
        Window_Options.prototype.processOk = function() {
        _Window_Options_processOk_Alias.call(this)
        var index = this.index();
        var symbol = this.commandSymbol(index);
        if (ConfigManager.callFullscreen && symbol == "callFullscreen") {
        Graphics._requestFullScreen();
        } else if (!ConfigManager.callFullscreen && symbol == "callFullscreen") {
        Graphics._cancelFullScreen();
        }
        };
    }
})();
