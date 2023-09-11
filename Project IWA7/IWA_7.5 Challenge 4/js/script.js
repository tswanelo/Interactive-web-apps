const leoName = 'Leo'
const leoSurname = 'Musvaire     '
const leoBalance = -9394

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = -4582.2

const divider = '----------------------------------'

// Only change below this line

const owed = leoBalance + sarahBalance;
const leo = `${leoName} ${leoSurname}(Owed: R ${Math.abs(leoBalance).toFixed(2)})\n${sarahName} ${sarahSurname}(Owed: R ${Math.abs(sarahBalance).toFixed(2)})`;
const total = `Total amount owed: R ${Math.abs(owed).toFixed(2)}`;
const result = `\n${leo}\n\n${divider}\n\n${total}\n\n${divider}`;

console.log(result);
