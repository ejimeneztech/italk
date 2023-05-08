# AAC App

This is an augmentative and alternative communication app built in React. It uses the AWS Polly service to convert text to speech. It is hosted on AWS and uses S3 for file storage. AWS Lambda and API Gateway are used to create functions triggered by API calls. DynamoDB is used to store data, and Cognito is used for authentication.

## Getting Started

To get started with this app, you will need to have an AWS account and configure your credentials. You will also need to install Node.js and the AWS CLI.

Once you have the necessary tools installed, you can clone this repository and install the dependencies:

       git clone https://github.com/your-username/aac-app.git
       cd aac-app
       npm install 

You will also need to set up your AWS resources, including the S3 bucket, Lambda functions, API Gateway, DynamoDB table, and Cognito user pool. You can use the AWS Console or the AWS CLI to create these resources.

Once you have your resources set up, you will need to configure the app to use them. You can do this by creating a .env file in the root directory of the app and adding the necessary environment variables:

       REACT_APP_AWS_REGION=your-aws-region
       REACT_APP_AWS_S3_BUCKET=your-s3-bucket-name
       REACT_APP_AWS_API_ENDPOINT=your-api-gateway-endpoint
       REACT_APP_AWS_USER_POOL_ID=your-cognito-user-pool-id
       REACT_APP_AWS_USER_POOL_CLIENT_ID=your-cognito-user-pool-client-id


Finally, you can start the app with the following command:
       
       npm start


## Deploying to AWS
To deploy the app to AWS, you will need to build the app and upload the files to S3. You can do this with the following commands:

       npm run build
       aws s3 sync build/ s3://your-s3-bucket-name

## Contributing
If you would like to contribute to this project, please fork the repository and submit a pull request.
