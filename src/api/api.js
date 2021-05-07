const { addRoute } = require('../interface/file');
const { findBestRoute } = require('../interface/graph');

const includeRoute = async (req, resp) => {
    await addRoute(req.body.route)
    return resp.status(200).send({ response: 'Route included' });
};

const findPath = async (req, resp) => {
    let bestRoute = await findBestRoute(req.query.origin, req.query.target);
    let bestPathStr = bestRoute.path.join(' - ');
    let response = { bestPath: bestPathStr, price: bestRoute.price }
    return resp.send(response);
};

module.exports = {
    includeRoute,
    findPath,
};
