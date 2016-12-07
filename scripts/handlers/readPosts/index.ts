import { DYNAMO_DB_TABLE_NAME } from "../constants";
const AWS = require("aws-sdk");

const dynamodb = new AWS.DynamoDB();
const POSTS_COUNT_PER_PAGE: number = 3;

export default function handler(event: any, context: any) {
  const params = {
    TableName: DYNAMO_DB_TABLE_NAME,
    // KeyConditionExpression: "#email = :emailValue and #timestamp BETWEEN :from AND :to",
    // ExpressionAttributeNames: {
    //   "#email": "email",
    //   "#timestamp": "timestamp"
    // },
    Limit: POSTS_COUNT_PER_PAGE,
    // ExpressionAttributeValues: {
    // ":emailValue": email,
    // ":from": from.getTime(),
    // ":to": to.getTime()
    // },
  };

  dynamodb.query(params, function (err: Error, data: any) {
    if (err) console.log(err, err.stack); // an error occurred
    else console.log(data);           // successful response
  });
};

