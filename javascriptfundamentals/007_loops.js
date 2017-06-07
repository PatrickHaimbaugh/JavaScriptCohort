console.log("--Bronze--");

for(i = 0; i <= 10; i++)
{
	console.log(i * 2);
}
console.log("--Silver--");
for(i = 0; i <= 4; i++){
	console.log(i * 25);
	if (i * 25 == 50)
	{
		console.log("Halfway there!");
	}
}

console.log("--Gold--");

for(i = 0; i <= 10; i++)
{
	if(i == 9)
	{
		console.log("nine");
	}else if(i == 10){
		console.log("ten");
	}else{
		console.log(i);
	}
}