const leoName = 'Leo';
const leoSurname = 'Musvaire     ';
const leoBalance = '-9394';

const sarahName = 'Sarah    ';
const sarahSurname = 'Kleinhans';
const sarahBalance = '-4582.21000111';

const divider = '----------------------------------';

// Only change below this line

const LBalance = parseFloat(Math.abs(leoBalance).toFixed(2)) 
const SBalance = parseFloat(Math.abs(sarahBalance).toFixed(2)); // Parse as float
const owed = LBalance + SBalance


const leo = `${leoName} ${leoSurname} (Owed : R ${LBalance})`;
const sarah = `${sarahName} ${sarahSurname} (Owed : R ${SBalance})`;
const total = "Total amount owed: R ";

const result = `${leo}\n${sarah}\n${divider}\n${total}${owed.toFixed(2)}\n${divider}`;

console.log(result);
