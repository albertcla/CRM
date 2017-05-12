(function () {
  'use strict';

  angular
    .module('CRM')
    .controller('crmController', crmController);

  crmController.$inject = ['$scope', 'Users', 'Id'];

  /* @ngInject */
  function crmController($scope, Users, Id) {
    $scope.isCompleted = isCompleted;
    $scope.cancelUser = cancelUser;
    $scope.addUser = addUser;
    $scope.editUser = editUser;
    $scope.saveUser = saveUser;
    $scope.deleteUser = deleteUser;
    $scope.users = [];
    $scope.newUser = {
      name: '',
      age: null,
      photo: '',
      phone: '',
      email: '',
      description: '',
      other: ''
    };
    $scope.studies = ['Primaria', 'Secundaria', 'Bachillerato', 'Ciclo o Grado'];

    activate();

    ////////////////

    function activate() {
      $scope.users = Users.load();
      $scope.editing = false;
    }

    function isCompleted() {
      return $scope.newUser.name && $scope.newUser.photo && $scope.newUser.phone && $scope.newUser.description && $scope.newUser.other;
    }

    function cancelUser() {
      $scope.newUser = {};
      $scope.userForm.$setPristine();
      $scope.userForm.$setUntouched();
      $scope.editing = false;
    }

    function addUser(user) {
      user.id = Id.rand();
      $scope.users.push(user);
      cancelUser();
      Users.save($scope.users);
      $scope.editing = false;
    }

    function editUser(user) {
      $scope.editing = true;
      $scope.newUser = angular.copy(user);
    }

    function saveUser(user) {
      $scope.users.forEach(function (userToEdit, pos) {
        if (userToEdit.id == user.id) {
          $scope.users[pos] = user;
        }
      })
      Users.save($scope.users);
      cancelUser();
    }

    function deleteUser(user) {
      $scope.users.forEach(function (userToEdit, pos) {
        if (userToEdit.id == user.id) {
          if (prompt('¿Seguro que desea eliminar el usuario? Para confirmar escriba su nombre:') == user.name) {
            $scope.users.splice(pos, 1);
            Users.save($scope.users);
          }
        }
      })
    }

  }
})();
