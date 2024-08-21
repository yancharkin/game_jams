//=============================================================================
// Follower Control
// by Tyruswoo
//
// Be sure to save as:
// TYR_FollowerControl.js
//=============================================================================

var Imported = Imported || {};
Imported.TYR_FollowerControl = true;

var Tyruswoo = Tyruswoo || {};
Tyruswoo.FollowerControl = Tyruswoo.FollowerControl || {};

/*:
 * @plugindesc v1.04  Allows greater control of party follower movement, balloon icons, animations, and transfers.
 * @author Tyruswoo
 *
 * @help
 * Follower Control
 * by Tyruswoo
 * Last Update:  20 Jan. 2016
 * ===========================================================================
 * Terms of Use:
 *   This plugin is free to use in both commercial and non-commercial games.
 *   However, in your credits, include "Tyruswoo", and please also send me
 *   a free copy of your game!  :)
 *     ~Tyruswoo
 * ===========================================================================
 * Follow me for more RPG Maker MV content and tutorials!
 *
 * Tyruswoo RPG Maker on YouTube:
 *   https://www.youtube.com/channel/UCEJBC5FIHEe2a81yk6KEA1g
 * ===========================================================================
 * Tyruswoo's Follower Control plugin allows greater control of party
 * follower movement.  It allows using these commands on any follower:
 *    - Set Move Route
 *    - Show Balloon Icon
 *    - Show Animation
 *    - Transfer Player
 * Now you can easily make cool cutscenes involving the party's followers
 * and leader!
 * ===========================================================================
 * Plugin commands in brief:
 *      Follower 0     // * Target the leader (for Set Move Route of player).
 *      Follower 1     // * Target follower 1 (for Set Move Route of player).
 *      Follower 2     // * Etc.  Works for any number of followers.
 *      Follower StopChase     // * Followers stop chasing the leader.
 *      Follower Chase         // * Followers chase the leader again.
 *
 * For best results, use the above Plugin Commands in combination with the
 * Set Move Route command.  Make cool cutscenes!  :)
 * ===========================================================================
 * Example of how to use this plugin:
 *
 * Here is an example of using the Plugin Commands,
 * combined with the Set Move Route command.
 * Use the following commands within an event:
 *
 * Plugin Command: Follower StopChase  // * This changes follower behavior.
 *                                     //   They no longer follow the leader.
 * Plugin Command: Follower 1      // * This makes the Set Move Route command
 *                                 //   target Follower 1 instead of the leader.
 * (Now Set Move Route of player.) // * Instead of the party leader, follower 1
 *                                 //   will move independently.
 * Plugin Command: Follower 0      // * This resets how Set Move Route works.
 *                                 //   Now it will target the leader again.
 * (Now Set Move Route of player.) // * The party leader will move, but the
 *                                 //   followers will not chase the leader,
 *                                 //   since we used "Follower StopChase".
 * Plugin Command: Follower Chase  // * Resets follower behavior, so they
 *                                 //   chase the leader again.
 * ===========================================================================
 * Details of Plugin Commands to target a follower instead of the leader
 * for Set Move Route, Show Balloon Icon, Show Animation, or Transfer Player
 * commands.
 *
 * Example:
 *      Follower 1
 * The plugin command "Follower 1" will make all future Set Move Route commands
 * affect the first follower, i.e. the character following the party leader.
 * This effect will continue until resetting by using the following
 * plugin command:
 *      Follower 0
 * The plugin command "Follower 0" causes default behavior of all Move Route
 * event commands affecting the party leader.
 *
 * Important: Make sure you use plugin command "Follower 0" to reset, so
 * that future Set Move Route commands will affect the party leader!
 *
 * Number Codes:
 *
 * 0 = Leader
 * 1 = First Follower
 * 2 = Second Follower
 * 3 = Third Follower
 * 4 = Fourth Follower
 * 5 = Fifth Follower
 * And so on for an infinite number of followers, if present.
 *
 * If the selected follower is not present (i.e. the party is too small, and
 * that follower spot is not filled), then commands sent to that follower number
 * will have no effect.
 *
 * Notes on Transfer Player:
 * - No matter the follower/leader targeted, using a Transfer Player to go to
 *   a new map will always rejoin the party, making the followers chase the
 *   leader again, and setting the leader as the target (same as using
 *   Plugin Command "Follower 0").
 * - If transferring to the current map, then the targetted follower determines
 *   the effect of Transfer Player:
 *      > If the leader is targeted (Follower 0), then we check whether
 *        followers are chasing.
 *           >> If they are chasing, then we perform a Transfer Player type
 *              function, bringing the party together and performing the
 *              chosen fade.
 *           >> If the followers are not chasing, then the leader is
 *              teleported without affecting the followers' positions.
 *      > If a follower is targeted, then the follower is teleported
 *        without affecting the other followers' or leader's position.
 *
 * Tip:  If you want to transfer the followers and leader all independently
 *       during a cutscene, then be sure to use Plugin Command "Follower
 *       StopChase".  That way, transfers of the leader within the same map
 *       will no longer affect the followers, allowing for better cutscenes.
 *       (Note that this also works with TYR_CameraControl, allowing for
 *       the camera to stay focused on the correct camera target.)
 * ===========================================================================
 * Details of Plugin Commands to make followers stop and start following:
 *
 * Follower Chase
 *      Makes all followers chase the leader and each other.  This is the
 *      default behavior of followers.
 *
 * Follower StopChase
 *      Makes all followers stop chasing the leader and each other.  This
 *      is useful for cutscenes in which the party leader moves around
 *      alone, allowing followers and leader to all move independently.
 * ===========================================================================
 * Synonyms:  Here are a few alternate ways to write the same plugin command:
 *
 * For the term "Follower", you may type any of these:
 *      Follower       follower       FOLLOWER
 *      Follow         follow         Follow
 *
 * For the term "Chase", you may type any of these:
 *      Chase          chase          CHASE
 *      Chase True     chase true     CHASE TRUE
 *      Chase Start    chase start    CHASE START
 *
 * For the term "StopChase", you may type any of these:
 *      StopChase      stopchase      STOPCHASE
 *      stopChase      Stopchase
 *      Chase False    chase false    CHASE FALSE
 *      Chase Stop     chase stop     CHASE STOP
 * ===========================================================================
 * v1.00  January 17, 2016:
 *        Created the plugin and added the following features:
 *        - Plugin command "Follower" to select followers.
 *        - Set Move Route effect on followers.
 *        - Plugin commands "StopChase" and "Chase" to control followers
 *          chasing the leader.
 *
 * v1.01  January 19, 2016:
 *        Added the following features:
 *        - Show Balloon Icon for followers.
 *        - Show Animation for followers.
 *        - Transfer Player for followers.
 *
 * v1.02  January 19, 2016:
 *        Worked on fixing a bug.  However, errors still occured.  See below.
 *
 * v1.03  January 20, 2016:
 *        Fixed the bug found on January 19th.
 *        - Previously, the "Follower" plugin command had to be used prior to
 *          ever using Set Move Route or other featured commands in your game;
 *          If the "Follower" plugin command was not used first, the game would
 *          freeze.  Now, the plugin no longer requires this!  If you never
 *          use a "Follower" plugin command, your game will function as it
 *          would by default, without errors.
 *
 * v1.04  January 20, 2016:
 *        Added feature:
 *        - If a follower is on the same tile as the leader, and then
 *          Set Move Route is used to "Turn toward Player", then the
 *          follower will now turn to face the same direction as the leader!
 *          So, by using the Gather Followers event command, then using
 *          Set Move Route "Turn toward Player", it is possible to make
 *          followers be in a predictable position (right where the leader is),
 *          from whence the followers can then be sent out in a pre-prepared
 *          formation.  This allows for ease of creating Common Events for
 *          for your various formations of follower movement!
 *
 */

