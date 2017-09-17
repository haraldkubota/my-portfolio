// Send SNS message


const AWS = require('aws-sdk')
// Load credentials and set region from JSON file
AWS.config.loadFromPath('/home/harald/.aws/config.json')

const sns = new AWS.SNS({
  apiVersion: '2010-03-31',
})


function sendSns(txt) {
  sns.publish({
    Message: 'Portfolio updated',
    TargetArn: 'arn:aws:sns:us-east-1:282117872970:Deploy_Portfolio_Update',
    Subject: txt
  }, (err, data) => {
  if (err) console.log("Error: ", err)
    else console.log("Sent SNS, returned ", data)})
}

sendSns("Testing SNS from Node.JS");
