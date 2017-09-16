// copy-and-unzip.js
// Copy zip file from S3 bucket
// unzip into another S3 bucket

const fs = require('fs')
const yauzl = require('yauzl')
const stream = require('stream')

const AWS = require('aws-sdk')
const s3 = new AWS.S3({
  apiVersion: '2006-03-01',
  region: 'us-east-1'
});
const sourceParams = {
  Bucket: 'builds.qw2.org',
  Key: 'builds/portfolioBuild.zip',
}

const targetParams = {
  Bucket: 'www.aws.qw2.org',
  Key: '',
}

const localZipFile = '/tmp/result.zip'

function downloadFile(params, destpath) {
  return new Promise((resolve, reject) => {
    const s3Stream = s3.getObject(params).createReadStream()
    s3Stream.on('error', reject)
    const fileStream = fs.createWriteStream(destpath)
    fileStream.on('error', reject)
    fileStream.on('close', () => {
      resolve(destpath);
    })
    s3Stream.pipe(fileStream)
  })
}


function uploadUnzip(zipFile, params) {
  let input = {}

  console.log("Now got "+zipFile+" and expanding to ", params)
  yauzl.open(zipFile, {lazyEntries: true}, function(err, zipFile) {
    if (err) throw err;
    zipFile.readEntry()
    zipFile.on("entry", (entry) => {
      if (/\/$/.test(entry.fileName)) {
        console.log("Dir "+entry.fileName)
      } else {
        input.fileName = entry.fileName

        zipFile.openReadStream(entry, (err, readStream) => {
          if (err) throw err;
          readStream.on("end", () => {
            zipFile.readEntry()
          })
          readStream.pipe(uploadFromStream(input))
        })
      }
    })
  })
}


function uploadFromStream(input) {
    var pass = new stream.PassThrough()

    var contentType = (input.fileName.endsWith('.html') ? 'text/html' : 'text/javascript')

    var params = {
        Bucket: 'www.aws.qw2.org',
        Key: input.fileName,
        Body: pass,
        ACL: 'public-read',
        ContentType: contentType
    }
    console.log("Uploading ", params.Key)
    
  s3.upload(params, function(err, data) {
      if(err) throw err
  })

  return pass
}



downloadFile(sourceParams, localZipFile)
  .then(
    (localZip) => {
      uploadUnzip(localZip, targetParams)
    })
  .catch(
    (error) => {
      console.log("ERROR:", error)
    })
