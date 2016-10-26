/*
Exercise
Implement a function that takes in an integer and prints out its two's complement value by following the algorithm described above. Hint: to invert the bits of a number you can use the "~" operator. For example ~25 will invert the bits of the integer 25.
*/

function d2bc(int) {
	return ~int + 1
	// //invert the binary code
	// for(var i = 1; i< binaryValue.length; i ++) {
	// 	if(binaryValue[i] === "0") {
	// 		invertedBinary += "1";
	// 	} else {
	// 		invertedBinary += "0";
	// 	}

	// }
	// //iterate through invertedbinary to add 1
	// //find first 0 from right change to 1 and invert values to the right

	// console.log("binary value " + binaryValue);
	// console.log("inverted " + invertedBinary);
	// console.log("twosCompliment " + twosCompliment);
	// console.log("goal to get 00100110")
	// console.log(invertedBinary.lastIndexOf("0"))
}

console.log(d2bc(90));
