$(document).ready(function(){
	console.log("document loaded");

// SET AN ARRAY WITH A NUMBER OF ANIMALS
var gifList = ['Tigers','Lion','Sloth','Donald Trump']




function displayGifs(){
	$("#gifContent").html("");
	var gif = $(this).data('gifs');
	var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + gif + "&api_key=dc6zaTOxFJmzC&limit=10"

	//CALL GIPHY AJAX
	$.ajax({url: queryURL, method: 'GET'}).done(function(response){
			console.log(response.data);

		var results = response.data;

	for(var i = 0; i < results.length; i++){
			var gifDiv = $('<div>').addClass("col-sm-4")
			
			var gifImage = $('<img>');

			// ANIMATED GIFS
			gifImage.attr({src: results[i].images.fixed_width.url,
						class: "gif",
						'data-animate': results[i].images.fixed_width.url,
						'data-still': results[i].images.fixed_width_still.url,
			});
				console.log("animate: ", results[i].images.fixed_width.url);
				console.log("still: ", results[i].images.fixed_width_still.url)
			//STILL GIFS
			gifDiv.append(gifImage);

			$('#gifContent').prepend(gifDiv);

		}
	});
}

function renderButtons(){

	// DELETES THE GIFS PRIOR TO ADDING NEW MOVIES 
	$("#gifContent").html("");
	$('#gifsButtons').empty();

	//LOOPS THROUGH THE ARRAY OF GIFS SEARCH
	for(var i = 0; i < gifList.length; i++){

		var a = $('<button>')

		// Class="giphys"
		a.addClass('giphys');

		// add data-gifs attribute
		a.attr('data-gifs', gifList[i]);
		
		//index thru array and nunber of items
		a.text(gifList[i]);
	
		$('#gifsButtons').append(a);
	}

} //ENDS renderButtons FUNCTION



$('#addGif').on('click',function(){

	// SETS VARIABLE FROM INPUT BOX
	var gifSearch = $('#inputBox').val().trim();

	// PUSH gifSearch INTO gifList ARRAY
	gifList.push(gifSearch);
	console.log(gifList);

	//RENDER BUTTONS
	renderButtons();

	// USER CAN HIT ENTER TO SUBMIT SEARCH FOR GIFS AND ADD BUTTON
	return false;
}) // ENDS #addGif Function

$(document).on('click','.giphys',displayGifs);


renderButtons();

$('.giphys').on('click',function(){
	if()

})



}); // Ends Script from Document.ready - LINE 1

// http://api.giphy.com/v1/gifs/search?q=DonalTrump&api_key=dc6zaTOxFJmzC&limit=10




//http://api.giphy.com/v1/gifs/search?q=Kanye&api_key=dc6zaTOxFJmzC&limit=10






















