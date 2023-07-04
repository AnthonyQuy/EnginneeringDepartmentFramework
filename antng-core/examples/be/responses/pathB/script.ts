import { Request } from "express";

export default function (req: Request, urlParam: any): void {
  return {
    status: 203,
    body: {
      req: req.url,
      urlParam: urlParam,
    },
  };
}
