const date = 2050;
const status = 'student';
let count = 0;

if (date === 2050) {
  count = count + 5;

  console.log(date, "January", 'New Year’s Day');
  console.log(date, "March", 'Human Rights Day');

  console.log(date, 'April');
  console.log(date, 'Good Friday');
  console.log(date, 'Family Day');
  console.log(date, 'Freedom Day');

  function value(student) {
    count = count + 1;
    console.log(status, 'June', 'Youth Day');
  }

  count = count + 3;
  console.log(date, 'August', "Women's Day");
  console.log(date, 'September', 'Heritage Day');
  console.log(date, 'December');
  console.log(date, 'Day of Reconciliation');

  function gen(parent) {
    count = count + 1;
    console.log(status, 'Christmas Day');
  }

  count = count + 1;
  console.log(date, 'Day of Goodwill');

  console.log('Your status is:', status);
  console.log('The year is:', date);
  console.log('The total number of holidays is:', count);
}
