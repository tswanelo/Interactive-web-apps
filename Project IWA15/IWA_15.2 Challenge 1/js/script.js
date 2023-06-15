// scripts.js

const data = {
	lists: [
		['first', [15, 11, 13, 7, 5]],
		['second', [2, 6, 8, 4, 14, 12, 10]],
		['third', [9, 3, 1]],
	]
}

// Only edit below
const first = data.lists[0][1];
const second = data.lists[1][1]; 
const third = data.lists[2][1]; 
const fourth = first.concat(second,third)

const result = [];

const extractBiggest = () => {
	if (first > second) {
		return first.pop();
	  } else if (second > first) {
		return second.pop();
	  } else{
		return third.pop();
	}
}

// Only edit above

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

console.log(result)
  