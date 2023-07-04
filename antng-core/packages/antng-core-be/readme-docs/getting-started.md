| [**Home**](../README.md) | [**Getting Started**](#) |

---

# Getting Started

## Prerequisites

1. Node.JS v12
2. NPM v6
3. Preferred IDE - VS Code
4. Azure Artifacts Account
   - If you don't yet have Azure Devops access, contact @AnthonyNguyen
   - Go to https://dev.azure.com/ContourNetwork/Contour/_packaging?_a=connect&feed=npm-private
   - Follow the instructions for `npm` - `Other` from the `Setup credentials` section onwards. Note, the user `.npmrc` file resides at the root of your user home directory : `~/.npmrc`.

## Starting a new Project

### Project Initialising

1. Create and navigate to a new directory

2. Within the directory initialise NPM with the following command

   ```
   npm init -y
   ```

3. Add an `.npmrc` as follows:

   ```
   @contour:registry=https://pkgs.dev.azure.com/ContourNetwork/Contour/_packaging/npm-private/npm/registry/
   always-auth=true
   loglevel=verbose
   ```

4. Add the `@contour/sst` as a dev dependency to the package.json:

   ```json
   "devDependencies": {
      "@contour/sst": "1.0.1-alpha.20",
      "@contour/test-config": "file:../test-config",
      "@types/express": "^4.17.7"
   }
   ```

5. Run `npm install`

## Creating an Automated Functional Test

1. Create the following directory structure in your project

   ```
   test/
     responses/
     rules/
   ```

2. Create the rule file: `./rules/login.ts`

   ```ts
   const rule: HTTPRule = {
     path: "/login",
     endpoints: [
       {
         endpoint: "/",
         method: "POST",
         response: "$(script)login/script.ts"
       }
     ]
   };
   export default rule;
   ```

3) Create the response `./response/login/script.ts`

   ```ts
   import { Request } from "express";

   export default function (req: Request, urlParam: any): HTTPResponse {
     console.log("===LOGIN===");
     console.log(req.body);
     return {
       status: 200,
       body: { mfaStatus: "DISABLED", mfaSecret: null, mfaSecretQR: null }
     };
   }
   ```

4) Create the test config `./sst-config.ts`:

   ```ts
   const sst: ContourSST = {
     http: {
       enable: true,
       rules: "./rules/**/*.ts",
       responsesDir: "./responses",
       port: 20004
     },
     tcp: {
       enable: false,
       port: 1037
     },
     logLevel: "debug"
   };
   export default sst;
   ```

5) Amend the start script in `package.json`:

   ```
   "scripts": {
    "start": "contour-sst  -c ./sst-config.ts",
   }
   ```

6. Start server(s):

   ```
   npm run start
   ```
