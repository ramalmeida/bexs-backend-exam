const setfile = require('../src/interface/file');
const graph = require('../src/interface/graph');

var mockdata = ['GRU,BRC,10', 'BRC,SCL,5', 'BRC,ORL,100', 'GRU,CDG,75', 'GRU,SCL,20', 'GRU,ORL,56', 'ORL,CDG,5', 'SCL,ORL,20'];

jest.mock('../src/interface/file');

describe('Services routes', () => {

    beforeAll(() => {
        setfile.getData.mockReturnValue(mockdata);
    });

    test('It should find best route', async () => {

        let origin = 'GRU';
        let target = 'ORL';
        let data = await graph.findBestRoute(origin, target);
        let expectedData = {
            path: ['GRU', 'BRC', 'SCL', 'ORL'],
            price: 35
        };
        expect(expectedData).toEqual(data);
    });
});