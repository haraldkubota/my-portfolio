// Send SNS message


const AWS = require('aws-sdk')
// Load credentials and set region from JSON file
AWS.config.loadFromPath('/home/harald/.aws/config.json')
// Revert back to using native or globally available Promise
AWS.config.setPromisesDependency(null);

const sns = new AWS.SNS({
  apiVersion: '2010-03-31',
})


function sendSns(txt) {
  sns.publish({
    Message: 'Portfolio updated from NodeJS',
    TargetArn: 'arn:aws:sns:us-east-1:282117872970:Deploy_Portfolio_Update',
    Subject: txt
  }).promise().then((err, data) => {
    if (err) console.log("Error: ", err)
    else console.log("Sent SNS, returned ", data)
  })
}

sendSns("Testing SNS with promises from Node.JS");