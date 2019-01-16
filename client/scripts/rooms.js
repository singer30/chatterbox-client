var Rooms = {

    _data: new Set,

    selected: 'lobby',

    items: function() {
        return _.chain([...Rooms._data]);
    },

    isSelected: function(roomname) {
        return roomname === Rooms.selected || !roomname && Rooms.selected === 'lobby';
    },

    add: function(room, callback = ()=>{}) {

        Rooms._data.add(room);
        Rooms.selected = room;
        callback(Rooms.items());
    },
     /* 
     add: function (message) { 
      Messages._data[message.objectId] = message;
    },  
     */

    update: function(messages, callback = ()=>{}) {
        // var rooms = _.pluck(messages, 'roomname');
        // rooms = _.uniq(rooms);
        // for (var room in rooms){
        //     Rooms._data.add(room);
        // }
        var length = Rooms._data.size;

        _.chain(messages).pluck('roomname').uniq().each(room => Rooms._data.add(room))




        if(Rooms.selected === null) {
            Rooms.selected = Rooms._data.values().next().value;
        }

        if (Rooms._data.size !== length) {
            callback(Rooms.items());
        }
    }
};