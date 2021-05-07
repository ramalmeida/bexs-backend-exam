# bexs-backend

## Install and execute
Install modules

```
npm i
```

run app
```                          or  
    node server.js rotas.csv || npm run start rotas.csv
```

tests / do by jest
```
npm test
```

## Api 
```
port = 4001
```
[Collection postman](https://www.getpostman.com/collections/3e1c93c3657a6674cbef)

Response

status code 200:
```
{
    "bestPath": "<origin> - <inner> - <inner> - <target>",
    "price": <value>
}
```

status code 200:
```
{
    "response": "Route included"
}
```


##  Folder structure
```
├── README.MD
├── rotas.csv
├── package.json
├── server.js
├── src
│   ├── api
│   │   └── api.js
│   ├── interface
│   |    ├── inline.js
│   |    ├── file.js
│   |    └── graph.js
│   └── routes
│       └── routes.js
│   
└── tests
    ├── inputFile.spec.js
    └── routes.spec.js
```
