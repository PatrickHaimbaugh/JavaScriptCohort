// (function printNum(){
// 	var a = 5;
// 	console.log(a);
// })();

var smartCar = {};
var smartCarMPG = function(totalMiles, totalGallons){
	return{
		calculateMpg : function(){
			console.log("MPG: " + totalMiles / totalGallons);
			return totalMiles / totalGallons;
		}
	};
};

smartCar.mpg = smartCarMPG(17, 15);
console.log(smartCar.mpg);
console.log(smartCar.mpg.calculateMpg());