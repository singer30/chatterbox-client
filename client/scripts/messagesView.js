var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    //  $('#chats').append(Parse.readAll);
    // App.fetch();
    
  },

  render: function(messageObj) {
    // for (var prop in Messages) {
    //   var $message = MessageView.render(Messages[prop])
    //   MessagesView.$chats.appendTo($message);
    // }
    if(messageObj) {
      var customMessage = MessageView.render(arguments[0]);
      MessagesView.$chats.prepend(customMessage);
    }
    _.each(Messages._data, (message) => {
      var $message = MessageView.render(message);
        MessagesView.$chats.prepend($message);
    });


    
  }

  // renderMessage: function() {
  //   $chats.append(MessageView.render({username: 'Luke', text: 'what up'})); 
  // }


};

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