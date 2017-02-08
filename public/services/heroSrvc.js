angular.module('heroApp').service('heroSrvc', function($http){
  this.getHeros = function(){
    return $http.get('/api/heros').then(function(response){
      return response.data
    }).catch(errHandler)
  }
})

function errHandler(err){
  console.error(err);
}
