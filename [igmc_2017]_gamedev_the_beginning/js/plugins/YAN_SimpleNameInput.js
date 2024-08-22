/*=============================================================================
* _SimpleNameInput.js
*=============================================================================*/

/*:=============================================================================
* @plugindesc Smaller name input window. Only English alphabet.
* @author yancharkin
* =============================================================================*/

Window_NameEdit.prototype.initialize = function(actor, maxLength) {
    var width = this.windowWidth();
    var height = this.windowHeight();
    var x = (Graphics.boxWidth - width) / 2;
    var y = (Graphics.boxHeight - (height + this.fittingHeight(8) + 8)) / 2;
    Window_Base.prototype.initialize.call(this, x, y, width, height);
    this._actor = actor;
    this._name = actor.name().slice(0, this._maxLength);
    this._index = this._name.length;
    this._maxLength = maxLength;
    this._defaultName = this._name;
    this.deactivate();
    this.refresh();
    ImageManager.reserveFace(actor.faceName());
};

Window_NameEdit.prototype.faceWidth = function() {
    return 0;
};

Window_NameEdit.prototype.windowHeight = function() {
    return this.fittingHeight(2);
};

Window_NameEdit.prototype.itemRect = function(index) {
return {
        x: this.left() + index * this.charWidth(),
        y: 18,
        width: this.charWidth(),
        height: this.lineHeight()
    };
};

Window_NameEdit.prototype.refresh = function() {
    this.contents.clear();
    for (var i = 0; i < this._maxLength; i++) {
        this.drawUnderline(i);
    }
    for (var j = 0; j < this._name.length; j++) {
        this.drawChar(j);
    }
    var rect = this.itemRect(this._index);
    this.setCursorRect(rect.x, rect.y, rect.width, rect.height);
};

Window_NameInput.LATIN1 = [
          'A','B','C','D','E',  'a','b','c','d','e',
          'F','G','H','I','J',  'f','g','h','i','j',
          'K','L','M','N','O',  'k','l','m','n','o',
          'P','Q','R','S','T',  'p','q','r','s','t',
          'U','V','W','X','Y',  'u','v','w','x','y',
          'Z','[',']','^','_',  'z','{','}','|','~',
          '0','1','2','3','4',  '5','6','7','8','9',
          '/','=','@','<','>',  ':',';',' ','#','OK'
        ];

Window_NameInput.prototype.table = function() {
        return [Window_NameInput.LATIN1];
};

Window_NameInput.prototype.initialize = function(editWindow) {
    var x = editWindow.x;
    var y = editWindow.y + editWindow.height + 7;
    var width = editWindow.width;
    var height = this.windowHeight();
    Window_Selectable.prototype.initialize.call(this, x, y, width, height);
    this._editWindow = editWindow;
    this._page = 0;
    this._index = 0;
    this.refresh();
    this.updateCursor();
    this.activate();
};

Window_NameInput.prototype.windowHeight = function() {
    return this.fittingHeight(8);
};

Window_NameInput.prototype.maxCols = function() {
    return 10;
};

Window_NameInput.prototype.maxItems = function() {
    return 80;
};

Window_NameInput.prototype.character = function() {
    return this._index < 79 ? this.table()[this._page][this._index] : '';
};

Window_NameInput.prototype.isOk = function() {
    return this._index === 79;
};

Window_NameInput.prototype.itemRect = function(index) {
    return {
        x: index % 10 * 42 + Math.floor(index % 10 / 5) * 24,
        y: Math.floor(index / 10) * this.lineHeight(),
        width: 42,
        height: 36
    };
};

Window_NameInput.prototype.refresh = function() {
    var table = this.table();
    this.contents.clear();
    this.resetTextColor();
    for (var i = 0; i < 80; i++) {
        var rect = this.itemRect(i);
        rect.x += 3;
        rect.width -= 6;
        this.drawText(table[this._page][i], rect.x, rect.y, rect.width, 'center');
    }
};

Window_NameInput.prototype.updateCursor = function() {
    var rect = this.itemRect(this._index);
    this.setCursorRect(rect.x, rect.y, rect.width, rect.height);
};

Window_NameInput.prototype.isCursorMovable = function() {
    return this.active;
};

Window_NameInput.prototype.cursorDown = function(wrap) {
    if (this._index < 80 || wrap) {
        this._index = (this._index + 10) % 80;
    }
};

Window_NameInput.prototype.cursorUp = function(wrap) {
    if (this._index >= 10 || wrap) {
        this._index = (this._index + 70) % 80;
    }
};

Window_NameInput.prototype.cursorRight = function(wrap) {
    if (this._index % 10 < 9) {
        this._index++;
    } else if (wrap) {
        this._index -= 9;
    }
};

Window_NameInput.prototype.cursorLeft = function(wrap) {
    if (this._index % 10 > 0) {
        this._index--;
    } else if (wrap) {
        this._index += 9;
    }
};

Window_NameInput.prototype.processJump = function() {
    if (this._index !== 79) {
        this._index = 79;
        SoundManager.playCursor();
    }
};
