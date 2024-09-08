extends KinematicBody2D

var SPEED = 150
var direction = Vector2(0, 0)
var velocity = Vector2(0, 0)
var texture

var textures = [
        load("res://custom_nodes/Key/images/note_a.png"),
        load("res://custom_nodes/Key/images/note_ais.png"),
        load("res://custom_nodes/Key/images/note_b.png"),
        load("res://custom_nodes/Key/images/note_c.png"),
        load("res://custom_nodes/Key/images/note_cis.png"),
        load("res://custom_nodes/Key/images/note_d.png"),
        load("res://custom_nodes/Key/images/note_dis.png"),
        load("res://custom_nodes/Key/images/note_e.png"),
        load("res://custom_nodes/Key/images/note_f.png"),
        load("res://custom_nodes/Key/images/note_fis.png"),
        load("res://custom_nodes/Key/images/note_g.png"),
        load("res://custom_nodes/Key/images/note_gis.png")
]

func _ready():

    randomize()

    texture = textures[randi() % len(textures)]
    $Sprite.set_texture(texture)

    $Timer.emit_signal("timeout")

    if position.x > 3000 or position.y > 3000:
        position.x = randi() % 1000
        position.y = randi() % 1000

func _process(delta):

        velocity = direction * SPEED
        move_and_slide(velocity)

func _on_Timer_timeout():

    var x = randi() % 3 + (-1)
    var y = randi() % 3 + (-1)
    direction = Vector2(x, y).normalized()