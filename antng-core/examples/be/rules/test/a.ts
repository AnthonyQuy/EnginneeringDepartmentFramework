const rule: HTTPRule = {
    path: "/a",
    endpoints: [
      {
        endpoint: "",
        method: "POST",
        responseType: "script",
        response: "login/script.ts",
      },
    ],
  };
  
  export default rule;
  