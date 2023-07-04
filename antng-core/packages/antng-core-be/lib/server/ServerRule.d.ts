import { ServerEndpoint } from "./ServerEndpoint.js";
export declare class ServerRule implements HTTPRule {
    path: string;
    endpoints: ServerEndpoint[];
    constructor(rule: HTTPRule);
}
//# sourceMappingURL=ServerRule.d.ts.map