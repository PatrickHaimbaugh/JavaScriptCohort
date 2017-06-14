$(function(){

	$("#add").on("click", function(){

		var song = $("#song").val();

		var album = $("#album").val();

		var songAlbum = "song: " + song + " || album: " + album;

		var insertedHTML = "<li>" + songAlbum + "</li>";

		$("#song-list").append(insertedHTML);

		$("#song").val("");

		$("#album").val("");
	});

	$("#delete").on("click", function(){
		$("#song-list").fadeOut('slow', 'linear');


	});
});