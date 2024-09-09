extends Node

var player_name
var language

var config_file_path = "user://config"
var config_file = File.new()

var leaderboard_max_size = 5
var leaderboard_file_path = "user://leaderboard"
var leaderboard_file = File.new()
var leaderboard = []

func set_default_lang():
    var list_translations = []
    var dir = Directory.new()
    dir.open("res://translations/")
    dir.list_dir_begin()
    while true:
        var file_name = dir.get_next()
        if file_name == "":
            break
        elif file_name.get_extension() == "translation":
            list_translations.append(file_name.split('.')[1])
    dir.list_dir_end()
    var system_lang = OS.get_locale_language()
    if not system_lang in list_translations:
        language = 'en'
    else:
        language = system_lang

func _ready():
    config_check()
    config_load()
    leaderboard_check()
    leaderboard_load()
    leaderboard_sort()

func config_check():
    if not config_file.file_exists(config_file_path):
        set_default_lang()
        player_name = tr("PLAYER")
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
        var line = leaderboard_file.get_line()
        if line:
            leaderboard.append(parse_json(line))
    leaderboard_file.close()

func leaderboard_sort():
    for i in range(leaderboard.size()):
        for j in range(leaderboard.size()):
            var a = leaderboard[i]
            var b = leaderboard[j]
            if a[1] > b[1]:
                leaderboard[i] = b
                leaderboard[j] = a
    if leaderboard.size() > leaderboard_max_size: leaderboard.resize(leaderboard_max_size)

func leaderboard_update():
    if (len(leaderboard) == 0 \
            or len(leaderboard) < leaderboard_max_size \
            or _Globals.score >= leaderboard[-1][1]) \
            and _Globals.score != 0:
        leaderboard.append([player_name, _Globals.score])
        leaderboard_sort()
        leaderboard_file.open_encrypted_with_pass(leaderboard_file_path, File.WRITE, "VerySecurePassword")
        for result in leaderboard:
            leaderboard_file.store_line(to_json(result))
        leaderboard_file.close()
