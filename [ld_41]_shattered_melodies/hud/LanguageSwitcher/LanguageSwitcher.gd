extends TextureButton

func _ready():
    TranslationServer.set_locale(_Config.language)
    set_flag()

func _on_LanguageSwitcher_pressed():
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

    var cur_index = 0
    for i in range (list_translations.size()):
        if list_translations[i] == _Config.language:
            cur_index = i
    var new_index = cur_index + 1
    if new_index > (list_translations.size() - 1):
        new_index = 0

    _Config.language = list_translations[new_index]
    _Config.config_save()
    TranslationServer.set_locale(_Config.language)
    set_flag()

func set_flag():
    var pic = load("res://translations/" + _Config.language + ".png")
    self.set_normal_texture(pic)
