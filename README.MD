# bexs-backend

## Install and execute
Install modules

```
npm i
```

run app
    node server.js rotas.csv
```

test / do by jest
```
npm test
```

## Api 
```
port = 4001
```
[postman ->](https://www.getpostman.com/collections/3e1c93c3657a6674cbef)

Response

status code 200/payload:
```
{
    "bestPath": "<origin> - <inner> - <inner> - <target>",
    "price": <value>
}
```

status code 200/payload:
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
