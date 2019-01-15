var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    App.fetch();
  },

  render: function() {
    //$("#chats").append('asdadadsadsadada') 
  },

  renderMessage: function() {
    $('#chats').append('<div>asdads</div>'); 
  }


};

/*
$form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },
  */