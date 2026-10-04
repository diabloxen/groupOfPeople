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
// Prompts the player for an answer and returns a Promise.
// Resolves with the entered text, or null if the time limit expires.
// The time limit is measured in milliseconds.

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
// Displays the welcome message, game rules and instructions for passing each level.
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
// Displays each category's ID and name so the player can choose a category.
function displayCategories() {

    console.log("Choose a category:");

    for (let i = 0; i < categories.length; i++) {

        console.log(
            categories[i].id + ". " + categories[i].name
        );
    }
}
// Displays the level number and difficulty based on the current level.
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
// Displays the question number, question text and available answers.
// Numbers the answers starting from 1 for the player.
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
}
// Displays the winning message, total score and results for each level.
// Uses the stored results to show whether each answer was correct or incorrect.
function displayFinalScore() {
    console.log("\n-----");
    console.log("you won");
    console.log("");

    console.log("Final Score: " + totalScore + "/30");

    console.log("\nResults:");

    for (let level = 0; level < results.length; level++) {
        console.log("\nLevel " + (level + 1) + ":");

        for (let question = 0; question < results[level].length; question++) {
            if (results[level][question] === 1) {
                console.log("Question " + (question + 1) + ": Correct");
            } else {
                console.log("Question " + (question + 1) + ": Incorrect");
            }
        }
    }

    console.log("\n-----------\n");
}
// Returns the time limit in milliseconds for the current level.
// Defaults to the easy time limit if the level is not recognised.
function getTimeLimit() {
    switch (currentLevel) {
        case 1:
            return EASY_TIME;
        case 2:
            return MEDIUM_TIME;
        case 3:
            return HARD_TIME;
        default:
            return EASY_TIME;
    }
};

// QUESTIONS
// Intended to collect questions matching the current level's difficulty.
// Currently returns an empty array because the matching questions are not added.
function getLevelQuestions(category) {
    const difficultyId = getDifficultyId(currentLevel);
    const levelQuestions = [];

    for (let i = 0; i < category.questions.length; i++) {
        if (category.questions[i].difficultyId === difficultyId) {

        }
    }

    return levelQuestions;
};
// Checks whether the player's answer matches the question's correct answer.
// Returns false if the player ran out of time.
// Converts the player's answer number to a zero-based index before comparing.
function checkAnswer(playerAnswer, question) {   //josh
    if (playerAnswer === null) {
        return false;
    }

    const answerIndex = Number(playerAnswer) - 1;

    return answerIndex === question.correctAnswer;
}
