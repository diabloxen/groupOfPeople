import prompt from 'readline-sync';
import readline from 'node:readline';
import {categories} from './categories.js';


// GAME SETTINGS
const QUESTIONS_PER_LEVEL = 10;
const REQUIRED_CORRECT = 7;


// The player is not told this value, main point
const EASY_TIME = 10000;
const MEDIUM_TIME = 10000;
const HARD_TIME = 7000;

//Difficulty 
const EASY = 1;
const MEDIUM = 2;
const HARD = 3;


//Game Variables

let currentLevel = 1;
let totalScore = 0;
let correctAnswers = 0;
let selectedCategoryId = 0;


// Sttores the results of each question for each level
// 1 = correct
// 0 = incorrect

const results = [
    [],
    [],
    []
];

//Welcome message

function displayWelcome() {

    console.log("\n=============================");
    console.log("    WELCOME TO THINK FAST!");
    console.log("===============================\n");

    console.log("You have to complete 3 levels to win");
    console.log("Each level contains 10 questions.");
    console.log("");
    console.log("Answer each question as quickly as you can!");
    console.log("");
    console.log("You are being timed, but Think Fast! cause the time limit is unknown");
    console.log("");
    console.log("If time runs out, the question will be marked as incorrect.");
    console.log("");
    console.log("You need at least 7 correct answers to pass each level.");
    //temp
    console.log("Good luck!, Have Fun, Dont Die!\n");
}

// displayWelcome();


//display categories 

function displayCategories() {

    console.log("Choose a category:");

    for (let i = 0; i < categories.length; i++) {

        console.log(
            categories[i].id + ". " + categories[i].name
        );
    }
}


//passes a callback as an argument to the function, which is called when a category is selected
function chooseCategory(callback) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    displayCategories();

    rl.question("\nEnter category number: ", 
        function(answer) {

        const categoryId = Number(answer);
        let selectedCategory = null;

        for (let i = 0; i < categories.length; i++) {

            if (categories[i].id === categoryId) {
                selectedCategory = categories[i];
            }
        }

        if (selectedCategory !== null) {

            console.log(
                "\nYou selected: " + selectedCategory.name
            );

            rl.close();

            callback(selectedCategory);

        } else {

            console.log("\nInvalid category. Please try again.");

            rl.close();

            chooseCategory(callback);
        }
    });
}
