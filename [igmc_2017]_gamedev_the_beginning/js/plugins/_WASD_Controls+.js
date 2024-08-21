/*=============================================================================
* _WASD_Controls+.js
*=============================================================================*/

/*:=============================================================================
* @plugindesc Redefined key map and few new keys to use.
* @author yancharkin
* @help
* Additional/redefined keys:
* + WASD - movement,
* + E, J - OK,
* + Q, K - Cancel/Escape,
* + R - pageup,
* + F - pagedown,
* + 0-9 - new keys with symbols: zero-nine. It's possible to use them in events
*   like this: Input.isTriggered('one')
* =============================================================================*/

'use strict';

Input.keyMapper[87] = 'up';    // W
Input.keyMapper[65] = 'left';  // A
Input.keyMapper[83] = 'down';  // S
Input.keyMapper[68] = 'right'; // D
Input.keyMapper[69] = 'ok'; // E
Input.keyMapper[81] = 'escape'; // Q
Input.keyMapper[74] = 'ok'; // J
Input.keyMapper[75] = 'escape'; // K
Input.keyMapper[82] = 'pageup';   // R
Input.keyMapper[70] = 'pagedown';   // F
Input.keyMapper[48] = 'zero'; // 0
Input.keyMapper[49] = 'one'; // 1
Input.keyMapper[50] = 'two'; // 2
Input.keyMapper[51] = 'three'; // 3
Input.keyMapper[52] = 'four'; // 4
Input.keyMapper[53] = 'five'; // 5
Input.keyMapper[54] = 'six'; // 6
Input.keyMapper[55] = 'seven'; // 7
Input.keyMapper[56] = 'eight'; // 8
Input.keyMapper[57] = 'nine'; // 9
