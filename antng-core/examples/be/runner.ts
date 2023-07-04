import { run } from "@antng-core/be";

const config: AntServerConfig = {
  rulesDir: "./rules",
  responsesDir: "./responses",
  port: 3000,
  logLevel: "debug",
};

await run(config);
