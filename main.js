import readline from 'node:readline';
import {categories} from './categories.js';


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


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

function ask(prompt, timeLimit) {

    return new Promise(function(resolve) {

        let answered = false;

        let timer = null;


        if (timeLimit) {

            timer = setTimeout(function() {

                if (answered === false) {

                    answered = true;

                    console.log("\nTime's up!");

                    resolve(null);
                }

            }, timeLimit);
        }


        rl.question(prompt, function(answer) {

            if (answered === false) {

                answered = true;

                clearTimeout(timer);

                resolve(answer);
            }
        });
    });
}


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

 displayWelcome();


//display categories 

function displayCategories() {

    console.log("Choose a category:");

    for (let i = 0; i < categories.length; i++) {

        console.log(
            categories[i].id + ". " + categories[i].name
        );
    }
}


function displayLevelInfo(){
    console.log("\n------");

    switch (currentLevel) {
        case 1:
            console.log("LEVEL 1 - EASY");
            break;
        case 2:
            console.log("LEVEL 2 - MEDIUM");
            break;
        case 3:
            console.log("LEVEL 3 - HARD");
            break;
    }
    console.log("\n");
};

function displayQuestion(question, questionNumber){
    console.log("Question " + questionNumber + " of " + QUESTIONS_PER_LEVEL);

    console.log("");
    console.log("");

    console.log(question.question);
    console.log("");

    for(let i = 0; i < question.answers.length; i++) {
        console.log((i + 1) + ". " + question.answers[i]);
    }
    console.log("");
}

