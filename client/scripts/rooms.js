var Rooms = {

    _data: new Set,

    selected: 'lobby',



    update: function(messages) {
        var rooms = _.pluck(messages, 'roomname');
        rooms = _.uniq(rooms);
        for (var room in rooms){
            Rooms._data.add(room);
        }

    }
};