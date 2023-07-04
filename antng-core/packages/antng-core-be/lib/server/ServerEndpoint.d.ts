import { SeverRequest } from "./SeverRequest.js";
import { SeverReply } from "./SeverReply.js";
export declare class ServerEndpoint implements HTTPEndpoint {
    endpoint: string;
    method: HttpMethod;
    response: string;
    responseType?: ServerResponseType;
    urlParam?: string;
    rank?: number;
    constructor(endpoint: HTTPEndpoint);
    processRequest(req: SeverRequest, rep: SeverReply): Promise<void>;
    processResponseScript(req: SeverRequest, rep: SeverReply): Promise<void>;
}
//# sourceMappingURL=ServerEndpoint.d.ts.map