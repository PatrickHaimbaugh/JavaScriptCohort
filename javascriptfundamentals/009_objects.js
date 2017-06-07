console.log("--Bronze--");

var person = {firstname: "patrick", lastname: "haimbaugh", height: "6'1", age: 17};

console.log("--Silver--");

var person = {
	firstname: "joe", 
	lastname: "keefe", 
	getName: function(){
		return this.firstname + " " + this.lastname;
	}
}

console.log(person.getName());

console.log("--Gold--");

function Bear(type)
{
	this.type = type;
}

var polar = new Bear("polar");
polar.growl = function(){
	console.log(this.type + " bear growls")
}
console.log(polar.growl());
