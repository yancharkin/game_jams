extends Node2D

func _ready():
    get_tree().paused = false
    _Globals.toggle_cursor_visibility(false)
    _Player.add_to_scene(self)
    _Camera.create($BorderLeft.position.x, $BorderRight.position.x,
            $BorderTop.position.y, $BorderBottom.position.y, "Player")
    _Enemies.add_to_scene(self)
    _Globals.game_over = false
    _Globals.score = 0
    _Player.hp = _Player.DEFAULT_HP
    _Player.alive = true
    _Globals.enemies_n = len($SpawnerLayer.get_children()) - 1

    $Lightning.global_position = $SpawnerLayer/Player.global_position - Vector2(0, get_viewport_rect().size.y/2 + 64)
    $Lightning/AnimationPlayer.play("thunder")
    for child in $Lightning/Bolts.get_children():
        child.goal_point = $SpawnerLayer/Player.global_position + Vector2(0, 24)
        child.play_animation()
