/*=============================================================================
* YAN_SetRenderer
*=============================================================================*/

/*:=============================================================================
* @plugindesc Set renderer (for e.g., to fix lines between tiles on mobile).
* @author yancharkin
*
* @param mobile
* @desc Renderer for mobile
* @type select
* @option auto
* @option webgl
* @option canvas
* @default auto
*
* @param desktop
* @desc Renderer for desktop
* @type select
* @option auto
* @option webgl
* @option canvas
* @default auto
*
* =============================================================================*/

var parameters = PluginManager.parameters('YAN_SetRenderer');
var mobile = String(parameters['mobile']) || 'auto';
var desktop = String(parameters['desktop']) || 'auto';

if (Utils.isMobileDevice()) {
    switch (mobile) {
        case 'webgl':
            SceneManager.preferableRendererType = function() {
                return 'webgl';
            };
            break;
        case 'canvas':
            SceneManager.preferableRendererType = function() {
                return 'canvas';
            };
            break;
        default:
            SceneManager.preferableRendererType = function() {
                return 'auto';
            };
    }
} else {
    switch (desktop) {
        case 'webgl':
            SceneManager.preferableRendererType = function() {
                return 'webgl';
            };
            break;
        case 'canvas':
            SceneManager.preferableRendererType = function() {
                return 'canvas';
            };
            break;
        default:
            SceneManager.preferableRendererType = function() {
                return 'auto';
            };
    }
};
