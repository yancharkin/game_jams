extends KinematicBody2D

export var SPEED = 150
export var MELODY_LENGTH = 3
export (int) var hp = 1
export (String, "moving", "stationary") var type = "moving"
export (String, "bass", "flute", "ukulele") var INSTRUMENT = "ukulele"
var direction = Vector2(0, 0)
var velocity = Vector2(0, 0)
var collision = Vector2(0, 0)
var collision_prev = Vector2(0, 0)
var position_prev = null
var alive = true
var movement_type = "random"
var player
var riffs
var stream

func play_ode():
    $Audio.set_stream(riffs[2])
    $Audio.play()

func play_random_riff():
    stream = riffs[randi() % (len(riffs)-1)]
    $Audio.set_stream(stream)
    $Audio.play()

func _ready():
    randomize()
    riffs = [
        load("res://audio/sounds/" + INSTRUMENT + "/riff_00.wav"),
        load("res://audio/sounds/" + INSTRUMENT + "/riff_01.wav"),
        load("res://audio/sounds/" + INSTRUMENT + "/riff_02.wav")
    ]
    if type == "stationary":
        if randi() % 2 == 1:
            $AnimatedSprite.set_flip_h(true)
        else:
            $AnimatedSprite.set_flip_h(true)
    player = _Globals.get_object_by_name("Player", _Scene.current_scene)
    $Timer.start()
    $Timer.emit_signal("timeout")
    play_random_riff()

func _process(_delta):
    if not alive:
        $Audio.stop()

func _physics_process(_delta):
    if alive:
        var distance_vector = player.position - position
        var distance = distance_vector.length()
        if type == "moving":
            if distance <= 64 and _Player.alive:
                HUD.battle(self)
            elif distance < 300 and _Player.alive:
                movement_type = "follow"
                direction = distance_vector.normalized()
            else:
                movement_type = "random"

            if (-0.7 < direction.x) and (direction.x < 0.7):
                if direction.y < 0:
                    $AnimatedSprite.animation = "walk_up"
                if direction.y > 0:
                    $AnimatedSprite.animation = "walk_down"
            else:
                if direction.x < 0:
                    $AnimatedSprite.animation = "walk_left"
                if direction.x > 0:
                    $AnimatedSprite.animation = "walk_right"
            if position != position_prev:
                $AnimatedSprite.play()
            else:
                $AnimatedSprite.play("idle")
            position_prev = position
            velocity = direction * SPEED
            collision = move_and_slide(velocity)
            if movement_type == "random":
                if collision != collision_prev:
                    $Timer.emit_signal("timeout")
                collision_prev = collision
        else:
            $AnimatedSprite.play("idle")
            if distance <= 64 and _Player.alive:
                HUD.battle(self)
    else:
        $AnimatedSprite.play("dying")
        $CollisionShape2D.set_disabled(true)
        $CollisionShape2D.set("rotation_degrees", 90)
        set_physics_process(false)

func _on_Timer_timeout():
    if movement_type == "random":
        var x = randi() % 3 + (-1)
        var y = randi() % 3 + (-1)
        direction = Vector2(x, y).normalized()

func _on_Audio_finished():
    if alive:
        if not _Globals.game_over:
            play_random_riff()
        else:
            play_ode()
            #type = "stationary"
