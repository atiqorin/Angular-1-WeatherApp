var homeController = weatherApp.controller('homeController', function($scope, $location, cityService){
	$scope.city = cityService.city;

	$scope.$watch('city', function(){
		cityService.city = $scope.city;
	});

	$scope.submit = function(){
		$location.path('/forecast');
	}
});

homeController.$inject =['$scope', '$location', 'cityService'];

var forecastController = weatherApp.controller('forecastController', function($scope, $location, $routeParams, cityService, weatherService){
	$scope.city = cityService.city;
	$scope.days = $routeParams.days || '2';

	$scope.weatherResult = weatherService.getWeather($scope.city, $scope.days);

	$scope.convertToFahrenheit = function(degK) {
        
        return Math.round((1.8 * (degK - 273)) + 32);
        
    }
    
    $scope.convertToDate = function(dt) { 
      
        return new Date(dt * 1000);
        
    };

});

forecastController.$inject =['$scope', '$location', '$routeParams', 'cityService', 'weatherService'];