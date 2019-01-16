var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    MessagesView.$chats.on('click', '.username', MessagesView.handleClick);
  },

  render: function() {
    // for (var prop in Messages) {
    //   var $message = MessageView.render(Messages[prop])
    //   MessagesView.$chats.appendTo($message);
    // }
    // if(messageObj) {
    //   var customMessage = MessageView.render(arguments[0]);
    //   MessagesView.$chats.prepend(customMessage);
    // }
    MessagesView.$chats.html('');
    Messages.items().filter(message => Rooms.isSelected(messageroomname)).each(message => MessagesView.renderMessage(message));
    
    // _.filter(Messages._data, (message) => {
    //   Rooms.isSelected(message, roomname);
    // })
    // _.each(Messages._data, (message) => {
    //   MessagesView.renderMessage(message);
    // })
  },

  renderMessage: function(message) {
      var $message = MessageView.render(message);
      MessagesView.$chats.prepend($message);
  },
  handleClick: function () {
      var username = $(event.target).data('username');
      if(username === undefined) { return; }
      // Friends.toggleStatus(username, MessagesView.render);
  }
};
/*

function updateTwitter(data) {

    // do your original update twitter GET
    $.getJSON('http://www.jdiadt.com/twitterv1_1feed/get_tweets.php', function () {
        //... all that code
    });

    // Sets a timer that calls the updateTwitter function 1x a minute
    setTimeout(function () { updateTwitter(data); }, 60000);   
}
*/
    
  

  // renderMessage: function() {
  //   $chats.append(MessageView.render({username: 'Luke', text: 'what up'})); 
  // }




/*
 $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    
    console.log('click!');
  },

  */