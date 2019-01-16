var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    RoomsView.$select.on('change', RoomsView.handleChange);
    RoomsView.$button.on('click', RoomsView.handleClick);
  },

  render: function() {

    Rooms.items().each(RoomsView.renderRoom);
    // _.each(Rooms._data, (room) => {
    //   RoomsView.renderRoom(room);
    // })
    RoomsView.$select.val(Rooms.selected);
  },

  renderRoom: function(roomname) {
    // $('#rooms select').append('<div>asdads</div>');
    var $option = $('<option>').val(roomname).text(roomname);
    RoomsView.$select.append($option)
  },

  handleChange: function(event) {
    Rooms.selected = RoomsView.$select.val();
    MessagesView.render();
  },

  handleClick: function(event) {
    var roomname = prompt('Enter room name')
    if (roomname) {
      Rooms.add(roomname, ()=> {
        RoomsView.render();
        MessagesView.render();
      })
    }
  }
};
