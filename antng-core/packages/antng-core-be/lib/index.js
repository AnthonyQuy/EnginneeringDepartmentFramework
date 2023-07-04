import figlet from "figlet";
import { startHTTPServer } from "./server/startHTTPServer.js";
import path from "path";
import { initLogger, antLogger } from "@antng-core/logger";
async function run(config) {
    initLogger(config.logLevel);
    antLogger.debug(`Start BE server with config: \n${JSON.stringify(config, null, 2)}`);
    antLogger.info(figlet.textSync("antng-be", {
        font: "Slant",
        horizontalLayout: "default",
        verticalLayout: "default",
    }));
    const runningPath = path.join(process.cwd());
    await startHTTPServer(config, runningPath);
}
export { run };
