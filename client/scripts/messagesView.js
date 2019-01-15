var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
     $('#chats').append(Parse.readAll);
    App.fetch();
    
  },

  renderMessage: function() {
    $('#chats').append(MessageView.render({username: 'Luke', text: 'what up'})); 
  }


};

/*
$form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },
  */