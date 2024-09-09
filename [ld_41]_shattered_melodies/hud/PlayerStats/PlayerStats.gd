extends HBoxContainer

func _process(_delta):
    $ScoreContainer/Score.set_text("x" + str(_Globals.score))
