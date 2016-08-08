weatherApp.service('cityService', function(){
	this.city = "Houston, TX";
});

var weatherService = weatherApp.service('weatherService' , function($resource){
	this.getWeather = function(city, days){
		var WeatherAPI = $resource('http://api.openweathermap.org/data/2.5/forecast/daily', { callback: 'JSON_CALLBACK'}, {get: {method: 'JSONP'}});
		return weatherResult = WeatherAPI.get({APPID: 'APPID_KEY', q: city, cnt: days });
	}
});

weatherService.$inject = ['$resource'];
