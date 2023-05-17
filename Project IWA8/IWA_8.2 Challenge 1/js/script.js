const leoName = 'Leo Musvaire'
const leoNumber = '2'
const leoStreet = 'Church St.'
const leoPostal = '3105'
const leoBalance = '-10'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'
const sarahNumber = '13'
const sarahStreet = 'William Close'
const sarahPostal = '0310'

// Only change below this line

const leo = {
	leoname: leoName,
	leoBalance: parseInt (leoBalance),
	accessId: '47afb389-8014-4d0b-aff3-e40203d2107f',
	age: 24,},

	address = {
		leoNumber: parseInt (leoNumber),
		leoStreet: leoStreet,
		postalCode: parseInt (leoPostal),
	}

console.log(leo.leoname,leo.leoBalance,leo.accessId,leo.age,address.leoNumber,address.leoStreet,address.postalCode)

const sarah = {
	name: sarahName + sarahSurname,
	age : 62,
	AccessId: '6b279ae5-5657-4240-80e9-23f6b635f7a8',
	balance : parseInt(sarahBalance)},

	Address = {
		number : parseInt(sarahNumber),
		street : sarahStreet,
		postalCode : parseInt(sarahPostal),
	}	


console.log(sarah.name,sarah.age,sarah.AccessId,sarah.balance,Address.number,Address.street,Address.postalCode)




