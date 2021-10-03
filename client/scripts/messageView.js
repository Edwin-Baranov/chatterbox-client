// Whereas MessagesView controls the entire list of messages,
// MessageView is responsible for rendering a single message.

var MessageView = {
  // Learn more about Underscore's templating capability <% Friends.checkFriend(username) ? 'friend' : '' %>
  // here: https://underscorejs.org/#template.
  // TODO: Update this template accordingly.
  render: _.template(`
      <div class="chat">
        <div class = "username <%- Friends.checkFriend(username) ? 'friend' : '' %>"
          data-username = "<%- username %>"
        >
          <%- username %>
        </div>

        <div class ="messageText">
          <%- text %>
        </div>
      </div>
    `)

};