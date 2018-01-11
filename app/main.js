var arrayOfObjects = [
	{id: 1,
	name: Brian,
	age: 37},
	{id: 2,
	name: Ben,
	age: 29
	}
]

var numbersArray = [1,2,3];
function sumNumbers (array){
	total = 0;
	array.forEach(number => total += number);
	return total;
}
