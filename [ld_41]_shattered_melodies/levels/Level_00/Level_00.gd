extends Node

func _ready():

	_Player.add_to_scene(self)

	_Camera.create($BorderLeft.position.x, $BorderRight.position.x,
			$BorderTop.position.y, $BorderBottom.position.y, "Player")

	_Enemies.add_to_scene(self)