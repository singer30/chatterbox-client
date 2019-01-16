var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    
    var message = {
      roomname: Rooms.selected || 'lobby',
      text: FormView.$form.find('#message').val(),
      username: App.username
    };
    Parse.create(message, (data) => {
      _.extend(message, data); //  extends the data to the message to have it also include an objectID key
      Messages.add(message, MessagesView.render);
      
    });
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};