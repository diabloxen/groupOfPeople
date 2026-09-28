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
    name: 'geography',
    id: 7,
    questions: [

    
        // EASY LEVEL QUESTIONS
        

        {
            question: 'What is the capital of Australia?',
            answers: ['Sydney', 'Melbourne', 'Canberra', 'Perth'],
            correctAnswer: 2,
            difficultyId: 1
        },
        {
            question: 'Which country has the largest population in Africa?',
            answers: ['Egypt', 'Nigeria', 'Ethiopia', 'South Africa'],
            correctAnswer: 1,
            difficultyId: 1
        },
        {
            question: 'Which river flows through Paris?',
            answers: ['Rhine', 'Seine', 'Danube', 'Rhone'],
            correctAnswer: 1,
            difficultyId: 1
        },
        {
            question: 'Mount Kilimanjaro is located in which country?',
            answers: ['Kenya', 'Tanzania', 'Uganda', 'Ethiopia'],
            correctAnswer: 1,
            difficultyId: 1
        },
        {
            question: 'Which country is completely surrounded by South Africa?',
            answers: ['Eswatini', 'Lesotho', 'Botswana', 'Namibia'],
            correctAnswer: 1,
            difficultyId: 1
        },
        {
            question: 'Which European country is shaped roughly like a boot?',
            answers: ['Greece', 'Portugal', 'Croatia', 'Italy'],
            correctAnswer: 3,
            difficultyId: 1
        },
        {
            question: 'What is the largest island in the Mediterranean Sea?',
            answers: ['Cyprus', 'Sicily', 'Sardinia', 'Crete'],
            correctAnswer: 1,
            difficultyId: 1
        },
        {
            question: 'Which mountain range traditionally forms part of the boundary between Europe and Asia?',
            answers: ['Alps', 'Pyrenees', 'Urals', 'Carpathians'],
            correctAnswer: 2,
            difficultyId: 1
        },
        {
            question: 'Which country has coastlines on both the Atlantic and Indian Oceans?',
            answers: ['Namibia', 'Mozambique', 'South Africa', 'Angola'],
            correctAnswer: 2,
            difficultyId: 1
        },
        {
            question: 'Which desert covers much of northern Africa?',
            answers: ['Kalahari', 'Namib', 'Sahara', 'Gobi'],
            correctAnswer: 2,
            difficultyId: 1
        },


       
        // MEDIUM LEVEL QUESTIONS
       
        {
            question: 'Which national capital lies closest to the Equator?',
            answers: ['Nairobi', 'Quito', 'Kampala', 'Libreville'],
            correctAnswer: 1,
            difficultyId: 2
        },
        {
            question: 'Which country contains the region of Transylvania?',
            answers: ['Bulgaria', 'Hungary', 'Romania', 'Serbia'],
            correctAnswer: 2,
            difficultyId: 2
        },
        {
            question: 'The Strait of Malacca separates the Malay Peninsula from which major Indonesian island?',
            answers: ['Java', 'Sumatra', 'Borneo', 'Sulawesi'],
            correctAnswer: 1,
            difficultyId: 2
        },
        {
            question: 'Which African country was formerly known as Abyssinia?',
            answers: ['Eritrea', 'Ethiopia', 'Sudan', 'Somalia'],
            correctAnswer: 1,
            difficultyId: 2
        },
        {
            question: 'Which river flows through Vienna, Bratislava, Budapest and Belgrade?',
            answers: ['Rhine', 'Elbe', 'Danube', 'Vistula'],
            correctAnswer: 2,
            difficultyId: 2
        },
        {
            question: 'Which country has the longest coastline in the world?',
            answers: ['Russia', 'Indonesia', 'Canada', 'Australia'],
            correctAnswer: 2,
            difficultyId: 2
        },
        {
            question: 'What is the world\'s largest landlocked country by area?',
            answers: ['Mongolia', 'Kazakhstan', 'Chad', 'Bolivia'],
            correctAnswer: 1,
            difficultyId: 2
        },
        {
            question: 'Which country administers the Faroe Islands as a self-governing territory?',
            answers: ['Norway', 'Iceland', 'Denmark', 'Sweden'],
            correctAnswer: 2,
            difficultyId: 2
        },
        {
            question: 'Which lake is generally regarded as the deepest freshwater lake in the world?',
            answers: ['Lake Tanganyika', 'Lake Superior', 'Lake Baikal', 'Lake Malawi'],
            correctAnswer: 2,
            difficultyId: 2
        },
        {
            question: 'Which country contains the autonomous region of Gagauzia?',
            answers: ['Romania', 'Moldova', 'Georgia', 'Ukraine'],
            correctAnswer: 1,
            difficultyId: 2
        },


       
        // HARD LEVEL QUESTIONS
        
        {
            question: 'The Wakhan Corridor separates Tajikistan from which country immediately to its south?',
            answers: ['Pakistan', 'India', 'China', 'Uzbekistan'],
            correctAnswer: 0,
            difficultyId: 3
        },
        {
            question: 'Which geomorphological term describes an isolated residual hill rising abruptly from an otherwise relatively level plain?',
            answers: ['Drumlin', 'Inselberg', 'Esker', 'Graben'],
            correctAnswer: 1,
            difficultyId: 3
        },
        {
            question: 'Which discontinuity marks the boundary between Earth\'s crust and mantle?',
            answers: ['Gutenberg Discontinuity', 'Lehmann Discontinuity', 'Mohorovicic Discontinuity', 'Conrad Discontinuity'],
            correctAnswer: 2,
            difficultyId: 3
        },
        {
            question: 'The Fergana Valley is principally shared between Uzbekistan, Kyrgyzstan and which third country?',
            answers: ['Kazakhstan', 'Tajikistan', 'Turkmenistan', 'Afghanistan'],
            correctAnswer: 1,
            difficultyId: 3
        },
        {
            question: 'Which Koppen climate classification represents a tropical rainforest climate?',
            answers: ['Am', 'Af', 'Aw', 'Cfa'],
            correctAnswer: 1,
            difficultyId: 3
        },
        {
            question: 'The island of Bioko, despite lying just off the coast of Cameroon, belongs to which country?',
            answers: ['Gabon', 'Sao Tome and Principe', 'Equatorial Guinea', 'Cameroon'],
            correctAnswer: 2,
            difficultyId: 3
        },
        {
            question: 'Which river forms the world\'s largest inland delta before largely disappearing into the Kalahari Basin?',
            answers: ['Limpopo', 'Zambezi', 'Okavango', 'Cuando'],
            correctAnswer: 2,
            difficultyId: 3
        },
        {
            question: 'Which tectonic triple junction involves the Arabian, Nubian and Somali plates?',
            answers: ['Azores Triple Junction', 'Afar Triple Junction', 'Mendocino Triple Junction', 'Rodrigues Triple Junction'],
            correctAnswer: 1,
            difficultyId: 3
        },
        {
            question: 'The Qattara Depression, one of Africa\'s lowest terrestrial points, is located in which country?',
            answers: ['Libya', 'Egypt', 'Algeria', 'Tunisia'],
            correctAnswer: 1,
            difficultyId: 3
        },
        {
            question: 'Which theory in biogeography predicts that larger and less isolated islands generally support more species?',
            answers: ['Competitive Exclusion Principle', 'Intermediate Disturbance Hypothesis', 'Island Biogeography Theory', 'Bergmann\'s Rule'],
            correctAnswer: 2,
            difficultyId: 3
        }

    ]
},

    {
    name: 'animals',
    id: 8,
    questions: [

       
        // EASY LEVEL QUESTIONS
        {
            question: 'Which is the largest living animal on Earth?',
            answers: ['African Elephant', 'Whale Shark', 'Blue Whale', 'Giant Squid'],
            correctAnswer: 2,
            difficultyId: 1
        },
        {
            question: 'Which animal has the strongest bite force among living land animals?',
            answers: ['Lion', 'Hippopotamus', 'Polar Bear', 'Saltwater Crocodile'],
            correctAnswer: 3,
            difficultyId: 1
        },
        {
            question: 'What is a group of lions called?',
            answers: ['Pack', 'Pride', 'Herd', 'Colony'],
            correctAnswer: 1,
            difficultyId: 1
        },
        {
            question: 'Which mammal is capable of true sustained flight?',
            answers: ['Flying Squirrel', 'Sugar Glider', 'Bat', 'Colugo'],
            correctAnswer: 2,
            difficultyId: 1
        },
        {
            question: 'Which is the fastest land animal?',
            answers: ['Pronghorn', 'Cheetah', 'Lion', 'Greyhound'],
            correctAnswer: 1,
            difficultyId: 1
        },
        {
            question: 'Which animal is known for having three hearts?',
            answers: ['Dolphin', 'Octopus', 'Shark', 'Jellyfish'],
            correctAnswer: 1,
            difficultyId: 1
        },
        {
            question: 'Which animal is the tallest living species?',
            answers: ['African Elephant', 'Moose', 'Giraffe', 'Ostrich'],
            correctAnswer: 2,
            difficultyId: 1
        },
        {
            question: 'Which of these animals is a marsupial?',
            answers: ['Capybara', 'Kangaroo', 'Meerkat', 'Lemur'],
            correctAnswer: 1,
            difficultyId: 1
        },
        {
            question: 'Which bird is the largest living bird by height and weight?',
            answers: ['Emu', 'Cassowary', 'Emperor Penguin', 'Ostrich'],
            correctAnswer: 3,
            difficultyId: 1
        },
        {
            question: 'Which animal is famous for rapidly changing its colour using specialised skin cells?',
            answers: ['Octopus', 'Dolphin', 'Electric Eel', 'Horseshoe Crab'],
            correctAnswer: 0,
            difficultyId: 1
        },


       
        // MEDIUM LEVEL QUESTIONS
     

        {
            question: 'Which mammal has the longest known gestation period?',
            answers: ['Giraffe', 'African Elephant', 'Rhinoceros', 'Blue Whale'],
            correctAnswer: 1,
            difficultyId: 2
        },
        {
            question: 'The axolotl is naturally native to which country?',
            answers: ['Brazil', 'Mexico', 'Indonesia', 'Australia'],
            correctAnswer: 1,
            difficultyId: 2
        },
        {
            question: 'Which of these animals belongs to the order Monotremata?',
            answers: ['Wombat', 'Koala', 'Platypus', 'Tasmanian Devil'],
            correctAnswer: 2,
            difficultyId: 2
        },
        {
            question: 'Which is the largest living species of lizard?',
            answers: ['Gila Monster', 'Komodo Dragon', 'Marine Iguana', 'Asian Water Monitor'],
            correctAnswer: 1,
            difficultyId: 2
        },
        {
            question: 'Which animal has fingerprints that can appear remarkably similar to human fingerprints?',
            answers: ['Chimpanzee', 'Koala', 'Gorilla', 'Orangutan'],
            correctAnswer: 1,
            difficultyId: 2
        },
        {
            question: 'Which animal is generally considered to possess the largest eyes in the animal kingdom?',
            answers: ['Blue Whale', 'Giant Squid', 'Colossal Squid', 'Sperm Whale'],
            correctAnswer: 2,
            difficultyId: 2
        },
        {
            question: 'What is the scientific name of the modern human species?',
            answers: ['Homo erectus', 'Homo habilis', 'Homo neanderthalensis', 'Homo sapiens'],
            correctAnswer: 3,
            difficultyId: 2
        },
        {
            question: 'Which of these animals is most closely related to the hippopotamus?',
            answers: ['Rhinoceros', 'Pig', 'Whale', 'Elephant'],
            correctAnswer: 2,
            difficultyId: 2
        },
        {
            question: 'Which bird is particularly famous for its exceptionally long annual migration between Arctic and Antarctic regions?',
            answers: ['Wandering Albatross', 'Arctic Tern', 'Emperor Penguin', 'Peregrine Falcon'],
            correctAnswer: 1,
            difficultyId: 2
        },
        {
            question: 'What is the narwhal\'s famous tusk anatomically?',
            answers: ['An enlarged tooth', 'A modified nasal bone', 'A keratin horn', 'An elongated jawbone'],
            correctAnswer: 0,
            difficultyId: 2
        },


       
        // HARD LEVEL QUESTIONS
        

        {
            question: 'Which taxonomic order contains the tuatara, the only living members of an ancient reptilian lineage?',
            answers: ['Squamata', 'Rhynchocephalia', 'Crocodylia', 'Testudines'],
            correctAnswer: 1,
            difficultyId: 3
        },
        {
            question: 'What is the scientific name of the aardvark?',
            answers: ['Manis gigantea', 'Orycteropus afer', 'Procavia capensis', 'Phacochoerus africanus'],
            correctAnswer: 1,
            difficultyId: 3
        },
        {
            question: 'Which respiratory pigment is primarily responsible for oxygen transport in the haemolymph of many molluscs and arthropods?',
            answers: ['Haemoglobin', 'Haemocyanin', 'Haemerythrin', 'Chlorocruorin'],
            correctAnswer: 1,
            difficultyId: 3
        },
        {
            question: 'Which anatomical structures in avian lungs are major sites of gas exchange and support the bird respiratory system\'s unidirectional airflow pattern?',
            answers: ['Alveolar Sacs', 'Parabronchi', 'Bronchioles', 'Pleural Sinuses'],
            correctAnswer: 1,
            difficultyId: 3
        },
        {
            question: 'The organ of Jacobson, found in many vertebrates, is more formally known as what?',
            answers: ['Ampullary Organ', 'Vomeronasal Organ', 'Pineal Complex', 'Tympanic Organ'],
            correctAnswer: 1,
            difficultyId: 3
        },
        {
            question: 'Which specialised sensory structures allow sharks and rays to detect extremely weak electric fields?',
            answers: ['Neuromasts', 'Ampullae of Lorenzini', 'Pacinian Corpuscles', 'Herbst Corpuscles'],
            correctAnswer: 1,
            difficultyId: 3
        },
        {
            question: 'Which animal phylum is characterised by specialised stinging cells called cnidocytes?',
            answers: ['Ctenophora', 'Cnidaria', 'Platyhelminthes', 'Echinodermata'],
            correctAnswer: 1,
            difficultyId: 3
        },
        {
            question: 'Which protein is principally responsible for storing oxygen within vertebrate muscle tissue?',
            answers: ['Ferritin', 'Myoglobin', 'Haemocyanin', 'Transferrin'],
            correctAnswer: 1,
            difficultyId: 3
        },
        {
            question: 'What is the scientific trinomial name of the western lowland gorilla?',
            answers: ['Gorilla beringei beringei', 'Gorilla gorilla gorilla', 'Gorilla beringei graueri', 'Gorilla gorilla diehli'],
            correctAnswer: 1,
            difficultyId: 3
        },
        {
            question: 'Which embryonic structure is a defining feature of chordates and is developmentally associated with formation and organisation of the vertebral axis in vertebrates?',
            answers: ['Nephridium', 'Notochord', 'Blastopore', 'Coelomic Arch'],
            correctAnswer: 1,
            difficultyId: 3
        }

    ]
},
] 

