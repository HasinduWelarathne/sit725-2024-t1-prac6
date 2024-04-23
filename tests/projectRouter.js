const chai = require('chai');
const expect = chai.expect;
const request = require('request');
const express = require('express');
const app = express();
const projectRouter = require('../routers/projectRouter');


app.use('/api/project', projectRouter);

describe('Project Router Tests', function() {

  it('should get all projects', function(done) {
    request.get('http://localhost:5500/api/project/', function(error, response, body) {
      body = JSON.parse(body);
      expect(response.statusCode).to.equal(200);
      expect(body).to.have.property('statusCode', 200);
      expect(body).to.have.property('message', 'Success');
      expect(body).to.have.property('data');
      expect(body.data).to.be.an('array');
      done();
    });
  });

  it('should insert a project', function(done) {
    const projectData = {
      title: 'Test Project',
      description: 'This is a test project',
    };

    request.post({
      url: 'http://localhost:5500/api/project/',
      json: true,
      body: projectData
    }, function(error, response, body) {
      expect(response.statusCode).to.equal(200);
      expect(body).to.have.property('statusCode', 200);
      expect(body).to.have.property('message', 'Project Successfully added');
      expect(body).to.have.property('data');
      expect(body.data).to.be.an('object');
      expect(body.data).to.have.property('title', 'Test Project');
      done();
    });
  });

});
