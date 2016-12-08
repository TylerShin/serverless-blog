import { DYNAMO_DB_TABLE_NAME } from "../constants";
const AWS = require("aws-sdk");

const dynamodb = new AWS.DynamoDB();
const POSTS_COUNT_PER_PAGE: number = 3;

export default function handler(event: any, context: any) {
  const params = {
    TableName: DYNAMO_DB_TABLE_NAME,
  };

  dynamodb.scan(params, function (err: Error, data: any) {
    if (err) {
      console.error(err, err.stack);
    }
    else {
      const response = {
        statusCode: 200,
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          "Access-Control-Allow-Origin": "*",
          "Cache-control": "max-age=300",
        },
        body: data.Items,
      };
      context.done(null, response);
    }
  });
};
