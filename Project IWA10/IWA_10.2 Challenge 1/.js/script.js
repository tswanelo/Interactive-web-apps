const currentYear = new Date().getFullYear();

const holidays = {
    0: {
        id: 0,
        name: 'Day of Reconciliation',
        date: new Date(`${currentYear}-12-16`),
    },
    1: {
        id: 1,
        name: 'Workers Day',
        date: new Date(`${currentYear}-04-01`),
    },
    2: {
        id: 2,
        name: 'Day of Goodwill',
        date: new Date(`${currentYear}-12-26`),
    },
    3: {
        id: 3,
        name: 'New Year Day',
        date: new Date(`${currentYear}-01-01`),
    },
    4: {
        id: 4,
        name: 'Womens Day',
        date: new Date(`${currentYear}-08-09`),
    },
    5: {
        id: 5,
        name: 'Heritage Day',
        date: new Date(`${currentYear}-09-24`),
    },
    6: {
        id: 6,
        name: 'Christmas Day',
        date: new Date(`${currentYear}-12-25 13:25`),
    },
    7: {
        id: 7,
        name: 'Youth Day',
        date: new Date(`${currentYear}-06-16`),
    },
    8: {
        id: 8,
        name: 'Human Rights Day',
        date: new Date(`${currentYear}-03-21`),
    },
};

const christmas = 6;
const futureId = 9;

// Do not change code above this comment

console.log(holidays[futureId] ? holidays[futureId].name : `ID ${futureId} not created yet`);

let copied = { ...holidays[christmas] };
copied.name = 'X-mas Day';
const correctDate = new Date(copied.date);
correctDate.setHours(0, 0, 0, 0);
const isEarlier = copied.date < holidays[christmas].date;
if (isEarlier) copied.date = correctDate;

console.log('ID change:', holidays[christmas].id !== copied.id || copied.id);
console.log('Name change:', holidays[christmas].name !== copied.name || copied.name);
console.log('Date change:', holidays[christmas].date !== copied.date || copied.date);

const firstHolidayTimestamp = Math.min(
    holidays[0].date.getTime(),
    holidays[1].date.getTime(),
    holidays[2].date.getTime(),
    holidays[3].date.getTime(),
    holidays[4].date.getTime(),
    holidays[5].date.getTime(),
    holidays[6].date.getTime(),
    holidays[7].date.getTime(),
    holidays[8].date.getTime()
);

const lastHolidayTimestamp = Math.max(
    holidays[0].date.getTime(),
    holidays[1].date.getTime(),
    holidays[2].date.getTime(),
    holidays[3].date.getTime(),
    holidays[4].date.getTime(),
    holidays[5].date.getTime(),
    holidays[6].date.getTime(),
    holidays[7].date.getTime(),
    holidays[8].date.getTime()
);

const firstHolidayDate = new Date(firstHolidayTimestamp);
const lastHolidayDate = new Date(lastHolidayTimestamp);

const firstDay = firstHolidayDate.getDate();
const firstMonth = firstHolidayDate.getMonth() + 1; // Adding 1 to the month, as January is month 0
const lastDay = lastHolidayDate.getDate();
const lastMonth = lastHolidayDate.getMonth() + 1; // Adding 1 to the month, as January is month 0

console.log(`${firstDay}/${firstMonth}/${currentYear}`);
console.log(`${lastDay}/${lastMonth}/${currentYear}`);

const randomIndex = Math.floor(Math.random() * Object.keys(holidays).length);
const randomHoliday = holidays[randomIndex];
console.log(randomHoliday.date);
