// import urlJoin from "url-join";
// import UrlPattern from "url-pattern";
import { ServerEndpoint } from "./ServerEndpoint.js";
export class ServerRule {
    path;
    endpoints;
    constructor(rule) {
        this.path = rule.path;
        this.endpoints = rule.endpoints.map((e) => new ServerEndpoint(e));
    }
}
