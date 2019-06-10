# Testing object.isNew 

## steps to reproduce:

- Add these two hooks:

```js
Parse.Cloud.beforeSave('Test', async request => {

    console.log(`before save Object is new: ${request.object.isNew()}`);
    console.log(`before save Object id: ${request.object.id}`);
    
  });


Parse.Cloud.afterSave('Test', async request => {

    
    console.log(`after save Object id: ${request.object.id}`);
    
  });
```

- start the server

- Create a object in `Test` with an id

```
curl --request POST \
  --url http://localhost:1337/parse/classes/Test \
  --header 'content-type: application/json' \
  --header 'x-parse-application-id: myAppId' \
  --header 'x-parse-masterkey: myMasterKey' \
  --data '{
        "id": "xxxxxxxx",
        "remoteId": "testId",
        "val": "aaaaaaaaaa"
}
'
```

- The log generated shows the id of the object as 'xxxxxxxx' and isNew() rerturns false
```
parse-server-example running on port 1337.
before save Object is new: false
before save Object id: xxxxxxxx
info: beforeSave triggered for Test for user undefined:
  Input: {"remoteId":"testId","val":"aaaaaaaaaa","objectId":"xxxxxxxx"}
  Result: {"object":{"remoteId":"testId","val":"aaaaaaaaaa"}} {"className":"Test","triggerType":"beforeSave"}
after save Object id: 4WbExtpFQi
info: afterSave triggered for Test for user undefined:
  Input: {"remoteId":"testId","val":"aaaaaaaaaa","createdAt":"2019-06-10T23:03:19.565Z","updatedAt":"2019-06-10T23:03:19.565Z","objectId":"4WbExtpFQi"} {"className":"Test","triggerType":"afterSave"}
info: afterSave triggered for Test for user undefined:
  Input: {"remoteId":"testId","val":"aaaaaaaaaa","createdAt":"2019-06-10T23:03:19.565Z","updatedAt":"2019-06-10T23:03:19.565Z","objectId":"4WbExtpFQi"}
  Result: {} {"className":"Test","triggerType":"afterSave"}
```

