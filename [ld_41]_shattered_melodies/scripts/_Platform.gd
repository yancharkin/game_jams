extends Node

# Will scale game to this size in browser NOT(!) the same effect as in project settings
var default_web_width = 640
var default_web_height = 360

var fullscreen_state_before = false
var is_web_build = false

func _ready():
    var pause_menu_key = InputEventKey.new()
    if OS.has_feature("web"):
        is_web_build = true
        self.set_pause_mode(Node.PAUSE_MODE_PROCESS) # Enable game resizing even when paused
        OS.set_window_size(Vector2(default_web_width, default_web_height))
        #InputMap.action_erase_event("menu", menu_key)
        pause_menu_key.set_scancode(KEY_SPACE)
    else:
        pause_menu_key.set_scancode(KEY_ESCAPE)
    InputMap.action_add_event("menu", pause_menu_key)

func _process(_delta):
    if is_web_build: fit_browser_workarea()

func is_standalone_pwa():
    return JavaScript.eval('!window.matchMedia("(display-mode: browser)").matches')

func fit_browser_workarea():
    var fullscreen_state_now = JavaScript.eval("(window.fullScreen) || (window.innerWidth == screen.width && window.innerHeight == screen.height)")
    if fullscreen_state_now != fullscreen_state_before:
        if fullscreen_state_now == true:
            var screen_width = JavaScript.eval("screen.width")
            var screen_height = JavaScript.eval("screen.height")
            JavaScript.eval("document.documentElement.style.overflow = 'hidden'")
            JavaScript.eval("document.body.scroll = 'no'")
            OS.set_window_size(Vector2(screen_width, screen_height))
        else:
            JavaScript.eval("document.documentElement.style.overflow = 'auto'")
            JavaScript.eval("document.body.scroll = 'yes'")
            OS.set_window_size(Vector2(default_web_width, default_web_height))
    fullscreen_state_before = fullscreen_state_now
