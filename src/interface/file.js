const fs = require('fs');

let file;
let data;

const startFile = async (fileName) => {
    file = fileName;
    await updateData();
};

const updateData = async () => {
    data = await readFile();
};

function getData() {
    return data;
}

const readFile = async () => {
    return await fs.readFileSync(file, 'utf-8').split('\n').filter(Boolean);
};

const addRoute = async (route) => {

    await fs.appendFile(file, `\r\n${route.toUpperCase()}`, function (err) {
        if (err) {
            console.log(err);
        } else {
            updateData();
        }
    });
};

module.exports = {
    startFile,
    addRoute,
    getData,
};
