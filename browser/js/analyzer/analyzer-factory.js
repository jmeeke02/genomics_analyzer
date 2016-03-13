app.factory('AnalyzerFactory', function ($http) {

	return  {
		getExampleResults: function (key){
			console.log('in factory');
			return $http.get('/data/' + key)
				.then(function (response){
					console.log(response.data);
					return response.data;
				})
		}
	}
})