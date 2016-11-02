angular.module('qualiscc').controller('QualisController', function($scope, $http) {

$scope.periodicos = [];
$scope.filtro = '';


$http.get('/v1/qualis')
	.success(function(periodicos){
		$scope.periodicos = periodicos;
		console.log(periodicos);
	}).error(function(erro){
		console.log(erro);
});

});
