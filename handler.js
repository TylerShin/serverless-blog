'use strict';

const fs = require('fs');
const ssrBuffer = fs.readFileSync('./dist/bundle.js');
const version = fs.readFileSync('./dist/version');
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
  ssr.serverSideRender(realPath, `https://s3.amazonaws.com/tylor-blog-assets/desktop_web/${version}_bundle.js`)
    .then((result) => {
      const response = {
        statusCode: 200,
        headers: {
          "Content-Type": "text/html",
          "Access-Control-Allow-Origin" : "*",
          "Cache-control": "max-age=300",
        },
       body: result,
      };
      context.done(null, response);
    })
    .catch((err) => {
      console.error(err);
    });
}
