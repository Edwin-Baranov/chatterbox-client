// This object houses all the message _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Messages = {

  // TODO: Define how you want to store your messages.
  _data: {},

  add: function(message, callback) {
    Messages._data[message.message_id] = Messages.setDefault(message);
    console.log(Messages._data);
    callback();
  },

  // TODO: Define methods which allow you to retrieve from,
  // add to, and generally interact with the messages.
  get: function() {
    return Object.values(Messages._data);
  },

  update: function(data, callback) {
    _.each(data, (message) => {
      Messages._data[message.message_id] = Messages.setDefault(message);
    });

    callback();
  },

  setDefault: function(message) {
    message.text = message.text || '';
    message.username = message.username || '';
    message.roomname = message.roomname || 'lobby';

    return message;
  }

};