var $friends = $('#friends');
var $name = $('#name');
var $age = $('#age');
var $id = $('id');


var friendTemplate = "" +
	"<li>" +
	"<p><strong>Name:</strong> {{name}}</p>" +
	"<p><strong>Age:</strong> {{age}}</p>" +
	"<p><strong>Id:</strong> {{id}}</p>" + 
	"<button id='{{id}}' class='btn btn-default remove'>Delete</button>" +
	"</li>";



$(document).ready(function(){
	$.ajax({
		type: 'GET',
		url: 'http://rest.learncode.academy/api/learncode/friends',
	}).done(function(friends){
		$.each(friends, function(i, friend){
				addFriend(friend);
			});
	}).fail(function(){
		console.log("error loading friends");
	});

	$('#add-friend').on('click', function(){
		var friend ={
			name: $name.val(),
			age: $age.val()		
		};
		$.ajax({
			type: 'POST',
			url: 'http://rest.learncode.academy/api/learncode/friends',
			data: friend
		}).done(function(newFriend){
			addFriend(newFriend);
		}).fail(function(){
			alert("error saving order");
		})
	})

	$friends.delegate('.remove', 'click', function(){

		var $li = $(this).closest('li');

		$.ajax({
			type: 'DELETE',
			url: 'http://rest.learncode.academy/api/learncode/friends/' + $(this).attr('id'),
		}).done(function(){
			$li.fadeOut(300, function(){
				$(this).remove();
			});
		});
	});
});


function addFriend(friend){
	$friends.append(Mustache.render(friendTemplate, friend));
}

//what the class did (getting luke skywalker in console)


// $(document).ready(function(){
// 	$.ajax({
// 		type:'GET',
// 		url:'http://swapi.co/api/people/',
// 	})
// 		.done(function(data){
// 			console.log(data);
// 	})
// 		.fail(function(){
// 			alert("Hey mna the server messed up")
// 		})
// });

//another try
//$(document).ready(function(){
// (function(){
// 	$.ajax({
//   type: 'GET',
//   url: 'http://rest.learncode.academy/api/johnbob/friends',
//   success: function(data) {
//     console.log("I have friends!", data); //returns all of johnbob's friends
//   }
// });
// })
//}
