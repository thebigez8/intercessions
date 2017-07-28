// some of this code borrowed from the game 2048

window.fakeStorage = {
  _data_: {},

  setItem: function(id, val)
  {
    this._data_[id] = String(val);
    return this._data_[id];
  },

  getItem: function(id)
  {
    return this._data_.hasOwnProperty(id) ? this._data_[id] : undefined;
  },

  removeItem: function(id)
  {
    return delete this._data_[id];
  },

  clear: function ()
  {
    this._data_ = {};
    return this._data_;
  }
};

function storeGame(gameState)
{
  var hasLocalStorage = typeof(Storage) !== "undefined";
  var storage = hasLocalStorage ? window.localStorage : window.fakeStorage;
  
  storage.setItem("intercessionGame", JSON.stringify(gameState));
}

function getGame()
{
  var hasLS = typeof(Storage) !== "undefined";
  var storage = hasLS ? window.localStorage : window.fakeStorage;
  var gameState = storage.getItem("intercessionGame");
  return gameState ? JSON.parse(gameState) : null;
}
