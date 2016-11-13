'use strict';

const fs = require('fs');
const ssrBuffer = fs.readFileSync('./dist/bundle.js');
const ssrString = ssrBuffer.toString();
const ssr = eval(ssrString);
const SERVICE_NAME = 'tylor-blog';

module.exports.SSR = (event, context, callback) => {
  const path = event.path;
  
  let realPath = '/';
  if (path !== SERVICE_NAME) {
    realPath = path.replace(`${SERVICE_NAME}/`, '');
  }
  
  console.log('event ===================================', event);
  console.log('context ===================================', context);
  console.log('callback ===================================', callback);
  ssr.serverSideRender(realPath, 'https://scriptPath.scriptPathHere')
    .then((result) => {
      const response = {
        statusCode: 200,
        headers: {
          "Content-Type": "text/html",
          "Access-Control-Allow-Origin" : "*"
        },
       body: result,
      };
      context.done(null, response);
    })
    .catch((err) => {
      console.error(err);
    });
}
