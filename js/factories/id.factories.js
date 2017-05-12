(function () {
  'use strict';
  
  angular
    .module('CRM')
    .factory('Id', Id);
  
  function Id () {
    return {
        rand: rand
      }
    
    function rand() {
      return Math.random().toString(36).substr(2, 10);
    }
  }
})()