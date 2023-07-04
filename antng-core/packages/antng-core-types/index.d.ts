// interface VR {
//   dir?: string;
//   baselinePath?: string;
//   actualPath?: string;
//   diffPath?: string;
//   path?: string;
//   autoSaveBaseline: boolean;
//   compareScreenshot: boolean;
//   beforeScreenshotPause: number;
// }

// interface Reports {
//   dir: string;
// }

// interface ReportPortalConfig {
//   enabled: boolean;
//   token: string;
//   endpoint?: string;
//   launch: string;
//   project: string;
//   description: string;
//   attributes: any[];
// }

// interface FEReportPortalConfig extends ReportPortalConfig {
//   autoAttachScreenshots?: boolean;
//   //https://github.com/BorisOsipov/wdio-reportportal-reporter/blob/master/lib/constants.ts
//   screenshotsLogLevel?: "ERROR" | "TRACE" | "DEBUG" | "INFO" | "WARN" | "";
// }

// interface Screenshots {
//   dir: string;
//   path: string;
// }
// //https://www.npmjs.com/package/jest-html-reporters/
// interface JestReportOption {
//   publicPath?: string;
//   filename?: string;
//   expand?: boolean;
//   pageTitle?: string;
//   logoImgPath?: string;
//   hideIcon?: boolean;
//   customInfos?: any;
//   testCommand?: string;
//   multipleReportsUnitePath?: string;
// }

// interface ContourConfig {
//   baseUrl?: string;
//   logLevel: "trace" | "debug" | "info" | "warn" | "error" | "silent";
//   framework?: string;
//   msTeamsNotification?: MsTeamsWebHookConfig;
//   env: string;
//   envProfile?: any;
//   runtimeConfig?: any;
// }

// interface ContourBETConfig extends ContourConfig {
//   rootDir?: string;
//   jestReportOption?: JestReportOption;
//   reportPortal?: ReportPortalConfig;
//   testMatch: Array<string>;
//   stepDefinitions?: Array<string>;
//   baseline: boolean;
//   csvDataPath?: string;
//   filterDir?: string;
//   templateDir?: string;
//   snapshotDir?: string;
//   testTimeouts?: number;
//   retryTimes?: number;
//   maxWorkers?: number;
//   maxConcurrency?: number;
//   setupFilesAfterEnv?: Array<string>;
//   verbose?: boolean;
//   [key: string]: any;
// }

// interface ContourBET extends ContourBETConfig {
//   overrideConfigPath?: string;
//   csvDataPath?: string;
//   filterPath?: string;
//   templatePath: string;
//   snapshotActualPath: string;
//   snapshotExpectedPath: string;
//   maxWorkers: number;
//   maxConcurrency: number;
//   verbose: boolean;
//   retryTimes: number;
// }

// interface ContourFETConfig extends ContourConfig {
//   specFileRetries?: number;
//   browserWaitTimeout?: number;
//   hubUrl?: string;
//   capabilities?: Array<any>;
//   locators: Array<string>;
//   outputDir?: string;
//   reportDir?: string;
//   reportPortal: FEReportPortalConfig;
//   runType: "chromedriver" | "selenium-standalone" | "hub";
//   screenshotDir?: string;
//   specs: Array<string>;
//   stepDefinitions: Array<string>;
//   tagExpression: string;
//   vr: VR;
//   standAloneOptions?: any;
//   driverOptions?: any;
//   debugFailStep?: boolean;
//   stepTimeOut?: number;
//   failFast?: boolean;
//   maxInstances?: number;
//   [key: string]: any;
// }

// interface MsTeamsWebHookConfig {
//   enabled: boolean;
//   webhookURL?: string;
//   notifyFailingTestsOnly: boolean;
// }

// interface ContourTestResults {
//   configFile: string;
//   startTime: number;
//   endTime: number;
//   duration: string;
//   totalFeatureCount: number;
//   totalScenarioCount: number;
//   passedCount: number;
//   failedCount: number;
//   failedScenarios: string[];
//   reportPortalURL?: string;
//   jenkinsURL?: string;
// }

// interface ContourFET extends ContourFETConfig {
//   browserWaitTimeout: number;
//   hubUrl: string;
//   capabilities: Array<any>;
//   getPage(page: string): any;
//   getPageElement(page: string, element: string): string;
//   outputDir: string;
//   reportDir: string;
//   overrideConfigPath?: string;
//   pages: Map<string, PageLocators>;
//   reports: Reports;
//   parallelID?: number;
//   appVersion?: string;
//   [key: string]: any;
// }

// interface PageLocators {
//   url: string;
//   title: string;
//   locators: Map<string, string>;
// }

// interface Environments {
//   [key: string]: {
//     [key: string]: {
//       baseUrl: string;
//       [key: string]: any;
//     };
//   };
// }

// interface TCPServerConfig {
//   enable: boolean;
//   port: number;
// }

// interface HTTPServerConfig {
//   enable: boolean;
//   rules: string;
//   responsesDir: string;
//   port: number;
// }

// interface ContourSST {
//   tcp: TCPServerConfig;
//   http: HTTPServerConfig;
//   logLevel: string;
//   configDir?: string;
// }

// declare let contourfet: ContourFET;
// declare let contourbet: ContourBET;
// declare let contoursst: ContourSST;
// declare let contourconfig: ContourConfig;
// declare let contourTestResults: ContourTestResults;

// interface LeveledLogMethod {
//   (message: string, callback: void): ContourLogger;
//   (message: string, meta: any, callback: void): ContourLogger;
//   (message: string, ...meta: any[]): ContourLogger;
//   (message: any): ContourLogger;
// }
// interface LogMethod {
//   (level: string, message: string, callback: void): ContourLogger;
//   (level: string, message: string, meta: any, callback: void): ContourLogger;
//   (level: string, message: string, ...meta: any[]): ContourLogger;
//   (level: string, message: any): ContourLogger;
//   (arg: HttpLog): ContourLogger;
// }
// interface HttpLog {
//   http?: boolean;
//   other?: boolean;
//   level: string;
//   message: string;
// }
