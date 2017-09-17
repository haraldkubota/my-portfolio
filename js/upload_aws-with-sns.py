# Download Zip and upload into www directory for AWS Lambda
# With SNS when done


import boto3
from botocore.client import Config
import StringIO
import zipfile
import mimetypes

def lambda_handler(event, context):

    s3 = boto3.resource('s3', config=Config(signature_version='s3v4'))
    sns = boto3.resource('sns')
    topic = sns.Topic('arn:aws:sns:us-east-1:282117872970:Deploy_Portfolio_Update')
    
    location = {
        "bucketName" : "builds.qw2.org",
        "objectKey": "builds/portfolioBuild.zip"
    }
    
    job=event.get("CodePipeline.job")
    if job:
        for artifact in job["data"]["inputArtifacts"]:
            if artifact["name"] == "MyAppBuild":
                location = artifact["location"]["s3Location"]
    

    print("Building portfolio from "+str(location))
    
    try:
        portfolio_bucket = s3.Bucket('www.aws.qw2.org')
        build_bucket = s3.Bucket(location["bucketName"])
        
        portfolio_zip=StringIO.StringIO()
        build_bucket.download_fileobj(location["objectKey"], portfolio_zip)
        
        with zipfile.ZipFile(portfolio_zip) as myzip:
            for nm in myzip.namelist():
                obj=myzip.open(nm)
                portfolio_bucket.upload_fileobj(obj, nm, ExtraArgs={'ContentType': mimetypes.guess_type(nm)[0]})
                portfolio_bucket.Object(nm).Acl().put(ACL='public-read')
        

        print("Done with lambda function")
        topic.publish(Subject="Published Portfolio via Lambda", Message="All uploaded")
        
        if job:
            codepipeline = boto3.client('codepipeline')
            codepipeline.put_job_success_result(jobId=job["id"])
            
        return "ok"
        
    except:
        topic.publish(Subject="FAIL: Published Portfolio via Lambda", Message="Failed to uploaded")
        raise
