'use strict';

describe('Controller: CommuteCtrl', function () {

  // load the controller's module
  beforeEach(module('georgediepApp'));

  var CommuteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CommuteCtrl = $controller('CommuteCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CommuteCtrl.awesomeThings.length).toBe(3);
  });
});
