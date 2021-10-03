// This object houses all the friend _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Friends = {
  // TODO: Define how you want to store your list of friends.

  _data: new Set(),

  add: function(username) {
    Friends._data.add(username);
  },

  get: function() {
    return [ ... Friends._data];
  },

  checkFriend: function(username) {
    return Friends._data.has(username);
  },

  toggleStatus: function(username, callback = () => {}) {
    if (Friends._data.has(username)) {
      Friends._data.delete(username);
    } else {
      Friends._data.add(username);
    }
    callback();
  }
};