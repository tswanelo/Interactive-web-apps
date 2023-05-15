const leoName = 'Leo'
const leoSurname = 'Musvaire     '
const leoBalance = '-9394'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'

const divider = '----------------------------------'

// Only change below this line

const amountOwedByLeo = parseFloat (Math.abs(leoBalance))
const amountOwedBySarah = parseFloat(Math.abs(sarahBalance))

const leo = `${leoName} ${leoSurname}(Owed:R ${amountOwedByLeo.toFixed(2)})`
console.log(leo)

const sarah =`${sarahName}${sarahSurname} (Owed:R ${amountOwedBySarah.toFixed(2)})`
console.log(sarah)


console.log(divider)
console.log(totalAmountOwed = "TOTAL AMOUNT OWED:",(amountOwedByLeo + amountOwedBySarah).toFixed(2)) 
console.log(divider)


