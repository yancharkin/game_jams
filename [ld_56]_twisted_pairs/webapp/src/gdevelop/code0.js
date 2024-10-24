gdjs.MainSceneCode = {};
gdjs.MainSceneCode.localVariables = [];
gdjs.MainSceneCode.GDcardObjects4_1final = [];

gdjs.MainSceneCode.GDcockroachObjects1_1final = [];

gdjs.MainSceneCode.forEachIndex4 = 0;

gdjs.MainSceneCode.forEachObjects4 = [];

gdjs.MainSceneCode.forEachTemporary4 = null;

gdjs.MainSceneCode.forEachTotalCount4 = 0;

gdjs.MainSceneCode.GDbackgroundObjects1= [];
gdjs.MainSceneCode.GDbackgroundObjects2= [];
gdjs.MainSceneCode.GDbackgroundObjects3= [];
gdjs.MainSceneCode.GDbackgroundObjects4= [];
gdjs.MainSceneCode.GDbackgroundObjects5= [];
gdjs.MainSceneCode.GDcardObjects1= [];
gdjs.MainSceneCode.GDcardObjects2= [];
gdjs.MainSceneCode.GDcardObjects3= [];
gdjs.MainSceneCode.GDcardObjects4= [];
gdjs.MainSceneCode.GDcardObjects5= [];
gdjs.MainSceneCode.GDoverlayObjects1= [];
gdjs.MainSceneCode.GDoverlayObjects2= [];
gdjs.MainSceneCode.GDoverlayObjects3= [];
gdjs.MainSceneCode.GDoverlayObjects4= [];
gdjs.MainSceneCode.GDoverlayObjects5= [];
gdjs.MainSceneCode.GDTimerObjects1= [];
gdjs.MainSceneCode.GDTimerObjects2= [];
gdjs.MainSceneCode.GDTimerObjects3= [];
gdjs.MainSceneCode.GDTimerObjects4= [];
gdjs.MainSceneCode.GDTimerObjects5= [];
gdjs.MainSceneCode.GDTimerLabelObjects1= [];
gdjs.MainSceneCode.GDTimerLabelObjects2= [];
gdjs.MainSceneCode.GDTimerLabelObjects3= [];
gdjs.MainSceneCode.GDTimerLabelObjects4= [];
gdjs.MainSceneCode.GDTimerLabelObjects5= [];
gdjs.MainSceneCode.GDRoundLabelObjects1= [];
gdjs.MainSceneCode.GDRoundLabelObjects2= [];
gdjs.MainSceneCode.GDRoundLabelObjects3= [];
gdjs.MainSceneCode.GDRoundLabelObjects4= [];
gdjs.MainSceneCode.GDRoundLabelObjects5= [];
gdjs.MainSceneCode.GDRoundObjects1= [];
gdjs.MainSceneCode.GDRoundObjects2= [];
gdjs.MainSceneCode.GDRoundObjects3= [];
gdjs.MainSceneCode.GDRoundObjects4= [];
gdjs.MainSceneCode.GDRoundObjects5= [];
gdjs.MainSceneCode.GDMessageObjects1= [];
gdjs.MainSceneCode.GDMessageObjects2= [];
gdjs.MainSceneCode.GDMessageObjects3= [];
gdjs.MainSceneCode.GDMessageObjects4= [];
gdjs.MainSceneCode.GDMessageObjects5= [];
gdjs.MainSceneCode.GDcockroachObjects1= [];
gdjs.MainSceneCode.GDcockroachObjects2= [];
gdjs.MainSceneCode.GDcockroachObjects3= [];
gdjs.MainSceneCode.GDcockroachObjects4= [];
gdjs.MainSceneCode.GDcockroachObjects5= [];
gdjs.MainSceneCode.GDspawnerLeftObjects1= [];
gdjs.MainSceneCode.GDspawnerLeftObjects2= [];
gdjs.MainSceneCode.GDspawnerLeftObjects3= [];
gdjs.MainSceneCode.GDspawnerLeftObjects4= [];
gdjs.MainSceneCode.GDspawnerLeftObjects5= [];
gdjs.MainSceneCode.GDspawnerCenterObjects1= [];
gdjs.MainSceneCode.GDspawnerCenterObjects2= [];
gdjs.MainSceneCode.GDspawnerCenterObjects3= [];
gdjs.MainSceneCode.GDspawnerCenterObjects4= [];
gdjs.MainSceneCode.GDspawnerCenterObjects5= [];
gdjs.MainSceneCode.GDspawnerRightObjects1= [];
gdjs.MainSceneCode.GDspawnerRightObjects2= [];
gdjs.MainSceneCode.GDspawnerRightObjects3= [];
gdjs.MainSceneCode.GDspawnerRightObjects4= [];
gdjs.MainSceneCode.GDspawnerRightObjects5= [];
gdjs.MainSceneCode.GDSoundObjects1= [];
gdjs.MainSceneCode.GDSoundObjects2= [];
gdjs.MainSceneCode.GDSoundObjects3= [];
gdjs.MainSceneCode.GDSoundObjects4= [];
gdjs.MainSceneCode.GDSoundObjects5= [];
gdjs.MainSceneCode.GDSchemeObjects1= [];
gdjs.MainSceneCode.GDSchemeObjects2= [];
gdjs.MainSceneCode.GDSchemeObjects3= [];
gdjs.MainSceneCode.GDSchemeObjects4= [];
gdjs.MainSceneCode.GDSchemeObjects5= [];
gdjs.MainSceneCode.GDhighlight0Objects1= [];
gdjs.MainSceneCode.GDhighlight0Objects2= [];
gdjs.MainSceneCode.GDhighlight0Objects3= [];
gdjs.MainSceneCode.GDhighlight0Objects4= [];
gdjs.MainSceneCode.GDhighlight0Objects5= [];
gdjs.MainSceneCode.GDhighlight1Objects1= [];
gdjs.MainSceneCode.GDhighlight1Objects2= [];
gdjs.MainSceneCode.GDhighlight1Objects3= [];
gdjs.MainSceneCode.GDhighlight1Objects4= [];
gdjs.MainSceneCode.GDhighlight1Objects5= [];
gdjs.MainSceneCode.GDFullscreenObjects1= [];
gdjs.MainSceneCode.GDFullscreenObjects2= [];
gdjs.MainSceneCode.GDFullscreenObjects3= [];
gdjs.MainSceneCode.GDFullscreenObjects4= [];
gdjs.MainSceneCode.GDFullscreenObjects5= [];


gdjs.MainSceneCode.userFunc0x8bb858 = function GDJSInlineCode(runtimeScene, objects) {
"use strict";
var isAndroid = /(android)/i.test(navigator.userAgent);
var isStandalone = !window.matchMedia("(display-mode: browser)").matches;
var isCordova = !!window.cordova;
if (isAndroid && (isStandalone || isCordova)) {
    var fullscreenButton = objects[0];
    fullscreenButton.deleteFromScene(runtimeScene);
    runtimeScene.getVariables().get("isStandaloneAndroid").setBoolean(true);
};

};
gdjs.MainSceneCode.eventsList0 = function(runtimeScene) {

{

/* Reuse gdjs.MainSceneCode.GDFullscreenObjects1 */

var objects = [];
objects.push.apply(objects,gdjs.MainSceneCode.GDFullscreenObjects1);
gdjs.MainSceneCode.userFunc0x8bb858(runtimeScene, objects);

}


};gdjs.MainSceneCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.storage.elementExistsInJSONFile("settings", "soundOn");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.MainSceneCode.GDSoundObjects1, gdjs.MainSceneCode.GDSoundObjects2);

{gdjs.evtTools.storage.readNumberFromJSONFile("settings", "soundOn", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(14));
}{for(var i = 0, len = gdjs.MainSceneCode.GDSoundObjects2.length ;i < len;++i) {
    gdjs.MainSceneCode.GDSoundObjects2[i].returnVariable(gdjs.MainSceneCode.GDSoundObjects2[i].getVariables().getFromIndex(0)).setNumber(runtimeScene.getScene().getVariables().getFromIndex(14).getAsNumber());
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.storage.elementExistsInJSONFile("settings", "colorScheme");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.MainSceneCode.GDSchemeObjects1, gdjs.MainSceneCode.GDSchemeObjects2);

{gdjs.evtTools.storage.readNumberFromJSONFile("settings", "colorScheme", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(15));
}{for(var i = 0, len = gdjs.MainSceneCode.GDSchemeObjects2.length ;i < len;++i) {
    gdjs.MainSceneCode.GDSchemeObjects2[i].returnVariable(gdjs.MainSceneCode.GDSchemeObjects2[i].getVariables().getFromIndex(0)).setNumber(runtimeScene.getScene().getVariables().getFromIndex(15).getAsNumber());
}
}}

}


{


gdjs.MainSceneCode.eventsList0(runtimeScene);
}


};gdjs.MainSceneCode.mapOfGDgdjs_9546MainSceneCode_9546GDcardObjects2Objects = Hashtable.newFrom({"card": gdjs.MainSceneCode.GDcardObjects2});
gdjs.MainSceneCode.userFunc0x92b368 = function GDJSInlineCode(runtimeScene, objects) {
"use strict";
const card = objects[0];
const cardImageN = card.getVariables().get("imageN").getValue();
const answers = runtimeScene.getVariables().get("answers").getAllChildrenArray();
if (answers[0].getValue() == 0) {
    answers[0].setValue(cardImageN);
} else if (answers[1].getValue() == 0) {
    answers[1].setValue(cardImageN);
};
};
gdjs.MainSceneCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.MainSceneCode.GDcardObjects2, gdjs.MainSceneCode.GDcardObjects3);


