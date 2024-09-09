extends Node

const DEFAULT_HP = 3
var spawner_layer = null
var spawner = null
var player = preload("res://actors/Player/Player.tscn")
var player_instance
var hp = DEFAULT_HP
var alive = true
var hp_before = hp

func _ready():
    self.set_pause_mode(Node.PAUSE_MODE_PROCESS)

func _process(_delta):
    if hp <= 0:
        alive = false
    if hp != hp_before:
        HUD.update_hp_meter()
    hp_before = hp

func add_to_scene(scene):
    player_instance = player.instance()
    for node in scene.get_children():
        if node.get_name() == "SpawnerLayer":
            spawner_layer = node
    if spawner_layer != null:
        for node in spawner_layer.get_children():
            if node.get_name() == "Player":
                spawner = node
                spawner.hide()
    if spawner != null:
        scene.add_child_below_node(spawner_layer, player_instance)
        player_instance.position = spawner_layer.position + spawner.position
    else:
        scene.add_child(player_instance)
    player_instance.play_appear_anim()
