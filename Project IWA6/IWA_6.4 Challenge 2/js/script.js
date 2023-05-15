const rent = 400;
const tax = '8%';
const food = 51.7501;
const salary = 800;
const transport = 10.2;
const hourOfDay = 00;
const minuteOfDay = 00;

// Only change below this line

if (hourOfDay == 00 && minuteOfDay == 00)  {

	hourOfDay && minuteOfDay !== null 

	  }else{

		hourOfDay && minuteOfDay === null
	  }
	console.log(hourOfDay && minuteOfDay)

    

	  const taxAsDecimal =parseInt(tax) / 100 * 800 // I've ParseInt the tax percentage to a real number then multiplied by the Salary of the User.
	  console.log(parseInt(tax))  // I console the parseInt tax.

	const startingAfterTax = salary * 1 - taxAsDecimal
	console.log(startingAfterTax)  // I console the startingAfterTax.
  
	  const balance = startingAfterTax - transport - food - rent
	  console.log(balance.toFixed(2))  // I console the Balance.
	  

	  

	