var objects = [];
objects.push.apply(objects,gdjs.MainSceneCode.GDcardObjects3);
gdjs.MainSceneCode.userFunc0x92b368(runtimeScene, objects);

}


};gdjs.MainSceneCode.eventsList3 = function(runtimeScene) {

{


gdjs.MainSceneCode.eventsList2(runtimeScene);
}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "AnswersTimer");
}}

}


};gdjs.MainSceneCode.userFunc0x89a500 = function GDJSInlineCode(runtimeScene) {
"use strict";
const cards = runtimeScene.getObjects("card");
const answers = runtimeScene.getVariables().get("answers").getAllChildrenArray();
var score = 0;
cards.forEach(card => {
    if (answers[0].getValue() == answers[1].getValue()) {
        if (card.getVariables().get("imageN").getValue() == answers[0].getValue()) {
            card.getVariables().get("visible").setValue(true);
        };
    };
    if (answers[1].getValue() != 0) {      
        if (card.getVariables().get("visible").getValue() != true) {
            card.setAnimationFrame(0);
        } else {
            score += 1;
            runtimeScene.getVariables().get("score").setValue(score/2);
        };
        card.getVariables().get("clicked").setValue(false);
    };
    
});
if (answers[1].getValue() != 0) {
    answers[0].setValue(0);
    answers[1].setValue(0);
};
};
gdjs.MainSceneCode.eventsList4 = function(runtimeScene) {

{


gdjs.MainSceneCode.userFunc0x89a500(runtimeScene);

}


};gdjs.MainSceneCode.eventsList5 = function(runtimeScene) {

{


gdjs.MainSceneCode.eventsList4(runtimeScene);
}


};gdjs.MainSceneCode.eventsList6 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("card"), gdjs.MainSceneCode.GDcardObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(7), true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MainSceneCode.mapOfGDgdjs_9546MainSceneCode_9546GDcardObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainSceneCode.GDcardObjects2.length;i<l;++i) {
    if ( gdjs.MainSceneCode.GDcardObjects2[i].getVariableBoolean(gdjs.MainSceneCode.GDcardObjects2[i].getVariables().getFromIndex(2), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.MainSceneCode.GDcardObjects2[k] = gdjs.MainSceneCode.GDcardObjects2[i];
        ++k;
    }
}
gdjs.MainSceneCode.GDcardObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainSceneCode.GDcardObjects2.length;i<l;++i) {
    if ( gdjs.MainSceneCode.GDcardObjects2[i].getVariableBoolean(gdjs.MainSceneCode.GDcardObjects2[i].getVariables().getFromIndex(3), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.MainSceneCode.GDcardObjects2[k] = gdjs.MainSceneCode.GDcardObjects2[i];
        ++k;
    }
}
gdjs.MainSceneCode.GDcardObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(4).getChild(1)) == 0;
}
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MainSceneCode.GDcardObjects2 */
{for(var i = 0, len = gdjs.MainSceneCode.GDcardObjects2.length ;i < len;++i) {
    gdjs.MainSceneCode.GDcardObjects2[i].setAnimationFrame(gdjs.MainSceneCode.GDcardObjects2[i].getVariables().getFromIndex(1).getAsNumber());
}
}{for(var i = 0, len = gdjs.MainSceneCode.GDcardObjects2.length ;i < len;++i) {
    gdjs.MainSceneCode.GDcardObjects2[i].returnVariable(gdjs.MainSceneCode.GDcardObjects2[i].getVariables().getFromIndex(3)).setBoolean(true);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "assets/audio/click.wav", false, 100, 1);
}
{ //Subevents
gdjs.MainSceneCode.eventsList3(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "AnswersTimer") >= runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber();
if (isConditionTrue_0) {

{ //Subevents
gdjs.MainSceneCode.eventsList5(runtimeScene);} //End of subevents
}

}


};gdjs.MainSceneCode.eventsList7 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.hasAnyTouchOrMouseStarted(runtimeScene);
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(13).setNumber(gdjs.evtTools.input.getStartedTouchOrMouseIdentifier(runtimeScene, 0));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.hasTouchEnded(runtimeScene, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(13)));
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(6).setBoolean(true);
}{runtimeScene.getScene().getVariables().getFromIndex(7).setBoolean(true);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) > 1;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "shiftsTimer");
}}

}


};gdjs.MainSceneCode.eventsList8 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(12)) < 7;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "assets/audio/lets_do_it.wav", false, 100, 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(12)) == 7;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "assets/audio/okey-dokey.wav", false, 100, 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(12)) > 7;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "assets/audio/ok.wav", false, 100, 1);
}}

}


};gdjs.MainSceneCode.userFunc0x89ab48 = function GDJSInlineCode(runtimeScene) {
"use strict";
const cards = runtimeScene.getObjects("card");
const widthDiff = (432 - runtimeScene.getViewportWidth())/2;
const positions = [32, 96, 160, 224, 288, 352];
const rows = [
    [0, 1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10, 11],
    [12, 13, 14, 15, 16, 17]
];
const columns = [
    [0, 6, 12],
    [1, 7, 13],
    [2, 8, 14],
    [3, 9, 15],
    [4, 10, 16],
    [5, 11, 17]
];

for (let card of cards) {
    card.getVariables().get("visible").setValue(false);
    card.getVariables().get("clicked").setValue(false);

    let cardId = card.getVariables().get("id").getValue();
    for (let i = 0; i < 3; i++) {
        if (rows[i].includes(cardId)) {
            card.setY(positions[i]);
        };
    };    
    for (let j = 0; j < 6; j++) {
        if (columns[j].includes(cardId)) {
            card.setX(positions[j] - widthDiff);
            card.getVariables().get("x").setValue(positions[j]);
        };
    };
};
};
gdjs.MainSceneCode.eventsList9 = function(runtimeScene) {

{


gdjs.MainSceneCode.userFunc0x89ab48(runtimeScene);

}


};gdjs.MainSceneCode.userFunc0x89b0b0 = function GDJSInlineCode(runtimeScene) {
"use strict";
const cards = runtimeScene.getObjects("card");
var cardsUsed = [];
var cardsUsedTwice = [];
var roundCards = [];

function randi(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}
function setUniqueCard() {
    let index = randi(1, 10);
    if (!cardsUsed.includes(index) && !cardsUsedTwice.includes(index)) {
        cardsUsed.push(index);
        return index;
    } else if (!cardsUsedTwice.includes(index)) {
        cardsUsedTwice.push(index);
        return index;
    } else {
        return setUniqueCard();
    }
}
for (let card of cards) {
    card.getVariables().get("imageN").setValue(setUniqueCard());
};
};
gdjs.MainSceneCode.eventsList10 = function(runtimeScene) {

{


gdjs.MainSceneCode.userFunc0x89b0b0(runtimeScene);

}


};gdjs.MainSceneCode.eventsList11 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().getFromIndex(12).setNumber(gdjs.randomInRange(1, 13));
}
{ //Subevents
gdjs.MainSceneCode.eventsList8(runtimeScene);} //End of subevents
}

}


{


gdjs.MainSceneCode.eventsList9(runtimeScene);
}


{


gdjs.MainSceneCode.eventsList10(runtimeScene);
}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.MainSceneCode.GDcardObjects1, gdjs.MainSceneCode.GDcardObjects2);

