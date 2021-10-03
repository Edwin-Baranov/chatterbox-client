// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    MessagesView.$chats.on('click', '.username', MessagesView.handleClick);
  },

  render: function() {
    $('#chats').empty();
    _.each(Messages.get(), MessagesView.renderMessage);
  },

  renderMessage: function(message) {
    // TODO: Render a single message.
    var $message = MessageView.render(message);
    MessagesView.$chats.prepend($message);
  },

  handleClick: function(event) {
    console.log('username clicked');
    var username = $(event.target).data('username');
    if (username === undefined) { return; }

    Friends.toggleStatus(username, MessagesView.render);
  }
};