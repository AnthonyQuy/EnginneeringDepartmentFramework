const rule: HTTPRule = {
  path: "/",
  endpoints: [
    {
      endpoint: "/",
      method: "GET",
      responseType: "text",
      response: "SST Server is running...",
    },
  ],
};

export default rule;
