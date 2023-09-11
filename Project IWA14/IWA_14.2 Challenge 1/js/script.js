const firstName = 'John';
const age = 35;
const myHobby = 'Coding';

const logTwice = (message) => {
  console.log(message);
  console.log(message);
};

function hobby() {
  logTwice(`Hello, ${firstName} (${age}). I love ${myHobby}!`);
}

hobby();



