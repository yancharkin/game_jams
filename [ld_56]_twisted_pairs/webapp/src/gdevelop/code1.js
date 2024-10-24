gdjs.LeaderboardCode = {};
gdjs.LeaderboardCode.localVariables = [];
gdjs.LeaderboardCode.GDNameInputObjects1= [];
gdjs.LeaderboardCode.GDNameInputObjects2= [];
gdjs.LeaderboardCode.GDNameInputObjects3= [];
gdjs.LeaderboardCode.GDSubmitObjects1= [];
gdjs.LeaderboardCode.GDSubmitObjects2= [];
gdjs.LeaderboardCode.GDSubmitObjects3= [];


gdjs.LeaderboardCode.userFunc0x7efbb8 = function GDJSInlineCode(runtimeScene) {
"use strict";
if (document.fullscreenElement) {
    document.exitFullscreen();
    runtimeScene.getVariables().get("fullscreenPrevState").setBoolean(true);
} else {
    runtimeScene.getVariables().get("fullscreenPrevState").setBoolean(false);
}
};
gdjs.LeaderboardCode.eventsList0 = function(runtimeScene) {

{


gdjs.LeaderboardCode.userFunc0x7efbb8(runtimeScene);

}


};gdjs.LeaderboardCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10046300);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.LeaderboardCode.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.LeaderboardCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.storage.elementExistsInJSONFile("settings", "playerName");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NameInput"), gdjs.LeaderboardCode.GDNameInputObjects2);
{gdjs.evtTools.storage.readStringFromJSONFile("settings", "playerName", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(0));
}{for(var i = 0, len = gdjs.LeaderboardCode.GDNameInputObjects2.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDNameInputObjects2[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NameInput"), gdjs.LeaderboardCode.GDNameInputObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LeaderboardCode.GDNameInputObjects2.length;i<l;++i) {
    if ( !(gdjs.LeaderboardCode.GDNameInputObjects2[i].isFocused()) ) {
        isConditionTrue_0 = true;
        gdjs.LeaderboardCode.GDNameInputObjects2[k] = gdjs.LeaderboardCode.GDNameInputObjects2[i];
        ++k;
    }
}
gdjs.LeaderboardCode.GDNameInputObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.LeaderboardCode.GDNameInputObjects2 */
{for(var i = 0, len = gdjs.LeaderboardCode.GDNameInputObjects2.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDNameInputObjects2[i].focus();
}
}}

}


{


gdjs.LeaderboardCode.eventsList1(runtimeScene);
}


};gdjs.LeaderboardCode.mapOfGDgdjs_9546LeaderboardCode_9546GDSubmitObjects1Objects = Hashtable.newFrom({"Submit": gdjs.LeaderboardCode.GDSubmitObjects1});
gdjs.LeaderboardCode.asyncCallback10048508 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.LeaderboardCode.localVariables);
{gdjs.evtTools.leaderboards.displayLeaderboard(runtimeScene, "5cd35c9a-d5e8-40f5-96b8-b41de8be3de3", true);
}gdjs.LeaderboardCode.localVariables.length = 0;
}
gdjs.LeaderboardCode.eventsList3 = function(runtimeScene) {

{

/* Reuse gdjs.LeaderboardCode.GDNameInputObjects1 */

{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.LeaderboardCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.leaderboards.savePlayerScore(runtimeScene, "5cd35c9a-d5e8-40f5-96b8-b41de8be3de3", runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber(), (( gdjs.LeaderboardCode.GDNameInputObjects1.length === 0 ) ? "" :gdjs.LeaderboardCode.GDNameInputObjects1[0].getText())), (runtimeScene) => (gdjs.LeaderboardCode.asyncCallback10048508(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.LeaderboardCode.userFunc0x849538 = function GDJSInlineCode(runtimeScene) {
"use strict";
// Restore fullscreen
const canvas = document.getElementsByTagName("canvas")[0];
const fullscreenPrevState = runtimeScene.getVariables().get("fullscreenPrevState").getAsBoolean();
if (fullscreenPrevState == true) {
    canvas.requestFullscreen();
};
};
gdjs.LeaderboardCode.eventsList4 = function(runtimeScene) {

{


gdjs.LeaderboardCode.userFunc0x849538(runtimeScene);

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


};gdjs.LeaderboardCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{/* Unknown object - skipped. */}
{ //Subevents
gdjs.LeaderboardCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NameInput"), gdjs.LeaderboardCode.GDNameInputObjects1);
gdjs.copyArray(runtimeScene.getObjects("Submit"), gdjs.LeaderboardCode.GDSubmitObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LeaderboardCode.GDNameInputObjects1.length;i<l;++i) {
    if ( gdjs.LeaderboardCode.GDNameInputObjects1[i].getBehavior("Text").getText() != "" ) {
        isConditionTrue_0 = true;
        gdjs.LeaderboardCode.GDNameInputObjects1[k] = gdjs.LeaderboardCode.GDNameInputObjects1[i];
        ++k;
    }
}
gdjs.LeaderboardCode.GDNameInputObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.LeaderboardCode.mapOfGDgdjs_9546LeaderboardCode_9546GDSubmitObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10047852);
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.LeaderboardCode.GDNameInputObjects1 */
{gdjs.evtTools.storage.writeStringInJSONFile("settings", "playerName", (( gdjs.LeaderboardCode.GDNameInputObjects1.length === 0 ) ? "" :gdjs.LeaderboardCode.GDNameInputObjects1[0].getText()));
}
{ //Subevents
gdjs.LeaderboardCode.eventsList3(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.leaderboards.hasPlayerJustClosedLeaderboardView();
if (isConditionTrue_0) {

{ //Subevents
gdjs.LeaderboardCode.eventsList4(runtimeScene);} //End of subevents
}

}


};

gdjs.LeaderboardCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LeaderboardCode.GDNameInputObjects1.length = 0;
gdjs.LeaderboardCode.GDNameInputObjects2.length = 0;
gdjs.LeaderboardCode.GDNameInputObjects3.length = 0;
gdjs.LeaderboardCode.GDSubmitObjects1.length = 0;
gdjs.LeaderboardCode.GDSubmitObjects2.length = 0;
gdjs.LeaderboardCode.GDSubmitObjects3.length = 0;

gdjs.LeaderboardCode.eventsList5(runtimeScene);
gdjs.LeaderboardCode.GDNameInputObjects1.length = 0;
gdjs.LeaderboardCode.GDNameInputObjects2.length = 0;
gdjs.LeaderboardCode.GDNameInputObjects3.length = 0;
gdjs.LeaderboardCode.GDSubmitObjects1.length = 0;
gdjs.LeaderboardCode.GDSubmitObjects2.length = 0;
gdjs.LeaderboardCode.GDSubmitObjects3.length = 0;


return;

}

gdjs['LeaderboardCode'] = gdjs.LeaderboardCode;
