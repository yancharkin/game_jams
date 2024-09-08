extends Node

var tile_size = 48

var camera_main = null
var object_to_follow = null
var camera_main_path
var object_to_follow_path

func create(margin_left, margin_right, margin_top, margin_bottom, object_to_follow_name):

	camera_main = Camera2D.new()

	camera_main.set_h_drag_enabled(false)
	camera_main.set_v_drag_enabled(false)

	camera_main.set_limit(MARGIN_LEFT, margin_left + tile_size)
	camera_main.set_limit(MARGIN_RIGHT, margin_right)
	camera_main.set_limit(MARGIN_TOP, margin_top + tile_size)
	camera_main.set_limit(MARGIN_BOTTOM, margin_bottom)

	follow(object_to_follow_name)

	_Scene.current_scene.add_child(camera_main)
	camera_main.make_current()
	camera_main_path = camera_main.get_path()

func follow(object_to_follow_name):

	for node in _Scene.current_scene.get_children():
		if node.get_name() == object_to_follow_name:
			object_to_follow = node

	object_to_follow_path = object_to_follow.get_path()

func _physics_process(delta):

	if (camera_main != null) and (object_to_follow != null):

		if _Scene.current_scene.has_node(camera_main_path) and \
				_Scene.current_scene.has_node(object_to_follow_path):

			camera_main.position = object_to_follow.position

		else:

			camera_main = null
			object_to_follow = null
