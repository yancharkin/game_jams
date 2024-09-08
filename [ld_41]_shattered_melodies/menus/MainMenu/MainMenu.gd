extends Control

var dot = preload("res://menus/MainMenu/Dot.tscn")

func _ready():

    if OS.has_feature("web"):
        $CenterContainer/VBox/HBoxButtons/ButtonQuit.hide()

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

    for i in range(500):
        var dot_instance = dot.instance()
        dot_instance.position.x = randi() % 1000
        dot_instance.position.y = randi() % 1000
        $Background2.add_child(dot_instance)

func _process(delta):

    var bg_size = $CenterContainer/VBox.get_size() + Vector2(32, 32)
    var bg_pos = $CenterContainer/VBox.rect_position - Vector2(16, 16)
    $Background.set_size(bg_size)
    $Background.rect_position = bg_pos

func _on_ButtonStart_pressed():

    _Scene.goto_scene("res://levels/Level_00/Level_00.tscn")
    _Config.player_name = $CenterContainer/VBox/HBoxName/NameInput.get_text()
    _Config.config_save()

func _on_ButtonQuit_pressed():

    get_tree().quit()
