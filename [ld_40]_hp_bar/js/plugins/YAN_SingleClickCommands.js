/*=============================================================================
* YAN_SingleClickCommands
*=============================================================================*/

/*:=============================================================================
* @plugindesc Part of TDDP_MouseSystemEx.js by Tor Damian Design / Galenmereth.
* Execute menu commands immediately without selecting them first.
* @author Tor Damian Design / Galenmereth
*
* @param mobile
* @desc Enable on mobile (buggy)
* @type boolean
* @on ON
* @off OFF
* @default false
*
* @param desktop
* @desc Enable on desktop
* @type boolean
* @on ON
* @off OFF
* @default true
*
* =============================================================================*/

var parameters = PluginManager.parameters('YAN_SingleClickCommands');
var mobile = (parameters['mobile'] === 'true');
var desktop = (parameters['desktop'] === 'true');

if ((!Utils.isMobileDevice() && desktop) || (Utils.isMobileDevice() && mobile)) {
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // START - Highlight On Hover option
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    //=========================================================================
    // TouchInput modifications
    //=========================================================================
    /**
    * Removing the check for whether _mousePressed is active to facilitate hover events
    */
    TouchInput._onMouseMove = function(event) {
        var x = Graphics.pageToCanvasX(event.pageX);
        var y = Graphics.pageToCanvasY(event.pageY);
        this._onMove(x, y);
    };
    //=========================================================================
    // Window_Selectable modifications
    //=========================================================================
    /**
    * Aliased update function, adds processMouseMoved() call
    */
    var _Window_Selectable_update = Window_Selectable.prototype.update;
    Window_Selectable.prototype.update = function() {
        this.processMouseMoved();
        _Window_Selectable_update.call(this);
    };
    /**
    * Check if conditions are right for calling onTouch when using mouse movement (for hover activation)
    */
    Window_Selectable.prototype.processMouseMoved = function() {
        if (this.isOpenAndActive() && TouchInput.isMoved() && this.cursorIsWithinWindow()) {
            this.onTouch(false);
        }
    };
    /**
    * Check if cursor is within window
    */
    Window_Selectable.prototype.cursorIsWithinWindow = function() {
        var _x = this.canvasToLocalX(TouchInput.x);
        var _y = this.canvasToLocalY(TouchInput.y);
        if (_x > this.padding && _x <= this.width - this.padding) {
            if (_y > this.padding && _y < this.height - this.padding) {
                return true;
            }
        }
        return false;
    }

    //=============================================================================
    // SoundManager modifications
    //=============================================================================
    /*
    * Static var to keep track of last played cursor SE frame
    */
    SoundManager._lastPlayCursorFrame = 0;
    /**
    * Aliased function to add check for whether playCursor should play, based on cooldown setting
    */
    var _SoundManager_playCursor = SoundManager.playCursor;
    SoundManager.playCursor = function() {
        var _canPlay = SoundManager._lastPlayCursorFrame > Graphics.frameCount
            || Graphics.frameCount > SoundManager._lastPlayCursorFrame + 4;

        if (_canPlay) {
            _SoundManager_playCursor.call(this);
            SoundManager._lastPlayCursorFrame = Graphics.frameCount;
        }
    };
}
