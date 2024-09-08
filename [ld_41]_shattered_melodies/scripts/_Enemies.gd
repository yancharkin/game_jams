extends Node

var enemies = [
		preload("res://actors/Enemy/Enemy_v1.tscn"),
		preload("res://actors/Enemy/Enemy_v2.tscn"),
		preload("res://actors/Enemy/Enemy_v3.tscn"),
		preload("res://actors/Enemy/Enemy_v4.tscn")
]

func add_to_scene(scene):

	randomize()

	var spawner_layer

	for node in scene.get_children():
		if node.get_name() == "SpawnerLayer":
			spawner_layer = node

	if spawner_layer != null:

		for node in spawner_layer.get_children():
			if  "Enemy" in node.get_name():
				node.hide()
				var enemy = enemies[randi() % len(enemies)]
				var enemy_instance = enemy.instance()
				scene.add_child_below_node(spawner_layer, enemy_instance)
				enemy_instance.position = spawner_layer.position + node.position
