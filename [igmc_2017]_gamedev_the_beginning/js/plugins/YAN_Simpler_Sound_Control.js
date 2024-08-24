/*=============================================================================
* YAN_Simpler_Sound_Control.js
*=============================================================================*/

/*:=============================================================================
* @plugindesc Two volume option instead of four.
* BGM Volume, ME Volume => Music Volume; BGS Volume, SE Volume => Sound Volume
* @author yancharkin
*
* @param musicOption
* @desc Name for music volume control option
* @default Music Volume
*
* @param soundOption
* @desc Name for sound volume control option
* @default Sound Volume
* =============================================================================*/

"use strict";

var parameters = PluginManager.parameters('ALOE_VirtualButtons_Addon');
var musicOption = parameters['musicOption'] || 'Music Volume';
var soundOption = parameters['soundOption'] || 'Sound Volume';

Window_Options.prototype.addVolumeOptions = function() {
    this.addCommand(musicOption, 'bgmVolume');
    this.addCommand(soundOption, 'bgsVolume');
};

Window_Options.prototype.setConfigValue = function(symbol, volume) {
    ConfigManager[symbol] = volume;
    if (symbol === 'bgmVolume') {ConfigManager['meVolume'] = volume};
    if (symbol === 'bgsVolume') {ConfigManager['seVolume'] = volume};
};
