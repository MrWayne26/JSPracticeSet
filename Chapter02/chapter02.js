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
    case Joker:
        console.log("The joker is not a superhero")
}

//Q3
let number = 12;

if (number % 2 === 0 && number % 3 === 0) {
    console.log(`${number} is divisible by both 2 and 3.`);
} else {
    console.log(`${number} is not divisible by both 2 and 3.`);
}
