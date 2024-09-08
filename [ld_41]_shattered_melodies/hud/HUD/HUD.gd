extends CanvasLayer

var previous_scene = null
var scene_changed = false
var in_battle = false

func _ready():

	update_hp_meter()

func _process(delta):

	if previous_scene != _Scene.current_scene: update_cursor()

	if _Scene.current_scene.name == "MainMenu":
		$PlayerStats.hide()
		$Flash.hide()
		$ButtonLang.show()
	else:
		$PlayerStats.show()
		$Flash.show()
		$ButtonLang.hide()

	if (not _Player.alive) and (not _Globals.game_over):
		_Globals.game_over = true
		get_tree().paused = false
		$Keyboard.hide()
		HUD.in_battle = false
		$Timer.start()
		for child in $PlayerStats/HpMeterEnemy.get_children():
			child.queue_free()

	previous_scene = _Scene.current_scene

func hit():
	$Flash/Anim.play("hit")
	$Flash/Audio.play()

func hit_enemy():
	$Flash/Anim.play("hit_enemy")
	$Flash/Audio.play()

func battle(enemy):

	in_battle = true

	$Keyboard.show()

	get_tree().paused = true
	Input.set_mouse_mode(Input.MOUSE_MODE_VISIBLE)

	$Keyboard.play_melody(enemy)

func update_cursor():

		if "Level" in _Scene.current_scene.get_name():
			if $GameOverScreen.is_visible_in_tree() or \
					$PauseMenu.is_visible_in_tree():
				Input.set_mouse_mode(Input.MOUSE_MODE_VISIBLE)
			else:
				if not OS.has_feature("web"):
					Input.set_mouse_mode(Input.MOUSE_MODE_CAPTURED)
				else:
					JavaScript.eval("document.getElementById('canvas').style.cursor = 'none'")
		else:
			Input.set_mouse_mode(Input.MOUSE_MODE_VISIBLE)

func update_hp_meter():

	for child in $PlayerStats/HpMeter.get_children():
		child.queue_free()

	for i in range(_Player.hp):
		var heart = TextureRect.new()
		heart.set_expand(true)
		heart.set_stretch_mode(5)
		heart.rect_min_size = Vector2(48, 48)
		var texture = preload("res://hud/PlayerStats/images/heart_large.png")
		heart.set_texture(texture)
		$PlayerStats/HpMeter.add_child(heart)


func update_enemy_hp_meter():

	for child in $PlayerStats/HpMeterEnemy.get_children():
		child.queue_free()

	var enemy_hp = $Keyboard.current_enemy.hp

	for i in range(enemy_hp):
		var heart = TextureRect.new()
		heart.set_expand(true)
		heart.set_stretch_mode(5)
		heart.rect_min_size = Vector2(48, 48)
		var texture = preload("res://hud/PlayerStats/images/heart_enemy_large.png")
		heart.set_texture(texture)
		$PlayerStats/HpMeterEnemy.add_child(heart)

func _on_Timer_timeout():

	$GameOverScreen.show()
	_Config.leaderboard_update()

func _on_menus_visibility_changed():

	update_cursor()
