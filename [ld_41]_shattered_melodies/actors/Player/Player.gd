extends KinematicBody2D

export var BASE_SPEED = 150
export var MAX_SPEED = 500
export var ACCELERATION_TIME = 300

var direction = Vector2()
var velocity = Vector2()
var acceleration

var is_moving = false
var is_running = false

func _process(delta):

	if not _Player.alive:
		$AnimatedSprite.animation = "dead"
		$CollisionShape2D.set("rotation_degrees", 90)

func _physics_process(delta):

	if _Player.alive:
		movement(delta)

func movement(delta):

	var moving_speed

	if Input.is_action_just_pressed("run"):
		acceleration = 0

	if Input.is_action_pressed("run") and is_moving:

		acceleration += (acceleration + ACCELERATION_TIME) * delta

		moving_speed = BASE_SPEED + acceleration
		moving_speed = clamp(moving_speed, 0, MAX_SPEED)
		is_running = true

	else:
		moving_speed = BASE_SPEED
		is_running = false

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

	if direction.length() > 0:
		velocity = direction.normalized() * moving_speed
		is_moving = true
	else:
		$AnimatedSprite.stop()
		velocity = Vector2(0, 0)
		is_moving = false
		acceleration = 0

	$AnimatedSprite.play()

	move_and_slide(velocity)
