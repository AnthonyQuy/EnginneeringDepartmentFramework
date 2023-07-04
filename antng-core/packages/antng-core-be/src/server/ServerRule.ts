// import urlJoin from "url-join";
// import UrlPattern from "url-pattern";
import { ServerEndpoint } from "./ServerEndpoint.js";
export class ServerRule implements HTTPRule {
  path: string;
  endpoints: ServerEndpoint[];
  constructor(rule: HTTPRule) {
    this.path = rule.path;
    this.endpoints = rule.endpoints.map((e) => new ServerEndpoint(e));
  }
  // getMatchedEndpoint(req: Request): HTTPEndpoint {
  //   const rEndpoints: HTTPEndpoint[] = JSON.parse(
  //     JSON.stringify(this.endpoints)
  //   );

  //   this.rankEndpointsAgainInputRequest(rEndpoints, req);

  //   const matchedEndpoint = rEndpoints.reduce(
  //     (pre: HTTPEndpoint, cur: HTTPEndpoint) =>
  //       pre.rank > cur.rank ? pre : cur
  //   );

  //   if (matchedEndpoint.rank === 0) throw new Error("No Endpoint Matched");

  //   return matchedEndpoint;
  // }

  // private rankEndpointsAgainInputRequest(
  //   rEndpoints: HTTPEndpoint[],
  //   req: Request
  // ) {
  //   for (const e of rEndpoints) {
  //     e.rank = 0;
  //     if (req.method != e.method) continue;

  //     const endpointUrl = this.joinFullUrl(e);
  //     if (endpointUrl === req.path) {
  //       e.rank = 2;
  //     } else {
  //       //https://www.npmjs.com/package/url-pattern
  //       const matchedUrlParam = new UrlPattern(endpointUrl).match(req.path);
  //       if (matchedUrlParam) {
  //         e.urlParam = matchedUrlParam;
  //         e.rank = 1;
  //       }
  //     }
  //   }
  // }

  // private joinFullUrl(e: HTTPEndpoint) {
  //   return e.endpoint === "/" ? this.path : urlJoin(this.path, e.endpoint);
  // }
}
