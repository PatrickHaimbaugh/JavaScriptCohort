//example 1
var init = function(){
	var name = "Summer";
	function displayName(){
		console.log(name);
	}
	displayName();
}
init();

//example 2

var friend = {}

var setAge = function(myAge){
	var birthday = '5/16/2017'
	return{
		getAge: function(){
			console.log(myAge);

			return myAge;
		}
	}
}

friend.age = setAge(55);
console.log(friend.age);
// console.log(friend.getAge());
// console.log(friend.birthday);