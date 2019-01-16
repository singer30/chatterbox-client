var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    //  $('#chats').append(Parse.readAll);
    // App.fetch();
    
  },

  render: function() {
    // for (var prop in Messages) {
    //   var $message = MessageView.render(Messages[prop])
    //   MessagesView.$chats.appendTo($message);
    // }
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