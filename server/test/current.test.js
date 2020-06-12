const supertest = require("supertest"),
expect = require('chai').expect,
app = require("../app")


describe("GET /v1/current if city Id is passed is expected to return that city weather, if NOT local city weather must be returned", function () {
    it("it should has status code 200", function (done) {
        supertest(app)
            .get("/v1/current")
            .expect(200)
            .end(function (err, res) {
                if (err) done(err)
                done()
            })
    })

    it("it should return a json with date of today weather for local city", async function () {
        const response = await supertest(app)
        .get("/v1/current")
            expect({'Content-Type': /json/})
            expect(response.body.id).to.equal(3432043) //La Plata id
    })

    it("it should return a json with date of today weather for SELECTED city", async function () {
        const response = await supertest(app)
        .get("/v1/current/3833367") //Ushuaia id
            expect({'Content-Type': /json/})
            expect(response.body.id).to.equal(3833367) //Ushuaia id
    })
})
