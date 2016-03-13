app.config(function ($stateProvider) {
    $stateProvider.state('home', {
        url: '/home',
        templateUrl: 'browser/js/home/home.html',
        controller: 'HomeCtrl'
    }),
    $stateProvider.state('analyzer', {
    	url:'/analyzer/:userid',
    	templateUrl: 'browser/js/analyzer/analyzer.html',
    	controller: 'AnalyzerCtrl',
    	resolve: {
    		dataset: function(AnalyzerFactory, $stateParams){
    			console.log('runs');
    			return AnalyzerFactory.getExampleResults($stateParams.userid)
    			.then(function(allTests){
    				return allTests;
    			})
    		}
    	}
    })
});



