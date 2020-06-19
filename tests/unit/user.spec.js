const supertest = require("supertest");
const assert = require('assert');
const app = require("../appaux");

describe("Gestão de usuário", function() {

  it("Cadastrar usuário", function(done) {
    let user = {
      name: "Guilherme",
      phone: "1158916551",
      email: "user@email.com"
    }
    supertest(app)
      .post("/api/users/")
      .send(user)
      .expect(201)
      .end(function(err, res) {
        if (err) return done(err);
        done();
      });
  }).timeout(10000);

  it("Alterar usuário", function(done) {
    let user = {
      name: "Guilherme Almeida Rezende",
      phone: "11985636371",
      email: "galmeida8@outlook.com"
    }
    supertest(app)
      .put("/api/users/1158916551")
      .send(user)
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        done();
      });
  }).timeout(10000);

  it("Encerrar conta do usuário", function(done) {
    supertest(app)
      .delete("/api/users/11985636371")
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        done();
      });
  }).timeout(10000);

});