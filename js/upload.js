// Load the SDK for JavaScript
var AWS = require('aws-sdk');

// Load credentials and set region from JSON file
AWS.config.loadFromPath('/home/harald/.aws/config.json');

// Create S3 service object
s3 = new AWS.S3({apiVersion: '2006-03-01'});
                    
// Call S3 to list current buckets
s3.listBuckets(function(err, data) {
   if (err) {
      console.log("Error", err);
   } else {
      console.log("Bucket List", data.Buckets);
   }
});


/* The following example copies an object from one bucket to another. */

 var params = {
  Bucket: "builds.qw2.org", 
  CopySource: "/www.aws.qw2.org/index.html", 
  Key: "index-new.html"
 };
 s3.copyObject(params, function(err, data) {
   if (err) console.log(err, err.stack); // an error occurred
   else     console.log(data);           // successful response
   /*
   data = {
    CopyObjectResult: {
     ETag: "\"6805f2cfc46c0f04559748bb039d69ae\"", 
     LastModified: <Date Representation>
    }
   }
   */
 });
