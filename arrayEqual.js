/*Write a function arraysAreEqual that takes two arrays
arr1rand arr2 as input and returns true if the arrays are
equal (i.e., contain the same elements in the same order),
and false otherwise.*/

function arrayEqual (arr1,arr2){
	if(arr1.join("")===arr2.join("")){
		return "Both array are same"
	} else {
		return "Both array are not same"
	}
};

console.log(arrayEqual([1,2,3],[1,2,5]))
