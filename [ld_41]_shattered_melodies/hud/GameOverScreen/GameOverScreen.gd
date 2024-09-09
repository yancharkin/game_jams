extends ColorRect

func _on_ButtonQuit_pressed():
    _Scene.goto_scene("res://menus/MainMenu/MainMenu.tscn")
    hide()

func _on_ButtonRestart_pressed():
    _Scene.goto_scene("res://levels/Level_00/Level_00.tscn")
    hide()
