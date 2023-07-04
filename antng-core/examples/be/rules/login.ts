const rule: HTTPRule = {
  path: "/login",
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
