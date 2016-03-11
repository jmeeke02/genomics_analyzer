'use strict'
app.controller('AnalyzerCtrl', function ($scope, $state, dataset){
	$scope.profile = dataset;
	$scope.tests = dataset.keyResults;
	console.log('heres dataset', dataset);
})