const prompt = require('readline-sync');
const readline = require("readline");
import {categories} from './categories.js';

const difficulties = {
    'easy' : 1,
    'medium' : 2,
    'hard' : 3
}


// =================
// GAME SETTINGS
// =================

const QUESTIONS_PER_LEVEL = 10;
const REQUIRED_CORRECT = 7;

// The player is not told this value.
const TIME_LIMIT = 10000;

const EASY = 1;
const MEDIUM = 2;
const HARD = 3;



