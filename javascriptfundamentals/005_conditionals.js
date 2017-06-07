console.log("--Bronze--");

var age1 = 1;
var age2 = 13;
var age3 = 19;
var age4 = 40;
var age5 = 100;

if (age3 == 1){
	console.log("welcome to the world");
}else if(age3 == 18){
	console.log("you can now vote!")
}else{
	console.log("you are now use to the world.");
}

console.log("--Silver--");

var Colts = 1/3;
var Patriots = 3/1;

if(Colts > Patriots){
	console.log("We are better!");
}else if(Colts < Patriots){
	console.log("You guys cheat");
}else{
	console.log("you guys play dirty");
}

console.log("--Gold--");

var i = 1;
while(i <= 100)
{
	if(i % 15 == 0)
	{
		console.log("FizzBuzz");
	}else if(i % 5 == 0){
		console.log("Buzz");
	}else if(i % 3 == 0){
		console.log("Fizz");
	}else{
		console.log(i);
	}
	i++;
}

// var num = 0;

// while(num <= 100)
// {
// 	if(num % 5 === 0 && num % 3 === 0)
// 	{
// 		console.log("FizzBuzz");
// 	}else if(num % 3 === 0){
// 		console.log("Fizz");
// 	}else if(num % 5 === 0){
// 		console.log("Buzz");
// 	}else{
// 		console.log(num);
// 	}

// 	num = num + 1;
// }

// for(i=0;i<100;)console.log((++i%3?'':'Fizz')+(i%5?'':'Buzz')||i)