//https://github.com/microsoft/TypeScript-Node-Starter
//https://www.digitalocean.com/community/tutorials/nodejs-jwt-expressjs
//https://medium.com/better-programming/a-practical-guide-for-jwt-authentication-using-nodejs-and-express-d48369e7e6d4
import errorhandler from "errorhandler";

import app from "./app";

app.use(errorhandler());

const server = app.listen(app.get("port"), () => {
    console.log(
        "  App is running at http://localhost:%d in %s mode",
        app.get("port"),
        app.get("env")
    );
    console.log("  Press CTRL-C to stop\n");
});

export default server;