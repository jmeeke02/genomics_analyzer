'use strict'
app.controller('AnalyzerCtrl', function ($scope, $state, dataSet){
	$scope.tests = dataSet;
	console.log('heres dataset', dataSet);
})