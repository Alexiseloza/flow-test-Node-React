const supertest = require("supertest"),
expect = require('chai').expect,
app = require("../app")


describe("GET /v1/forecast if city Id is passed is expected to return that city forecast weather, if NOT local city weather must be returned", function () {
    it("it should has status code 200", function (done) {
        supertest(app)
            .get("/v1/forecast")
            .expect(200)
            .end(function (err, res) {
                if (err) done(err)
                done()
            })
    })

    it("it should return a json with a list of forecast weather for local city", async function () {
        const response = await supertest(app)
        .get("/v1/forecast")
            expect({'Content-Type': /json/})
            expect(response.body.list).to.exist
            expect(response.body.city.id).to.equal(3432043) //La Plata id
    })

    it("it should return a json with a list forecast weather for SELECTED city", async function () {
        const response = await supertest(app)
        .get("/v1/forecast/3833367") //Ushuaia id
            expect({'Content-Type': /json/})
            expect(response.body.list).to.exist
            expect(response.body.city.id).to.equal(3833367) //Ushuaia id
    })
})
