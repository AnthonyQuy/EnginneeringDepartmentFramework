import Fastify from "fastify";
import cookiePlugin from "@fastify/cookie";
import formBody from "@fastify/formbody";
import fastifyListRoutes from "fastify-list-routes";
import { httpProcessor } from "./HttpProcessor.js";
import { ServerContext } from "./ServerContext.js";
export async function startHTTPServer(config, configDir) {
    await ServerContext.initHTTPServerContext(configDir, config.responsesDir, config.rulesDir);
    const port = config.port;
    const server = Fastify({
        logger: true,
    });
    await server.register(fastifyListRoutes, { colors: true });
    server.register(cookiePlugin);
    server.register(formBody);
    server.register(httpProcessor);
    try {
        await server.listen({ port });
    }
    catch (err) {
        server.log.error(err);
        process.exit(1);
    }
}
