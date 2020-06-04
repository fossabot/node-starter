/**
 * @tutorial https://editor.swagger.io/
 * @tutorial https://mherman.org/blog/swagger-and-nodejs/
 */

import { SwaggerDefinition, Options as SwaggerOptions } from "swagger-jsdoc";
import path from "path";

export const swaggerDefinition: SwaggerDefinition = {
    swagger: "2.0",
    info: {
        title: "node-starter Swagger API",
        version: "1.0.0",
        description: "Endpoints to test the user registration routes"
    },
    host: `localhost:${process.env.PORT || 3000}`,
    basePath: "/api",
    schemes: ["http", "https"],
        tags: [
        {
            name: "User",
            description: "User APIs"
        }
    ],
    securityDefinitions: {
        bearerAuth: {
            type: "apiKey",
            name: "Authorization",
            in: "header",
        },
    }
};

export const swaggerOptions: SwaggerOptions = {
    swaggerDefinition: swaggerDefinition,
    apis: [path.join(__dirname, "../**/*.js")],
};