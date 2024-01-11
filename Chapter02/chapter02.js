//Q1
let age = prompt("What is your age?")

if (age>10 && age<20)
{
    console.log("The age lies in the specified range")
}
else
{
    console.log("Your out of age range")
}

//Q2
let SuperHero = prompt("Who's Your favorite Superhero")
switch (SuperHero)
{
    case Batman:
        console.log("Batman is my favorite Superhero as well")
        break
    case Joker:
        console.log("The joker is not a superhero")
        break
    default :
    console.log("You are a dumb marvel fan")
}

//Q3
let number = prompt("What is your age");
number = Number.parseInt(number)

if (number % 2 === 0 && number % 3 === 0) {
    console.log(`${number} is divisible by both 2 and 3.`);
} else {
    console.log(`${number} is not divisible by both 2 and 3.`);
}

//Q4
let number2 = prompt("What is your age");
number2 = Number.parseInt(number2)

if (number2 % 2 === 0 || number % 3 === 0) {
    console.log(`${number2} is divisible by both 2 and 3.`);
} else {
    console.log(`${number2} is not divisible by both 2 and 3.`);
}

//Q5

let umar = 19
let k = umar> 18 ? "You can drive" : "You can not drive"
console.log(k)
