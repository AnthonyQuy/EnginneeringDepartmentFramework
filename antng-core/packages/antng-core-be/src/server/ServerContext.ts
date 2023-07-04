import { antLogger } from "@antng-core/logger";
import { glob } from "glob";
import { ServerRule } from "./ServerRule.js";
import path from "path";

export class ServerContext {
  static rules: ServerRule[] = [];
  static responsesDir = "";

  static getRules(): ServerRule[] {
    return ServerContext.rules;
  }
  static getResponseDir(): string {
    return ServerContext.responsesDir;
  }

  static async initHTTPServerContext(
    configDir: string,
    responsesDir: string,
    rulesDir: string
  ) {
    const responseDirPath = path.join(configDir, responsesDir);
    const rulesDirPath = path.join(configDir, rulesDir);

    antLogger.debug(
      `initHTTPContext \n - rulesDir: ${rulesDirPath} \n - responsesDir: ${responseDirPath}`
    );

    this.responsesDir = responseDirPath;
    await this.loadRules(rulesDirPath);
  }

  static async loadRules(rulesDir: string): Promise<void> {
    const files = await glob(`${rulesDir}/**/*.ts`, {});
    for (const f of files) {
      const rule: HTTPRule = (await import(f)).default;
      this.rules.push(new ServerRule(rule));
      antLogger.debug(
        `initHTTPContext - loaded rule: ${JSON.stringify(rule, null, 2)}`
      );
    }
  }
  static getMatchedRule(url: string): ServerRule {
    const matchedRule = this.rules.find((r: ServerRule) => {
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