{for(var i = 0, len = gdjs.MainSceneCode.GDcardObjects2.length ;i < len;++i) {
    gdjs.MainSceneCode.GDcardObjects2[i].setAnimationFrame(0);
}
}{runtimeScene.getScene().getVariables().getFromIndex(6).setBoolean(false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(8), true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9885556);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("cockroach"), gdjs.MainSceneCode.GDcockroachObjects1);
{for(var i = 0, len = gdjs.MainSceneCode.GDcockroachObjects1.length ;i < len;++i) {
    gdjs.MainSceneCode.GDcockroachObjects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getScene().getVariables().getFromIndex(10).setNumber(runtimeScene.getScene().getVariables().getFromIndex(9).getAsNumber());
}{runtimeScene.getScene().getVariables().getFromIndex(8).setBoolean(false);
}{gdjs.evtTools.sound.setSoundOnChannelPitch(runtimeScene, 0, 0.4);
}{for(var i = 0, len = gdjs.MainSceneCode.GDcockroachObjects1.length ;i < len;++i) {
    gdjs.MainSceneCode.GDcockroachObjects1[i].getBehavior("Animation").setAnimationSpeedScale(1);
}
}{runtimeScene.getScene().getVariables().getFromIndex(11).setNumber(1);
}}

}


};gdjs.MainSceneCode.eventsList12 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(7), false, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.MainSceneCode.eventsList7(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(6), true, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Round"), gdjs.MainSceneCode.GDRoundObjects1);
gdjs.copyArray(runtimeScene.getObjects("card"), gdjs.MainSceneCode.GDcardObjects1);
{for(var i = 0, len = gdjs.MainSceneCode.GDcardObjects1.length ;i < len;++i) {
    gdjs.MainSceneCode.GDcardObjects1[i].getBehavior("Animation").pauseAnimation();
}
}{runtimeScene.getScene().getVariables().getFromIndex(5).setNumber(0);
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "MainTimer");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "MainTimer");
}{for(var i = 0, len = gdjs.MainSceneCode.GDcardObjects1.length ;i < len;++i) {
    gdjs.MainSceneCode.GDcardObjects1[i].hide(false);
}
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "MessageLayer");
}{for(var i = 0, len = gdjs.MainSceneCode.GDRoundObjects1.length ;i < len;++i) {
    gdjs.MainSceneCode.GDRoundObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber()));
}
}{gdjs.evtTools.camera.showLayer(runtimeScene, "HUD");
}
{ //Subevents
gdjs.MainSceneCode.eventsList11(runtimeScene);} //End of subevents
}

}


};gdjs.MainSceneCode.eventsList13 = function(runtimeScene) {

};gdjs.MainSceneCode.eventsList14 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("Sound"), gdjs.MainSceneCode.GDSoundObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainSceneCode.GDSoundObjects3.length;i<l;++i) {
    if ( gdjs.MainSceneCode.GDSoundObjects3[i].getVariableNumber(gdjs.MainSceneCode.GDSoundObjects3[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.MainSceneCode.GDSoundObjects3[k] = gdjs.MainSceneCode.GDSoundObjects3[i];
        ++k;
    }
}
gdjs.MainSceneCode.GDSoundObjects3.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Sound"), gdjs.MainSceneCode.GDSoundObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainSceneCode.GDSoundObjects3.length;i<l;++i) {
    if ( gdjs.MainSceneCode.GDSoundObjects3[i].getVariableNumber(gdjs.MainSceneCode.GDSoundObjects3[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.MainSceneCode.GDSoundObjects3[k] = gdjs.MainSceneCode.GDSoundObjects3[i];
        ++k;
    }
}
gdjs.MainSceneCode.GDSoundObjects3.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 100);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Sound"), gdjs.MainSceneCode.GDSoundObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainSceneCode.GDSoundObjects3.length;i<l;++i) {
    if ( gdjs.MainSceneCode.GDSoundObjects3[i].getVariableNumber(gdjs.MainSceneCode.GDSoundObjects3[i].getVariables().getFromIndex(0)) > 1 ) {
        isConditionTrue_0 = true;
        gdjs.MainSceneCode.GDSoundObjects3[k] = gdjs.MainSceneCode.GDSoundObjects3[i];
        ++k;
    }
}
gdjs.MainSceneCode.GDSoundObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.MainSceneCode.GDSoundObjects3 */
{for(var i = 0, len = gdjs.MainSceneCode.GDSoundObjects3.length ;i < len;++i) {
    gdjs.MainSceneCode.GDSoundObjects3[i].returnVariable(gdjs.MainSceneCode.GDSoundObjects3[i].getVariables().getFromIndex(0)).setNumber(0);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Sound"), gdjs.MainSceneCode.GDSoundObjects3);
{for(var i = 0, len = gdjs.MainSceneCode.GDSoundObjects3.length ;i < len;++i) {
    gdjs.MainSceneCode.GDSoundObjects3[i].setAnimationFrame(gdjs.MainSceneCode.GDSoundObjects3[i].getVariables().getFromIndex(0).getAsNumber());
}
}{runtimeScene.getScene().getVariables().getFromIndex(14).setNumber(((gdjs.MainSceneCode.GDSoundObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.MainSceneCode.GDSoundObjects3[0].getVariables()).getFromIndex(0).getAsNumber());
}{gdjs.evtTools.storage.writeNumberInJSONFile("settings", "soundOn", runtimeScene.getScene().getVariables().getFromIndex(14).getAsNumber());
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Scheme"), gdjs.MainSceneCode.GDSchemeObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainSceneCode.GDSchemeObjects3.length;i<l;++i) {
    if ( gdjs.MainSceneCode.GDSchemeObjects3[i].getVariableNumber(gdjs.MainSceneCode.GDSchemeObjects3[i].getVariables().getFromIndex(0)) > 2 ) {
        isConditionTrue_0 = true;
        gdjs.MainSceneCode.GDSchemeObjects3[k] = gdjs.MainSceneCode.GDSchemeObjects3[i];
        ++k;
    }
}
gdjs.MainSceneCode.GDSchemeObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.MainSceneCode.GDSchemeObjects3 */
{for(var i = 0, len = gdjs.MainSceneCode.GDSchemeObjects3.length ;i < len;++i) {
    gdjs.MainSceneCode.GDSchemeObjects3[i].returnVariable(gdjs.MainSceneCode.GDSchemeObjects3[i].getVariables().getFromIndex(0)).setNumber(0);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Fullscreen"), gdjs.MainSceneCode.GDFullscreenObjects3);
gdjs.copyArray(runtimeScene.getObjects("Scheme"), gdjs.MainSceneCode.GDSchemeObjects3);
gdjs.copyArray(runtimeScene.getObjects("Sound"), gdjs.MainSceneCode.GDSoundObjects3);
gdjs.copyArray(runtimeScene.getObjects("card"), gdjs.MainSceneCode.GDcardObjects3);
{for(var i = 0, len = gdjs.MainSceneCode.GDcardObjects3.length ;i < len;++i) {
    gdjs.MainSceneCode.GDcardObjects3[i].getBehavior("Animation").setAnimationIndex(((gdjs.MainSceneCode.GDSchemeObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.MainSceneCode.GDSchemeObjects3[0].getVariables()).getFromIndex(0).getAsNumber());
}
for(var i = 0, len = gdjs.MainSceneCode.GDSoundObjects3.length ;i < len;++i) {
    gdjs.MainSceneCode.GDSoundObjects3[i].getBehavior("Animation").setAnimationIndex(((gdjs.MainSceneCode.GDSchemeObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.MainSceneCode.GDSchemeObjects3[0].getVariables()).getFromIndex(0).getAsNumber());
}
for(var i = 0, len = gdjs.MainSceneCode.GDSchemeObjects3.length ;i < len;++i) {
    gdjs.MainSceneCode.GDSchemeObjects3[i].getBehavior("Animation").setAnimationIndex(gdjs.MainSceneCode.GDSchemeObjects3[i].getVariables().getFromIndex(0).getAsNumber());
}
for(var i = 0, len = gdjs.MainSceneCode.GDFullscreenObjects3.length ;i < len;++i) {
    gdjs.MainSceneCode.GDFullscreenObjects3[i].getBehavior("Animation").setAnimationIndex(((gdjs.MainSceneCode.GDSchemeObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.MainSceneCode.GDSchemeObjects3[0].getVariables()).getFromIndex(0).getAsNumber());
}
}{runtimeScene.getScene().getVariables().getFromIndex(15).setNumber(((gdjs.MainSceneCode.GDSchemeObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.MainSceneCode.GDSchemeObjects3[0].getVariables()).getFromIndex(0).getAsNumber());
}{gdjs.evtTools.storage.writeNumberInJSONFile("settings", "colorScheme", runtimeScene.getScene().getVariables().getFromIndex(15).getAsNumber());
}{for(var i = 0, len = gdjs.MainSceneCode.GDFullscreenObjects3.length ;i < len;++i) {
    gdjs.MainSceneCode.GDFullscreenObjects3[i].setAnimationFrame(gdjs.MainSceneCode.GDFullscreenObjects3[i].getVariables().getFromIndex(0).getAsNumber());
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("card"), gdjs.MainSceneCode.GDcardObjects3);

for (gdjs.MainSceneCode.forEachIndex4 = 0;gdjs.MainSceneCode.forEachIndex4 < gdjs.MainSceneCode.GDcardObjects3.length;++gdjs.MainSceneCode.forEachIndex4) {
gdjs.MainSceneCode.GDcardObjects4.length = 0;


gdjs.MainSceneCode.forEachTemporary4 = gdjs.MainSceneCode.GDcardObjects3[gdjs.MainSceneCode.forEachIndex4];
gdjs.MainSceneCode.GDcardObjects4.push(gdjs.MainSceneCode.forEachTemporary4);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.MainSceneCode.GDcardObjects4_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.MainSceneCode.GDcardObjects4, gdjs.MainSceneCode.GDcardObjects5);

for (var i = 0, k = 0, l = gdjs.MainSceneCode.GDcardObjects5.length;i<l;++i) {
    if ( gdjs.MainSceneCode.GDcardObjects5[i].getVariableBoolean(gdjs.MainSceneCode.GDcardObjects5[i].getVariables().getFromIndex(2), true, false) ) {
        isConditionTrue_1 = true;
        gdjs.MainSceneCode.GDcardObjects5[k] = gdjs.MainSceneCode.GDcardObjects5[i];
        ++k;
    }
}
gdjs.MainSceneCode.GDcardObjects5.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.MainSceneCode.GDcardObjects5.length; j < jLen ; ++j) {
        if ( gdjs.MainSceneCode.GDcardObjects4_1final.indexOf(gdjs.MainSceneCode.GDcardObjects5[j]) === -1 )
            gdjs.MainSceneCode.GDcardObjects4_1final.push(gdjs.MainSceneCode.GDcardObjects5[j]);
    }
}
}
{
gdjs.copyArray(gdjs.MainSceneCode.GDcardObjects4, gdjs.MainSceneCode.GDcardObjects5);

for (var i = 0, k = 0, l = gdjs.MainSceneCode.GDcardObjects5.length;i<l;++i) {
    if ( gdjs.MainSceneCode.GDcardObjects5[i].getVariableBoolean(gdjs.MainSceneCode.GDcardObjects5[i].getVariables().getFromIndex(3), true, false) ) {
        isConditionTrue_1 = true;
        gdjs.MainSceneCode.GDcardObjects5[k] = gdjs.MainSceneCode.GDcardObjects5[i];
        ++k;
    }
}
gdjs.MainSceneCode.GDcardObjects5.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.MainSceneCode.GDcardObjects5.length; j < jLen ; ++j) {
        if ( gdjs.MainSceneCode.GDcardObjects4_1final.indexOf(gdjs.MainSceneCode.GDcardObjects5[j]) === -1 )
            gdjs.MainSceneCode.GDcardObjects4_1final.push(gdjs.MainSceneCode.GDcardObjects5[j]);
    }
}
}
{
gdjs.copyArray(gdjs.MainSceneCode.GDcardObjects4_1final, gdjs.MainSceneCode.GDcardObjects4);
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.MainSceneCode.GDcardObjects4.length ;i < len;++i) {
    gdjs.MainSceneCode.GDcardObjects4[i].setAnimationFrame(gdjs.MainSceneCode.GDcardObjects4[i].getVariables().getFromIndex(1).getAsNumber());
}
}}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Scheme"), gdjs.MainSceneCode.GDSchemeObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainSceneCode.GDSchemeObjects3.length;i<l;++i) {
    if ( gdjs.MainSceneCode.GDSchemeObjects3[i].getVariableNumber(gdjs.MainSceneCode.GDSchemeObjects3[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.MainSceneCode.GDSchemeObjects3[k] = gdjs.MainSceneCode.GDSchemeObjects3[i];
        ++k;
    }
}
gdjs.MainSceneCode.GDSchemeObjects3.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Message"), gdjs.MainSceneCode.GDMessageObjects3);
gdjs.copyArray(runtimeScene.getObjects("Round"), gdjs.MainSceneCode.GDRoundObjects3);
gdjs.copyArray(runtimeScene.getObjects("RoundLabel"), gdjs.MainSceneCode.GDRoundLabelObjects3);
gdjs.copyArray(runtimeScene.getObjects("Timer"), gdjs.MainSceneCode.GDTimerObjects3);
gdjs.copyArray(runtimeScene.getObjects("TimerLabel"), gdjs.MainSceneCode.GDTimerLabelObjects3);
gdjs.copyArray(runtimeScene.getObjects("background"), gdjs.MainSceneCode.GDbackgroundObjects3);
gdjs.copyArray(runtimeScene.getObjects("highlight0"), gdjs.MainSceneCode.GDhighlight0Objects3);
gdjs.copyArray(runtimeScene.getObjects("highlight1"), gdjs.MainSceneCode.GDhighlight1Objects3);
gdjs.copyArray(runtimeScene.getObjects("overlay"), gdjs.MainSceneCode.GDoverlayObjects3);
{for(var i = 0, len = gdjs.MainSceneCode.GDbackgroundObjects3.length ;i < len;++i) {
    gdjs.MainSceneCode.GDbackgroundObjects3[i].setColor("30;58;41");
}
}{for(var i = 0, len = gdjs.MainSceneCode.GDoverlayObjects3.length ;i < len;++i) {
    gdjs.MainSceneCode.GDoverlayObjects3[i].setColor("30;58;41");
}
}{for(var i = 0, len = gdjs.MainSceneCode.GDhighlight0Objects3.length ;i < len;++i) {
    gdjs.MainSceneCode.GDhighlight0Objects3[i].setColor("238;255;204");
}
for(var i = 0, len = gdjs.MainSceneCode.GDhighlight1Objects3.length ;i < len;++i) {
    gdjs.MainSceneCode.GDhighlight1Objects3[i].setColor("238;255;204");
}
}{for(var i = 0, len = gdjs.MainSceneCode.GDTimerObjects3.length ;i < len;++i) {
    gdjs.MainSceneCode.GDTimerObjects3[i].setColor("238;255;204");
}
for(var i = 0, len = gdjs.MainSceneCode.GDTimerLabelObjects3.length ;i < len;++i) {
    gdjs.MainSceneCode.GDTimerLabelObjects3[i].setColor("238;255;204");
}
for(var i = 0, len = gdjs.MainSceneCode.GDRoundLabelObjects3.length ;i < len;++i) {
    gdjs.MainSceneCode.GDRoundLabelObjects3[i].setColor("238;255;204");
}
for(var i = 0, len = gdjs.MainSceneCode.GDRoundObjects3.length ;i < len;++i) {
    gdjs.MainSceneCode.GDRoundObjects3[i].setColor("238;255;204");
}
for(var i = 0, len = gdjs.MainSceneCode.GDMessageObjects3.length ;i < len;++i) {
    gdjs.MainSceneCode.GDMessageObjects3[i].setColor("238;255;204");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Scheme"), gdjs.MainSceneCode.GDSchemeObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainSceneCode.GDSchemeObjects3.length;i<l;++i) {
    if ( gdjs.MainSceneCode.GDSchemeObjects3[i].getVariableNumber(gdjs.MainSceneCode.GDSchemeObjects3[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.MainSceneCode.GDSchemeObjects3[k] = gdjs.MainSceneCode.GDSchemeObjects3[i];
        ++k;
    }
}
gdjs.MainSceneCode.GDSchemeObjects3.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Message"), gdjs.MainSceneCode.GDMessageObjects3);
gdjs.copyArray(runtimeScene.getObjects("Round"), gdjs.MainSceneCode.GDRoundObjects3);
gdjs.copyArray(runtimeScene.getObjects("RoundLabel"), gdjs.MainSceneCode.GDRoundLabelObjects3);
gdjs.copyArray(runtimeScene.getObjects("Timer"), gdjs.MainSceneCode.GDTimerObjects3);
gdjs.copyArray(runtimeScene.getObjects("TimerLabel"), gdjs.MainSceneCode.GDTimerLabelObjects3);
gdjs.copyArray(runtimeScene.getObjects("background"), gdjs.MainSceneCode.GDbackgroundObjects3);
gdjs.copyArray(runtimeScene.getObjects("highlight0"), gdjs.MainSceneCode.GDhighlight0Objects3);
gdjs.copyArray(runtimeScene.getObjects("highlight1"), gdjs.MainSceneCode.GDhighlight1Objects3);
gdjs.copyArray(runtimeScene.getObjects("overlay"), gdjs.MainSceneCode.GDoverlayObjects3);
{for(var i = 0, len = gdjs.MainSceneCode.GDbackgroundObjects3.length ;i < len;++i) {
    gdjs.MainSceneCode.GDbackgroundObjects3[i].setColor("56;64;93");
}
}{for(var i = 0, len = gdjs.MainSceneCode.GDoverlayObjects3.length ;i < len;++i) {
    gdjs.MainSceneCode.GDoverlayObjects3[i].setColor("56;64;93");
}
}{for(var i = 0, len = gdjs.MainSceneCode.GDTimerObjects3.length ;i < len;++i) {
    gdjs.MainSceneCode.GDTimerObjects3[i].setColor("181;158;144");
}
for(var i = 0, len = gdjs.MainSceneCode.GDTimerLabelObjects3.length ;i < len;++i) {
    gdjs.MainSceneCode.GDTimerLabelObjects3[i].setColor("181;158;144");
}
for(var i = 0, len = gdjs.MainSceneCode.GDRoundLabelObjects3.length ;i < len;++i) {
    gdjs.MainSceneCode.GDRoundLabelObjects3[i].setColor("181;158;144");
}
for(var i = 0, len = gdjs.MainSceneCode.GDRoundObjects3.length ;i < len;++i) {
    gdjs.MainSceneCode.GDRoundObjects3[i].setColor("181;158;144");
}
for(var i = 0, len = gdjs.MainSceneCode.GDMessageObjects3.length ;i < len;++i) {
    gdjs.MainSceneCode.GDMessageObjects3[i].setColor("181;158;144");
}
}{for(var i = 0, len = gdjs.MainSceneCode.GDhighlight0Objects3.length ;i < len;++i) {
    gdjs.MainSceneCode.GDhighlight0Objects3[i].setColor("181;158;144");
}
for(var i = 0, len = gdjs.MainSceneCode.GDhighlight1Objects3.length ;i < len;++i) {
    gdjs.MainSceneCode.GDhighlight1Objects3[i].setColor("181;158;144");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Scheme"), gdjs.MainSceneCode.GDSchemeObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainSceneCode.GDSchemeObjects2.length;i<l;++i) {
    if ( gdjs.MainSceneCode.GDSchemeObjects2[i].getVariableNumber(gdjs.MainSceneCode.GDSchemeObjects2[i].getVariables().getFromIndex(0)) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.MainSceneCode.GDSchemeObjects2[k] = gdjs.MainSceneCode.GDSchemeObjects2[i];
        ++k;
    }
}
gdjs.MainSceneCode.GDSchemeObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Message"), gdjs.MainSceneCode.GDMessageObjects2);
gdjs.copyArray(runtimeScene.getObjects("Round"), gdjs.MainSceneCode.GDRoundObjects2);
gdjs.copyArray(runtimeScene.getObjects("RoundLabel"), gdjs.MainSceneCode.GDRoundLabelObjects2);
gdjs.copyArray(runtimeScene.getObjects("Timer"), gdjs.MainSceneCode.GDTimerObjects2);
gdjs.copyArray(runtimeScene.getObjects("TimerLabel"), gdjs.MainSceneCode.GDTimerLabelObjects2);
gdjs.copyArray(runtimeScene.getObjects("background"), gdjs.MainSceneCode.GDbackgroundObjects2);
gdjs.copyArray(runtimeScene.getObjects("highlight0"), gdjs.MainSceneCode.GDhighlight0Objects2);
gdjs.copyArray(runtimeScene.getObjects("highlight1"), gdjs.MainSceneCode.GDhighlight1Objects2);
gdjs.copyArray(runtimeScene.getObjects("overlay"), gdjs.MainSceneCode.GDoverlayObjects2);
{for(var i = 0, len = gdjs.MainSceneCode.GDbackgroundObjects2.length ;i < len;++i) {
    gdjs.MainSceneCode.GDbackgroundObjects2[i].setColor("87;115;143");
}
}{for(var i = 0, len = gdjs.MainSceneCode.GDoverlayObjects2.length ;i < len;++i) {
    gdjs.MainSceneCode.GDoverlayObjects2[i].setColor("87;115;143");
}
}{for(var i = 0, len = gdjs.MainSceneCode.GDTimerObjects2.length ;i < len;++i) {
    gdjs.MainSceneCode.GDTimerObjects2[i].setColor("221;221;221");
}
for(var i = 0, len = gdjs.MainSceneCode.GDTimerLabelObjects2.length ;i < len;++i) {
    gdjs.MainSceneCode.GDTimerLabelObjects2[i].setColor("221;221;221");
}
for(var i = 0, len = gdjs.MainSceneCode.GDRoundLabelObjects2.length ;i < len;++i) {
    gdjs.MainSceneCode.GDRoundLabelObjects2[i].setColor("221;221;221");
}
for(var i = 0, len = gdjs.MainSceneCode.GDRoundObjects2.length ;i < len;++i) {
    gdjs.MainSceneCode.GDRoundObjects2[i].setColor("221;221;221");
}
for(var i = 0, len = gdjs.MainSceneCode.GDMessageObjects2.length ;i < len;++i) {
    gdjs.MainSceneCode.GDMessageObjects2[i].setColor("221;221;221");
}
}{for(var i = 0, len = gdjs.MainSceneCode.GDhighlight0Objects2.length ;i < len;++i) {
    gdjs.MainSceneCode.GDhighlight0Objects2[i].setColor("221;221;221");
}
for(var i = 0, len = gdjs.MainSceneCode.GDhighlight1Objects2.length ;i < len;++i) {
    gdjs.MainSceneCode.GDhighlight1Objects2[i].setColor("221;221;221");
}
}}

}


};gdjs.MainSceneCode.eventsList15 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(16), false, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.MainSceneCode.eventsList14(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "settingsTimer") > 1;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(16).setBoolean(true);
}{gdjs.evtTools.runtimeScene.removeTimer(runtimeScene, "settingsTimer");
}}

}


};gdjs.MainSceneCode.mapOfGDgdjs_9546MainSceneCode_9546GDSoundObjects1Objects = Hashtable.newFrom({"Sound": gdjs.MainSceneCode.GDSoundObjects1});
gdjs.MainSceneCode.eventsList16 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Sound"), gdjs.MainSceneCode.GDSoundObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(7), true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MainSceneCode.mapOfGDgdjs_9546MainSceneCode_9546GDSoundObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9903860);
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MainSceneCode.GDSoundObjects1 */
{for(var i = 0, len = gdjs.MainSceneCode.GDSoundObjects1.length ;i < len;++i) {
    gdjs.MainSceneCode.GDSoundObjects1[i].returnVariable(gdjs.MainSceneCode.GDSoundObjects1[i].getVariables().getFromIndex(0)).add(1);
}
}{runtimeScene.getScene().getVariables().getFromIndex(16).setBoolean(false);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "settingsTimer");
}}

}


};gdjs.MainSceneCode.mapOfGDgdjs_9546MainSceneCode_9546GDFullscreenObjects1Objects = Hashtable.newFrom({"Fullscreen": gdjs.MainSceneCode.GDFullscreenObjects1});
gdjs.MainSceneCode.userFunc0x89a098 = function GDJSInlineCode(runtimeScene, objects) {
"use strict";
const fullscreenButton = objects[0];
const canvas = document.getElementsByTagName("canvas")[0];
if (document.fullscreenElement) {
    document.exitFullscreen();
    fullscreenButton.setAnimationFrame(0)
    fullscreenButton.getVariables().get("state").setValue(0);
} else {   
    canvas.requestFullscreen();
    fullscreenButton.setAnimationFrame(1)
    fullscreenButton.getVariables().get("state").setValue(1);
};
};
gdjs.MainSceneCode.eventsList17 = function(runtimeScene) {

{

/* Reuse gdjs.MainSceneCode.GDFullscreenObjects1 */

var objects = [];
objects.push.apply(objects,gdjs.MainSceneCode.GDFullscreenObjects1);
gdjs.MainSceneCode.userFunc0x89a098(runtimeScene, objects);

}


};gdjs.MainSceneCode.eventsList18 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Fullscreen"), gdjs.MainSceneCode.GDFullscreenObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(7), true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MainSceneCode.mapOfGDgdjs_9546MainSceneCode_9546GDFullscreenObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9905700);
}
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.MainSceneCode.eventsList17(runtimeScene);} //End of subevents
}

}


};gdjs.MainSceneCode.mapOfGDgdjs_9546MainSceneCode_9546GDSchemeObjects1Objects = Hashtable.newFrom({"Scheme": gdjs.MainSceneCode.GDSchemeObjects1});
gdjs.MainSceneCode.eventsList19 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Scheme"), gdjs.MainSceneCode.GDSchemeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(7), true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MainSceneCode.mapOfGDgdjs_9546MainSceneCode_9546GDSchemeObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9907852);
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MainSceneCode.GDSchemeObjects1 */
{for(var i = 0, len = gdjs.MainSceneCode.GDSchemeObjects1.length ;i < len;++i) {
    gdjs.MainSceneCode.GDSchemeObjects1[i].returnVariable(gdjs.MainSceneCode.GDSchemeObjects1[i].getVariables().getFromIndex(0)).add(1);
}
}{runtimeScene.getScene().getVariables().getFromIndex(16).setBoolean(false);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "settingsTimer");
}}

}


};gdjs.MainSceneCode.eventsList20 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(7), true, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Timer"), gdjs.MainSceneCode.GDTimerObjects2);
{for(var i = 0, len = gdjs.MainSceneCode.GDTimerObjects2.length ;i < len;++i) {
    gdjs.MainSceneCode.GDTimerObjects2[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(Math.round(runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() - gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "MainTimer"))));
}
}}

}


};gdjs.MainSceneCode.eventsList21 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.MainSceneCode.GDMessageObjects1, gdjs.MainSceneCode.GDMessageObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainSceneCode.GDMessageObjects2.length;i<l;++i) {
    if ( gdjs.MainSceneCode.GDMessageObjects2[i].getVariableBoolean(gdjs.MainSceneCode.GDMessageObjects2[i].getVariables().getFromIndex(0), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.MainSceneCode.GDMessageObjects2[k] = gdjs.MainSceneCode.GDMessageObjects2[i];
        ++k;
    }
}
gdjs.MainSceneCode.GDMessageObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.MainSceneCode.GDMessageObjects2 */
{for(var i = 0, len = gdjs.MainSceneCode.GDMessageObjects2.length ;i < len;++i) {
    gdjs.MainSceneCode.GDMessageObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.MainSceneCode.GDMessageObjects2.length ;i < len;++i) {
    gdjs.MainSceneCode.GDMessageObjects2[i].returnVariable(gdjs.MainSceneCode.GDMessageObjects2[i].getVariables().getFromIndex(0)).setBoolean(false);
}
}{for(var i = 0, len = gdjs.MainSceneCode.GDMessageObjects2.length ;i < len;++i) {
    gdjs.MainSceneCode.GDMessageObjects2[i].resetTimer("MessageBlinkTimer");
}
}}

}


