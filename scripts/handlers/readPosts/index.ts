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
      context.done(err);
    } else {
      const response = {
        body: JSON.stringify(data.Items),
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
        statusCode: 200,
      };
      console.log(response);
      context.done(null, response);
    }
  });
};
