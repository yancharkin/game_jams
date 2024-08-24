/*=============================================================================
* YAN_Battle_Scene_Remake
*=============================================================================*/

/*:=============================================================================
* @plugindesc Battle Scene with differect layout
* @author yancharkin
* =============================================================================*/

'use strict';

// Rearrange Battle_Scene windows
Window_ActorCommand.prototype.makeCommandList = function() {
    if (this._actor) {
        this.addAttackCommand();
        this.addSkillCommands();
        if (BattleManager.canEscape()) {
            this.addCommand(TextManager.escape, 'escape', BattleManager.canEscape());
        };
        this.addItemCommand();
        this.addGuardCommand();
    }
};

Scene_Battle.prototype.startPartyCommandSelection = function() {
};
var _Scene_Battle_createActorCommandWindow_Alias = Scene_Battle.prototype.createActorCommandWindow;
Scene_Battle.prototype.createActorCommandWindow = function() {
    _Scene_Battle_createActorCommandWindow_Alias.call(this);
    this._actorCommandWindow.numVisibleRows = function() { return 1 };
    this._actorCommandWindow.maxCols = function() { return 4 };
    if (BattleManager.canEscape()) {
        this._actorCommandWindow.maxCols = function() { return 5 };
        this._actorCommandWindow.setHandler('escape', this.commandEscape.bind(this));
    };
    this._actorCommandWindow.setHandler('cancel', this.selectPreviousCommand.bind(this));
};

Scene_Battle.prototype.createAllWindows = function() {
    this.createLogWindow();
    this.createStatusWindow();
    this.createPartyCommandWindow();
    this.createActorCommandWindow();
    this.createHelpWindow();
    this.createSkillWindow();
    this.createItemWindow();
    this.createActorWindow();
    this.createEnemyWindow();
    this.createMessageWindow();
    this.createScrollTextWindow();
    this._actorCommandWindow.x = 0;
    this._actorCommandWindow.y = 388;
    this._actorCommandWindow.width = Graphics.boxWidth;
    this._actorCommandWindow.height = 72;
    this._itemWindow.x = 0;
    this._itemWindow.y = Graphics.boxHeight - this._itemWindow.height - this._actorCommandWindow.height;
    this._itemWindow.width = Graphics.boxWidth;
    this._skillWindow.x = 0;
    this._skillWindow.y = Graphics.boxHeight - this._skillWindow.height - this._actorCommandWindow.height;;
    this._skillWindow.width = Graphics.boxWidth;
};

Window_ActorCommand.prototype.drawItem = function(index) {
    var rect = this.itemRectForText(index);
    var align = this.itemTextAlign();
    this.resetTextColor();
    if (this.commandName(index) == TextManager.escape) {
        this.changeTextColor(this.textColor(17));
        this.contents.paintOpacity = 64;
        this.contents.fillRect(rect.x-8, rect.y, rect.width+16, rect.height, this.textColor(18));
        this.changePaintOpacity(true);
    }
    this.changePaintOpacity(this.isCommandEnabled(index));
    this.drawText(this.commandName(index), rect.x, rect.y, rect.width, align);
};