{

gdjs.copyArray(gdjs.MainSceneCode.GDMessageObjects1, gdjs.MainSceneCode.GDMessageObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainSceneCode.GDMessageObjects2.length;i<l;++i) {
    if ( gdjs.MainSceneCode.GDMessageObjects2[i].getTimerElapsedTimeInSecondsOrNaN("MessageBlinkTimer") >= 0.2 ) {
        isConditionTrue_0 = true;
        gdjs.MainSceneCode.GDMessageObjects2[k] = gdjs.MainSceneCode.GDMessageObjects2[i];
        ++k;
    }
}
gdjs.MainSceneCode.GDMessageObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.MainSceneCode.GDMessageObjects2 */
{for(var i = 0, len = gdjs.MainSceneCode.GDMessageObjects2.length ;i < len;++i) {
    gdjs.MainSceneCode.GDMessageObjects2[i].hide(false);
}
}}

}


{

/* Reuse gdjs.MainSceneCode.GDMessageObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainSceneCode.GDMessageObjects1.length;i<l;++i) {
    if ( gdjs.MainSceneCode.GDMessageObjects1[i].getTimerElapsedTimeInSecondsOrNaN("MessageBlinkTimer") >= 0.4 ) {
        isConditionTrue_0 = true;
        gdjs.MainSceneCode.GDMessageObjects1[k] = gdjs.MainSceneCode.GDMessageObjects1[i];
        ++k;
    }
}
gdjs.MainSceneCode.GDMessageObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.MainSceneCode.GDMessageObjects1 */
{for(var i = 0, len = gdjs.MainSceneCode.GDMessageObjects1.length ;i < len;++i) {
    gdjs.MainSceneCode.GDMessageObjects1[i].returnVariable(gdjs.MainSceneCode.GDMessageObjects1[i].getVariables().getFromIndex(0)).setBoolean(true);
}
}}

}


};gdjs.MainSceneCode.eventsList22 = function(runtimeScene) {

{


gdjs.MainSceneCode.eventsList21(runtimeScene);
}


};gdjs.MainSceneCode.eventsList23 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("background"), gdjs.MainSceneCode.GDbackgroundObjects2);
gdjs.copyArray(runtimeScene.getObjects("overlay"), gdjs.MainSceneCode.GDoverlayObjects2);
{for(var i = 0, len = gdjs.MainSceneCode.GDbackgroundObjects2.length ;i < len;++i) {
    gdjs.MainSceneCode.GDbackgroundObjects2[i].getBehavior("Resizable").setSize(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene), gdjs.evtTools.window.getGameResolutionHeight(runtimeScene));
}
}{for(var i = 0, len = gdjs.MainSceneCode.GDoverlayObjects2.length ;i < len;++i) {
    gdjs.MainSceneCode.GDoverlayObjects2[i].getBehavior("Resizable").setSize(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene), gdjs.evtTools.window.getGameResolutionHeight(runtimeScene));
}
}
{ //Subevents
gdjs.MainSceneCode.eventsList20(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.camera.layerIsVisible(runtimeScene, "MessageLayer");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Message"), gdjs.MainSceneCode.GDMessageObjects1);
{for(var i = 0, len = gdjs.MainSceneCode.GDMessageObjects1.length ;i < len;++i) {
    gdjs.MainSceneCode.GDMessageObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.MainSceneCode.GDMessageObjects1.length ;i < len;++i) {
    gdjs.MainSceneCode.GDMessageObjects1[i].setCenterYInScene(gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2);
}
}
{ //Subevents
gdjs.MainSceneCode.eventsList22(runtimeScene);} //End of subevents
}

}


};gdjs.MainSceneCode.mapOfGDgdjs_9546MainSceneCode_9546GDspawnerLeftObjects2ObjectsGDgdjs_9546MainSceneCode_9546GDspawnerCenterObjects2ObjectsGDgdjs_9546MainSceneCode_9546GDspawnerRightObjects2Objects = Hashtable.newFrom({"spawnerLeft": gdjs.MainSceneCode.GDspawnerLeftObjects2, "spawnerCenter": gdjs.MainSceneCode.GDspawnerCenterObjects2, "spawnerRight": gdjs.MainSceneCode.GDspawnerRightObjects2});
gdjs.MainSceneCode.mapOfGDgdjs_9546MainSceneCode_9546GDcockroachObjects2Objects = Hashtable.newFrom({"cockroach": gdjs.MainSceneCode.GDcockroachObjects2});
gdjs.MainSceneCode.eventsList24 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) >= 6;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(19).setNumber(gdjs.randomInRange(0, 1));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(19)) == 1;
if (isConditionTrue_0) {
/* Reuse gdjs.MainSceneCode.GDcockroachObjects2 */
{for(var i = 0, len = gdjs.MainSceneCode.GDcockroachObjects2.length ;i < len;++i) {
    gdjs.MainSceneCode.GDcockroachObjects2[i].getBehavior("Animation").setAnimationName("Moving_Explosive");
}
}{for(var i = 0, len = gdjs.MainSceneCode.GDcockroachObjects2.length ;i < len;++i) {
    gdjs.MainSceneCode.GDcockroachObjects2[i].resetTimer("explosionTimer");
}
}}

}


};gdjs.MainSceneCode.eventsList25 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) > 3;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(19).setNumber(gdjs.randomInRange(0, 2));
}
{ //Subevents
gdjs.MainSceneCode.eventsList24(runtimeScene);} //End of subevents
}

}


};gdjs.MainSceneCode.eventsList26 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(7), true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9915092);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "spawnTimer");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "spawnTimer") >= gdjs.randomInRange(6, 13);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("spawnerCenter"), gdjs.MainSceneCode.GDspawnerCenterObjects2);
gdjs.copyArray(runtimeScene.getObjects("spawnerLeft"), gdjs.MainSceneCode.GDspawnerLeftObjects2);
gdjs.copyArray(runtimeScene.getObjects("spawnerRight"), gdjs.MainSceneCode.GDspawnerRightObjects2);
gdjs.MainSceneCode.GDcockroachObjects2.length = 0;

