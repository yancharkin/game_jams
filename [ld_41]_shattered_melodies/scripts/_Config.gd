extends Node

var player_name = "Player"
var language = "en"

var config_file_path = "user://config"
var config_file = File.new()

var leaderboard_file_path = "user://leaderboard"
var leaderboard_file = File.new()
var leaderboard = []

func _ready():

	config_check()
	config_load()
	leaderboard_check()
	leaderboard_load()
	leaderboard_sort()

func config_check():

	if not config_file.file_exists(config_file_path):
		config_file.open_encrypted_with_pass(config_file_path, File.WRITE, "VerySecurePassword")
		config_file.store_line(to_json({"language": language}))
		config_file.store_line(to_json({"player_name": player_name}))
		config_file.close()

func config_load():

	config_file.open_encrypted_with_pass(config_file_path, File.READ, "VerySecurePassword")
	language = parse_json(config_file.get_line())["language"]
	player_name = parse_json(config_file.get_line())["player_name"]
	config_file.close()

func config_save():

	config_file.open_encrypted_with_pass(config_file_path, File.WRITE, "VerySecurePassword")
	config_file.store_line(to_json({"language": language}))
	config_file.store_line(to_json({"player_name": player_name}))
	config_file.close()

func leaderboard_check():

	if not leaderboard_file.file_exists(leaderboard_file_path):
		leaderboard_file.open_encrypted_with_pass(leaderboard_file_path, File.WRITE, "VerySecurePassword")
		leaderboard_file.close()

func leaderboard_load():

	leaderboard_file.open_encrypted_with_pass(leaderboard_file_path, File.READ, "VerySecurePassword")
	while not leaderboard_file.eof_reached():
		var line = parse_json(leaderboard_file.get_line())
		if line != null:
			leaderboard.append(line)
	leaderboard_file.close()

func leaderboard_sort():

	for i in range(leaderboard.size()):
		for j in range(leaderboard.size()):
			var a = leaderboard[i]
			var b = leaderboard[j]
			if a[1] > b[1]:
				leaderboard[i] = b
				leaderboard[j] = a

	if leaderboard.size() > 10: leaderboard.resize(10)

func leaderboard_update():

	if (len(leaderboard) == 0 \
			or len(leaderboard) < 10 \
			or _Globals.score >= leaderboard[-1][1]) \
			and _Globals.score != 0:

		leaderboard.append([player_name, _Globals.score])
		leaderboard_sort()

		leaderboard_file.open_encrypted_with_pass(leaderboard_file_path, File.WRITE, "VerySecurePassword")
		for result in leaderboard:
			leaderboard_file.store_line(to_json(result))
		leaderboard_file.close()