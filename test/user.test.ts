import request from "supertest";
import app from "../src/app";
import { expect } from "chai";

describe("route APIs /api/user", () => {
    it("create new user", (done) => {
        return request(app).post("/api/user/login").send({
            email: "test@me.com",
            password: "test"
        })
            .expect(406)
            .end(function(err, res) {
                expect(res.body.error).to.be.true;
                done();
            });
    });
});