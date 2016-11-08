$(document).ready(function(){
	console.log("document loaded");


	$('button').on('click',function(){
		
		// ARRAY TO PUSH INPUT INTO ARRAY AND HOLD PREVIOUS SEARCHES
		var prevGifsSearched = [];

		//APPLY SEARCH INPUT TO VARIABLE
		var getGif = $(this).data('gifs');

		//API URL QUERY
		var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + getGif + "&api_key=dc6zaTOxFJmzC&limit=10"


			$.ajax({
				url: queryURL,
				method: 'GET',
			})
				.done(function(response){
				 var results = response.data;	

				})
	});  // Ends $('button') LINE 5
}); // Ends Script from Document.ready - LINE 1