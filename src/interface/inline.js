const routesService = require('./graph');
const { getDb } = require('./file');
const readline = require('readline');



const scan = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});


function prompt() {
    scan.question('please enter the route:', async function (route) {
        let routes = route.split("-");
        let origin = routes[0];
        let destination = routes[1];
        let bestRoute = await routesService.findBestRoute(origin, destination)
        let bestRouteStr = bestRoute.path.join(' - ');
        console.log(`best route: ${bestRouteStr} > $${bestRoute.price}`);
        prompt();
    });

}

module.exports = {
    prompt
}
