import { antLogger } from "@antng-core/logger";
import { glob } from "glob";
import { ServerRule } from "./ServerRule.js";
import path from "path";
class ServerContext {
    static rules = [];
    static responsesDir = "";
    static getRules() {
        return ServerContext.rules;
    }
    static getResponseDir() {
        return ServerContext.responsesDir;
    }
    static async initHTTPServerContext(configDir, responsesDir, rulesDir) {
        const responseDirPath = path.join(configDir, responsesDir);
        const rulesDirPath = path.join(configDir, rulesDir);
        antLogger.debug(`initHTTPContext \n - rulesDir: ${rulesDirPath} \n - responsesDir: ${responseDirPath}`);
        this.responsesDir = responseDirPath;
        await this.loadRules(rulesDirPath);
    }
    static async loadRules(rulesDir) {
        const files = await glob(`${rulesDir}/**/*.ts`, {});
        for (const f of files) {
            const rule = (await import(f)).default;
            this.rules.push(new ServerRule(rule));
            antLogger.debug(`initHTTPContext - loaded rule: ${JSON.stringify(rule, null, 2)}`);
        }
    }
    static getMatchedRule(url) {
        const matchedRule = this.rules.find((r) => {
            const regex = new RegExp(`^${r.path}[/?]`);
            return url === r.path || url.match(regex);
        });
        if (!matchedRule) {
            const error = new Error(`No Rule Match URL - ${url}`);
            antLogger.error(error.message);
            throw error;
        }
        antLogger.debug(`getMatchedRule: matchedRule - ${matchedRule.path}`);
        return matchedRule;
    }
}
export { ServerContext };
