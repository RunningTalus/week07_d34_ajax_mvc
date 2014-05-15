var request = require('request'); 
//require statements are on a per file basis (i.e. SCOPE)
//npm install --save request

var weatherController = {
	index: function(req, res) {
		request('https://api.forecast.io/forecast/6311986a95d966dc676123c7c82c7a62/40.01656,-105.220155', 
		function (err, response, body) {
			var bodyObject = JSON.parse(body);
			res.send(bodyObject.currently);
		});
	}
};



module.exports = weatherController;