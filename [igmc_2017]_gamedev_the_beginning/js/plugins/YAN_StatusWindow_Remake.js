/*=============================================================================
* YAN_StatusWindow_Remake.js
*=============================================================================*/

/*:=============================================================================
* @plugindesc Change how the StatusWindows looks (when selecting an actor)
* @author yancharkin
* =============================================================================*/

'use strict';

// Edit ActorStatus window
Window_MenuStatus.prototype.initialize = function(x, y) {
    var width = Graphics.boxWidth;
    var height = this.windowHeight();
    Window_Selectable.prototype.initialize.call(this, x, y, width, height);
    this._formationMode = false;
    this._pendingIndex = -1;
    this.numVisibleRows = function() {return 3};
    this.refresh();
};
Window_Base.prototype.drawActorSimpleStatus = function(actor, x, y, width) {
    var lineHeight = this.lineHeight();
    var x2 = Graphics.boxWidth - 348;
    var width2 = 284;
    this.drawActorName(actor, x, y);
    this.drawActorClass(actor, x, y + lineHeight * 1);
    this.drawActorLevel(actor, x, y + lineHeight * 2);
    this.drawActorIcons(actor, x2, y);
    this.drawActorHp(actor, x2, y + lineHeight * 1, width2);
    this.drawActorMp(actor, x2, y + lineHeight * 2, width2);
};
