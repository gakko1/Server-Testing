const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

const chai = require('chai');
const chaihttp = require('chai-http');
const { expect } = chai;
const sinon = require('sinon');

const server = require('./server');

chai.use(chaihttp);

describe('Server', () => {
  describe(`[POST] /characters`, () => {
    it('should add a new character', () => {
      const newCharacter = {
        name: 'Aragorn',
        world: 'Lord of the Rings',
        weapon: 'Sword'
      };
      chai
        .request(server)
        .post(`/characters`)
        .send(newCharacter)
        .end((err, res) => {
          if (err) console.error(err);
          expect(res.status).toEqual(200);
          expect(res.body.name).toEqual('Aragorn');
          expect(res.body.world).toEqual('Lord of the Rings');
        });
    });
    it('should send the new character', () => {});
  });

  describe(`[GET] /characters`, () => {
    it('should return a complete list of characters', () => {});
    it('should return an array', () => {});
  });
});
