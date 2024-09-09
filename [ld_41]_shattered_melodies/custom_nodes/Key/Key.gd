extends TextureButton

export(String, "c", "cis", "d", "dis", "e", "f", \
        "fis", "g", "gis", "a", "ais", "b") var note = "c"
signal clicked(node)
var tex_normal
var tex_pressed
var label_text
var note_to_key = {"c":"Z", "cis":"S", "d":"X", "dis":"D", "e":"C", \
        "f":"V", "fis":"G", "g":"B", "gis":"H", "a":"N", "ais":"J", "b":"M"}

func set_instrument(instrument):
    var stream = load("res://custom_nodes/Key/sounds/" + instrument + "/" + note + ".wav")
    $Audio.set_stream(stream)

func _ready():
    if "is" in note:
        tex_normal = load("res://custom_nodes/Key/images/key_black.png")
        tex_pressed = load("res://custom_nodes/Key/images/key_black_" + note + ".png")
        $Label.set("custom_colors/font_color", Color(1, 1, 1))
    else:
        tex_normal = load("res://custom_nodes/Key/images/key_white.png")
        tex_pressed = load("res://custom_nodes/Key/images/key_white_" + note + ".png")
        $Label.set("custom_colors/font_color", Color(0 ,0, 0))
    set_normal_texture(tex_normal)
    set_pressed_texture(tex_pressed)
    if not OS.has_feature('mobile'):
        label_text = note_to_key[note]
        $Label.set_text(label_text)
    set_instrument("piano")

func _process(_delta):
    if is_visible_in_tree():
        if Input.is_action_just_pressed("key_" + note):
            set_normal_texture(tex_pressed)
            $Audio.play()
        elif Input.is_action_just_released("key_" + note):
            set_normal_texture(tex_normal)
            $Audio.stop()

func _on_Key_button_down():
    $Audio.play()

func _on_Key_button_up():
    $Audio.stop()

func _on_Key_gui_input(event):
    if event is InputEventMouseButton:
        if (event.button_index == BUTTON_LEFT) and event.is_pressed():
            emit_signal("clicked", self)
