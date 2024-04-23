const chai = require('chai');
const expect = chai.expect;
const projectController = require('../controllers/projectController');
describe('Project Controller Tests', function() {

  it('should get all projects', function(done) {
    const mockReq = {};
    const mockRes = {
      status: function(statusCode) {
        expect(statusCode).to.equal(200);
        return this; 
      },
      json: function(data) {
        expect(data).to.have.property('statusCode', 200);
        expect(data).to.have.property('message', 'Success');
        expect(data).to.have.property('data');
        expect(data.data).to.be.an('array');
        done();
      }
    };

    projectController.getProjects(mockReq, mockRes);
  });

  it('should insert a project', function(done) {
    const mockReq = {
      body: {
        title: 'Test Project',
        description: 'This is a test project',
      }
    };
    const mockRes = {
      status: function(statusCode) {
        expect(statusCode).to.equal(200);
        return this; 
      },
      json: function(data) {
        expect(data).to.have.property('statusCode', 200);
        expect(data).to.have.property('message', 'Project Successfully added');
        expect(data).to.have.property('data');
        expect(data.data).to.be.an('object');
        expect(data.data).to.have.property('title', 'Test Project');
        done();
      }
    };

    projectController.insertProject(mockReq, mockRes);
  });

});
