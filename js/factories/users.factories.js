(function () {
  'use strict';
  
  angular
    .module('CRM')
    .factory('Users', Users)
  
  function Users (Id) {
    return {
      load: load,
      save: save
    }
    
    function load() {
      if ('users' in localStorage) {
        return JSON.parse(localStorage.getItem('users'));
      } else {
        return [
        {
          name: 'Imanol',
          age: 33,
          photo: 'https://randomuser.me/api/portraits/men/1.jpg',
          phone: 601234567,
          email: 'imanol44@ticketea.com',
          description: 'Profesor de Javascript',
          other: 'jQuery',
          studies: 'Bachillerato',
          id: Id.rand()
        }, {
          name: 'Miguel',
          age: 34,
          photo: 'https://randomuser.me/api/portraits/men/2.jpg',
          phone: 612345678,
          email: 'miguel@traken.com',
          description: 'Profesor de Maquetación Web',
          other: 'HTML5, CSS3 y BootStrap',
          studies: 'Secundaria',
          id: Id.rand()
        }, {
          name: 'Yunior',
          age: 24,
          photo: 'https://randomuser.me/api/portraits/men/3.jpg',
          phone: 623456789,
          email: 'yunior@crack.com',
          description: 'Profesor de AngularJS',
          other: 'Fleje de cosas',
          studies: 'Ciclo o Grado',
          id: Id.rand()
        }];
      }
    }
    
    function save(users) {
      localStorage.setItem('users', JSON.stringify(users));
    }
  }
})();