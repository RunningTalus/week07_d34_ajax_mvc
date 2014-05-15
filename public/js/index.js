$(function(){

	$('#weather').on('click', function(){
		
		$.get('/weather', function(data) {
			$('body').append('  - The temperature is: ' + data.temperature);
		});
	});

	return false;
});