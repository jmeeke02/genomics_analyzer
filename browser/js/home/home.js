app.config(function ($stateProvider) {
    $stateProvider.state('home', {
        url: '/home',
        templateUrl: 'browser/js/home/home.html',
    }),
    $stateProvider.state('analyzer', {
    	url:'/analyzer',
    	templateUrl: 'browser/js/analyzer/analyzer.html',
    	controller: 'AnalyzerCtrl',
    	resolve: {
    		dataset: function(AnalyzerFactory){
    			console.log('runs');
    			return AnalyzerFactory.getExampleResults()
    			.then(function(allTests){
    				return allTests;
    			})
    		}
    	}
    })
});