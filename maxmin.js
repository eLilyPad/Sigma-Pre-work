const test_arr_1 = [2, 4, 1, 0, 2, -1]
const test_arr_2 = [20, 50, 12, 6, 14, 8]
const test_arr_3 = [100, -100]

let min, max;

console.log(min_max(test_arr_1))
console.log(min_max(test_arr_2))
console.log(min_max(test_arr_3))

function min_max(arr = []) {
	min = arr[0]
	max = arr[0]

	arr.forEach(element => {
		min = is_lowest_int(element)
		max = is_highest_int(element)
	});

	return [min, max]
}

function is_lowest_int(param) {
	return min > param ? param : min 
}

function is_highest_int(param) {
	return max < param ? param : max
}