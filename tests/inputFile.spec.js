const fileName = 'rotas.csv';
const inputFileService = require('../src/interface/file');
const routesService = require('../src/interface/graph');

const appendRoute = 'BAH-SER-30'

var mockdata = ['GRU,BRC,10', 'BRC,SCL,5', 'BRC,ORL,100', 'GRU,CDG,75', 'GRU,SCL,20', 'GRU,ORL,56', 'ORL,CDG,5', 'SCL,ORL,20'];

jest.mock('../src/interface/file');

describe('Services inputFile', () => {

    beforeAll(() => {
        inputFileService.getData.mockReturnValue(mockdata);
    });

    test(`It should load file ${fileName}`, async () => {

        await inputFileService.startFile(fileName);
        let data = await inputFileService.getData();
        let expectedData = ['GRU,BRC,10', 'BRC,SCL,5', 'BRC,ORL,100', 'GRU,CDG,75', 'GRU,SCL,20', 'GRU,ORL,56', 'ORL,CDG,5', 'SCL,ORL,20'];
        expect(expectedData).toEqual(data);
    });

    test(`It should add route to file ${fileName}`, async () => {

        inputFileService.addRoute.mockReturnValue(mockdata.push(appendRoute));
        let data = await inputFileService.getData();
        let expectedData = ['GRU,BRC,10', 'BRC,SCL,5', 'BRC,ORL,100', 'GRU,CDG,75', 'GRU,SCL,20', 'GRU,ORL,56', 'ORL,CDG,5', 'SCL,ORL,20', appendRoute];
        expect(expectedData).toEqual(data);
    });
});

describe('Services routes', () => {

    beforeAll(() => {
        inputFileService.getData.mockReturnValue(mockdata);
    });

    test('It should find best route', async () => {

        let origin = 'GRU';
        let target = 'ORL';
        let data = await routesService.findBestRoute(origin, target);
        let expectedData = {
            path: ['GRU', 'BRC', 'SCL', 'ORL'],
            price: 35
        };
        expect(expectedData).toEqual(data);
    });
});