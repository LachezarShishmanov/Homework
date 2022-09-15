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

/*
Use the following arrays to answer the questions below (name,species ,
age, hometown): You should be modifying the elements by accessing them. 
It is up to you which methods to use.
*/

const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

/*
1. Plantee just had her birthday; change Plantee's array to reflect 
   her being a year older.
2. Change Wolfy's hometown from "Yukon Territory" to "Gotham City".
3. Give D'Art a second hometown by adding "Hawkins"
4. Porgee decides that Wolfy can't be named "Wolfy" anymore. 
   Remove "Wolfy" from the wolfy array and replace it with "Gameboy".
*/

plantee[2]++;
wolfy[3] = `Gotham City`;
dart.push(`Hawkins`);
wolfy[0] = `Gameboy`;

console.log(wolfy)
console.log(sharky); 
console.log(plantee); 
console.log(porgee);
console.log (dart);

// Yell at the Ninja Turtles

// 1. Create an array with the members of the ninja turtles 
//    (Donatello, Leonardo, Raphael, Michaelangelo)
// 2. Use a for of loop (not a typo - try it out! Try a for of loop) 
//    to call toUpperCase() on each of them and print out the result.
// 3. As a developer, you'll be a lifelong learner and constantly 
//    encountering new things. We'll give you little stretches like 
//    this to get you used to looking at documentation and figuring 
//    some things out on your own. You've got this!

let ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];
for (const name of ninjaTurtles) {
  console.log(name.toUpperCase());
}


//  Methods, Revisited

// Here is a list of favMovies:

const favMovies = ['Jaws', 'The Fellowship of the Ring', 
'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 
'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 
'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 
'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 
'Fast and Furious'];

/*
 - Console log: the index of Titanic
 - Do the following and console.log the final results 
   (I have included some thought questions, you don't have to write out 
   an answer for those marked as such):
Note: if you have to add to the array, feel free to add any movie you'd
      like

1. Use the .sort method Thought question: what did this do to the array? 
   Did it permanently alter it?
2. Use the method pop
3. Push "Guardians of the Galaxy"
4. Reverse the array
5. Use the shift method
6. Unshift - what does it return?
7. splice "Django Unchained" and add "Avatar" (try finding the index of "Django
 Unchained", instead of counting it yourself) Thought question: did this permanently 
 alter our array?
8.  Slice the last half of the array (challenge yourself and try to programatically determine the middle of the array rather than counting it and hard coding it) - Thought question: did this permanently alter our array?
9.  Store the value of your slice in a variable, console.log it - Thought question: what is going on here?
10. Console.log your final results
11. After running the above tasks, console.log the index of "Fast and Furious" -We removed it from the array, what value do we get when we look for the index of something that is not in the array?
12. Thought question: that we declared the variable favMovies with const, and yet, 
    we were allowed to change the array. Weird? Should we have used let?
*/

console.log(favMovies.indexOf("Titanic"));

favMovies.sort();
console.log(favMovies.indexOf("Titanic"));
/* The index of Titanic changes since the array elements are sorted. The array is mutated*/
favMovies.pop();
favMovies.push("Guardians of the Galaxy");
favMovies.reverse();
favMovies.shift();
console.log(favMovies.unshift()); //returns length
favMovies.splice(favMovies.indexOf("Django Unchained"), 0, "Avatar");
console.log(favMovies); //array was permanently changed. Splice mutates.
console.log(Math.ceil(favMovies.length / 2));
console.log(favMovies.length);
let okMovies = favMovies.slice(favMovies.length / 2 - 1);
console.log(`Mediocre movies: ${okMovies}`); //array is a copy
console.log(favMovies.indexOf("Fast and Furious"));
//The array and it's allocated space in memory stay the same. We are able to change the contents.


// Where is Waldo

// With the following multi-dimensional array
const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                    ["Lucinda", "Jacc", "Neff", "Snoop"],
                    ["Petunia", ["Baked Goods", "Waldo"]]];
// 1. Remove Eggbert (hint look at the slice/splice method(s))
// 2. Change "Neff" to "No One"
// 3. Access and console.log "Waldo"

whereIsWaldo.splice(whereIsWaldo.indexOf("Eggbert"),1)
console.log(whereIsWaldo)
whereIsWaldo[1].splice(whereIsWaldo[1].indexOf("Neff"), 1, "No One") 
console.log(whereIsWaldo)
console.log(whereIsWaldo[2][1][1])


// Excited Kitten

// 1. Write code that logs "Love me, pet me! HSSSSSS!" 20 times.
// 2. For every even number in your loop, 
//    log "...human...why you taking pictures
//    of me?...", "...the catnip made me do it...", or 
//    "...why does the red dot always get away..." at random.

for (let index = 0; index < 20; index++) {
  console.log("Love me, pet me! HSSSSSS!")    
  if (index%2==0) {
   //if even do things
   rand = Math.floor(Math.random()*100);
   if (rand >=60) {
       console.log("...human...why you taking pictures of me?...")
   } else if(rand <= 30) {
       console.log("...the catnip made me do it...")
   }    
   else{
       console.log("...why does the red dot always get away...")
   }
  } else {
   //nothing happens for odd
  } 
   }


  //  Find the Median

  // 1. Find the median number in the following nums array, then console.log 
  //    that number.
  //  Hint if you check the length of the array / 2, you might get not get a 
  //  whole number. In which case, look into Math.floor( // something )

  const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];

// Expected output:
// => 15


nums.sort()
let median = (arr) => Math.floor((arr.length)/2)
console.log(nums.slice(12,13))





















































































































