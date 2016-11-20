'use strict';

const fs = require('fs');
const AWS = require('aws-sdk');
const uuid = require('uuid');
const ssrBuffer = fs.readFileSync('./dist/bundle.js');
const version = fs.readFileSync('./dist/version');
const ssrString = ssrBuffer.toString();
const ssr = eval(ssrString);
const SERVICE_NAME = 'tylor-blog';
const dynamodb = new AWS.DynamoDB();

module.exports.SSR = (event, context) => {
  const path = event.path;

  let realPath = '/';
  if (path !== SERVICE_NAME) {
    realPath = path.replace(`${SERVICE_NAME}/`, '');
  }

  console.log('event ===================================', event);
  console.log('context ===================================', context);
  ssr.serverSideRender(realPath, `https://s3.amazonaws.com/tylor-blog-assets/desktop_web/${version}_bundle.js`)
    .then((result) => {
      const response = {
        statusCode: 200,
        headers: {
          "Content-Type": "text/html",
          "Access-Control-Allow-Origin": "*",
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

module.exports.writePosts = (event, context) => {
  console.log('event ===================================', event);
  console.log('context ===================================', context);

  const body = JSON.parse(event.body);

  console.log(body, "bodybodybodybodybodybodybodybodybodybody");
  console.log(body.title, "titletitletitletitletitletitletitletitletitletitle");

  const params = {
    TableName: 'serverlessBlogPosts',
    Item: {
      postId: {
        S: uuid(),
      },
      title: {
        S: body.title,
      },
      content: {
        S: body.content,
      },
      createdAt: {
        S: new Date().toString(),
      },
    }
  }

  if (process.env.BLOG_PASSWORD !== body.password) {
    const err = new Error("wrong password");
    context.done(err, { 
      statusCode: 500, 
      headers: {
        "Access-Control-Allow-Origin": "*" // Required for CORS support to work
      } 
    });
  }

  dynamodb.putItem(params, (err, data) => {
    if (err) {
      console.error(err);
      context.done(err, { 
        statusCode: 500, 
        headers: {
          "Access-Control-Allow-Origin": "*" // Required for CORS support to work
        } 
      });
    } else {
      const response = {
        statusCode: 200,
        headers: {
          "Access-Control-Allow-Origin": "*" // Required for CORS support to work
        },
        body: JSON.stringify(data),
      };
      context.done(null, response);
    }
  });
}
