console.log("--Bronze--");

function AddStrings (string1, string2){
	return string1 + string2;
}

var hi = "hi ";
var name = "bob";
console.log(AddStrings(hi, name));


console.log("--Silver--");

function BillsMonthly(water, power, heat){
	return water + power + heat;
}

console.log("Your monthy bill for water, power, and heating is " + BillsMonthly(300, 265, 100));

console.log("--Gold--");

function total(number, cost)
{
	return number * cost * 1.07;
}

console.log("100 cokes will cost you $" + total(100, .99));