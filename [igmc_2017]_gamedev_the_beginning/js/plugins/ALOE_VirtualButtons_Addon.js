/*=============================================================================
* ALOE_VirtualButtons_Addon.js
*=============================================================================*/

/*:=============================================================================
* @plugindesc Addon to Aloe Guvner's ALOE_VirtualButtons plunin.
* Add option to enable/disable virtual buttons to the options menu.
* Option to disable two finger touch on the map if the dpad is active.
* @author yancharkin
*
* @param optionName
* @desc Name shown in Options menu
* @default Onscreen Controls
*
* @param disableTwoFingerTouch
* @text Disable Two Finger Touch and RMB
* @type boolean
* @desc Disable two finger touch and RMB on the map when a DPad is active.
* @default true
*
* =============================================================================*/

"use strict";

var gameInterpreter = new Game_Interpreter()
var parameters = PluginManager.parameters('ALOE_VirtualButtons_Addon');
var optionName = parameters['optionName'] || 'Onscreen Controls';
var disableTwoFingerTouch = (parameters['disableTwoFingerTouch'] === 'true');

var mainParameters = PluginManager.parameters('ALOE_VirtualButtons');
var dpadActiveScenes = JSON.parse(JSON.parse(mainParameters['dPadSettings']).activeScenes);
var buttonsSettings = JSON.parse(mainParameters['keyButtonSettings']);
var controlButtonActiveScenes = JSON.parse(JSON.parse(mainParameters['controlButtonSettings']).activeScenes);

var _ConfigManager_makeData_Alias = ConfigManager.makeData;
ConfigManager.makeData = function() {
    var config = _ConfigManager_makeData_Alias.call(this);
    config.onscreenControls = this.onscreenControls;
    return config;
};

var _ConfigManager_applyData_Alias = ConfigManager.applyData;
ConfigManager.applyData = function(config) {
    this.onscreenControls = this.readFlag(config, 'onscreenControls');
    _ConfigManager_applyData_Alias.call(this, config);
};

function toggleOnscreenControls() {
    if (ConfigManager.onscreenControls) {
        gameInterpreter.pluginCommand('virtualbuttons', ['show', 'all', 'instant']);
    } else {
        gameInterpreter.pluginCommand('virtualbuttons', ['hide', 'all', 'instant']);
    }
};

var _Scene_Boot_create_Alias = Scene_Boot.prototype.create;
Scene_Boot.prototype.create = function () {
    _Scene_Boot_create_Alias.call(this);
    if (dpadActiveScenes) {
        dpadActiveScenes = dpadActiveScenes.map(function(sceneName) {
            return eval(sceneName);
        });
    };
    if (buttonsSettings) {
        for (var i = 0; i < buttonsSettings.length; i++) {
            let button = JSON.parse(buttonsSettings[i]);
            button.activeScenes = JSON.parse(button.activeScenes).map(function(sceneName) {
                return eval(sceneName);
            });
            buttonsSettings[i] = button;
        }
    };
    if (controlButtonActiveScenes) {
        controlButtonActiveScenes = controlButtonActiveScenes.map(function(sceneName) {
            return eval(sceneName);
        });
    };
};

var _Scene_Base_start_Alias = Scene_Base.prototype.start;
Scene_Base.prototype.start = function () {
    _Scene_Base_start_Alias.call(this);
    if (dpadActiveScenes.length > 0 && dpadActiveScenes.contains(this.constructor)) {
        toggleOnscreenControls();
    } else if (controlButtonActiveScenes.length > 0 && controlButtonActiveScenes.contains(this.constructor)) {
        toggleOnscreenControls();
    } else if (buttonsSettings.length > 0) {
        for (var i = 0; i < buttonsSettings.length; i++) {
            let buttonActiveScenes = buttonsSettings[i].activeScenes;
            if (buttonActiveScenes.length > 0 && buttonActiveScenes.contains(this.constructor)) {
                toggleOnscreenControls();
                break;
            };
        };
    } else {
        gameInterpreter.pluginCommand('virtualbuttons', ['hide', 'all', 'instant']);
    };
};

Window_Options.prototype.makeCommandList = function() {
    this.addGeneralOptions();
    this.addVolumeOptions();
    this.addCommand(optionName, 'onscreenControls');
};

var _Window_Options_processOk_Alias = Window_Options.prototype.processOk;
Window_Options.prototype.processOk = function() {
    _Window_Options_processOk_Alias.call(this)
    var index = this.index();
    var symbol = this.commandSymbol(index);
    toggleOnscreenControls();
    Input._currentState['ok'] = false; // prevents auto re-enable virtualbuttons in the options menu
};

if (disableTwoFingerTouch) {
    var _TouchInput_isCancelled_Alias = TouchInput.isCancelled;

    SceneManager.goto = function(sceneClass) {
        if (ConfigManager.onscreenControls) {
            if (sceneClass === Scene_Map) {
                TouchInput.isCancelled = function() {return false}; // disable two finger touch / RMB
            } else {
                TouchInput.isCancelled = _TouchInput_isCancelled_Alias;
            }
        }
        if (sceneClass) {
            this._nextScene = new sceneClass();
        }
        if (this._scene) {
            this._scene.stop();
        }
    };

    SceneManager.push = function(sceneClass) {
        if (ConfigManager.onscreenControls) {
            TouchInput.isCancelled = _TouchInput_isCancelled_Alias;
        };
        this._stack.push(this._scene.constructor);
        this.goto(sceneClass);
    };

    var _SceneManager_exit_Alias = SceneManager.exit;
    SceneManager.exit = function() {
        if (ConfigManager.onscreenControls) {
            TouchInput.isCancelled = function() {return false};
        };
        _SceneManager_exit_Alias.call(this);
    };
};
