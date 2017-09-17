# Download Zip and upload into www directory for AWS Lambda
# With SNS when done


import boto3
from botocore.client import Config
import StringIO
import zipfile

def lambda_handler(event, context):

    s3 = boto3.resource('s3', config=Config(signature_version='s3v4'))
    sns = boto3.resource('sns')
    topic = sns.Topic('arn:aws:sns:us-east-1:282117872970:Deploy_Portfolio_Update')
    try:
        portfolio_bucket = s3.Bucket('www.aws.qw2.org')
        build_bucket = s3.Bucket('builds.qw2.org')
        
        portfolio_zip=StringIO.StringIO()
        build_bucket.download_fileobj('builds/portfolioBuild.zip', portfolio_zip)
        
        with zipfile.ZipFile(portfolio_zip) as myzip:
            for nm in myzip.namelist():
                obj=myzip.open(nm)
                portfolio_bucket.upload_fileobj(obj, nm)
                portfolio_bucket.Object(nm).Acl().put(ACL='public-read')
        

        print("Done with lambda function")
        topic.publish(Subject="Published Portfolio via Lambda", Message="All uploaded")
        return "ok"
    except:
        topic.publish(Subject="FAIL: Published Portfolio via Lambda", Message="Failed to uploaded")
        raise
        
