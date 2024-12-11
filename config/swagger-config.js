const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Express with Swagger implementation",
      version: "0.1.0",
      description:
        "Simple CRUD for indicating swagger implementation with Express",
      license: {
        name: "MIT",
        url: "https://hossein.dev",
      },
      contact: {
        name: "Hossein Mousavi",
        url: "https://hossein.dev",
        email: "dev.hosseinmousavi@gmail.com",
      },
    },
    servers: [
      {
        url: "http://localhost:3000/",
      },
    ],
  },
  apis: ["./routes.js"],
};

module.exports = options;
