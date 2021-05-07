const routesPath = "/routes";
const routes = require("../api/api");

module.exports = (app) => {
    app.post(`${routesPath}`, routes.includeRoute);
    app.get(`${routesPath}`, routes.findPath);
};
