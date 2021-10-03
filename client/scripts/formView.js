// FormView is an object which houses all the message form functionality.
// Consider the provided code and complete the functionality.
// Apply what you learn here to other interactive views if necessary.

var FormView = {

  $form: $('form'),
  $message: $('#message'),

  initialize: function() {
    FormView.$form.submit(FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();

    // TODO: Currently, this is all handleSubmit does.
    // Make this function actually send a message to the Parse API.
    //var textMessage = FormView.$message.text();
    Parse.create(FormView.createMessage(), (data) => {
      Messages.add(data[0], MessagesView.render);
    });
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  },

  createMessage: function () {
    var message = {
      username: App.username,
      text: FormView.$message.val(),
      roomname: Rooms._selected || 'lobby'
    };
    return message;
  }
};