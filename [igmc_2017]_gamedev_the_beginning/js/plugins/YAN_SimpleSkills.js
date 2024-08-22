/*=============================================================================
* _SimpleSkills.js
*=============================================================================*/

/*:=============================================================================
* @plugindesc Skip skill selection window and open first skill type,
* hide skill selection and status windows (for games with only one skill type)
* Useful if game has only one skill type.
* @author yancharkin
* =============================================================================*/

'use strict';

Scene_Skill.prototype.create = function() {
    Scene_ItemBase.prototype.create.call(this);
    this.createHelpWindow();
    this.createSkillTypeWindow();
    this.createStatusWindow();
    this.createItemWindow();
    this.createActorWindow();
    this.refreshActor();
    this._statusWindow.height = 0;
    this._skillTypeWindow.height = 0;
    this._itemWindow.x = 0;
    this._itemWindow.y = 0;
    this._itemWindow.width = Graphics.boxWidth;
    this._itemWindow.height = Graphics.boxHeight;
    this._skillTypeWindow.active = false;
    this.commandSkill();
};

Scene_Skill.prototype.onItemCancel = function() {
    SceneManager.goto(Scene_Map);
};
