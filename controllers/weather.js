var weatherController = {
	index: function(req, res) {

		WeatherAPI.get(function(data){
			res.send({
				temperature: 65
			});
		});
	}
};

var request = require('request'); 
//require statements are on a per file basis (i.e. SCOPE)
//npm install --save request

module.exports = weatherController;