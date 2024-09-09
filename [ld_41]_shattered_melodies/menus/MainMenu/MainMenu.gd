extends Control

var tracks = [
    preload("res://audio/music/music.ogg"),
    preload("res://audio/music/ode_to_joy.ogg"),
    preload("res://audio/music/ode_to_joy_chiptune.ogg")
]

func _ready():
    get_tree().paused = false
    var return_value = self.connect("visibility_changed", self, "_on_visibility_changed", [self])
    if return_value != 0: print('ERROR: ', return_value)
    if OS.has_feature("web") or OS.has_feature("mobile"):
        if !_Platform.is_standalone_pwa():
            $CenterContainer/VBox/HBoxButtons/ButtonQuit.hide()
    if OS.has_feature("mobile"):
        $CenterContainer/VBox.move_child($CenterContainer/VBox/HBoxName, 0)
        $CenterContainer/VBox/VBoxLeaderboard/LabelLeaderboard.hide()

    var random_n = randi() % 13
    if random_n == 7:
        $Music.set_stream(tracks[2])
    elif random_n == 3 or random_n == 5:
        $Music.set_stream(tracks[1])
    else:
        $Music.set_stream(tracks[0])
    $Music.play()

    $CenterContainer/VBox/HBoxName/NameInput.text = _Config.player_name

    var lb = _Config.leaderboard
    var grid_lb = $CenterContainer/VBox/VBoxLeaderboard/Leaderboard

    if len(lb) == 0:
        $CenterContainer/VBox/VBoxLeaderboard.hide()
    else:
        for i in range(len(lb)):
            var p_number = Label.new()
            var p_name = Label.new()
            var p_result = Label.new()
            p_name.set_h_size_flags(SIZE_EXPAND_FILL)
            p_result.set_h_size_flags(SIZE_FILL)
            p_result.set_align(HALIGN_RIGHT)
            p_number.set_text(str(i+1) + ".")
            p_name.set_text(lb[i][0])
            p_result.set_text(str(lb[i][1]))
            grid_lb.add_child(p_number)
            grid_lb.add_child(p_name)
            grid_lb.add_child(p_result)

    $"ParallaxBackground/Thunder&Lightning/AnimationPlayer".play("lightning")

func _process(_delta):
    var bg_size = $CenterContainer/VBox.get_size() + Vector2(32, 32)
    var bg_pos = $CenterContainer/VBox.rect_position - Vector2(16, 16)
    $Background.set_size(bg_size)
    $Background.rect_position = bg_pos

func _on_ButtonStart_pressed():
    _Globals.game_over = false
    _Globals.score = 0
    _Player.hp = _Player.DEFAULT_HP
    _Player.alive = true
    _Scene.goto_scene("res://levels/Level_00/Level_00.tscn")
    _Config.player_name = $CenterContainer/VBox/HBoxName/NameInput.get_text()
    _Config.config_save()

func _on_ButtonQuit_pressed():
    get_tree().quit()
    if OS.has_feature("web"): JavaScript.eval("window.close()")

func _on_visibility_changed(menu):
    _Globals.toggle_cursor_visibility(menu.visible)
