/*=============================================================================
* _TurnSwitchesOnStart.js
*=============================================================================*/

/*:=============================================================================
* @plugindesc Turn on switches on start
* @author yancharkin
*
* @param switches
* @type switch[]
* @desc Switch to turn ON at the game start
*
* =============================================================================*/

var parameters = PluginManager.parameters('_TurnSwitchesOnStart');
var switchesArray = JSON.parse(parameters['switches']);

var _Scene_Map_prototype_initialize_Alias = Scene_Map.prototype.initialize;
Scene_Map.prototype.initialize = function() {
    _Scene_Map_prototype_initialize_Alias.call(this);
    for (s of switchesArray) {$gameSwitches.setValue(Number(s), true)};
};
