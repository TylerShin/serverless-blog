const AWS = require("aws-sdk");
const uuid = require("uuid");
const dynamodb = new AWS.DynamoDB();

export default function handler(event: any, context: any) {
  const body = JSON.parse(event.body);

  console.log(body, "bodybodybodybodybodybodybodybodybodybody");
  console.log(body.title, "titletitletitletitletitletitletitletitletitletitle");

  const params = {
    TableName: "serverlessBlogPosts",
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
    },
  };

  if (process.env.BLOG_PASSWORD !== body.password) {
    const err = new Error("wrong password");
    context.done(err, {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Origin": "*", // Required for CORS support to work
      },
    });
  }

  dynamodb.putItem(params, (err: Error, data: any) => {
    if (err) {
      console.error(err);
      context.done(err, {
        statusCode: 500,
        headers: {
          "Access-Control-Allow-Origin": "*", // Required for CORS support to work
        },
      });
    } else {
      const response = {
        statusCode: 200,
        headers: {
          "Access-Control-Allow-Origin": "*", // Required for CORS support to work
        },
        body: JSON.stringify(data),
      };
      context.done(null, response);
    }
  });
}
