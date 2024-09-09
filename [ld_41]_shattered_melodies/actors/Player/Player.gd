extends KinematicBody2D

export var BASE_SPEED = 150
export var MAX_SPEED = 300 #500
export var ACCELERATION_TIME = 200 #300
var direction = Vector2()
var velocity = Vector2()
var acceleration = 0
var is_moving = false
var is_running = false
var steps_sound = null
var moving_speed = BASE_SPEED
var mouse_run = false
var target_mouse
var lmb_pressed
var collision

func _process(_delta):
    if not _Player.alive:
        $AnimatedSprite.animation = "dead"
        $CollisionShape2D.set("rotation_degrees", 90)

func _input(event):
    if event is InputEventMouseButton:
        _Globals.input_type = 'mouse'
        _Globals.toggle_cursor_visibility(true)
        $AnimatedSprite.stop()
        if event.button_index == BUTTON_LEFT and event.pressed:
            lmb_pressed = true
        else:
            lmb_pressed = false
    if event is InputEventKey:
        _Globals.input_type = 'keyboard'
        target_mouse = null
        mouse_run = false
        _Globals.toggle_cursor_visibility(false)

func _physics_process(delta):
    if _Player.alive:
        if !collision:
            if _Globals.input_type == 'mouse':
                movement_mouse(delta)
            else:
                movement(delta)
        else:
            velocity = -1*velocity.normalized()
            collision = move_and_collide(velocity*delta)
            target_mouse = null
            is_moving = false
            acceleration = 0
            $AnimatedSprite.stop()

func set_moving_speed(delta):
    if Input.is_action_just_pressed("run") or !is_moving:
        acceleration = 0
    if (Input.is_action_pressed("run") and is_moving) or (is_moving and mouse_run):
        acceleration += (acceleration + ACCELERATION_TIME) * delta
        moving_speed = BASE_SPEED + acceleration
        moving_speed = clamp(moving_speed, 0, MAX_SPEED)
        is_running = true
    else:
        moving_speed = BASE_SPEED
        is_running = false

func set_animation():
    if direction.y > 0:
        if is_running:
            $AnimatedSprite.animation = "run_down"
        else:
            $AnimatedSprite.animation = "walk_down"
    elif direction.y < 0:
        if is_running:
            $AnimatedSprite.animation = "run_up"
        else:
            $AnimatedSprite.animation = "walk_up"

    elif direction.x < 0:
        if is_running:
            $AnimatedSprite.animation = "run_left"
        else:
            $AnimatedSprite.animation = "walk_left"
    elif direction.x > 0:
        if is_running:
            $AnimatedSprite.animation = "run_right"
        else:
            $AnimatedSprite.animation = "walk_right"

func movement_mouse(delta):
    if lmb_pressed:
        target_mouse = get_global_mouse_position()
        if target_mouse.y > position.y:
            direction.y = 1
        elif target_mouse.y < position.y:
            direction.y = -1
        if target_mouse.x > position.x:
            direction.x = 1
        elif target_mouse.x < position.x:
            direction.x = -1
        var new_target_mouse = get_global_mouse_position() + Vector2(-12*direction.x,-32)
        var diff_x = abs(position.x - target_mouse.x)
        var diff_y = abs(position.y - target_mouse.y)
        if  diff_x > diff_y: direction.y = 0
        target_mouse = new_target_mouse
        if diff_x > 128 or diff_y > 128:
            mouse_run = true
        else:
            mouse_run = false

        set_moving_speed(delta)
        set_animation()

    if target_mouse:
        velocity = position.direction_to(target_mouse) * moving_speed
        if position.distance_to(target_mouse) > 4:
            $AnimatedSprite.play()
            #velocity = move_and_slide(velocity)
            collision = move_and_collide(velocity*delta)
            is_moving = true
        else:
            is_moving = false
            $AnimatedSprite.stop()

func movement(delta):
    if Input.is_action_pressed("move_down"):
        direction.y = 1
    elif Input.is_action_pressed("move_up"):
        direction.y = -1
    else:
        direction.y = 0

    if Input.is_action_pressed("move_left"):
        direction.x = -1
    elif Input.is_action_pressed("move_right"):
        direction.x = 1
    else:
        direction.x = 0

    set_moving_speed(delta)
    set_animation()

    if direction.length() > 0:
        velocity = direction.normalized() * moving_speed
        is_moving = true
    else:
        $AnimatedSprite.stop()
        velocity = Vector2(0, 0)
        is_moving = false
        acceleration = 0
    $AnimatedSprite.play()
    #move_and_slide(velocity)
    collision = move_and_collide(velocity*delta)

func play_appear_anim():
    $AnimationPlayer.play("appear")
