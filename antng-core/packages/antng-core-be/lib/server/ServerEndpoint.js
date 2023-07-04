import fs from "fs";
import path from "path";
import { ServerContext } from "./ServerContext.js";
import { antLogger } from "@antng-core/logger";
export class ServerEndpoint {
    endpoint;
    method;
    response;
    responseType;
    urlParam;
    rank;
    constructor(endpoint) {
        Object.assign(this, endpoint);
    }
    async processRequest(req, rep) {
        antLogger.debug(`Processing request for endpoint ${JSON.stringify(this)}`);
        if (this.responseType === "script") {
            await this.processResponseScript(req, rep);
        }
        if (this.responseType === "file") {
            const stream = fs.createReadStream(path.resolve(ServerContext.getResponseDir(), this.response));
            rep.type("application/file").send(stream);
        }
        else {
            rep.type("text/html").send(this.response);
        }
    }
    async processResponseScript(req, rep) {
        try {
            const resFunc = (await import(path.resolve(ServerContext.getResponseDir(), this.response))).default;
            await resFunc(req, rep);
        }
        catch (e) {
            antLogger.error(`Error processing response script ${this.response}`);
            antLogger.error(e);
            rep.status(500).send(`Internal Server Error - ${e}`);
        }
    }
}
