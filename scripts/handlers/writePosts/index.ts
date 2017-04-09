const uuid = require("uuid");
const AWS = require("aws-sdk");
const dynamodb = new AWS.DynamoDB();
import { DYNAMO_DB_TABLE_NAME } from "../constants";

export default function handler(event: any, context: any) {
  const body = JSON.parse(event.body);

  const params = {
    TableName: DYNAMO_DB_TABLE_NAME,
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
        "Access-Control-Allow-Origin": "*",
      },
    });
  }

  dynamodb.putItem(params, (err: Error, data: any) => {
    if (err) {
      console.error(err);
      context.done(err, {
        statusCode: 500,
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      });
    } else {
      const response = {
        statusCode: 200,
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(data),
      };
      context.done(null, response);
    }
  });
}
