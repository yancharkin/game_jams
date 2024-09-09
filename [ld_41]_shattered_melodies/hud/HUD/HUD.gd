extends CanvasLayer

var previous_scene = null
var scene_changed = false
var in_battle = false

func _ready():
    var return_value  = $Keyboard.connect("visibility_changed", self, "_on_menus_visibility_changed", [$Keyboard])
    return_value = $PauseMenu.connect("visibility_changed", self, "_on_menus_visibility_changed", [$PauseMenu])
    return_value = $GameOverScreen.connect("visibility_changed", self, "_on_menus_visibility_changed", [$GameOverScreen])
    if return_value != 0: print('ERROR: ', return_value)
    update_hp_meter()

func _process(_delta):
    if _Scene.current_scene != previous_scene:
        if _Scene.current_scene.name == "MainMenu":
            $PlayerStats.hide()
            $Flash.hide()
            $PauseButton.hide()
            $ButtonLang.show()
        else:
            $PlayerStats.show()
            $Flash.show()
            if OS.has_feature('mobile'):
                $PauseButton.show()
            $ButtonLang.hide()
    previous_scene = _Scene.current_scene

    if (!_Player.alive and !_Globals.game_over) or \
            ((_Globals.score == _Globals.enemies_n) and !_Globals.game_over):
        _Globals.game_over = true
        get_tree().paused = false
        $Keyboard.hide()
        HUD.in_battle = false
        $Timer.start()
        for child in $PlayerStats/HpMeterEnemy.get_children():
            child.queue_free()

    if not HUD.in_battle:
        $PlayerStats/ScoreContainer.show()

func hit():
    $Flash/Anim.play("hit")
    $Flash/Audio.play()

func hit_enemy():
    $Flash/Anim.play("hit_enemy")
    $Flash/Audio2.play()

func battle(enemy):
    in_battle = true
    $Keyboard.show()
    $PlayerStats/ScoreContainer.hide()
    get_tree().paused = true
    $Keyboard.play_melody(enemy)

func update_hp_meter():
    for child in $PlayerStats/HpMeter.get_children():
        child.queue_free()
    for _i in range(_Player.hp):
        var heart = TextureRect.new()
        heart.set_expand(true)
        heart.set_stretch_mode(5)
        heart.rect_min_size = Vector2(32, 32)
        var texture = preload("res://hud/PlayerStats/images/heart_large.png")
        heart.set_texture(texture)
        $PlayerStats/HpMeter.add_child(heart)

func update_enemy_hp_meter():
    for child in $PlayerStats/HpMeterEnemy.get_children():
        child.queue_free()
    var enemy_hp = $Keyboard.current_enemy.hp
    for _i in range(enemy_hp):
        var heart = TextureRect.new()
        heart.set_expand(true)
        heart.set_stretch_mode(5)
        heart.rect_min_size = Vector2(32, 32)
        var texture = preload("res://hud/PlayerStats/images/heart_enemy_large.png")
        heart.set_texture(texture)
        $PlayerStats/HpMeterEnemy.add_child(heart)

func _on_Timer_timeout():
    if _Globals.score == _Globals.enemies_n:
        $GameOverScreen/CenterContainer/VBoxContainer/Label.text = tr("VICTORY")
        get_tree().paused = true
    $GameOverScreen.show()
    _Config.leaderboard_update()

func _on_menus_visibility_changed(menu):
    if OS.has_feature('mobile'):
        $PauseButton.set_visible(!menu.visible)
    if _Globals.input_type != 'mouse':
        _Globals.toggle_cursor_visibility(menu.visible)

func _on_PauseButton_pressed():
    $PauseMenu.toggle_pause()

func _on_OnscreenControlsToggle_toggled(button_pressed):
    $OnscreenControls.set_visible(button_pressed)
