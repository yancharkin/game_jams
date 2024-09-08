extends Node

var game_over = false
var score = 0

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