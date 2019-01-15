var MessageView = {

  render: _.template(
    "<div class='chat'>" +
        "<div class='username'></div>" +
          "<%= 'username' %>" +

        "<div class = 'text'></div>" +
          "<%= 'text' %>" +
    "</div>"
      
    
  )
  
};




/*

Iterate through the object with 100 messages


*/