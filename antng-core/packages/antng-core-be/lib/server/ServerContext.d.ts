import { ServerRule } from "./ServerRule.js";
export declare class ServerContext {
    static rules: ServerRule[];
    static responsesDir: string;
    static getRules(): ServerRule[];
    static getResponseDir(): string;
    static initHTTPServerContext(configDir: string, responsesDir: string, rulesDir: string): Promise<void>;
    static loadRules(rulesDir: string): Promise<void>;
    static getMatchedRule(url: string): ServerRule;
}
//# sourceMappingURL=ServerContext.d.ts.map