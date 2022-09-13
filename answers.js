// Part 1
console.log('My comfort level: 4')

// Easy going
for (let num = 1; num <= 20; num++) {
    console.log(num);
  }

// Get Even
for (let num = 0; num < 200; num += 2) {
    console.log(num);
  }

// Fizz Buzz

//This is a classic problem that you should get really comfortable solving. If you've solved it before, try to make it more elegant and short.
// 1.Write a javascript application that logs all numbers from 1 - 100.
// 2.If a number is divisible by 3 log "Fizz" instead of the number.
// 3.If a number is divisible by 5 log "Buzz" instead of the number.
// 4. If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number.

for (let num = 0; num <= 100; num++) {
    if (num % 3 == 0 && num % 5 == 0) {
      console.log(`FizzBuzz`);
    }
    if (num % 3 !== 0) {
      console.log(`Fizz`);
    } else if (num % 5 == 0) {
      console.log(`Buzz`);
    } else {
      console.log(num);
    }
  }

// Wild Life
