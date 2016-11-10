$(document).ready(function(){
	console.log("document loaded");

// SET AN ARRAY WITH A NUMBER OF ANIMALS
var gifList = ['Tigers','Lion','Sloth','Donald Trump']


function displayGifs(){
	var gif = $(this).attr('data-gifs');
	var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + gif + "&api_key=dc6zaTOxFJmzC&limit=10"

	//CALL GIPHY AJAX
	$.ajax({url: queryURL, metho: 'GET'}).done(function(response){
			console.log(response);

	});
}




function renderButtons(){

	// DELETES THE GIFS PRIOR TO ADDING NEW MOVIES 
	$("#gifsButtons").empty();

	//LOOPS THROUGH THE ARRAY OF GIFS SEARCH
	for(var i = 0; i < gifList.length; i++){

		var a = $('<button>')

		// Class="giphys"
		a.addClass('giphys') ;

		// add data-gifs attribute
		a.attr('data-gifs');
		
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
})

$(document).on('click','.giphys',displayGifs);

renderButtons();



}); // Ends Script from Document.ready - LINE 1

// http://api.giphy.com/v1/gifs/search?q=kanye&api_key=dc6zaTOxFJmzC&limit=10