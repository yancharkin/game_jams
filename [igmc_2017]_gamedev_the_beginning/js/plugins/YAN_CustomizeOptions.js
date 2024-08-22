/*=============================================================================
* YAN_CustomizeOptions.js
*=============================================================================*/

/*:=============================================================================
* @plugindesc Enable/disable standard options in the options menu
* @author yancharkin
*
* @param dash
* @desc Enable dash
* @type boolean
* @on ON
* @off OFF
* @default true

* @param commands
* @desc Enable 'Commands Remember'
* @type boolean
* @on ON
* @off OFF
* @default true
*
* @param bgm
* @desc Enable 'BGM Volume'
* @type boolean
* @on ON
* @off OFF
* @default true
*
* @param bgs
* @desc Enable 'BGS Volume'
* @type boolean
* @on ON
* @off OFF
* @default true
*
* @param me
* @desc Enable 'ME Volume'
* @type boolean
* @on ON
* @off OFF
* @default true
*
* @param se
* @desc Enable 'SE Volume'
* @type boolean
* @on ON
* @off OFF
* @default true
* =============================================================================*/

var parameters = PluginManager.parameters('YAN_CustomizeOptions');
var dash = (parameters['dash'] === 'true');
var commands = (parameters['commands'] === 'true');
var bgm = (parameters['bgm'] === 'true');
var bgs = (parameters['bgs'] === 'true');
var me = (parameters['me'] === 'true');
var se = (parameters['se'] === 'true');

if (!dash) {
    Game_Map.prototype.isDashDisabled = function() {
        return !$gameSystem._dashEnabled || $dataMap.disableDashing;
    };
};

Window_Options.prototype.addGeneralOptions = function() {
    if (dash) this.addCommand(TextManager.alwaysDash, 'alwaysDash');
    if (commands) this.addCommand(TextManager.commandRemember, 'commandRemember');
};

Window_Options.prototype.addVolumeOptions = function() {
    if (bgm) this.addCommand(TextManager.bgmVolume, 'bgmVolume');
    if (bgs) this.addCommand(TextManager.bgsVolume, 'bgsVolume');
    if (me) this.addCommand(TextManager.meVolume, 'meVolume');
    if (se) this.addCommand(TextManager.seVolume, 'seVolume');
};
