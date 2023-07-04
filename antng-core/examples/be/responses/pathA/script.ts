import { Request } from "express";

export default function (req: Request, urlParam: any) {
  logger.debug("===pathA===");
  logger.debug(`Request path: ${req.path}`);
  logger.debug(`Request query: ${JSON.stringify(req.query)}`);
  logger.debug(`Request urlParam: ${JSON.stringify(urlParam)}`);
  logger.debug(`Request body: ${JSON.stringify(req.body)}`);
  logger.debug(`Request cookie: ${JSON.stringify(req.cookies)}`);
  return {
    req: req.url,
    urlParam: urlParam
  };
}
