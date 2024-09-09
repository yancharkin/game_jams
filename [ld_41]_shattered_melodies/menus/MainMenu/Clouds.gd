extends ParallaxLayer

export (float) var CLOUDS_SPEED = - 15.0

func _process(delta):
    motion_offset.x += CLOUDS_SPEED * delta
