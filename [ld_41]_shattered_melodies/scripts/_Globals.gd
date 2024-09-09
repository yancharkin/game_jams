extends Node

var game_over = false
var score = 0
var enemies_n = null
var input_type = 'keyboard'

func get_object_by_name(object_name, parent):
    for node in parent.get_children():
        if node.get_name() == object_name:
            return node
    return null

func str_to_array(string):
    var array = []
    for chr in string:
        array.append(chr)
    return array

func array_to_str(array):
    var string = ""
    for item in array:
        string += str(item)
    return string

func toggle_cursor_visibility(visible):
    if visible:
        if not OS.has_feature("web"):
            Input.set_mouse_mode(Input.MOUSE_MODE_VISIBLE)
        else:
            JavaScript.eval("document.getElementById('canvas').style.cursor = 'auto'")
    else:
        if not OS.has_feature("web"):
            Input.set_mouse_mode(Input.MOUSE_MODE_CAPTURED)
        else:
            JavaScript.eval("document.getElementById('canvas').style.cursor = 'none'")
