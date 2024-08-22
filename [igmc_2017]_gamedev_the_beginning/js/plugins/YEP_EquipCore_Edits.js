/*=============================================================================
* YEP_EquipCore_Edits.js
*=============================================================================*/

/*:=============================================================================
* @plugindesc Edits to 'YEP_EquipCore'.
* Remove 'Optimize' and 'Clear' from Equip scene, rearrange windows.
* @author yancharkin
* =============================================================================*/

// Help windows shown for this scene
Scene_Equip.prototype.createHelpWindow = function() {
    this._helpWindow = new Window_Help();
    this._helpWindow.x = 0;
    this._helpWindow.y = 320;
    this._helpWindow.width = Graphics.boxWidth;
    this._helpWindow.height = 140;
    this.addWindow(this._helpWindow);
};

Window_EquipItem.prototype.maxCols = function() {
    return 2;
};

Scene_Equip.prototype.create = function() {
    Scene_MenuBase.prototype.create.call(this);
    this.createHelpWindow();
    this.createStatusWindow();
    this.createSlotWindow();
    this.createItemWindow();
    this.createCompareWindow();
    this._lowerRightVisibility = true;
    this.updateLowerRightWindows();
    this._compareWindow.x = 416;
    this._compareWindow.y = 0;
    this._compareWindow.width = 400;
    this._compareWindow.height = 320;
    this._itemWindow.x = 0;
    this._itemWindow.y = 320;
    this._itemWindow.width = Graphics.boxWidth;
    this._itemWindow.height = 140;
    this.commandEquip();
    this.refreshActor();
};

Scene_Equip.prototype.createStatusWindow = function() {
    this._statusWindow = new Window_SkillStatus(0, 0, 0, 0);
};

Scene_Equip.prototype.createSlotWindow = function() {
    this._slotWindow = new Window_EquipSlot(0, 0, 416, 320);
    this._slotWindow.setHelpWindow(this._helpWindow);
    this._slotWindow.setStatusWindow(this._statusWindow);
    this._slotWindow.setHandler('ok',       this.onSlotOk.bind(this));
    this._slotWindow.setHandler('cancel',   this.popScene.bind(this));
    this.addWindow(this._slotWindow);
};

Window_StatCompare.prototype.drawItem = function(x, y, paramId) {
    this.drawParamName(y, paramId);
    this.drawCurrentParam(y, paramId);
    this.drawRightArrow(y);
    if (!this._tempActor) return;
    this.drawNewParam(y, paramId);
    this.drawParamDifference(y, paramId);
};
