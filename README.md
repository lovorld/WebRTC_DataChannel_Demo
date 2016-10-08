# webrtc_dataChannelDemo
A simple demo by using webrtc Datachannel. Basically transmit message using datachannel of webrtc between two browser pages. Signaling using the socket.io lib.

## How to use
1. To run the Server, you need install [Node.js](https://nodejs.org/en/) and [socket.io](https://github.com/socketio/socket.io). 
2. Use your Terminal or CMD to run the 'server.js' and 'signaling.js' with node command.

    forexample:
    
    `node server.js `
    
3. Modify the host variable in 'index.html' with your server address. If needed, u can change the port variable also, but remember to change it in 'server.js' as well.

    ` var host= '192.168.31.180';
    
      var port = 3000;
      
      var socket = io.connect('http://'+host+':'+ port+ '/');`
      
4. Now, u can try this simple demo by opening two browser pages, or add more funct as u like.


