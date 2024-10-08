extends Control

var paused = false

func _process(_delta):
    if (Input.is_action_just_pressed("menu") \
            or (Input.is_action_just_pressed("RMB") and _Globals.input_type == 'mouse')) \
            and _Scene.current_scene.name != "MainMenu" \
            and _Globals.game_over == false \
            and not HUD.in_battle:
        toggle_pause()

func toggle_pause():
    if paused == false:
        self.show()
        get_tree().paused = true
        paused = true
    else:
        self.hide()
        get_tree().paused = false
        paused = false

func _on_ButtonResume_pressed():
    toggle_pause()

func _on_ButtonMainMenu_pressed():
    _Globals.score = 0
    _Scene.goto_scene("res://menus//MainMenu/MainMenu.tscn")
    toggle_pause()
