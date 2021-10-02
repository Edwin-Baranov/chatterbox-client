// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    RoomsView.$button.click(RoomsView.handleClick);
    RoomsView.$select.change(RoomsView.handleChange);
  },

  render: function() {
    // TODO: Render out the list of rooms.
    RoomsView.$select.html('');
    _.each(Rooms.get(), RoomsView.renderRoom);
  },

  renderRoom: function(roomname) {
    // TODO: Render out a single room.
    var $room = $(`<option value="${roomname.toLowerCase()}">`);
    $room.text(roomname);
    RoomsView.$select.append($room);
  },

  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.
  },

  handleClick: function(event) {
    // TODO: Handle the user clicking the "Add Room" button.
  }

};
