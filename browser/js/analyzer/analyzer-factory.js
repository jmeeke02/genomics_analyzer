app.factory('AnalyzerFactory', function ($http) {

	return  {
		getExampleResults: function (){
			console.log('in factory');
			return $http.get('/data')
				.then(function (response){
					console.log(response.data);
					return response.data;
				})
		}
	}
})