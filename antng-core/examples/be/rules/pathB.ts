const rule: HTTPRule = {
  path: "/pathB",
  endpoints: [
    {
      method: "GET",
      endpoint: "/:id",
      response: "$(script)pathB/script.ts"
    },
    {
      method: "GET",
      endpoint: "/1",
      response: "$(file)pathB/fileB.json"
    }
  ]
};
export default rule;
