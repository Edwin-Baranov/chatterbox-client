// This object houses all the room _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Rooms = {

  // TODO: Define how you want to store the list of rooms
  _data: new Set(),

  _selected: 'lobby',


  // TODO: Define methods which allow you to add rooms, update the list,
  // mark a room as selected, etc.


  add: function(value, callback = () => {}) {
    Rooms._data.add(value);
    Rooms._selected = value;
    callback();
  },

  get: function() {
    return [... Rooms._data];
  },

  isSelected: function (roomname = 'lobby') {
    return roomname === Rooms._selected;
  },

  update: function(messages, callback = () => {}) {
    _.each(messages, function(message) {
      Rooms.add(message.roomname);
      callback();
    });
  }
};