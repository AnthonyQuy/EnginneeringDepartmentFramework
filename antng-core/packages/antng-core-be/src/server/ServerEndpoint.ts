import { FastifyReply, FastifyRequest } from "fastify";
import fs from "fs";
import path from "path";
import { ServerContext } from "./ServerContext.js";
import { antLogger } from "@antng-core/logger";
import { SeverRequest } from "./SeverRequest.js";
import { SeverReply } from "./SeverReply.js";

export class ServerEndpoint implements HTTPEndpoint {
  endpoint: string;
  method: HttpMethod;
  response: string;
  responseType?: ServerResponseType;
  urlParam?: string;
  rank?: number;

  constructor(endpoint: HTTPEndpoint) {
    Object.assign(this, endpoint);
  }

  async processRequest(req: SeverRequest, rep: SeverReply) {
    antLogger.debug(`Processing request for endpoint ${JSON.stringify(this)}`);

    if (this.responseType === "script") {
      await this.processResponseScript(req, rep);
    }
    if (this.responseType === "file") {
      const stream = fs.createReadStream(
        path.resolve(ServerContext.getResponseDir(), this.response)
      );
      rep.type("application/file").send(stream);
    } else {
      rep.type("text/html").send(this.response);
    }
  }

  async processResponseScript(req: SeverRequest, rep: SeverReply) {
    try {
      const resFunc = (
        await import(
          path.resolve(ServerContext.getResponseDir(), this.response)
        )
      ).default;
      await resFunc(req, rep);
    } catch (e) {
      antLogger.error(`Error processing response script ${this.response}`);
      antLogger.error(e);
      rep.status(500).send(`Internal Server Error - ${e}`);
    }
  }
}
