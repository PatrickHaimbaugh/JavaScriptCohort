console.log("--Bronze--");

var hobbies = ["gaming", "soccer", "volleyball", "coding"];

console.log("--Silver--");

var cars = ["Honda CRV", "Ford Fusian", "360 Spider"];

for(i = 0; i < cars.length; i++)
{
	console.log(cars[i]);
}

console.log("--Gold--");

var hobbies = ["gaming", "soccer", "volleyball", "coding"];

var cars = ["Honda CRV", "Ford Fusian", "360 Spider"];

var things = [hobbies, cars];

for(i = 0; i < things.length; i++)
{
	for(b = 0; b < things[i].length; b++)
		{
			console.log(things[i][b]);
		}
}