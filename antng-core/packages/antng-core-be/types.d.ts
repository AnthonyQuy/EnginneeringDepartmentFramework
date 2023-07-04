interface CookieOptions {
  maxAge?: number;
  signed?: boolean;
  expires?: Date;
  httpOnly?: boolean;
  path?: string;
  domain?: string;
  secure?: boolean;
  encode?: (val: string) => string;
  sameSite?: boolean | "lax" | "strict" | "none";
}

interface HTTPCookie {
  name: string;
  val?: string;
  options?: CookieOptions;
}

interface HTTPRule {
  path: string;
  endpoints: Array<HTTPEndpoint>;
}

type ServerResponseType = "script" | "file" | "text";

type HttpMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
interface HTTPEndpoint {
  endpoint: string;
  method: HttpMethod;
  response: string;
  responseType?: ServerResponseType;
  urlParam?: string;
  rank?: number;
}

interface HTTPContext {
  rules: Array<HTTPRule>;
  responsesDir: string;
}

type AntServerConfig = {
  rulesDir: string;
  responsesDir: string;
  port: number;
  logLevel: LogLevel;
};
