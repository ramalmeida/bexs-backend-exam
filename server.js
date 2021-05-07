const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 4001;
const inputFileService = require('./src/interface/file')

inputFileService.startFile(process.argv[2]);

app.listen(port, function () {
});

app.use(bodyParser.json());

require('./src/routes/routes')(app);

require('./src/interface/inline').prompt();