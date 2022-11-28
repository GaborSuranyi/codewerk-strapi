const AWS = require("aws-sdk");

console.log(new AWS.SharedIniFileCredentials({ profile: "strapi-serverless-admin" }));