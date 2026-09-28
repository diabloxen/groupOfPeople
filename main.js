const prompt = require('readline-sync');

const difficulties = {
    'easy' : 1,
    'medium' : 2,
    'hard' : 3
}

const categories =
[
    {
// suggest to add an id later, idk itll be useful for something later
       name: 'generalKnowledge',
       id: 1,
questions: [
    {
        question: 'What company was initially known as "Blue Ribbon Sports"?',
        answers: ['Adidas', 'Nike', 'Chelsea', 'Puma'],
        correctAnswer: 1,
        difficultyId: 1
    },
    {
        question: 'What is a word, phrase, number, or other sequence of characters that reads the same backward as forward?',
        answers: ['Idioms', 'Onomatopoeia', 'Palindrome', 'Simile'],
        correctAnswer: 2,
        difficultyId: 1
    },
    {
        question: 'What is sonophobia a fear of?',
        answers: ['Light', 'Sonar', 'Fish', 'Sound'],
        correctAnswer: 3,
        difficultyId: 1
    },
    {
        question: 'What is the 4th letter of the Greek alphabet?',
        answers: ['Gamma', 'Xi', 'Delta', 'Ligma'],
        correctAnswer: 2,
        difficultyId: 1
    },
    {
        question: 'How many dots appear on a pair of dice?',
        answers: ['64', '36', '43', '42'],
        correctAnswer: 2,
        difficultyId: 1
    },
    {
        question: "December 26 is known by what name in Ireland?",
        answers: ['Boxing Day', "Saint Stephen's Day", 'St. Patrick\'s Day', 'Saint Nicholas Day'],
        correctAnswer: 1,
        difficultyId: 1
    },
    {
        question: "What is the name of Earth's natural satellite?",
        answers: ['Lo', 'Phobos', 'Europa', 'Moon'],
        correctAnswer: 3,
        difficultyId: 1
    },
    {
        question: "Newton's First Law of motion states?",
        answers: [
            'Matter can neither be created nor destroyed',
            'An object will stay at rest or keep moving at a constant speed unless an external force acts on it.',
            'The acceleration of an object depends on its mass',
            'The total mechanical energy of an isolated system remains constant if the only forces doing work are conservative'
        ],
        correctAnswer: 1,
        difficultyId: 1
    },
    {
        question: 'What is the only gemstone produced by a living creature?',
        answers: ['Ruby', 'Obsidian', 'Quartz', 'Pearl'],
        correctAnswer: 3,
        difficultyId: 1
    },
    {
        question: "Who played Terminator in the hit movie 'Terminator'?",
        answers: ['Sylvester Stallone', 'Chuck Norris', 'Arnold Schwarzenegger', 'Brad Pitt'],
        correctAnswer: 2,
        difficultyId: 1
    },
    {
        question: 'What is the capital city of Canada?',
        answers: ['Toronto', 'Vancouver', 'Montreal', 'Ottawa'],
        correctAnswer: 3,
        difficultyId: 2
    },
    {
        question: 'Which planet is the largest in our Solar System?',
        answers: ['Earth', 'Saturn', 'Jupiter', 'Neptune'],
        correctAnswer: 2,
        difficultyId: 2
    },
    {
        question: 'Who painted the Mona Lisa?',
        answers: ['Vincent van Gogh', 'Leonardo da Vinci', 'Pablo Picasso', 'Michelangelo'],
        correctAnswer: 1,
        difficultyId: 2
    },
    {
        question: 'Which country gifted the Statue of Liberty to the United States?',
        answers: ['Spain', 'Italy', 'France', 'Germany'],
        correctAnswer: 2,
        difficultyId: 2
    },
    {
        question: 'How many sides does a hexagon have?',
        answers: ['Five', 'Seven', 'Six', 'Eight'],
        correctAnswer: 2,
        difficultyId: 2
    },
    {
        question: 'Which ocean is the largest in the world?',
        answers: ['Atlantic Ocean', 'Pacific Ocean', 'Indian Ocean', 'Arctic Ocean'],
        correctAnswer: 1,
        difficultyId: 2
    },
    {
        question: 'What is the Most common boy\'s name in the world?',
        answers: ['Mclovin', 'Leo ', 'Noah', 'Muhammad'],
        correctAnswer: 3,
        difficultyId: 2
    },
    {
        question: 'Which country is famous for the ancient city of Machu Picchu?',
        answers: ['Brazil', 'Mexico', 'Peru', 'Chile'],
        correctAnswer: 2,
        difficultyId: 2
    },
    {
        question: 'Who wrote the novel 1984?',
        answers: ['Charles Dickens', 'George Orwell', 'J.R.R. Tolkien', 'Ernest Hemingway'],
        correctAnswer: 1,
        difficultyId: 2
    },
    {
        question: 'What is the smallest planet in our solar system?',
        answers: ['Mercury', 'Venus', 'Mars', 'Pluto'],
        correctAnswer: 0,
        difficultyId: 2
    },
    {
        question: 'Which country has the most natural lakes in the world?',
        answers: ['Russia', 'United States', 'Canada', 'Finland'],
        correctAnswer: 2,
        difficultyId: 3
    },
    {
        question: "Before people made Jack-o'-lanterns for Halloween, which vegetable did they carve faces into?",
        answers: ['Onions', 'Pawpaw', 'Turnips', 'Tomatoes'],
        correctAnswer: 2,
        difficultyId: 3
    },
    {
        question: 'Which element has the chemical symbol W?',
        answers: ['Tin', 'Titanium', 'Tantalum', 'Tungsten'],
        correctAnswer: 3,
        difficultyId: 3
    },
    {
        question: 'What is "Peggy" a nickname for?',
        answers: ['Penelope', 'Margaret', 'Gerald', 'Persephone'],
        correctAnswer: 1,
        difficultyId: 3
    },
    {
        question: 'What is the only sport that has been played on the moon?',
        answers: ['Basketball', 'American Soccer', 'Baseball', 'Golf'],
        correctAnswer: 3,
        difficultyId: 3
    },
    {
        question: 'Which ancient civilization built the city of Petra?',
        answers: ['Romans', 'Nabataeans', 'Egyptians', 'Persians'],
        correctAnswer: 1,
        difficultyId: 3
    },
    {
        question: "What is the name of the boundary between Earth's crust and mantle?",
        answers: ['Gutenberg Discontinuity', 'Lehmann Discontinuity', 'Mohorovičić Discontinuity', 'Curie Boundary'],
        correctAnswer: 2,
        difficultyId: 3
    },
    {
        question: 'Which mathematician is credited with developing the laws of planetary motion?',
        answers: ['Galileo Galilei', 'Isaac Newton', 'Nicolaus Copernicus', 'Johannes Kepler'],
        correctAnswer: 3,
        difficultyId: 3
    },
    {
        question: 'Which treaty formally ended the First World War between Germany and the Allied Powers?',
        answers: ['Treaty of Paris', 'Treaty of Vienna', 'Treaty of Versailles', 'Treaty of Utrecht'],
        correctAnswer: 2,
        difficultyId: 3
    },
    {
        question: 'What is the name of the process by which plants release water vapour through their leaves?',
        answers: ['Photosynthesis', 'Respiration', 'Osmosis', 'Transpiration'],
        correctAnswer: 3,
        difficultyId: 3
    }
]
    },

    {
        name : filmTv,
        id : 2,
        questions : 
        [
            { question :  ''   ,
                answers : [],
                correctAnswer : lorem
            }
        ]
    },

   {
        name : food,
        id : 3,
        questions : 
        [
            { question :  ''   ,
                answers : [],
                correctAnswer : lorem
            }
        ]
    },

    {
        name : math,
        id : 4,
        questions : 
        [
            {
                question : 'what is a 2 + 2?',
                answers : [ '2', '3', '4', '5' ],
                correctAnswer : 2
            }
        ]
    },

    {
        name : music,
        id : 5,
        questions : 
        [
            { question :  ''   ,
                answers : [],
                correctAnswer : lorem
            }
        ]
    },

    {
        name : sports,
        id : 6,
        questions : 
        [
            { question :  ''   ,
                answers : [],
                correctAnswer : lorem
            }
        ]
    },

    {
        name : geography,
        id : 7,
        questions : 
        [
            { question :  ''   ,
                answers : [],
                correctAnswer : lorem
            }
        ]
    },

    {
        name : animals,
        id : 8,
        questions : 
        [
            { question :  ''   ,
                answers : [],
                correctAnswer : lorem
            }
        ]
    },
] 

