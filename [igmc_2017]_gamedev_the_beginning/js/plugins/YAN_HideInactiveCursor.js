/*=============================================================================
* _HideInactiveCursor.js
*=============================================================================*/

/*:=============================================================================
* @plugindesc Hide mouse cursor if it's inactive for a specific time interval.
* @author yancharkin
*
* @param time
* @desc Hide cursor if it's inactive for this period of time (in seconds).
* @type number
* @default 5
*
* =============================================================================*/

var parameters = PluginManager.parameters('_HideInactiveCursor');
var time = Number(parameters['time'])*1000 || 5000;
var body = document.getElementsByTagName('body')[0];
var timeout;
var isHidden = false;

document.addEventListener("mousemove", watchCursor);

function watchCursor() {
    if (timeout) {
        clearTimeout(timeout);
    }
    timeout = setTimeout(function() {
        if (!isHidden) {
            body.style.cursor = "none";
            isHidden = true;
        }
    }, time);
    if (isHidden) {
        body.style.cursor = "auto";
        isHidden = false;
    }
};
