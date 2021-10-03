// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    RoomsView.$button.click(RoomsView.handleClick);
    RoomsView.$select.change(RoomsView.handleChange);
  },

  render: function() {
    // TODO: Render out the list of rooms.
    RoomsView.$select.html('');
    _.each(Rooms.get(), RoomsView.renderRoom);
  },

  renderRoom: function(roomname) {
    var $room = $('<option>').val(roomname).text(roomname);
    RoomsView.$select.append($room);
  },

  handleChange: function(event) {
    Rooms._selected = RoomsView.$select.val();
    MessagesView.render();
  },

  handleClick: function(event) {
    var roomName = prompt('Please enter a room name:');
    if (roomname) {
      Rooms.add(roomName, () => {
        RoomsView.render();
        MessagesView.render();
      });
    }
  }

};
