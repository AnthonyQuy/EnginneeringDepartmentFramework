import winston from "winston";
import {
  ConsoleTransportOptions,
  FileTransportOptions,
} from "winston/lib/winston/transports";
const { combine, printf, label, timestamp } = winston.format;

interface LogOption {
  console: ConsoleTransportOptions;
  file: FileTransportOptions;
}

const logLevels = {
  trace: 6,
  debug: 5,
  info: 4,
  warn: 3,
  error: 2,
  silent: 1,
};

let antLogger: winston.Logger;

function initLogger(logLevel: LogLevel): void {
  const myFormat = printf((info) => {
    return `${info.timestamp} [${info.label}] ${info.level}: ${info.message}`;
  });

  const noHttp = winston.format((info) => {
    if (info.http || info.other) {
      return false;
    }
    return info;
  });

  const options: LogOption = {
    console: {
      handleExceptions: true,
      format: combine(
        noHttp(),
        label({ label: "@antng-log" }),
        timestamp(),
        myFormat
      ),
    },
    file: {
      filename: "antng.log",
      options: { flags: "w" },
      format: combine(label({ label: "@antng-log" }), timestamp(), myFormat),
      handleExceptions: true,
    },
  };

  const transports = [
    new winston.transports.Console(options.console),
    new winston.transports.File(options.file),
  ];

  antLogger = winston.createLogger({
    level: logLevel,
    levels: logLevels,
    transports,
  }) as any;
}

export { antLogger, initLogger };
