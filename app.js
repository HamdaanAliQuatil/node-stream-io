const axios = require('axios');

let readableStream = null;

axios({
  method: 'get',
  url: 'https://postman-echo.com/server-events/5',
  responseType: 'stream',
})
  .then((response) => {
    readableStream = response.data;

    // Set up event listeners for data, end, and error events
    readableStream.on('data', (chunk) => {
      console.log('Received chunk:', chunk.toString());
    });

    readableStream.on('end', () => {
      console.log('Stream ended');
    });

    readableStream.on('error', (error) => {
      console.error('Error:', error.message);
    });
  })
  .catch((error) => {
    console.error('API request failed:', error.message);
  });
