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

//  displayWelcome();


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
};

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
};

function getDifficultyId(level) { 
    switch(level) {
        case 1:
            return EASY;
        case 2:
            return MEDIUM;
        case 3:
            return HARD;
        default:
            return EASY;
    }
};

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

function getLevelQuestions(category) {
    const difficultyId = getDifficultyId(currentLevel);
    const levelQuestions = [];

    for (let i = 0; i < category.questions.length; i++) {
        if (category.questions[i].difficultyId === difficultyId) {

        }
    }

    return levelQuestions;
};

function checkAnswer(playerAnswer, question) { 
    if (playerAnswer === null) {
        return false;
    }

    const answerIndex = Number(playerAnswer) - 1;

    return answerIndex === question.correctAnswer;
}

async function chooseCategory() {
    while (true) {
        displayCategories();

        const answer = await ask("\nEnter category number: ");
        const category = categories.find(c => c.id === Number(answer));

        if (category) {
            console.log("\nYou selected: " + category.name);
            return category;
        }

        console.log("\nThis Category doesn't exist, Please try again.");
    }
}


async function playLevel(category) {       
    correctAnswers = 0;
    results[currentLevel - 1] = [];

    const levelQuestions = getLevelQuestions(category);
    displayLevelInfo();

    for (let i = 0; i < QUESTIONS_PER_LEVEL; i++) {
        const question = levelQuestions[i];

        displayQuestion(question, i + 1);

        const playerAnswer = await ask("Your answer: ", getTimeLimit());

        if (checkAnswer(playerAnswer, question)) {
            console.log("Correct!");
            correctAnswers++;
            totalScore++;
            results[currentLevel - 1].push(1);
        } else {
            console.log("Incorrect.");
            results[currentLevel - 1].push(0);
        }
    }

    console.log("\n------");
    console.log("Level " + currentLevel + " complete!");
    console.log("Correct answers: " + correctAnswers + "/" + QUESTIONS_PER_LEVEL);
    console.log("\n");

    return correctAnswers >= REQUIRED_CORRECT;
}

async function playGame() {
    currentLevel = 1;
    totalScore = 0;
    correctAnswers = 0;
    results[0] = [];
    results[1] = [];
    results[2] = [];

    while (currentLevel <= 3) {
        const category = await chooseCategory();
        const passed = await playLevel(category);

        if (!passed) {
            console.log("\nYou did not get 7 or more correct.");
            console.log("Think Faster next time! ;)");
            console.log("\n");
            return;
        }

        if (currentLevel === 3) {
            displayFinalScore();
            return;
        }

        currentLevel++;
    }
}

async function playAgain() {
    const answer = await ask("Would you like to play again? (y/n): ");
    return answer.toLowerCase() === "y";
}


// RUN PROGRAM

async function main() {
    displayWelcome();

    do {
        await playGame();
    } while (await playAgain());

    console.log("\nThanks for playing!");
}

main();