const rule: HTTPRule = {
  path: "/pathA",
  endpoints: [
    {
      endpoint: "",
      method: "GET",
      responseType: "text",
      response: "data",
    },
    {
      endpoint: "/1",
      method: "GET",
      responseType: "file",
      response: "pathA/file.json",
    },
    {
      endpoint: "/:id",
      method: "GET",
      responseType: "script",
      response: "pathA/script.ts",
    },
  ],
};
export default rule;
