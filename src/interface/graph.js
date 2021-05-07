const { getData } = require('./file');

const findBestRoute = async (origin, target) => {

    var graph = await getGraph();
    var bestPath = getBestPath(graph, origin.toUpperCase(), target.toUpperCase());

    return bestPath;
}


const getBestPath = (graph, origin, target) => {

    let prices = {};
    prices[target] = Number.MAX_VALUE;
    prices = Object.assign(prices, graph[origin]);

    let parents = { endNode: null };
    for (let child in graph[origin]) {
        parents[child] = origin;
    }

    let visited = [];
    let node = getBestPrice(prices, visited);

    while (node) {
        let price = prices[node];
        let adj = graph[node];

        for (let n in adj) {

            if (String(n) === String(origin)) {
                continue;
            } else {
                let incDistance = price + adj[n];
                if (!prices[n] || prices[n] > incDistance) {
                    prices[n] = incDistance;
                    parents[n] = node;
                }
            }
        }
        visited.push(node);
        node = getBestPrice(prices, visited);
    }

    let bestPath = [target];
    let parent = parents[target];
    while (parent) {
        bestPath.push(parent);
        parent = parents[parent];
    }
    bestPath.reverse();

    let results = {
        price: prices[target],
        path: bestPath,
    };
    return results;
};

const getBestPrice = (distances, visited) => {
    let shortest = null;

    for (let node in distances) {
        let currentIsShortest =
            shortest === null || distances[node] < distances[shortest];

        if (currentIsShortest && !visited.includes(node)) {
            shortest = node;
        }
    }

    return shortest;
};

async function getGraph() {

    let graph = {};

    var data = getData();

    for (let i = 0; i < data.length; i++) {
        let fields = data[i].split(',');
        let origin = fields[0];
        let target = fields[1];
        let distance = parseFloat(fields[2]);

        var temp = {};
        temp[target] = distance;
        graph[origin] = { ...graph[origin], ...temp };
    }

    return graph;
}

module.exports = {
    findBestRoute
}