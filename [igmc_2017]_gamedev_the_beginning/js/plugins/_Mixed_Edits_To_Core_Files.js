/*=============================================================================
* _Mixed_Edits_To_Core_Files.js
*=============================================================================*/

/*:=============================================================================
* @plugindesc All kind of small edits to the core files.
* @author yancharkin
*
* @param Filtering
* @desc Enable or disable filtering. For crisp pixel art set to false.
* @type boolean
* @default true
*
* @param Base Window Opacity
* @desc Set opacity of the most windows 0-255
* @type number
* @default 192
*
* @param Encounter Flash
* @desc Enable or disable White Flash at encounter
* @type boolean
* @default true
*
* @param Options Window Width
* @desc Change Options Window width
* @type number
* @default 400
*
* @param Colorful Options
* @desc Recolor options status text !NB Colors form VE_SFont plugin used (59). Without plugin it should be changed.
* @type boolean
* default false
*
* @param Hide Help
* @desc Hide Help Windows
* @type boolean
* @default false
*
* @param Command Text Alignment
* @desc Text Alignment in Command Windows
* @type select
* @option left
* @option center
* @option right
* @default left
* =============================================================================*/

'use strict';

var parameters = PluginManager.parameters('_Mixed_Edits_To_Core_Files');
var filtering = (parameters['Filtering'] === 'true');

var windowOpacity = Number(parameters['Base Window Opacity']) || 192;
var EncounterFlash = (parameters['Encounter Flash'] === 'true');
var optionsWindowWidth = Number(parameters['Options Window Width']) || 400;
var colorfulOptions = (parameters['Colorful Options'] === 'true');
var hideHelp = (parameters['Hide Help'] === 'true');
var commandTextAlignment = parameters['Command Text Alignment'];

if (!filtering) {
    Scene_Title.prototype.initialize = function() {
        Scene_Base.prototype.initialize.call(this);
        Graphics._canvas.style.imageRendering = "pixelated";
    };
};

Window_Base.prototype.updateBackOpacity = function() {
    this.backOpacity = windowOpacity;
};

if (!EncounterFlash) {
    Scene_Map.prototype.startFlashForEncounter = function(duration) {};
};

Window_Options.prototype.windowWidth = function() {
    return optionsWindowWidth;
};

if (colorfulOptions) {
    Window_Options.prototype.drawItem = function(index) {
        var rect = this.itemRectForText(index);
        var statusWidth = this.statusWidth();
        var titleWidth = rect.width - statusWidth;
        this.resetTextColor();
        this.changePaintOpacity(this.isCommandEnabled(index));
        this.drawText(this.commandName(index), rect.x, rect.y, titleWidth, 'left');
        if (this.statusText(index) == 'ON') {
            this.changeTextColor(this.textColor(59)); //orange
        } else if (this.statusText(index) == 'OFF' || this.statusText(index) == '0%') {
            this.changeTextColor(this.textColor(25));// grey
        } else {
            //this.changeTextColor(this.textColor(17)); //yellow
            this.changeTextColor(this.textColor(24)); //green
        };
        this.drawText(this.statusText(index), titleWidth, rect.y, statusWidth, 'right');
    };
};

Window_Command.prototype.itemTextAlign = function() {
    return commandTextAlignment;
};

if (hideHelp) {
    Window_Help.prototype.initialize = function(numLines) {
        var width = Graphics.boxWidth;
        var height = 0;
        Window_Base.prototype.initialize.call(this, 0, 0, width, height);
        this._text = '';
    };
};
