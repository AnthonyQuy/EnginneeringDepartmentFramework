import { SeverReply, SeverRequest } from "@antng-core/be";
import { antLogger } from "@antng-core/logger";

export default function (req: SeverRequest, rep: SeverReply): void {
  antLogger.debug("===LOGIN===");
  antLogger.debug(JSON.stringify(req.headers));
  antLogger.debug(JSON.stringify(req.body));
  rep.header("x-csrf-token", "c1e371c1-6e76-47c3-a230-bdda5aa45cd2");
  rep.setCookie("SESSION", "NWNiZGUxZTctNmZjYi00MzExLTk2MjAtYzFhNDk5MTI4ZTkw", {
    path: "/",
    httpOnly: true,
    sameSite: "lax",
  });
  rep.send({ mfaStatus: "DISABLED", mfaSecret: null, mfaSecretQR: null });
}