//=============================================================================
// Game_Interpreter
//=============================================================================

// Alias method.
Tyruswoo.FollowerControl.Game_interpreter_clear = Game_Interpreter.prototype.clear
Game_Interpreter.prototype.clear = function() {
	Tyruswoo.FollowerControl.Game_interpreter_clear.call(this);
    this._follower = $gamePlayer;
};

// Replacement method
// Transfer Player
Game_Interpreter.prototype.command201 = function() {
    if (!$gameParty.inBattle() && !$gameMessage.isBusy()) {
        var mapId, x, y;
        if (this._params[0] === 0) {  // Direct designation
            mapId = this._params[1];
            x = this._params[2];
            y = this._params[3];
        } else {  // Designation with variables
            mapId = $gameVariables.value(this._params[1]);
            x = $gameVariables.value(this._params[2]);
            y = $gameVariables.value(this._params[3]);
        }
		if (mapId !== $gameMap._mapId) {  //Transfer the leader, with followers.
			$gamePlayer._followers._stopChase = false;  //If player goes to a new map, followers will resume chase.
			this._follower = $gamePlayer;  //If player goes to a new map, reset target follower to the leader.
			$gamePlayer.reserveTransfer(mapId, x, y, this._params[4], this._params[5]);
			this.setWaitMode('transfer');
		} else if (this._follower === $gamePlayer) {
			if (!$gamePlayer._followers._stopChase) { //Followers are chasing the leader, so transfer leader with followers.
				$gamePlayer.reserveTransfer(mapId, x, y, this._params[4], this._params[5]);
				this.setWaitMode('transfer');
			} else { //Followers are not chasing the leader, so simply teleport the leader within the map, like any other follower.
				Game_Character.prototype.locate.call($gamePlayer, x, y);
				if (Imported.TYR_CameraControl) {
					if ($gameMap._camFollow === 'player') {
						$gamePlayer.center(x, y);
					}
				} else {
					$gamePlayer.center(x, y);
				}
				$gamePlayer.makeEncounterCount();
				if ($gamePlayer.isInVehicle()) {
					$gamePlayer.vehicle().refresh();
				}
			}
		} else {  //Transfer a follower.
			this._follower.locate(x, y);
			if (this._params[4] > 0) { // Set follower direction
				var d = this._params[4];
				if (!this._follower.isDirectionFixed() && d) {
					this._follower._direction = d;
				}
			}
		}
		this._index++;	
    }
    return false;
};

