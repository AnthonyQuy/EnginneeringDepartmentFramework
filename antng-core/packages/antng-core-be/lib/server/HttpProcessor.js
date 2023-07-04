import { ServerContext } from "./ServerContext.js";
import urlJoin from "url-join";
export function httpProcessor(fastify, options, done) {
    const rules = ServerContext.getRules();
    for (const rule of rules) {
        for (const endpoint of rule.endpoints) {
            fastify.route({
                method: endpoint.method,
                url: urlJoin(rule.path, endpoint.endpoint),
                handler: (req, rep) => {
                    endpoint.processRequest(req, rep);
                },
            });
        }
    }
    done();
}
// rules.forEach((rule) => {
//   rule.endpoints.forEach((endpoint) => {
//     fastify.route({
//       method: endpoint.method,
//       url: urlJoin(rule.path, endpoint.endpoint),
//       handler: (req, res) => {
//         //   antLogger.info(`HTTPProcessor: Request - ${req.method} ${req.url}`);
//         //   antLogger.debug(
//         //     `HTTPProcessor: Request body - ${JSON.stringify(req.body)}`
//         //   );
//         //   const matchedRule = ServerContext.getMatchedRule(req.url);
//         //   const matchedEndpoint = matchedRule.getMatchedEndpoint(req);
//       },
//     });
//   });
// });
// antLogger.info(`HTTPProcessor: Request - ${req.method} ${req.url}`);
// antLogger.debug(`HTTPProcessor: Request body - ${JSON.stringify(req.body)}`);
// const matchedRule = ServerContext.getMatchedRule(req.url);
// const matchedEndpoint = matchedRule.getMatchedEndpoint(req);
// const response = processEndpoint(matchedEndpoint, req);
// // response.header && res.header(response.header);
// // response.cookie &&
// //   res.cookie(
// //     response.cookie.name,
// //     response.cookie.val,
// //     response.cookie.options || {}
// //   );
// // res.status(response.status).send(response.body);
// next();
