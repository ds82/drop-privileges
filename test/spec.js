var sinon  = require('sinon');
var expect = require('chai').expect;

describe('drop-privileges', function() {

  var uut;
  beforeEach(function() {
    uut = require('../index');

  });

  it('should call process.setuid with given uid', function() {
    global.process.setuid = sinon.stub();

    var uid = 123;
    uut(uid);

    expect(global.process.setuid).have.been.calledWith(uid);
  });

  it('should call process.setgid with given gid', function() {
    global.process.setgid = sinon.stub();

    var gid = 999;
    uut(undefined, gid);

    expect(global.process.setgid).have.been.calledWith(gid);
  });

  it('should catch if setuid throws an error');
  it('should catch if setgid throws an error');

});
