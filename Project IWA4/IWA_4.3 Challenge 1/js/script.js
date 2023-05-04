const date= '2050'
const status= 'student,parent'
const count = '0'
 
if (date= "2050") {
	console.log(date,"January", 'New Year’s Day')
	console.log(date,"March", 'Human Rights Day')
	date = 'April'
	console.log(date, 'Family Day')
	console.log(date, 'Freedom Day')
	let count = count + 4

	if (status = "student") {
	  console.log(date,'June', 'Youth Day')
		
  }

	console.log(date,'August', 'Women’s Day')
	console.log(date,'September', 'Heritage Day')
	date = 'December'
	console.log(date, 'Day of Reconciliation')
	let count = count + 3

	if (status = "parent") {
	  console.log(date, 'Christmas Day')
	  let count = count + 1
  }

	console.log(date, 'Day of Goodwill')
	let count = count + 1
}

console.log('Your status is:', status)
console.log('The year is:', date)
console.log('The total holidays is:', count)


/*const save= '12'
const save2= '1'
const count= '0'

let count = count + 1

console.log(save,save2)