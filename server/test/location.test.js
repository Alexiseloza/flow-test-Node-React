const supertest = require("supertest"),
expect = require('chai').expect,
app = require("../app")


describe("GET /v1/location should return daily weather for local city", function () {
    it("it should has status code 200", function (done) {
        supertest(app)
            .get("/v1/location")
            .expect(200)
            .end(function (err, res) {
                if (err) done(err)
                done()
            })
    })
    it("it should return a json with date  of today weather for local city", async function () {
        const response = await supertest(app)
        .get("/v1/location")
            expect({'Content-Type': /json/})
            expect(response.body.id).to.equal(3432043) //La Plata id
    })
})
