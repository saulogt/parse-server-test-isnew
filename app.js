

var express = require('express');
var ParseServer = require('parse-server').ParseServer;
var app = express();

var api = new ParseServer({
  databaseURI: 'mongodb://localhost:27017/dev',
//  cloud: '/home/myApp/cloud/main.js',
  appId: 'myAppId',
  masterKey: 'myMasterKey',
  fileKey: 'optionalFileKey',
  serverURL: 'http://localhost:1337/parse'
});

// Serve the Parse API on the /parse URL prefix
app.use('/parse', api);

app.listen(1337, function() {
  console.log('parse-server-example running on port 1337.');
});


Parse.Cloud.beforeSave('Test', async request => {

    console.log(`before save Object is new: ${request.object.isNew()}`);
    console.log(`before save Object id: ${request.object.id}`);
    
  });


Parse.Cloud.afterSave('Test', async request => {

    
    console.log(`after save Object id: ${request.object.id}`);
    
  });