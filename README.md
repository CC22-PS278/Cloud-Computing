# Cloud-Computing
REST API for tanya mobile app <br/>
Base url: https://tanya-ps278.et.r.appspot.com/ <br/>
Api documentation: https://tanya-ps278.et.r.appspot.com/tanyaDocs <br/>

* access tanya API endpoint: *baseURL/tanya/[endpoint]*

-----------------------------------------------------------------------

## Create REST APIs
1. Create database using mongoDB atlas, then get access key
2. install the packages contained in the package.json file
3. Using jsonwebtoken for authentication 

## Create API documentation using Swagger
1. run $ npm install swagger-ui-express
2. export folder collection in Postman
3. save into tanya APIs folder (Tanya-PS278.json)
4. upload json file result from postman export to transform API [here](https://www.apimatic.io/dashboard?modal=transform). Convert to OpenAPI/Swagger v2.0 (JSON) format
5. save the converted file into tanya APIs folder (tanyaDocs.json)
6. create /tanyaDocs endpoint inside index.js

## Deploy tanya APIs to Google App Engine
1. install Google SDK
2. create app.yaml 
3. gcloud init
4. gcloud app deploy
5. and get the URL to access API endpoints
