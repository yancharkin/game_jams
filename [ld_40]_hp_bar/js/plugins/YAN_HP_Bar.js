/*=============================================================================
* YAN_HP_Bar.js
*=============================================================================*/

/*:=============================================================================
* @plugindesc HP Bar HUD
* @author yancharkin
*
* @param Default Visibility Switch
* @type switch
*
* @param Orientation
* @type select
* @option horizontal
* @option vertical
* @default horizontal
*
* @param X
* @type number
* @default 16
*
* @param Y
* @type number
* @default 16
*
* @param Width
* @type number
* @default 256
*
* @param Height
* @type number
* @default 16
*
* @help
* ==============================================================================
* Plugin Commands
* ==============================================================================
* hpbar_hide
* hpbar_show
* hpbar_defvis [true / false]
* hpbar_update
* =============================================================================*/

"use strict";

var parameters = PluginManager.parameters('YAN_HP_Bar');
var defaultVisibilitySwitch = parameters['Default Visibility Switch'];
var orientation = parameters['Orientation'];
var x = parameters['X'];
var y = parameters['Y'];
var w = parameters['Width'];
var h = parameters['Height'];

function Window_HP() {
    this.initialize.apply(this, arguments);
}
Window_HP.prototype = Object.create(Window_Base.prototype);
Window_HP.prototype.standardPadding = function() {
    return 0;
};

function addHpWindow(scene) {
    scene.hpWindow = new Window_HP(x, y, w, h);
    scene.addWindow(scene.hpWindow);
    updateHpWindow(scene.hpWindow);
}
function updateHpWindow(hpWindow) {
    var rate = $gameParty.leader().hpRate()
    hpWindow.contents.fillRect(0, 0, w, h, hpWindow.textColor(4))
    hpWindow.contents.fillRect(2, 2, w-4, h-4, hpWindow.textColor(7))
    if (orientation === 'vertical') {
        var fillH = Math.floor(h * (1 - rate)) - 8;
        fillH = fillH >=0 ? fillH : 0;
        hpWindow.contents.fillRect(4, 4, w-8, h-8, hpWindow.textColor(20))
        //hpWindow.contents.fillRect(4, 4, w-8, fillH, hpWindow.textColor(0)) // white
        hpWindow.contents.fillRect(4, 4, w-8, fillH, hpWindow.textColor(15)) // black
    } else {
        var fillW = Math.floor(w * rate) - 8;
        fillW = fillW >=0 ? fillW : 0;
        //hpWindow.contents.fillRect(4, 4, w-8, h-8, hpWindow.textColor(0))
        hpWindow.contents.fillRect(4, 4, w-8, h-8, hpWindow.textColor(15))
        hpWindow.contents.fillRect(4, 4, fillW, h-8, hpWindow.textColor(20))
    }
}

var _Scene_Map_start_Alias = Scene_Map.prototype.start;
Scene_Map.prototype.start = function() {
    _Scene_Map_start_Alias.call(this);
    addHpWindow(this);
    if (!$gameSwitches.value(defaultVisibilitySwitch)) {
        this.hpWindow.hide();
    };
};

var _Game_Interpreter_pluginCommand_Alias = Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function (command, args) {
    _Game_Interpreter_pluginCommand_Alias.call(this, command, args);
    var scene = SceneManager._scene;
    if (scene instanceof Scene_Map) {
        if (command.toLowerCase() === "hpbar_hide") {
            scene.hpWindow.hide()
        } else if (command.toLowerCase() === "hpbar_show") {
            scene.hpWindow.show()
        } else if (command.toLowerCase() === "hpbar_defvis") {
            var switchValue = (args[0].toLowerCase() === 'true');
            $gameSwitches.setValue(defaultVisibilitySwitch, switchValue);
        } else if (command.toLowerCase() === "hpbar_update") {
            updateHpWindow(scene.hpWindow);
        };
    };
};
