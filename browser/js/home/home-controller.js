app.controller('HomeCtrl', function ($scope, $state, AnalyzerFactory) {
	$scope.converting = false;
	$scope.upload = function (){
		$scope.converting = true;
	}
})


app.directive('fileModel', function ($http) {
    return {
        restrict: 'A',
        scope: {
           fileupload: '=',
        },
        link: function(scope, element, attrs) {
            element.on('change', function(e){
                console.log('the element files', element[0].files[0]);
                
                var file = element[0].files[0];
                var reader = new FileReader();

                console.log("thefile", file);
                reader.readAsText(file);

                reader.onloadend = function (){
                	console.log('the bit64 encoded file', reader.result);
                    $http.post('/upload', {
                        name: file.name,
                        data: reader.result
                    });

                }
            });
        }
    };
});