/*=============================================================================
* _NoAccidentalDialogSkip.js
*=============================================================================*/

/*:=============================================================================
* @plugindesc Dialogs do not paused if player using mouse or touch input.
* This plugin fix this.
* @author yancharkin
* =============================================================================*/

_Window_Message_startMessage_Alias = Window_Message.prototype.startMessage;
Window_Message.prototype.startMessage = function () {
    Input.clear();
    TouchInput.clear();
    _Window_Message_startMessage_Alias.call(this);
};