{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "spawnTimer");
}{gdjs.evtTools.object.pickRandomObject((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.MainSceneCode.mapOfGDgdjs_9546MainSceneCode_9546GDspawnerLeftObjects2ObjectsGDgdjs_9546MainSceneCode_9546GDspawnerCenterObjects2ObjectsGDgdjs_9546MainSceneCode_9546GDspawnerRightObjects2Objects);
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.MainSceneCode.mapOfGDgdjs_9546MainSceneCode_9546GDcockroachObjects2Objects, (( gdjs.MainSceneCode.GDspawnerRightObjects2.length === 0 ) ? (( gdjs.MainSceneCode.GDspawnerCenterObjects2.length === 0 ) ? (( gdjs.MainSceneCode.GDspawnerLeftObjects2.length === 0 ) ? 0 :gdjs.MainSceneCode.GDspawnerLeftObjects2[0].getX()) :gdjs.MainSceneCode.GDspawnerCenterObjects2[0].getX()) :gdjs.MainSceneCode.GDspawnerRightObjects2[0].getX()), (( gdjs.MainSceneCode.GDspawnerRightObjects2.length === 0 ) ? (( gdjs.MainSceneCode.GDspawnerCenterObjects2.length === 0 ) ? (( gdjs.MainSceneCode.GDspawnerLeftObjects2.length === 0 ) ? 0 :gdjs.MainSceneCode.GDspawnerLeftObjects2[0].getY()) :gdjs.MainSceneCode.GDspawnerCenterObjects2[0].getY()) :gdjs.MainSceneCode.GDspawnerRightObjects2[0].getY()), "Insects");
}{for(var i = 0, len = gdjs.MainSceneCode.GDcockroachObjects2.length ;i < len;++i) {
    gdjs.MainSceneCode.GDcockroachObjects2[i].setZOrder(6);
}
}{for(var i = 0, len = gdjs.MainSceneCode.GDcockroachObjects2.length ;i < len;++i) {
    gdjs.MainSceneCode.GDcockroachObjects2[i].returnVariable(gdjs.MainSceneCode.GDcockroachObjects2[i].getVariables().getFromIndex(1)).setNumber(gdjs.random(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene)));
}
}{for(var i = 0, len = gdjs.MainSceneCode.GDcockroachObjects2.length ;i < len;++i) {
    gdjs.MainSceneCode.GDcockroachObjects2[i].returnVariable(gdjs.MainSceneCode.GDcockroachObjects2[i].getVariables().getFromIndex(2)).setNumber(gdjs.random(gdjs.evtTools.window.getGameResolutionHeight(runtimeScene)));
}
}{for(var i = 0, len = gdjs.MainSceneCode.GDcockroachObjects2.length ;i < len;++i) {
    gdjs.MainSceneCode.GDcockroachObjects2[i].getBehavior("Animation").setAnimationSpeedScale(runtimeScene.getScene().getVariables().getFromIndex(11).getAsNumber());
}
}{for(var i = 0, len = gdjs.MainSceneCode.GDcockroachObjects2.length ;i < len;++i) {
    gdjs.MainSceneCode.GDcockroachObjects2[i].addForceTowardPosition(gdjs.MainSceneCode.GDcockroachObjects2[i].getVariables().getFromIndex(1).getAsNumber(), gdjs.MainSceneCode.GDcockroachObjects2[i].getVariables().getFromIndex(2).getAsNumber(), runtimeScene.getScene().getVariables().getFromIndex(10).getAsNumber(), 1);
}
}{for(var i = 0, len = gdjs.MainSceneCode.GDcockroachObjects2.length ;i < len;++i) {
    gdjs.MainSceneCode.GDcockroachObjects2[i].rotateTowardPosition(gdjs.MainSceneCode.GDcockroachObjects2[i].getVariables().getFromIndex(1).getAsNumber(), gdjs.MainSceneCode.GDcockroachObjects2[i].getVariables().getFromIndex(2).getAsNumber(), 0, runtimeScene);
}
}{for(var i = 0, len = gdjs.MainSceneCode.GDcockroachObjects2.length ;i < len;++i) {
    gdjs.MainSceneCode.GDcockroachObjects2[i].resetTimer("cockroachTimer");
}
}
{ //Subevents
gdjs.MainSceneCode.eventsList25(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("cockroach"), gdjs.MainSceneCode.GDcockroachObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainSceneCode.GDcockroachObjects2.length;i<l;++i) {
    if ( gdjs.MainSceneCode.GDcockroachObjects2[i].getTimerElapsedTimeInSecondsOrNaN("cockroachTimer") >= gdjs.randomInRange(5, 10) ) {
        isConditionTrue_0 = true;
        gdjs.MainSceneCode.GDcockroachObjects2[k] = gdjs.MainSceneCode.GDcockroachObjects2[i];
        ++k;
    }
}
gdjs.MainSceneCode.GDcockroachObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainSceneCode.GDcockroachObjects2.length;i<l;++i) {
    if ( gdjs.MainSceneCode.GDcockroachObjects2[i].getVariableBoolean(gdjs.MainSceneCode.GDcockroachObjects2[i].getVariables().getFromIndex(0), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.MainSceneCode.GDcockroachObjects2[k] = gdjs.MainSceneCode.GDcockroachObjects2[i];
        ++k;
    }
}
gdjs.MainSceneCode.GDcockroachObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.MainSceneCode.GDcockroachObjects2 */
{for(var i = 0, len = gdjs.MainSceneCode.GDcockroachObjects2.length ;i < len;++i) {
    gdjs.MainSceneCode.GDcockroachObjects2[i].clearForces();
}
}{for(var i = 0, len = gdjs.MainSceneCode.GDcockroachObjects2.length ;i < len;++i) {
    gdjs.MainSceneCode.GDcockroachObjects2[i].returnVariable(gdjs.MainSceneCode.GDcockroachObjects2[i].getVariables().getFromIndex(1)).setNumber(gdjs.random(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene)));
}
}{for(var i = 0, len = gdjs.MainSceneCode.GDcockroachObjects2.length ;i < len;++i) {
    gdjs.MainSceneCode.GDcockroachObjects2[i].returnVariable(gdjs.MainSceneCode.GDcockroachObjects2[i].getVariables().getFromIndex(2)).setNumber(gdjs.random(gdjs.evtTools.window.getGameResolutionHeight(runtimeScene)));
}
}{for(var i = 0, len = gdjs.MainSceneCode.GDcockroachObjects2.length ;i < len;++i) {
    gdjs.MainSceneCode.GDcockroachObjects2[i].getBehavior("Animation").setAnimationSpeedScale(runtimeScene.getScene().getVariables().getFromIndex(11).getAsNumber());
}
}{for(var i = 0, len = gdjs.MainSceneCode.GDcockroachObjects2.length ;i < len;++i) {
    gdjs.MainSceneCode.GDcockroachObjects2[i].addForceTowardPosition(gdjs.MainSceneCode.GDcockroachObjects2[i].getVariables().getFromIndex(1).getAsNumber(), gdjs.MainSceneCode.GDcockroachObjects2[i].getVariables().getFromIndex(2).getAsNumber(), runtimeScene.getScene().getVariables().getFromIndex(10).getAsNumber(), 1);
}
}{for(var i = 0, len = gdjs.MainSceneCode.GDcockroachObjects2.length ;i < len;++i) {
    gdjs.MainSceneCode.GDcockroachObjects2[i].rotateTowardPosition(gdjs.MainSceneCode.GDcockroachObjects2[i].getVariables().getFromIndex(1).getAsNumber(), gdjs.MainSceneCode.GDcockroachObjects2[i].getVariables().getFromIndex(2).getAsNumber(), 0, runtimeScene);
}
}{for(var i = 0, len = gdjs.MainSceneCode.GDcockroachObjects2.length ;i < len;++i) {
    gdjs.MainSceneCode.GDcockroachObjects2[i].resetTimer("cockroachTimer");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("cockroach"), gdjs.MainSceneCode.GDcockroachObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainSceneCode.GDcockroachObjects1.length;i<l;++i) {
    if ( gdjs.MainSceneCode.GDcockroachObjects1[i].getVariableBoolean(gdjs.MainSceneCode.GDcockroachObjects1[i].getVariables().getFromIndex(0), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.MainSceneCode.GDcockroachObjects1[k] = gdjs.MainSceneCode.GDcockroachObjects1[i];
        ++k;
    }
}
gdjs.MainSceneCode.GDcockroachObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{gdjs.MainSceneCode.GDcockroachObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.MainSceneCode.GDcockroachObjects1, gdjs.MainSceneCode.GDcockroachObjects2);

{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
for (var i = 0, k = 0, l = gdjs.MainSceneCode.GDcockroachObjects2.length;i<l;++i) {
    if ( gdjs.MainSceneCode.GDcockroachObjects2[i].isCollidingWithPoint(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0)) ) {
        isConditionTrue_2 = true;
        gdjs.MainSceneCode.GDcockroachObjects2[k] = gdjs.MainSceneCode.GDcockroachObjects2[i];
        ++k;
    }
}
gdjs.MainSceneCode.GDcockroachObjects2.length = k;
if (isConditionTrue_2) {
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.MainSceneCode.GDcockroachObjects2.length; j < jLen ; ++j) {
        if ( gdjs.MainSceneCode.GDcockroachObjects1_1final.indexOf(gdjs.MainSceneCode.GDcockroachObjects2[j]) === -1 )
            gdjs.MainSceneCode.GDcockroachObjects1_1final.push(gdjs.MainSceneCode.GDcockroachObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.MainSceneCode.GDcockroachObjects1, gdjs.MainSceneCode.GDcockroachObjects2);

{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) < 7;
if (isConditionTrue_2) {
isConditionTrue_2 = false;
for (var i = 0, k = 0, l = gdjs.MainSceneCode.GDcockroachObjects2.length;i<l;++i) {
    if ( gdjs.MainSceneCode.GDcockroachObjects2[i].getTimerElapsedTimeInSecondsOrNaN("explosionTimer") >= gdjs.randomInRange(7, 16) ) {
        isConditionTrue_2 = true;
        gdjs.MainSceneCode.GDcockroachObjects2[k] = gdjs.MainSceneCode.GDcockroachObjects2[i];
        ++k;
    }
}
gdjs.MainSceneCode.GDcockroachObjects2.length = k;
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.MainSceneCode.GDcockroachObjects2.length; j < jLen ; ++j) {
        if ( gdjs.MainSceneCode.GDcockroachObjects1_1final.indexOf(gdjs.MainSceneCode.GDcockroachObjects2[j]) === -1 )
            gdjs.MainSceneCode.GDcockroachObjects1_1final.push(gdjs.MainSceneCode.GDcockroachObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.MainSceneCode.GDcockroachObjects1, gdjs.MainSceneCode.GDcockroachObjects2);

{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) >= 6;
if (isConditionTrue_2) {
isConditionTrue_2 = false;
for (var i = 0, k = 0, l = gdjs.MainSceneCode.GDcockroachObjects2.length;i<l;++i) {
    if ( gdjs.MainSceneCode.GDcockroachObjects2[i].getTimerElapsedTimeInSecondsOrNaN("explosionTimer") >= gdjs.randomInRange(3, 7) ) {
        isConditionTrue_2 = true;
        gdjs.MainSceneCode.GDcockroachObjects2[k] = gdjs.MainSceneCode.GDcockroachObjects2[i];
        ++k;
    }
}
gdjs.MainSceneCode.GDcockroachObjects2.length = k;
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.MainSceneCode.GDcockroachObjects2.length; j < jLen ; ++j) {
        if ( gdjs.MainSceneCode.GDcockroachObjects1_1final.indexOf(gdjs.MainSceneCode.GDcockroachObjects2[j]) === -1 )
            gdjs.MainSceneCode.GDcockroachObjects1_1final.push(gdjs.MainSceneCode.GDcockroachObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.MainSceneCode.GDcockroachObjects1, gdjs.MainSceneCode.GDcockroachObjects2);

{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) >= 8;
if (isConditionTrue_2) {
isConditionTrue_2 = false;
for (var i = 0, k = 0, l = gdjs.MainSceneCode.GDcockroachObjects2.length;i<l;++i) {
    if ( gdjs.MainSceneCode.GDcockroachObjects2[i].getTimerElapsedTimeInSecondsOrNaN("explosionTimer") >= gdjs.randomInRange(1, 3) ) {
        isConditionTrue_2 = true;
        gdjs.MainSceneCode.GDcockroachObjects2[k] = gdjs.MainSceneCode.GDcockroachObjects2[i];
        ++k;
    }
}
gdjs.MainSceneCode.GDcockroachObjects2.length = k;
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.MainSceneCode.GDcockroachObjects2.length; j < jLen ; ++j) {
        if ( gdjs.MainSceneCode.GDcockroachObjects1_1final.indexOf(gdjs.MainSceneCode.GDcockroachObjects2[j]) === -1 )
            gdjs.MainSceneCode.GDcockroachObjects1_1final.push(gdjs.MainSceneCode.GDcockroachObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.MainSceneCode.GDcockroachObjects1_1final, gdjs.MainSceneCode.GDcockroachObjects1);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MainSceneCode.GDcockroachObjects1 */
{for(var i = 0, len = gdjs.MainSceneCode.GDcockroachObjects1.length ;i < len;++i) {
    gdjs.MainSceneCode.GDcockroachObjects1[i].clearForces();
}
}{for(var i = 0, len = gdjs.MainSceneCode.GDcockroachObjects1.length ;i < len;++i) {
    gdjs.MainSceneCode.GDcockroachObjects1[i].returnVariable(gdjs.MainSceneCode.GDcockroachObjects1[i].getVariables().getFromIndex(0)).setBoolean(false);
}
}{for(var i = 0, len = gdjs.MainSceneCode.GDcockroachObjects1.length ;i < len;++i) {
    gdjs.MainSceneCode.GDcockroachObjects1[i].getBehavior("Animation").pauseAnimation();
}
}{for(var i = 0, len = gdjs.MainSceneCode.GDcockroachObjects1.length ;i < len;++i) {
    gdjs.MainSceneCode.GDcockroachObjects1[i].getBehavior("Animation").setAnimationName("Dead");
}
}{for(var i = 0, len = gdjs.MainSceneCode.GDcockroachObjects1.length ;i < len;++i) {
    gdjs.MainSceneCode.GDcockroachObjects1[i].setAnimationFrame(gdjs.random(3));
}
}{for(var i = 0, len = gdjs.MainSceneCode.GDcockroachObjects1.length ;i < len;++i) {
    gdjs.MainSceneCode.GDcockroachObjects1[i].setZOrder(-(100));
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "assets/audio/kill.wav", false, 100, 1);
}}

}


};gdjs.MainSceneCode.eventsList27 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Leaderboard");
}}

}


};gdjs.MainSceneCode.eventsList28 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(5)) == 9;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(7), true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9926580);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Message"), gdjs.MainSceneCode.GDMessageObjects2);
gdjs.copyArray(runtimeScene.getObjects("card"), gdjs.MainSceneCode.GDcardObjects2);
{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "MainTimer");
}{for(var i = 0, len = gdjs.MainSceneCode.GDcardObjects2.length ;i < len;++i) {
    gdjs.MainSceneCode.GDcardObjects2[i].hide();
}
}{gdjs.evtTools.camera.showLayer(runtimeScene, "MessageLayer");
}{for(var i = 0, len = gdjs.MainSceneCode.GDMessageObjects2.length ;i < len;++i) {
    gdjs.MainSceneCode.GDMessageObjects2[i].getBehavior("Text").setText("YOU WIN!");
}
}{runtimeScene.getScene().getVariables().getFromIndex(7).setBoolean(false);
}{runtimeScene.getScene().getVariables().getFromIndex(2).sub(3);
}{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}{runtimeScene.getScene().getVariables().getFromIndex(10).mul(1.5);
}{runtimeScene.getScene().getVariables().getFromIndex(11).mul(1.25);
}{gdjs.evtTools.sound.playSound(runtimeScene, "assets/audio/you_win.wav", false, 100, 1);
}{gdjs.evtTools.sound.setSoundOnChannelPitch(runtimeScene, 0, gdjs.evtTools.sound.getSoundOnChannelPitch(runtimeScene, 0) + (0.05));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2)) <= Math.floor(gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "MainTimer"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(7), true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9929644);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Message"), gdjs.MainSceneCode.GDMessageObjects1);
gdjs.copyArray(runtimeScene.getObjects("card"), gdjs.MainSceneCode.GDcardObjects1);
{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "MainTimer");
}{for(var i = 0, len = gdjs.MainSceneCode.GDcardObjects1.length ;i < len;++i) {
    gdjs.MainSceneCode.GDcardObjects1[i].hide();
}
}{gdjs.evtTools.camera.showLayer(runtimeScene, "MessageLayer");
}{for(var i = 0, len = gdjs.MainSceneCode.GDMessageObjects1.length ;i < len;++i) {
    gdjs.MainSceneCode.GDMessageObjects1[i].getBehavior("Text").setText("YOU LOSE!");
}
}{runtimeScene.getScene().getVariables().getFromIndex(7).setBoolean(false);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber());
}{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(1);
}{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber());
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "HUD");
}{gdjs.evtTools.runtimeScene.removeTimer(runtimeScene, "spawnTimer");
}{runtimeScene.getScene().getVariables().getFromIndex(8).setBoolean(true);
}{gdjs.evtTools.sound.playSound(runtimeScene, "assets/audio/you_lose.wav", false, 100, 1);
}
{ //Subevents
gdjs.MainSceneCode.eventsList27(runtimeScene);} //End of subevents
}

}


};gdjs.MainSceneCode.userFunc0x8d65d0 = function GDJSInlineCode(runtimeScene) {
"use strict";
function randi(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
};

const highlight0 = runtimeScene.getObjects("highlight0")[0];
const highlight1 = runtimeScene.getObjects("highlight1")[0];
const cards = runtimeScene.getObjects("card");
const widthDiff = (432 - runtimeScene.getViewportWidth())/2;
const positions = [24, 88, 152, 216, 280, 344];
const rows = [
    [0, 1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10, 11],
    [12, 13, 14, 15, 16, 17]
];
const columns = [
    [0, 6, 12],
    [1, 7, 13],
    [2, 8, 14],
    [3, 9, 15],
    [4, 10, 16],
    [5, 11, 17]
];

var row0;
var row1;
var column0;
var column1;

var w = 384;
var h = 64;
var x = 24;
var x2 = x;
row0 = randi(0, 3);
var y = positions[row0];
var y2 = y;
while (y2 == y) {
    row1 = randi(0, 3);
    y2 = positions[row1];
};

var orientation = randi(0, 2);

if (orientation == 1) {
    w = 64;
    h = 192;
    y = 24;
    y2 = y;
    column0 = randi(0, 6);
    x = positions[column0];
    x2 = x;
    while (x2 == x) {
        column1 = randi(0, 6);
        x2 = positions[column1];
    };
};

highlight0.setSize(w, h);
highlight1.setSize(w, h);
highlight0.setPosition(x - widthDiff, y);
highlight1.setPosition(x2 - widthDiff, y2)

if (orientation == 0) {
    for (let card of cards) {
        let cardId = card.getVariables().get("id").getValue();
        if (rows[row0].includes(cardId)) {
            card.setY(y2 + 8);
        };
        if (rows[row1].includes(cardId)) {
            card.setY(y + 8);
        };
    };
};
if (orientation == 1) {
    for (let card of cards) {
        let cardId = card.getVariables().get("id").getValue();
        if (columns[column0].includes(cardId)) {
            card.setX(positions[column1] + 8 - widthDiff);
            card.getVariables().get("x").setValue(positions[column1] + 8);
        };
        if (columns[column1].includes(cardId)) {
            card.setX(positions[column0] + 8 - widthDiff);
            card.getVariables().get("x").setValue(positions[column0] + 8);
        };
    };
};
};
gdjs.MainSceneCode.eventsList29 = function(runtimeScene) {

{


gdjs.MainSceneCode.userFunc0x8d65d0(runtimeScene);

}


};gdjs.MainSceneCode.eventsList30 = function(runtimeScene) {

{


gdjs.MainSceneCode.eventsList29(runtimeScene);
}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("highlight0"), gdjs.MainSceneCode.GDhighlight0Objects2);
gdjs.copyArray(runtimeScene.getObjects("highlight1"), gdjs.MainSceneCode.GDhighlight1Objects2);
{for(var i = 0, len = gdjs.MainSceneCode.GDhighlight0Objects2.length ;i < len;++i) {
    gdjs.MainSceneCode.GDhighlight0Objects2[i].hide(false);
}
for(var i = 0, len = gdjs.MainSceneCode.GDhighlight1Objects2.length ;i < len;++i) {
    gdjs.MainSceneCode.GDhighlight1Objects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.MainSceneCode.GDhighlight0Objects2.length ;i < len;++i) {
    gdjs.MainSceneCode.GDhighlight0Objects2[i].resetTimer("highlightsVisibility");
}
for(var i = 0, len = gdjs.MainSceneCode.GDhighlight1Objects2.length ;i < len;++i) {
    gdjs.MainSceneCode.GDhighlight1Objects2[i].resetTimer("highlightsVisibility");
}
}}

}


};gdjs.MainSceneCode.eventsList31 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "shiftsTimer") >= runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() / 3;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9932924);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.MainSceneCode.eventsList30(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("highlight0"), gdjs.MainSceneCode.GDhighlight0Objects1);
gdjs.copyArray(runtimeScene.getObjects("highlight1"), gdjs.MainSceneCode.GDhighlight1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainSceneCode.GDhighlight0Objects1.length;i<l;++i) {
    if ( gdjs.MainSceneCode.GDhighlight0Objects1[i].getTimerElapsedTimeInSecondsOrNaN("highlightsVisibility") >= 1 ) {
        isConditionTrue_0 = true;
        gdjs.MainSceneCode.GDhighlight0Objects1[k] = gdjs.MainSceneCode.GDhighlight0Objects1[i];
        ++k;
    }
}
gdjs.MainSceneCode.GDhighlight0Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.MainSceneCode.GDhighlight1Objects1.length;i<l;++i) {
    if ( gdjs.MainSceneCode.GDhighlight1Objects1[i].getTimerElapsedTimeInSecondsOrNaN("highlightsVisibility") >= 1 ) {
        isConditionTrue_0 = true;
        gdjs.MainSceneCode.GDhighlight1Objects1[k] = gdjs.MainSceneCode.GDhighlight1Objects1[i];
        ++k;
    }
}
gdjs.MainSceneCode.GDhighlight1Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.MainSceneCode.GDhighlight0Objects1 */
/* Reuse gdjs.MainSceneCode.GDhighlight1Objects1 */
{for(var i = 0, len = gdjs.MainSceneCode.GDhighlight0Objects1.length ;i < len;++i) {
    gdjs.MainSceneCode.GDhighlight0Objects1[i].hide();
}
for(var i = 0, len = gdjs.MainSceneCode.GDhighlight1Objects1.length ;i < len;++i) {
    gdjs.MainSceneCode.GDhighlight1Objects1[i].hide();
}
}}

}


};gdjs.MainSceneCode.userFunc0x842618 = function GDJSInlineCode(runtimeScene) {
"use strict";
const cards = runtimeScene.getObjects("card");
const widthDiff = (432 - runtimeScene.getViewportWidth())/2;

for (let card of cards) {
    let curPos = card.getVariables().get("x").getValue();
    let newPos = curPos - widthDiff;
    card.setX(newPos);
};
};
gdjs.MainSceneCode.eventsList32 = function(runtimeScene) {

{



}


{


gdjs.MainSceneCode.userFunc0x842618(runtimeScene);

}


};gdjs.MainSceneCode.eventsList33 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Fullscreen"), gdjs.MainSceneCode.GDFullscreenObjects1);
gdjs.copyArray(runtimeScene.getObjects("Message"), gdjs.MainSceneCode.GDMessageObjects1);
gdjs.copyArray(runtimeScene.getObjects("Scheme"), gdjs.MainSceneCode.GDSchemeObjects1);
gdjs.copyArray(runtimeScene.getObjects("Sound"), gdjs.MainSceneCode.GDSoundObjects1);
gdjs.copyArray(runtimeScene.getObjects("background"), gdjs.MainSceneCode.GDbackgroundObjects1);
gdjs.copyArray(runtimeScene.getObjects("card"), gdjs.MainSceneCode.GDcardObjects1);
gdjs.copyArray(runtimeScene.getObjects("highlight0"), gdjs.MainSceneCode.GDhighlight0Objects1);
gdjs.copyArray(runtimeScene.getObjects("highlight1"), gdjs.MainSceneCode.GDhighlight1Objects1);
gdjs.copyArray(runtimeScene.getObjects("overlay"), gdjs.MainSceneCode.GDoverlayObjects1);
{for(var i = 0, len = gdjs.MainSceneCode.GDbackgroundObjects1.length ;i < len;++i) {
    gdjs.MainSceneCode.GDbackgroundObjects1[i].setColor("30;58;41");
}
}{for(var i = 0, len = gdjs.MainSceneCode.GDoverlayObjects1.length ;i < len;++i) {
    gdjs.MainSceneCode.GDoverlayObjects1[i].setColor("30;58;41");
}
}{runtimeScene.getScene().getVariables().getFromIndex(6).setBoolean(false);
}{for(var i = 0, len = gdjs.MainSceneCode.GDcardObjects1.length ;i < len;++i) {
    gdjs.MainSceneCode.GDcardObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.MainSceneCode.GDhighlight0Objects1.length ;i < len;++i) {
    gdjs.MainSceneCode.GDhighlight0Objects1[i].hide();
}
for(var i = 0, len = gdjs.MainSceneCode.GDhighlight1Objects1.length ;i < len;++i) {
    gdjs.MainSceneCode.GDhighlight1Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.MainSceneCode.GDhighlight0Objects1.length ;i < len;++i) {
    gdjs.MainSceneCode.GDhighlight0Objects1[i].getBehavior("Opacity").setOpacity(128);
}
for(var i = 0, len = gdjs.MainSceneCode.GDhighlight1Objects1.length ;i < len;++i) {
    gdjs.MainSceneCode.GDhighlight1Objects1[i].getBehavior("Opacity").setOpacity(128);
}
}{gdjs.evtTools.camera.showLayer(runtimeScene, "MessageLayer");
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "HUD");
}{for(var i = 0, len = gdjs.MainSceneCode.GDMessageObjects1.length ;i < len;++i) {
    gdjs.MainSceneCode.GDMessageObjects1[i].getBehavior("Text").setText("START");
}
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "assets/audio/music.wav", 0, true, 40, 0.4);
}{for(var i = 0, len = gdjs.MainSceneCode.GDSoundObjects1.length ;i < len;++i) {
    gdjs.MainSceneCode.GDSoundObjects1[i].getBehavior("Animation").pauseAnimation();
}
}{for(var i = 0, len = gdjs.MainSceneCode.GDSoundObjects1.length ;i < len;++i) {
    gdjs.MainSceneCode.GDSoundObjects1[i].setAnimationFrame(gdjs.MainSceneCode.GDSoundObjects1[i].getVariables().getFromIndex(0).getAsNumber());
}
}{for(var i = 0, len = gdjs.MainSceneCode.GDSchemeObjects1.length ;i < len;++i) {
    gdjs.MainSceneCode.GDSchemeObjects1[i].getBehavior("Animation").pauseAnimation();
}
}{for(var i = 0, len = gdjs.MainSceneCode.GDSchemeObjects1.length ;i < len;++i) {
    gdjs.MainSceneCode.GDSchemeObjects1[i].setAnimationFrame(gdjs.MainSceneCode.GDSchemeObjects1[i].getVariables().getFromIndex(0).getAsNumber());
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "settingsTimer");
}{runtimeScene.getScene().getVariables().getFromIndex(17).setNumber(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene));
}{for(var i = 0, len = gdjs.MainSceneCode.GDFullscreenObjects1.length ;i < len;++i) {
    gdjs.MainSceneCode.GDFullscreenObjects1[i].getBehavior("Animation").pauseAnimation();
}
}{for(var i = 0, len = gdjs.MainSceneCode.GDFullscreenObjects1.length ;i < len;++i) {
    gdjs.MainSceneCode.GDFullscreenObjects1[i].setAnimationFrame(1);
}
}
{ //Subevents
gdjs.MainSceneCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(18), true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9869036);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Scheme"), gdjs.MainSceneCode.GDSchemeObjects1);
{for(var i = 0, len = gdjs.MainSceneCode.GDSchemeObjects1.length ;i < len;++i) {
    gdjs.MainSceneCode.GDSchemeObjects1[i].activateBehavior("Anchor", false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(18), true, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Scheme"), gdjs.MainSceneCode.GDSchemeObjects1);
{for(var i = 0, len = gdjs.MainSceneCode.GDSchemeObjects1.length ;i < len;++i) {
    gdjs.MainSceneCode.GDSchemeObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - (gdjs.MainSceneCode.GDSchemeObjects1[i].getWidth()) - 8);
}
}}

}


