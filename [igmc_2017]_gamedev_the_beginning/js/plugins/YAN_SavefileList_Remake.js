/*=============================================================================
* _SavefileList_Remake.js
*=============================================================================*/

/*:=============================================================================
* @plugindesc Change how the SavefileList looks
* @author yancharkin

* @param savesNumber
* @desc Number of save slots
* @type number
* @default 10
* =============================================================================*/

'use strict';

var parameters = PluginManager.parameters('_SavefileList_Remake');
var savesNumber = Number(parameters['savesNumber']) || 10;

// (Save/Load list) Separate items in the save file list
var _Window_SavefileList_drawItem_Alias = Window_SavefileList.prototype.drawItem;
Window_SavefileList.prototype.drawItem = function(index) {
    _Window_SavefileList_drawItem_Alias.call(this, index);
    var rect = this.itemRectForText(index);
    this.changeTextColor(this.textColor(25));
    this.changePaintOpacity(false);
    if (index == 0) {
        this.drawText('___________________________________________', 0, rect.y-24, 0);
    }
    this.drawText('___________________________________________', 0, rect.y+57, 0);
};

// (Save/Load list) Draw file name in the center
Window_SavefileList.prototype.drawFileId = function(id, x, y) {
    this.drawText(TextManager.file + ' ' + id, x, y+24, 180);
};

// (Save/Load list) Draw party characters and play time in the center, do not draw the game name
Window_SavefileList.prototype.drawContents = function(info, rect, valid) {
    var bottom = rect.y + rect.height;
    if (rect.width >= 420) {
        if (valid) {
            this.drawPartyCharacters(info, rect.x + 220, bottom - 16);
        }
    }
    this.drawPlaytime(info, rect.x, rect.y+24, rect.width);
};

// (Save/Load list) Set max number of save file
Window_SavefileList.prototype.maxItems = function() {
    return savesNumber;
};
