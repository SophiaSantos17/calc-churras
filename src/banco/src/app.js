const express = require('express');
const swaggerJSDoc = require("swagger-jsdoc"); // biblioteca de documentação
const swaggerUI = require("swagger-ui-express"); // parte visual

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const router = require('./routes.js');

app.use(router);

const options = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Api Banco Cauculadora Churrasco",
        version: "1.0.0",
        description:
          "A api tem como função mostrar as requisições do arquivo",
      },
    },
    apis: ["./docs/*.js"],
  };
  
  const swaggerSpec = swaggerJSDoc(options);
  
  // Use o Swagger UI Express para servir a documentação Swagger
  app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));
  



app.listen(port, ()=> {
    console.log (`rodou na porta ${port}`)
})