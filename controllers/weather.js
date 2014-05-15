var weatherController = {
	index: function(req, res) {
		res.send({
			temperature: 65
		});
	}
};

module.exports = weatherController;