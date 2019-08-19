//Require the dev-dependencies
let chai = require("chai");
let chaiHttp = require("chai-http");
let server = "https://wh.niweera.gq";
let should = chai.should();

chai.use(chaiHttp);
//Our parent block
describe("WH-API/", () => {
  beforeEach(done => setTimeout(done, 120000));
  /*
   * Test the /GET route
   */

  describe("/GET sad", () => {
    it("It should GET all the words that can create with a,s,d", done => {
      chai
        .request(server)
        .get("/sad")
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.json;
          res.body.should.be.a("array");
          res.body[0].should.have.property("word");
          res.body[0].word.should.be.a("string");
          res.body[0].word.should.equal("ads");
          res.body[0].should.have.property("definition");
          res.body[0].definition.should.be.a("string");
          res.body[0].definition.should.equal("An advertisement.");
          done();
        });
    });
  });
});
