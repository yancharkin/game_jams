extends ColorRect

func _on_ButtonQuit_pressed():

	_Scene.goto_scene("res://menus/MainMenu/MainMenu.tscn")
	_Globals.game_over = false
	_Globals.score = 0
	_Player.hp = _Player.DEFAULT_HP
	_Player.alive = true
	hide()

func _on_ButtonRestart_pressed():

	_Scene.goto_scene("res://levels/Level_00/Level_00.tscn")
	_Globals.game_over = false
	_Globals.score = 0
	_Player.hp = _Player.DEFAULT_HP
	_Player.alive = true
	hide()
