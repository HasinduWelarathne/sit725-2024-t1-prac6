const chai = require('chai');
const expect = chai.expect;
const projectModel = require('../models/projectModel');

describe('Project Model Tests', function() {

  it('should insert a project', function(done) {
    const projectData = {
      title: 'Test Project',
      description: 'This is a test project',
    };

    projectModel.insertProject(projectData, function(err, result) {
      if (err) {
        done(err); // Pass error to Mocha
      } else {
        expect(result).to.be.an('object');
        expect(result).to.have.property('_id');
        expect(result.title).to.equal('Test Project');
        done();
      }
    });
  });

  it('should get all projects', function(done) {
    projectModel.getProjects(function(err, projects) {
      if (err) {
        done(err); // Pass error to Mocha
      } else {
        expect(projects).to.be.an('array');
        done();
      }
    });
  });

});
