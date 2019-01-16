var MessageView = {

  render: _.template(` 
    <div class="chat">
        <div class="username"><%- username%></div>
        <div><%- text %></div>
      </div>
    `)
};




/*

Iterate through the object with 100 messages


*/