// Replacement method
// Set Movement Route
Game_Interpreter.prototype.command205 = function() {
    $gameMap.refreshIfNeeded();
    this._character = this.character(this._params[0]);
	if (this._character === $gamePlayer) {
		this._character = this._follower;
	}
    if (this._character) {
        this._character.forceMoveRoute(this._params[1]);
        if (this._params[1].wait) {
            this.setWaitMode('route');
        }
    }
    return true;
};

// Replacement method
// Show Balloon Icon
Game_Interpreter.prototype.command213 = function() {
    this._character = this.character(this._params[0]);
	if (this._character === $gamePlayer) {
		this._character = this._follower;
	}
    if (this._character) {
        this._character.requestBalloon(this._params[1]);
        if (this._params[2]) {
            this.setWaitMode('balloon');
        }
    }
    return true;
};

// Replacement method
// Show Animation
Game_Interpreter.prototype.command212 = function() {
    this._character = this.character(this._params[0]);
	if (this._character === $gamePlayer) {
		this._character = this._follower;
	}
    if (this._character) {
        this._character.requestAnimation(this._params[1]);
        if (this._params[2]) {
            this.setWaitMode('animation');
        }
    }
    return true;
};

// Alias method
Tyruswoo.FollowerControl.Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args) {
    Tyruswoo.FollowerControl.Game_Interpreter_pluginCommand.call(this, command, args);
    if (command === 'Follower' || command === 'follower' || command === 'FOLLOWER' ||
	    command === 'Follow' || command === 'follow' || command === 'FOLLOW') {
		switch (args[0]) {
			case 'Chase':
			case 'chase':
			case 'CHASE':
				if (args[1] === 'false' || args[1] === 'False' || args[1] === 'FALSE' ||
				    args[1] === 'stop' || args[1] === 'Stop' || args[1] === 'STOP') {
					$gamePlayer._followers._stopChase = true;
					console.log("Follower Chase false:  Followers no longer chase the leader.");
				} else {
					$gamePlayer._followers._stopChase = false;
					console.log("Follower Chase:  Followers now chase the leader.");
				}
				break;
			case 'StopChase':
			case 'stopChase':
			case 'Stopchase':
			case 'stopchase':
			case 'STOPCHASE':
				$gamePlayer._followers._stopChase = true;
				console.log("Follower StopChase:  Followers no longer chase the leader.");
				break;
			default:
				var follower_position = parseInt(args[0]);
				if (follower_position > 0) {
					this._follower = $gamePlayer.followers().follower(follower_position - 1);
					console.log("Follower:  Move Route commands now affect Follower", follower_position);
				} else {
					this._follower = $gamePlayer;
					console.log("Follower:  Move Route commands now affect the party Leader.");
				}
		}
	}
};

//=============================================================================
// Game_Followers
//=============================================================================

// Alias method
Tyruswoo.FollowerControl.Game_Followers_initialize = Game_Followers.prototype.initialize;
Game_Followers.prototype.initialize = function() {
	Tyruswoo.FollowerControl.Game_Followers_initialize.call(this);
    this._stopChase = false;
	this._follower = $gamePlayer;
};

// Replacement method
Game_Followers.prototype.updateMove = function() {
	if (!this._stopChase) {
		for (var i = this._data.length - 1; i >= 0; i--) {
			var precedingCharacter = (i > 0 ? this._data[i - 1] : $gamePlayer);
			this._data[i].chaseCharacter(precedingCharacter);
		}
	}
};

//=============================================================================
// Game_Character
//=============================================================================

// Replacement method
Game_Character.prototype.turnTowardCharacter = function(character) {
    var sx = this.deltaXFrom(character.x);
    var sy = this.deltaYFrom(character.y);
	if (sx === 0 && sy === 0) {
		this.setDirection($gamePlayer.direction());
	} else if (Math.abs(sx) > Math.abs(sy)) {
        this.setDirection(sx > 0 ? 4 : 6);
    } else if (sy !== 0) {
        this.setDirection(sy > 0 ? 8 : 2);
    }
};