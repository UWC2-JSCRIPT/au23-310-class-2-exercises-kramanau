// 1. Create an object representation of yourself
// Should include: 
// - firstName
// - lastName
// - 'favorite food'
// - bestFriend (object with the same 3 properties as above)
const me = { firstName: 'Karolis',
             lastName: 'Ramanauskas',
             'favorite food': 'Pizza',
             bestFriend: {
              firstName: 'Sam',
              lastName: 'Friend',
              'favorite food': 'Pasta'
             } };


// 2. console.log best friend's firstName and your favorite food
console.log('Best friend\'s first name: ', me.bestFriend.firstName);
console.log('My favorite food: ', me['favorite food']);

// 3. Create an array to represent this tic-tac-toe board
// -O-
// -XO
// X-X
const board = [['-', 'O', '-'], ['-', 'X', 'O'], ['X', '-', 'X']];


// 4. After the array is created, 'O' claims the top right square.
// Update that value.
board[0][2] = 'O';

// 5. Log the grid to the console.
for (i = 0; i < board.length; i++){
  console.log(board[i]);
}

// 6. You are given an email as string myEmail, make sure it is in correct email format.
// Should be 1 or more characters, then @ sign, then 1 or more characters, then dot, then one or more characters - no whitespace
// i.e. foo@bar.baz
// Hints:
// - Use rubular to check a few emails: https://rubular.com/
// - Use regexp test method https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
const regexp = new RegExp('[a-z0-9!#$]+@[a-z0-9!#$]+\.[a-z0-9]+');
const test1 = 'google@google.com';
const test2 = 'example.com';
const test3 = 'myemail@gmail.com';
const test4 = 'abc@b.';

console.log('Testing 1: ', regexp.test(test1));
console.log('Testing 2: ', regexp.test(test2));
console.log('Testing 3: ', regexp.test(test3));
console.log('Testing 4: ', regexp.test(test4));

// 7. You are given an assignmentDate as a string in the format "month/day/year"
// i.e. '1/21/2019' - but this could be any date.
// Convert this string to a Date
const assignmentDate = '1/21/2019';
const [month, day, year] = assignmentDate.split('/');
const newDate = new Date(year, month -1, day);
console.log('Date variable: ', newDate);

// 8. Create a new Date instance to represent the dueDate.  
// This will be exactly 7 days after the assignment date.
const dueDate = new Date(newDate);
dueDate.setDate(dueDate.getDate() + 7);
console.log('Due Date variable: ', dueDate);

// 9. Use dueDate values to create an HTML time tag in format
// <time datetime="YYYY-MM-DD">Month day, year</time>
// I have provided a months array to help
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

const timeTag = `<time datetime="${dueDate.getFullYear()}-${String(dueDate.getMonth()+1).padStart(2, '0')}-${String(dueDate.getDate()).padStart(2,'0')}">${months[dueDate.getMonth()]} ${dueDate.getDate()}, ${dueDate.getFullYear()}</time>`


// 10. log this value using console.log
console.log('Time Tag: ', timeTag);