extends CanvasLayer

export (bool) var is_level = true
export (int) var interval_from = 15
export (int) var interval_to = 45
var rng = RandomNumberGenerator.new()

func _ready():
    if is_level:
        $LightningBolt.emitting = false
    else:
        $LightningBolt.emitting = true
        $LightningBolt.reset()
    rng.randomize()
    $ThunderTimer.start()

func _on_ThunderTimer_timeout():
    if !is_level:
        $AnimationPlayer.play("lightning&bolt")
    else:
        $AnimationPlayer.play("lightning")
    $ThunderTimer.set_wait_time(rng.randi_range(interval_from, interval_to))
    $ThunderTimer.start()