{


gdjs.MainSceneCode.eventsList6(runtimeScene);
}


{


gdjs.MainSceneCode.eventsList12(runtimeScene);
}


{


gdjs.MainSceneCode.eventsList15(runtimeScene);
}


{


gdjs.MainSceneCode.eventsList16(runtimeScene);
}


{


gdjs.MainSceneCode.eventsList18(runtimeScene);
}


{


gdjs.MainSceneCode.eventsList19(runtimeScene);
}


{


gdjs.MainSceneCode.eventsList23(runtimeScene);
}


{


gdjs.MainSceneCode.eventsList26(runtimeScene);
}


{


gdjs.MainSceneCode.eventsList28(runtimeScene);
}


{


gdjs.MainSceneCode.eventsList31(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(17)) != gdjs.evtTools.window.getGameResolutionWidth(runtimeScene);
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(17).setNumber(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene));
}
{ //Subevents
gdjs.MainSceneCode.eventsList32(runtimeScene);} //End of subevents
}

}


};

gdjs.MainSceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MainSceneCode.GDbackgroundObjects1.length = 0;
gdjs.MainSceneCode.GDbackgroundObjects2.length = 0;
gdjs.MainSceneCode.GDbackgroundObjects3.length = 0;
gdjs.MainSceneCode.GDbackgroundObjects4.length = 0;
gdjs.MainSceneCode.GDbackgroundObjects5.length = 0;
gdjs.MainSceneCode.GDcardObjects1.length = 0;
gdjs.MainSceneCode.GDcardObjects2.length = 0;
gdjs.MainSceneCode.GDcardObjects3.length = 0;
gdjs.MainSceneCode.GDcardObjects4.length = 0;
gdjs.MainSceneCode.GDcardObjects5.length = 0;
gdjs.MainSceneCode.GDoverlayObjects1.length = 0;
gdjs.MainSceneCode.GDoverlayObjects2.length = 0;
gdjs.MainSceneCode.GDoverlayObjects3.length = 0;
gdjs.MainSceneCode.GDoverlayObjects4.length = 0;
gdjs.MainSceneCode.GDoverlayObjects5.length = 0;
gdjs.MainSceneCode.GDTimerObjects1.length = 0;
gdjs.MainSceneCode.GDTimerObjects2.length = 0;
gdjs.MainSceneCode.GDTimerObjects3.length = 0;
gdjs.MainSceneCode.GDTimerObjects4.length = 0;
gdjs.MainSceneCode.GDTimerObjects5.length = 0;
gdjs.MainSceneCode.GDTimerLabelObjects1.length = 0;
gdjs.MainSceneCode.GDTimerLabelObjects2.length = 0;
gdjs.MainSceneCode.GDTimerLabelObjects3.length = 0;
gdjs.MainSceneCode.GDTimerLabelObjects4.length = 0;
gdjs.MainSceneCode.GDTimerLabelObjects5.length = 0;
gdjs.MainSceneCode.GDRoundLabelObjects1.length = 0;
gdjs.MainSceneCode.GDRoundLabelObjects2.length = 0;
gdjs.MainSceneCode.GDRoundLabelObjects3.length = 0;
gdjs.MainSceneCode.GDRoundLabelObjects4.length = 0;
gdjs.MainSceneCode.GDRoundLabelObjects5.length = 0;
gdjs.MainSceneCode.GDRoundObjects1.length = 0;
gdjs.MainSceneCode.GDRoundObjects2.length = 0;
gdjs.MainSceneCode.GDRoundObjects3.length = 0;
gdjs.MainSceneCode.GDRoundObjects4.length = 0;
gdjs.MainSceneCode.GDRoundObjects5.length = 0;
gdjs.MainSceneCode.GDMessageObjects1.length = 0;
gdjs.MainSceneCode.GDMessageObjects2.length = 0;
gdjs.MainSceneCode.GDMessageObjects3.length = 0;
gdjs.MainSceneCode.GDMessageObjects4.length = 0;
gdjs.MainSceneCode.GDMessageObjects5.length = 0;
gdjs.MainSceneCode.GDcockroachObjects1.length = 0;
gdjs.MainSceneCode.GDcockroachObjects2.length = 0;
gdjs.MainSceneCode.GDcockroachObjects3.length = 0;
gdjs.MainSceneCode.GDcockroachObjects4.length = 0;
gdjs.MainSceneCode.GDcockroachObjects5.length = 0;
gdjs.MainSceneCode.GDspawnerLeftObjects1.length = 0;
gdjs.MainSceneCode.GDspawnerLeftObjects2.length = 0;
gdjs.MainSceneCode.GDspawnerLeftObjects3.length = 0;
gdjs.MainSceneCode.GDspawnerLeftObjects4.length = 0;
gdjs.MainSceneCode.GDspawnerLeftObjects5.length = 0;
gdjs.MainSceneCode.GDspawnerCenterObjects1.length = 0;
gdjs.MainSceneCode.GDspawnerCenterObjects2.length = 0;
gdjs.MainSceneCode.GDspawnerCenterObjects3.length = 0;
gdjs.MainSceneCode.GDspawnerCenterObjects4.length = 0;
gdjs.MainSceneCode.GDspawnerCenterObjects5.length = 0;
gdjs.MainSceneCode.GDspawnerRightObjects1.length = 0;
gdjs.MainSceneCode.GDspawnerRightObjects2.length = 0;
gdjs.MainSceneCode.GDspawnerRightObjects3.length = 0;
gdjs.MainSceneCode.GDspawnerRightObjects4.length = 0;
gdjs.MainSceneCode.GDspawnerRightObjects5.length = 0;
gdjs.MainSceneCode.GDSoundObjects1.length = 0;
gdjs.MainSceneCode.GDSoundObjects2.length = 0;
gdjs.MainSceneCode.GDSoundObjects3.length = 0;
gdjs.MainSceneCode.GDSoundObjects4.length = 0;
gdjs.MainSceneCode.GDSoundObjects5.length = 0;
gdjs.MainSceneCode.GDSchemeObjects1.length = 0;
gdjs.MainSceneCode.GDSchemeObjects2.length = 0;
gdjs.MainSceneCode.GDSchemeObjects3.length = 0;
gdjs.MainSceneCode.GDSchemeObjects4.length = 0;
gdjs.MainSceneCode.GDSchemeObjects5.length = 0;
gdjs.MainSceneCode.GDhighlight0Objects1.length = 0;
gdjs.MainSceneCode.GDhighlight0Objects2.length = 0;
gdjs.MainSceneCode.GDhighlight0Objects3.length = 0;
gdjs.MainSceneCode.GDhighlight0Objects4.length = 0;
gdjs.MainSceneCode.GDhighlight0Objects5.length = 0;
gdjs.MainSceneCode.GDhighlight1Objects1.length = 0;
gdjs.MainSceneCode.GDhighlight1Objects2.length = 0;
gdjs.MainSceneCode.GDhighlight1Objects3.length = 0;
gdjs.MainSceneCode.GDhighlight1Objects4.length = 0;
gdjs.MainSceneCode.GDhighlight1Objects5.length = 0;
gdjs.MainSceneCode.GDFullscreenObjects1.length = 0;
gdjs.MainSceneCode.GDFullscreenObjects2.length = 0;
gdjs.MainSceneCode.GDFullscreenObjects3.length = 0;
gdjs.MainSceneCode.GDFullscreenObjects4.length = 0;
gdjs.MainSceneCode.GDFullscreenObjects5.length = 0;

