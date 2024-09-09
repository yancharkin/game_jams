extends Particles2D

export (bool) var is_level = true
var player = null

func _physics_process(_delta):
    if is_level:
        if !player:
            for node in _Scene.current_scene.get_children():
                if node.get_name() == 'Player':
                    player = node
        else:
            position = player.position - Vector2(0, get_viewport_rect().size.y/2 + 64)
            visibility_rect = get_viewport_rect()
    else:
        position = Vector2(get_viewport_rect().size.x/2, 96)
