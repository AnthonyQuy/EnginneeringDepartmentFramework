import fastifyCookie from "@fastify/cookie";
import { FastifyReply } from "fastify";
export interface SeverReply extends FastifyReply {
    setCookie(name: string, value: string, options?: fastifyCookie.CookieSerializeOptions): this;
}
//# sourceMappingURL=SeverReply.d.ts.map