gdjs.MainSceneCode.eventsList33(runtimeScene);
gdjs.MainSceneCode.GDbackgroundObjects1.length = 0;
gdjs.MainSceneCode.GDbackgroundObjects2.length = 0;
gdjs.MainSceneCode.GDbackgroundObjects3.length = 0;
gdjs.MainSceneCode.GDbackgroundObjects4.length = 0;
gdjs.MainSceneCode.GDbackgroundObjects5.length = 0;
gdjs.MainSceneCode.GDcardObjects1.length = 0;
gdjs.MainSceneCode.GDcardObjects2.length = 0;
gdjs.MainSceneCode.GDcardObjects3.length = 0;
gdjs.MainSceneCode.GDcardObjects4.length = 0;
gdjs.MainSceneCode.GDcardObjects5.length = 0;
gdjs.MainSceneCode.GDoverlayObjects1.length = 0;
gdjs.MainSceneCode.GDoverlayObjects2.length = 0;
gdjs.MainSceneCode.GDoverlayObjects3.length = 0;
gdjs.MainSceneCode.GDoverlayObjects4.length = 0;
gdjs.MainSceneCode.GDoverlayObjects5.length = 0;
gdjs.MainSceneCode.GDTimerObjects1.length = 0;
gdjs.MainSceneCode.GDTimerObjects2.length = 0;
gdjs.MainSceneCode.GDTimerObjects3.length = 0;
gdjs.MainSceneCode.GDTimerObjects4.length = 0;
gdjs.MainSceneCode.GDTimerObjects5.length = 0;
gdjs.MainSceneCode.GDTimerLabelObjects1.length = 0;
gdjs.MainSceneCode.GDTimerLabelObjects2.length = 0;
gdjs.MainSceneCode.GDTimerLabelObjects3.length = 0;
gdjs.MainSceneCode.GDTimerLabelObjects4.length = 0;
gdjs.MainSceneCode.GDTimerLabelObjects5.length = 0;
gdjs.MainSceneCode.GDRoundLabelObjects1.length = 0;
gdjs.MainSceneCode.GDRoundLabelObjects2.length = 0;
gdjs.MainSceneCode.GDRoundLabelObjects3.length = 0;
gdjs.MainSceneCode.GDRoundLabelObjects4.length = 0;
gdjs.MainSceneCode.GDRoundLabelObjects5.length = 0;
gdjs.MainSceneCode.GDRoundObjects1.length = 0;
gdjs.MainSceneCode.GDRoundObjects2.length = 0;
gdjs.MainSceneCode.GDRoundObjects3.length = 0;
gdjs.MainSceneCode.GDRoundObjects4.length = 0;
gdjs.MainSceneCode.GDRoundObjects5.length = 0;
gdjs.MainSceneCode.GDMessageObjects1.length = 0;
gdjs.MainSceneCode.GDMessageObjects2.length = 0;
gdjs.MainSceneCode.GDMessageObjects3.length = 0;
gdjs.MainSceneCode.GDMessageObjects4.length = 0;
gdjs.MainSceneCode.GDMessageObjects5.length = 0;
gdjs.MainSceneCode.GDcockroachObjects1.length = 0;
gdjs.MainSceneCode.GDcockroachObjects2.length = 0;
gdjs.MainSceneCode.GDcockroachObjects3.length = 0;
gdjs.MainSceneCode.GDcockroachObjects4.length = 0;
gdjs.MainSceneCode.GDcockroachObjects5.length = 0;
gdjs.MainSceneCode.GDspawnerLeftObjects1.length = 0;
gdjs.MainSceneCode.GDspawnerLeftObjects2.length = 0;
gdjs.MainSceneCode.GDspawnerLeftObjects3.length = 0;
gdjs.MainSceneCode.GDspawnerLeftObjects4.length = 0;
gdjs.MainSceneCode.GDspawnerLeftObjects5.length = 0;
gdjs.MainSceneCode.GDspawnerCenterObjects1.length = 0;
gdjs.MainSceneCode.GDspawnerCenterObjects2.length = 0;
gdjs.MainSceneCode.GDspawnerCenterObjects3.length = 0;
gdjs.MainSceneCode.GDspawnerCenterObjects4.length = 0;
gdjs.MainSceneCode.GDspawnerCenterObjects5.length = 0;
gdjs.MainSceneCode.GDspawnerRightObjects1.length = 0;
gdjs.MainSceneCode.GDspawnerRightObjects2.length = 0;
gdjs.MainSceneCode.GDspawnerRightObjects3.length = 0;
gdjs.MainSceneCode.GDspawnerRightObjects4.length = 0;
gdjs.MainSceneCode.GDspawnerRightObjects5.length = 0;
gdjs.MainSceneCode.GDSoundObjects1.length = 0;
gdjs.MainSceneCode.GDSoundObjects2.length = 0;
gdjs.MainSceneCode.GDSoundObjects3.length = 0;
gdjs.MainSceneCode.GDSoundObjects4.length = 0;
gdjs.MainSceneCode.GDSoundObjects5.length = 0;
gdjs.MainSceneCode.GDSchemeObjects1.length = 0;
gdjs.MainSceneCode.GDSchemeObjects2.length = 0;
gdjs.MainSceneCode.GDSchemeObjects3.length = 0;
gdjs.MainSceneCode.GDSchemeObjects4.length = 0;
gdjs.MainSceneCode.GDSchemeObjects5.length = 0;
gdjs.MainSceneCode.GDhighlight0Objects1.length = 0;
gdjs.MainSceneCode.GDhighlight0Objects2.length = 0;
gdjs.MainSceneCode.GDhighlight0Objects3.length = 0;
gdjs.MainSceneCode.GDhighlight0Objects4.length = 0;
gdjs.MainSceneCode.GDhighlight0Objects5.length = 0;
gdjs.MainSceneCode.GDhighlight1Objects1.length = 0;
gdjs.MainSceneCode.GDhighlight1Objects2.length = 0;
gdjs.MainSceneCode.GDhighlight1Objects3.length = 0;
gdjs.MainSceneCode.GDhighlight1Objects4.length = 0;
gdjs.MainSceneCode.GDhighlight1Objects5.length = 0;
gdjs.MainSceneCode.GDFullscreenObjects1.length = 0;
gdjs.MainSceneCode.GDFullscreenObjects2.length = 0;
gdjs.MainSceneCode.GDFullscreenObjects3.length = 0;
gdjs.MainSceneCode.GDFullscreenObjects4.length = 0;
gdjs.MainSceneCode.GDFullscreenObjects5.length = 0;


return;

}

gdjs['MainSceneCode'] = gdjs.MainSceneCode;
