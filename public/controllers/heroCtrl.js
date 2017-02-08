angular.module('heroApp').controller('heroCtrl', function($scope, heroSrvc){

  function getHeros(){
    heroSrvc.getHeros().then(function(heros){
      $scope.heros = heros;
    })
  }
  setInterval(getHeros, 1000);
  $scope.heroes = [];
})
