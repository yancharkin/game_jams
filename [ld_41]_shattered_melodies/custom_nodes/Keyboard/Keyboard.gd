extends ColorRect

var note_to_scancode = {"c":KEY_Z, "cis":KEY_S, "d":KEY_X, "dis":KEY_D, \
        "e":KEY_C, "f":KEY_V, "fis":KEY_G, "g":KEY_B, "gis":KEY_H, \
        "a":KEY_N, "ais":KEY_J, "b":KEY_M}
var array_notes = ["c", "cis", "d", "dis", "e", "f", "fis", "g", "gis", \
        "a", "ais", "b"]
var array_lengths = [1, 2, 4, 8]
var current_enemy
var current_insrument
var current_melody = []
var current_melody_len
var current_note_n = 0
var current_note
var current_note_len
var stream
var answer_correct = []
var answer_player = []
var answer_length = 0
var melody_playing = false
var recorded = false
var notes_all = []
var _old_viewport_size = Vector2(0, 0)

func scale_keyboard():
    var viewport_size = get_viewport_rect().size
    if viewport_size != _old_viewport_size:
        var scale_factor = viewport_size.x / 360
        for container in [$Flats, $Naturals]:
            container.set_scale(Vector2(scale_factor, 1))
            container._set_position(Vector2(0, container.get_position().y))
    _old_viewport_size = viewport_size

func _ready():
    randomize()
    notes_all += $Flats.get_children()
    notes_all += $Naturals.get_children()
    for button in notes_all:
        var note = button.get_name().replace("Key", "").to_lower()
        var action = "key_" + note
        if not InputMap.has_action(action):
            InputMap.add_action(action)
            var event = InputEventKey.new()
            event.set_scancode(note_to_scancode[note])
            InputMap.action_add_event(action, event)

func _process(_delta):
    if OS.has_feature('mobile'): scale_keyboard()
    if melody_playing:
        if answer_length < current_melody_len:
            $HBoxControls/ButtonConfirm.set_disabled(true)
        else:
            $HBoxControls/ButtonConfirm.set_disabled(false)

func _input(event):
    if is_visible_in_tree():
        if event is InputEventKey:
            for item in note_to_scancode:
                if InputMap.event_is_action(event, "key_" + item):
                    if Input.is_action_just_pressed("key_" + item):
                        if recorded: add_to_answer(item)

func _on_Key_clicked(node):
    var note = node.get_name().replace("Key", "").to_lower()
    if recorded: add_to_answer(note)

func play_melody(enemy):
    clear_result()
    melody_playing = true
    current_enemy = enemy
    current_insrument = enemy.INSTRUMENT
    current_melody_len = enemy.MELODY_LENGTH
    HUD.update_enemy_hp_meter()
    current_melody = []
    answer_correct = []
    current_note_n = 0
    for _i in range(current_melody_len):
        var note_index = randi() % len(array_notes)
        var length_index = randi() % len(array_lengths)
        var note = array_notes[note_index]
        var length = array_lengths[length_index]
        current_melody.append(str(note) + str(length))
        answer_correct.append(str(note))
    $TimerPause.start()

func clear_result():
    for node in $Result.get_children():
        node.queue_free()
        answer_length = 0
        answer_player = []

func repeat_melody():
    current_note_n = 0
    play_note()

func confirm():
    if len(answer_correct) == len(answer_player):
        if answer_player != answer_correct:
            _Player.hp -= 1
            HUD.hit()
        else:
            current_enemy.hp -= 1
            HUD.hit_enemy()
            HUD.update_enemy_hp_meter()
            if current_enemy.hp <= 0:
                current_enemy.alive = false
                _Globals.score += 1
                get_tree().paused = false
                hide()
                HUD.in_battle = false
        if _Player.hp > 0 and current_enemy.hp > 0:
                play_melody(current_enemy)
        else:
            melody_playing = false

func play_note():
    var array_note = _Globals.str_to_array(current_melody[current_note_n])
    current_note_len = array_note.pop_back()
    current_note = _Globals.array_to_str(array_note)
    stream = load("res://audio/sounds/" + current_insrument + "/" + current_note + ".wav")
    $Audio.set_stream(stream)
    $Audio.play()
    $TimerPlayback.set_wait_time(float(2 / float(current_note_len)))
    $TimerPlayback.start()

func add_to_answer(note):
    if answer_length < current_melody_len:
        answer_player.append(note)
        var tex = load("res://custom_nodes/Key/images/note_" + note + ".png")
        var tex_rect_note = TextureRect.new()
        if note != 'e' and note != 'b':
            tex_rect_note.set_texture(tex)
        else:
            var tex_anim = AnimatedTexture.new()
            tex_anim.set_frames(34)
            tex_anim.set_fps(24)
            tex_anim.set_oneshot(true)
            var frame0 = tex
            tex_anim.set_frame_texture(0, frame0)
            for i in range(33):
                var new_frame = load("res://custom_nodes/Key/images/note_" + note + "/note_" + note + str(i+1) + ".png")
                tex_anim.set_frame_texture(i+1, new_frame)
            tex_rect_note.set_texture(tex_anim)
        $Result.add_child(tex_rect_note)
        answer_length += 1

func _on_ButtonRepeat_pressed():
    repeat_melody()

func _on_ButtonRecord_toggled(button_pressed):
    recorded = button_pressed

func _on_ButtonClear_pressed():
    clear_result()

func _on_ButtonConfirm_pressed():
    confirm()

func _on_TimerPause_timeout():
    play_note()

func _on_TimerPlayback_timeout():
    if current_note_n < (current_melody_len - 1):
        current_note_n += 1
        play_note()
    else:
        $Audio.stop()

func _on_SwitchSound_toggled(button_pressed):
    if  button_pressed:
        for node in notes_all:
            node.set_instrument('piano')
    else:
        for node in notes_all:
            node.set_instrument('synth')
