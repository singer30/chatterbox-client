var Messages = {
    _data: {},

    add: function (message) { 
      Messages._data[message.objectId] = message;
    },

    update: function(messages){
        for (var message of messages) { 
        Messages._data[message.objectId] = message;
       }
    },
    _conform: function(message) {
        message.text = message.text || '';
        message.username = message.username || '';
        message.roomname = message.roomname || '';
        return message;
    }
};