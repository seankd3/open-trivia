const categories = [
    "Geography",
    "Literature",
    "Science",
    "Chemistry",
    "Art",
    "Space",
    "Rocket Science",
    "Astrophysics",
    "Russian Literature",
    "Politics",
    "History",
    "Technology",
    "Engineering",
    "Mathematics",
    "Philosophy",
    "Economics"
];

const difficultyLevels = [
    "Highschool",
    "Undergrad",
    "Masters",
    "PhD",
    "Extreme"
];

const categorizedQuestions = [
    {
        category: "Geography",
        difficulty: "Highschool",
        question: "What is the capital of France?",
        choices: ["Berlin", "Madrid", "Paris", "Lisbon"],
        correctAnswer: "Paris"
    },
    {
        category: "Literature",
        difficulty: "Highschool",
        question: "Who wrote 'To Kill a Mockingbird'?",
        choices: ["Harper Lee", "Mark Twain", "Ernest Hemingway", "F. Scott Fitzgerald"],
        correctAnswer: "Harper Lee"
    },
    {
        category: "Science",
        difficulty: "Highschool",
        question: "What is the smallest planet in our solar system?",
        choices: ["Earth", "Mars", "Mercury", "Venus"],
        correctAnswer: "Mercury"
    },
    {
        category: "Chemistry",
        difficulty: "Highschool",
        question: "What is the chemical symbol for gold?",
        choices: ["Au", "Ag", "Pb", "Fe"],
        correctAnswer: "Au"
    },
    {
        category: "Art",
        difficulty: "Highschool",
        question: "Who painted the Mona Lisa?",
        choices: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
        correctAnswer: "Leonardo da Vinci"
    },
    {
        category: "Geography",
        difficulty: "Undergrad",
        question: "Which country has the longest coastline in the world?",
        choices: ["Australia", "Canada", "Russia", "USA"],
        correctAnswer: "Canada"
    },
    {
        category: "Literature",
        difficulty: "Undergrad",
        question: "In which year was '1984' by George Orwell published?",
        choices: ["1945", "1949", "1951", "1954"],
        correctAnswer: "1949"
    },
    {
        category: "Science",
        difficulty: "Undergrad",
        question: "What is the powerhouse of the cell?",
        choices: ["Nucleus", "Ribosome", "Mitochondria", "Chloroplast"],
        correctAnswer: "Mitochondria"
    },
    {
        category: "Chemistry",
        difficulty: "Undergrad",
        question: "What is the molecular formula for water?",
        choices: ["H2O", "CO2", "O2", "H2O2"],
        correctAnswer: "H2O"
    },
    {
        category: "Art",
        difficulty: "Undergrad",
        question: "Which artist is known for the painting 'Starry Night'?",
        choices: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
        correctAnswer: "Vincent van Gogh"
    },
    {
        category: "Geography",
        difficulty: "Masters",
        question: "What is the name of the longest river in the world?",
        choices: ["Amazon", "Nile", "Yangtze", "Mississippi"],
        correctAnswer: "Nile"
    },
    {
        category: "Literature",
        difficulty: "Masters",
        question: "Who is the author of 'Pride and Prejudice'?",
        choices: ["Jane Austen", "Charlotte Bronte", "Emily Bronte", "Mary Shelley"],
        correctAnswer: "Jane Austen"
    },
    {
        category: "Science",
        difficulty: "Masters",
        question: "What is the speed of light in a vacuum?",
        choices: ["299,792 km/s", "150,000 km/s", "300,000 km/s", "299,792 m/s"],
        correctAnswer: "299,792 km/s"
    },
    {
        category: "Chemistry",
        difficulty: "Masters",
        question: "What is the pH level of pure water?",
        choices: ["7", "6", "8", "5"],
        correctAnswer: "7"
    },
    {
        category: "Art",
        difficulty: "Masters",
        question: "Which artist painted the ceiling of the Sistine Chapel?",
        choices: ["Michelangelo", "Raphael", "Leonardo da Vinci", "Donatello"],
        correctAnswer: "Michelangelo"
    },
    {
        category: "Geography",
        difficulty: "PhD",
        question: "What is the name of the tectonic plate that lies beneath the Pacific Ocean?",
        choices: ["Pacific Plate", "Eurasian Plate", "Indo-Australian Plate", "Nazca Plate"],
        correctAnswer: "Pacific Plate"
    },
    {
        category: "Literature",
        difficulty: "PhD",
        question: "Who wrote 'The Divine Comedy'?",
        choices: ["Dante Alighieri", "Geoffrey Chaucer", "John Milton", "Homer"],
        correctAnswer: "Dante Alighieri"
    },
    {
        category: "Science",
        difficulty: "PhD",
        question: "What is the Heisenberg Uncertainty Principle?",
        choices: [
            "It is impossible to know both the position and momentum of a particle simultaneously",
            "Energy cannot be created or destroyed",
            "For every action, there is an equal and opposite reaction",
            "The total entropy of an isolated system can never decrease"
        ],
        correctAnswer: "It is impossible to know both the position and momentum of a particle simultaneously"
    },
    {
        category: "Chemistry",
        difficulty: "PhD",
        question: "What is the chemical formula for benzene?",
        choices: ["C6H6", "C6H12", "C5H5", "C5H10"],
        correctAnswer: "C6H6"
    },
    {
        category: "Art",
        difficulty: "PhD",
        question: "Which artist is known for the sculpture 'David'?",
        choices: ["Michelangelo", "Donatello", "Bernini", "Ghiberti"],
        correctAnswer: "Michelangelo"
    },
    {
        category: "Geography",
        difficulty: "Highschool",
        question: "Which continent is the Sahara Desert located on?",
        choices: ["Asia", "Africa", "Australia", "South America"],
        correctAnswer: "Africa"
    },
    {
        category: "Literature",
        difficulty: "Highschool",
        question: "Who wrote 'The Great Gatsby'?",
        choices: ["F. Scott Fitzgerald", "Ernest Hemingway", "Mark Twain", "John Steinbeck"],
        correctAnswer: "F. Scott Fitzgerald"
    },
    {
        category: "Science",
        difficulty: "Highschool",
        question: "What is the chemical symbol for sodium?",
        choices: ["Na", "S", "N", "K"],
        correctAnswer: "Na"
    },
    {
        category: "Chemistry",
        difficulty: "Highschool",
        question: "What is the pH level of lemon juice?",
        choices: ["2", "4", "6", "8"],
        correctAnswer: "2"
    },
    {
        category: "Art",
        difficulty: "Highschool",
        question: "Who painted 'The Starry Night'?",
        choices: ["Vincent van Gogh", "Pablo Picasso", "Claude Monet", "Leonardo da Vinci"],
        correctAnswer: "Vincent van Gogh"
    },
    {
        category: "Geography",
        difficulty: "Undergrad",
        question: "What is the largest country in the world by area?",
        choices: ["Canada", "China", "Russia", "USA"],
        correctAnswer: "Russia"
    },
    {
        category: "Literature",
        difficulty: "Undergrad",
        question: "Who wrote 'Moby-Dick'?",
        choices: ["Herman Melville", "Nathaniel Hawthorne", "Edgar Allan Poe", "Henry James"],
        correctAnswer: "Herman Melville"
    },
    {
        category: "Science",
        difficulty: "Undergrad",
        question: "What is the most abundant gas in the Earth's atmosphere?",
        choices: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
        correctAnswer: "Nitrogen"
    },
    {
        category: "Chemistry",
        difficulty: "Undergrad",
        question: "What is the chemical formula for table salt?",
        choices: ["NaCl", "KCl", "CaCl2", "MgCl2"],
        correctAnswer: "NaCl"
    },
    {
        category: "Art",
        difficulty: "Undergrad",
        question: "Which artist is known for the painting 'The Persistence of Memory'?",
        choices: ["Salvador Dalí", "Pablo Picasso", "Vincent van Gogh", "Claude Monet"],
        correctAnswer: "Salvador Dalí"
    },
    {
        category: "Geography",
        difficulty: "Masters",
        question: "What is the capital city of Australia?",
        choices: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
        correctAnswer: "Canberra"
    },
    {
        category: "Literature",
        difficulty: "Masters",
        question: "Who wrote 'War and Peace'?",
        choices: ["Leo Tolstoy", "Fyodor Dostoevsky", "Anton Chekhov", "Ivan Turgenev"],
        correctAnswer: "Leo Tolstoy"
    },
    {
        category: "Science",
        difficulty: "Masters",
        question: "What is the second law of thermodynamics?",
        choices: [
            "Energy cannot be created or destroyed",
            "The entropy of an isolated system always increases",
            "For every action, there is an equal and opposite reaction",
            "The total energy of an isolated system remains constant"
        ],
        correctAnswer: "The entropy of an isolated system always increases"
    },
    {
        category: "Chemistry",
        difficulty: "Masters",
        question: "What is the chemical formula for ammonia?",
        choices: ["NH3", "NH4", "NO3", "NO2"],
        correctAnswer: "NH3"
    },
    {
        category: "Art",
        difficulty: "Masters",
        question: "Which artist is known for the painting 'Guernica'?",
        choices: ["Pablo Picasso", "Salvador Dalí", "Vincent van Gogh", "Claude Monet"],
        correctAnswer: "Pablo Picasso"
    },
    {
        category: "Geography",
        difficulty: "Masters",
        question: "Which country has the most natural lakes?",
        choices: ["Canada", "USA", "Russia", "Brazil"],
        correctAnswer: "Canada"
    },
    {
        category: "Literature",
        difficulty: "Masters",
        question: "Who wrote 'The Brothers Karamazov'?",
        choices: ["Fyodor Dostoevsky", "Leo Tolstoy", "Anton Chekhov", "Ivan Turgenev"],
        correctAnswer: "Fyodor Dostoevsky"
    },
    {
        category: "Science",
        difficulty: "Masters",
        question: "What is the main function of the Large Hadron Collider?",
        choices: [
            "To collide particles at high speeds to study fundamental physics",
            "To generate electricity",
            "To create new elements",
            "To study the effects of gravity"
        ],
        correctAnswer: "To collide particles at high speeds to study fundamental physics"
    },
    {
        category: "Chemistry",
        difficulty: "Masters",
        question: "What is the primary component of natural gas?",
        choices: ["Methane", "Ethane", "Propane", "Butane"],
        correctAnswer: "Methane"
    },
    {
        category: "Art",
        difficulty: "Masters",
        question: "Which artist is known for the painting 'The Night Watch'?",
        choices: ["Rembrandt", "Vermeer", "Van Gogh", "Rubens"],
        correctAnswer: "Rembrandt"
    },
    {
        category: "Geography",
        difficulty: "PhD",
        question: "What is the name of the deepest part of the world's oceans?",
        choices: ["Mariana Trench", "Tonga Trench", "Java Trench", "Puerto Rico Trench"],
        correctAnswer: "Mariana Trench"
    },
    {
        category: "Literature",
        difficulty: "PhD",
        question: "Who wrote 'Ulysses'?",
        choices: ["James Joyce", "Virginia Woolf", "T.S. Eliot", "Ezra Pound"],
        correctAnswer: "James Joyce"
    },
    {
        category: "Science",
        difficulty: "PhD",
        question: "What is the theory of general relativity?",
        choices: [
            "It describes the gravitational force as a curvature of spacetime",
            "It states that energy cannot be created or destroyed",
            "It explains the behavior of particles at the atomic level",
            "It describes the electromagnetic force"
        ],
        correctAnswer: "It describes the gravitational force as a curvature of spacetime"
    },
    {
        category: "Chemistry",
        difficulty: "PhD",
        question: "What is the chemical formula for sulfuric acid?",
        choices: ["H2SO4", "HCl", "HNO3", "H2CO3"],
        correctAnswer: "H2SO4"
    },
    {
        category: "Art",
        difficulty: "PhD",
        question: "Which artist is known for the painting 'The Last Supper'?",
        choices: ["Leonardo da Vinci", "Michelangelo", "Raphael", "Donatello"],
        correctAnswer: "Leonardo da Vinci"
    },
    {
        category: "Geography",
        difficulty: "PhD",
        question: "What is the name of the supercontinent that existed during the late Paleozoic and early Mesozoic eras?",
        choices: ["Pangaea", "Gondwana", "Laurasia", "Rodinia"],
        correctAnswer: "Pangaea"
    },
    {
        category: "Literature",
        difficulty: "PhD",
        question: "Who wrote 'In Search of Lost Time'?",
        choices: ["Marcel Proust", "James Joyce", "Virginia Woolf", "Franz Kafka"],
        correctAnswer: "Marcel Proust"
    },
    {
        category: "Science",
        difficulty: "PhD",
        question: "What is the Schrödinger equation used for?",
        choices: [
            "To describe how the quantum state of a physical system changes over time",
            "To calculate the speed of light",
            "To determine the gravitational force between two objects",
            "To measure the entropy of a system"
        ],
        correctAnswer: "To describe how the quantum state of a physical system changes over time"
    },
    {
        category: "Chemistry",
        difficulty: "PhD",
        question: "What is the primary use of a mass spectrometer?",
        choices: [
            "To measure the masses of particles and the composition of substances",
            "To determine the pH of a solution",
            "To measure the boiling point of a liquid",
            "To calculate the density of a solid"
        ],
        correctAnswer: "To measure the masses of particles and the composition of substances"
    },
    {
        category: "Art",
        difficulty: "PhD",
        question: "Which artist is known for the painting 'The Garden of Earthly Delights'?",
        choices: ["Hieronymus Bosch", "Pieter Bruegel the Elder", "Albrecht Dürer", "Lucas Cranach the Elder"],
        correctAnswer: "Hieronymus Bosch"
    },
    {
        category: "Geography",
        difficulty: "PhD",
        question: "What is the name of the largest desert in the world?",
        choices: ["Sahara", "Arabian", "Gobi", "Antarctic"],
        correctAnswer: "Antarctic"
    },
    {
        category: "Literature",
        difficulty: "PhD",
        question: "Who wrote 'The Sound and the Fury'?",
        choices: ["William Faulkner", "Ernest Hemingway", "F. Scott Fitzgerald", "John Steinbeck"],
        correctAnswer: "William Faulkner"
    },
    {
        category: "Science",
        difficulty: "PhD",
        question: "What is the Pauli Exclusion Principle?",
        choices: [
            "No two electrons can occupy the same quantum state simultaneously",
            "Energy cannot be created or destroyed",
            "For every action, there is an equal and opposite reaction",
            "The total entropy of an isolated system can never decrease"
        ],
        correctAnswer: "No two electrons can occupy the same quantum state simultaneously"
    },
    {
        category: "Chemistry",
        difficulty: "PhD",
        question: "What is the chemical formula for acetic acid?",
        choices: ["CH3COOH", "C2H5OH", "H2CO3", "HCl"],
        correctAnswer: "CH3COOH"
    },
    {
        category: "Art",
        difficulty: "PhD",
        question: "Which artist is known for the painting 'The Birth of Venus'?",
        choices: ["Sandro Botticelli", "Leonardo da Vinci", "Michelangelo", "Raphael"],
        correctAnswer: "Sandro Botticelli"
    },
    {
        category: "Geography",
        difficulty: "PhD",
        question: "What is the name of the longest mountain range in the world?",
        choices: ["Andes", "Rockies", "Himalayas", "Mid-Atlantic Ridge"],
        correctAnswer: "Mid-Atlantic Ridge"
    },
    {
        category: "Literature",
        difficulty: "PhD",
        question: "Who wrote 'One Hundred Years of Solitude'?",
        choices: ["Gabriel Garcia Marquez", "Jorge Luis Borges", "Mario Vargas Llosa", "Isabel Allende"],
        correctAnswer: "Gabriel Garcia Marquez"
    },
    {
        category: "Science",
        difficulty: "PhD",
        question: "What is the main concept of string theory?",
        choices: [
            "All particles are composed of one-dimensional strings",
            "Energy cannot be created or destroyed",
            "For every action, there is an equal and opposite reaction",
            "The total entropy of an isolated system can never decrease"
        ],
        correctAnswer: "All particles are composed of one-dimensional strings"
    },
    {
        category: "Chemistry",
        difficulty: "PhD",
        question: "What is the chemical formula for ethanol?",
        choices: ["C2H5OH", "CH3OH", "C2H4O2", "C3H8O"],
        correctAnswer: "C2H5OH"
    },
    {
        category: "Art",
        difficulty: "PhD",
        question: "Which artist is known for the painting 'The School of Athens'?",
        choices: ["Raphael", "Michelangelo", "Leonardo da Vinci", "Donatello"],
        correctAnswer: "Raphael"
    },
    {
        category: "Geography",
        difficulty: "PhD",
        question: "What is the name of the largest island in the world?",
        choices: ["Greenland", "New Guinea", "Borneo", "Madagascar"],
        correctAnswer: "Greenland"
    },
    {
        category: "Literature",
        difficulty: "PhD",
        question: "Who wrote 'The Waste Land'?",
        choices: ["T.S. Eliot", "Ezra Pound", "W.B. Yeats", "Robert Frost"],
        correctAnswer: "T.S. Eliot"
    },
    {
        category: "Science",
        difficulty: "PhD",
        question: "What is the main idea of the Copenhagen interpretation of quantum mechanics?",
        choices: [
            "A particle does not have a definite state until it is measured",
            "Particles are always in a definite state",
            "The universe is deterministic",
            "Energy cannot be created or destroyed"
        ],
        correctAnswer: "A particle does not have a definite state until it is measured"
    },
    {
        category: "Chemistry",
        difficulty: "PhD",
        question: "What is the chemical formula for glucose?",
        choices: ["C6H12O6", "C12H22O11", "C6H6", "C2H5OH"],
        correctAnswer: "C6H12O6"
    },
    {
        category: "Art",
        difficulty: "PhD",
        question: "Which artist is known for the painting 'The Scream'?",
        choices: ["Edvard Munch", "Vincent van Gogh", "Pablo Picasso", "Claude Monet"],
        correctAnswer: "Edvard Munch"
    },
    {
        category: "Geography",
        difficulty: "PhD",
        question: "What is the name of the smallest country in the world by area?",
        choices: ["Vatican City", "Monaco", "San Marino", "Liechtenstein"],
        correctAnswer: "Vatican City"
    },
    {
        category: "Literature",
        difficulty: "PhD",
        question: "Who wrote 'The Trial'?",
        choices: ["Franz Kafka", "Albert Camus", "Jean-Paul Sartre", "Fyodor Dostoevsky"],
        correctAnswer: "Franz Kafka"
    },
    {
        category: "Science",
        difficulty: "PhD",
        question: "What is the main idea of the Many-Worlds interpretation of quantum mechanics?",
        choices: [
            "All possible outcomes of quantum measurements are realized in some 'world' or universe",
            "A particle does not have a definite state until it is measured",
            "Particles are always in a definite state",
            "The universe is deterministic"
        ],
        correctAnswer: "All possible outcomes of quantum measurements are realized in some 'world' or universe"
    },
    {
        category: "Chemistry",
        difficulty: "PhD",
        question: "What is the chemical formula for methane?",
        choices: ["CH4", "C2H6", "C3H8", "C4H10"],
        correctAnswer: "CH4"
    },
    {
        category: "Art",
        difficulty: "PhD",
        question: "Which artist is known for the painting 'The Persistence of Memory'?",
        choices: ["Salvador Dalí", "Pablo Picasso", "Vincent van Gogh", "Claude Monet"],
        correctAnswer: "Salvador Dalí"
    },
    {
        category: "Space",
        difficulty: "PhD",
        question: "What is the name of the first artificial Earth satellite?",
        choices: ["Sputnik 1", "Explorer 1", "Vanguard 1", "Luna 1"],
        correctAnswer: "Sputnik 1"
    },
    {
        category: "Rocket Science",
        difficulty: "PhD",
        question: "Who is considered the father of modern rocketry?",
        choices: ["Robert H. Goddard", "Wernher von Braun", "Konstantin Tsiolkovsky", "Sergei Korolev"],
        correctAnswer: "Robert H. Goddard"
    },
    {
        category: "Astrophysics",
        difficulty: "PhD",
        question: "What is the Chandrasekhar limit?",
        choices: [
            "The maximum mass of a stable white dwarf star",
            "The minimum mass of a neutron star",
            "The maximum mass of a black hole",
            "The minimum mass of a red giant star"
        ],
        correctAnswer: "The maximum mass of a stable white dwarf star"
    },
    {
        category: "Russian Literature",
        difficulty: "PhD",
        question: "Who wrote 'Crime and Punishment'?",
        choices: ["Fyodor Dostoevsky", "Leo Tolstoy", "Anton Chekhov", "Ivan Turgenev"],
        correctAnswer: "Fyodor Dostoevsky"
    },
    {
        category: "Politics",
        difficulty: "PhD",
        question: "Who was the first President of the United States?",
        choices: ["George Washington", "Thomas Jefferson", "John Adams", "James Madison"],
        correctAnswer: "George Washington"
    },
    {
        category: "History",
        difficulty: "PhD",
        question: "What year did the Berlin Wall fall?",
        choices: ["1989", "1990", "1991", "1992"],
        correctAnswer: "1989"
    },
    {
        category: "Technology",
        difficulty: "PhD",
        question: "Who is known as the father of the computer?",
        choices: ["Charles Babbage", "Alan Turing", "John von Neumann", "Bill Gates"],
        correctAnswer: "Charles Babbage"
    },
    {
        category: "Engineering",
        difficulty: "PhD",
        question: "What is the primary material used in the construction of the Golden Gate Bridge?",
        choices: ["Steel", "Iron", "Concrete", "Aluminum"],
        correctAnswer: "Steel"
    },
    {
        category: "Space",
        difficulty: "PhD",
        question: "What is the name of the largest moon of Saturn?",
        choices: ["Titan", "Rhea", "Iapetus", "Dione"],
        correctAnswer: "Titan"
    },
    {
        category: "Rocket Science",
        difficulty: "PhD",
        question: "What is the escape velocity from Earth's surface?",
        choices: ["11.2 km/s", "9.8 km/s", "7.9 km/s", "5.6 km/s"],
        correctAnswer: "11.2 km/s"
    },
    {
        category: "Astrophysics",
        difficulty: "PhD",
        question: "What is the primary component of a neutron star?",
        choices: ["Neutrons", "Protons", "Electrons", "Quarks"],
        correctAnswer: "Neutrons"
    },
    {
        category: "Russian Literature",
        difficulty: "PhD",
        question: "Who wrote 'War and Peace'?",
        choices: ["Leo Tolstoy", "Fyodor Dostoevsky", "Anton Chekhov", "Ivan Turgenev"],
        correctAnswer: "Leo Tolstoy"
    },
    {
        category: "Politics",
        difficulty: "PhD",
        question: "Who was the British Prime Minister during World War II?",
        choices: ["Winston Churchill", "Neville Chamberlain", "Clement Attlee", "Harold Macmillan"],
        correctAnswer: "Winston Churchill"
    },
    {
        category: "History",
        difficulty: "PhD",
        question: "In what year did the Titanic sink?",
        choices: ["1912", "1913", "1914", "1915"],
        correctAnswer: "1912"
    },
    {
        category: "Technology",
        difficulty: "PhD",
        question: "What was the first programmable computer?",
        choices: ["ENIAC", "UNIVAC", "Z3", "Colossus"],
        correctAnswer: "Z3"
    },
    {
        category: "Engineering",
        difficulty: "PhD",
        question: "What is the primary function of a transistor?",
        choices: ["To amplify or switch electronic signals", "To store data", "To convert AC to DC", "To measure resistance"],
        correctAnswer: "To amplify or switch electronic signals"
    },
    {
        category: "Space",
        difficulty: "PhD",
        question: "What is the name of the first human to journey into outer space?",
        choices: ["Yuri Gagarin", "Neil Armstrong", "Buzz Aldrin", "John Glenn"],
        correctAnswer: "Yuri Gagarin"
    },
    {
        category: "Rocket Science",
        difficulty: "PhD",
        question: "What is the Tsiolkovsky rocket equation used for?",
        choices: [
            "To calculate the change in velocity of a rocket",
            "To determine the thrust of a rocket engine",
            "To measure the fuel efficiency of a rocket",
            "To calculate the trajectory of a rocket"
        ],
        correctAnswer: "To calculate the change in velocity of a rocket"
    },
    {
        category: "Astrophysics",
        difficulty: "PhD",
        question: "What is the primary cause of a supernova?",
        choices: [
            "The collapse of a massive star",
            "The collision of two neutron stars",
            "The merger of two black holes",
            "The explosion of a white dwarf"
        ],
        correctAnswer: "The collapse of a massive star"
    },
    {
        category: "Russian Literature",
        difficulty: "PhD",
        question: "Who wrote 'The Master and Margarita'?",
        choices: ["Mikhail Bulgakov", "Fyodor Dostoevsky", "Leo Tolstoy", "Anton Chekhov"],
        correctAnswer: "Mikhail Bulgakov"
    },
    {
        category: "Politics",
        difficulty: "PhD",
        question: "Who was the first female Prime Minister of the United Kingdom?",
        choices: ["Margaret Thatcher", "Theresa May", "Angela Merkel", "Indira Gandhi"],
        correctAnswer: "Margaret Thatcher"
    },
    {
        category: "History",
        difficulty: "PhD",
        question: "What year did the American Civil War begin?",
        choices: ["1861", "1860", "1862", "1863"],
        correctAnswer: "1861"
    },
    {
        category: "Technology",
        difficulty: "PhD",
        question: "Who is credited with inventing the World Wide Web?",
        choices: ["Tim Berners-Lee", "Bill Gates", "Steve Jobs", "Mark Zuckerberg"],
        correctAnswer: "Tim Berners-Lee"
    },
    {
        category: "Engineering",
        difficulty: "PhD",
        question: "What is the primary purpose of a bridge rectifier?",
        choices: ["To convert AC to DC", "To amplify signals", "To store energy", "To measure voltage"],
        correctAnswer: "To convert AC to DC"
    },
    {
        category: "Space",
        difficulty: "PhD",
        question: "What is the name of the first spacecraft to land on the moon?",
        choices: ["Apollo 11", "Luna 2", "Viking 1", "Mariner 4"],
        correctAnswer: "Apollo 11"
    },
    {
        category: "Rocket Science",
        difficulty: "PhD",
        question: "What is the primary function of a rocket nozzle?",
        choices: [
            "To accelerate the exhaust gases to produce thrust",
            "To mix fuel and oxidizer",
            "To ignite the propellant",
            "To control the direction of the rocket"
        ],
        correctAnswer: "To accelerate the exhaust gases to produce thrust"
    },
    {
        category: "Astrophysics",
        difficulty: "PhD",
        question: "What is the primary component of dark matter?",
        choices: [
            "Unknown particles",
            "Neutrinos",
            "Protons",
            "Electrons"
        ],
        correctAnswer: "Unknown particles"
    },
    {
        category: "Russian Literature",
        difficulty: "PhD",
        question: "Who wrote 'Anna Karenina'?",
        choices: ["Leo Tolstoy", "Fyodor Dostoevsky", "Anton Chekhov", "Ivan Turgenev"],
        correctAnswer: "Leo Tolstoy"
    },
    {
        category: "Politics",
        difficulty: "PhD",
        question: "Who was the first President of Russia?",
        choices: ["Boris Yeltsin", "Vladimir Putin", "Mikhail Gorbachev", "Dmitry Medvedev"],
        correctAnswer: "Boris Yeltsin"
    },
    {
        category: "History",
        difficulty: "PhD",
        question: "In what year did World War I begin?",
        choices: ["1914", "1915", "1916", "1917"],
        correctAnswer: "1914"
    },
    {
        category: "Technology",
        difficulty: "PhD",
        question: "What was the first commercially successful personal computer?",
        choices: ["Apple II", "IBM PC", "Commodore 64", "Altair 8800"],
        correctAnswer: "Apple II"
    },
    {
        category: "Engineering",
        difficulty: "PhD",
        question: "What is the primary purpose of a heat exchanger?",
        choices: ["To transfer heat between two or more fluids", "To store thermal energy", "To measure temperature", "To convert heat into electricity"],
        correctAnswer: "To transfer heat between two or more fluids"
    },
    {
        category: "Space",
        difficulty: "PhD",
        question: "What is the name of the first interstellar object detected passing through the Solar System?",
        choices: ["Oumuamua", "Halley's Comet", "Voyager 1", "New Horizons"],
        correctAnswer: "Oumuamua"
    },
    {
        category: "Rocket Science",
        difficulty: "PhD",
        question: "What is the primary purpose of a liquid rocket engine's turbopump?",
        choices: [
            "To pressurize and deliver propellants to the combustion chamber",
            "To ignite the propellant",
            "To control the direction of the rocket",
            "To cool the engine"
        ],
        correctAnswer: "To pressurize and deliver propellants to the combustion chamber"
    },
    {
        category: "Astrophysics",
        difficulty: "PhD",
        question: "What is the primary method used to detect exoplanets?",
        choices: [
            "Transit photometry",
            "Direct imaging",
            "Gravitational microlensing",
            "Astrometry"
        ],
        correctAnswer: "Transit photometry"
    },
    {
        category: "Russian Literature",
        difficulty: "PhD",
        question: "Who wrote 'The Idiot'?",
        choices: ["Fyodor Dostoevsky", "Leo Tolstoy", "Anton Chekhov", "Ivan Turgenev"],
        correctAnswer: "Fyodor Dostoevsky"
    },
    {
        category: "Politics",
        difficulty: "PhD",
        question: "Who was the first Chancellor of Germany?",
        choices: ["Otto von Bismarck", "Adolf Hitler", "Konrad Adenauer", "Angela Merkel"],
        correctAnswer: "Otto von Bismarck"
    },
    {
        category: "History",
        difficulty: "PhD",
        question: "In what year did the French Revolution begin?",
        choices: ["1789", "1790", "1791", "1792"],
        correctAnswer: "1789"
    },
    {
        category: "Technology",
        difficulty: "PhD",
        question: "What was the first video game ever created?",
        choices: ["Pong", "Spacewar!", "Tennis for Two", "Pac-Man"],
        correctAnswer: "Tennis for Two"
    },
    {
        category: "Engineering",
        difficulty: "PhD",
        question: "What is the primary purpose of a flywheel?",
        choices: ["To store rotational energy", "To measure torque", "To convert kinetic energy to electrical energy", "To control engine speed"],
        correctAnswer: "To store rotational energy"
    },
    {
        category: "Mathematics",
        difficulty: "PhD",
        question: "What is the Riemann Hypothesis?",
        choices: [
            "A conjecture about the distribution of prime numbers",
            "A theorem about the convergence of series",
            "A principle in calculus",
            "A formula for calculating pi"
        ],
        correctAnswer: "A conjecture about the distribution of prime numbers"
    },
    {
        category: "Philosophy",
        difficulty: "PhD",
        question: "Who wrote 'Critique of Pure Reason'?",
        choices: ["Immanuel Kant", "Friedrich Nietzsche", "Søren Kierkegaard", "Plato"],
        correctAnswer: "Immanuel Kant"
    },
    {
        category: "Economics",
        difficulty: "PhD",
        question: "What is the Nash Equilibrium?",
        choices: [
            "A solution concept in game theory",
            "A principle in supply and demand",
            "A theory of market equilibrium",
            "A concept in behavioral economics"
        ],
        correctAnswer: "A solution concept in game theory"
    },
    {
        category: "Mathematics",
        difficulty: "Extreme",
        question: "What is the Birch and Swinnerton-Dyer Conjecture?",
        choices: [
            "A conjecture about the number of rational points on elliptic curves",
            "A theorem about the convergence of infinite series",
            "A principle in differential equations",
            "A formula for calculating the area under a curve"
        ],
        correctAnswer: "A conjecture about the number of rational points on elliptic curves"
    },
    {
        category: "Philosophy",
        difficulty: "Extreme",
        question: "Who wrote 'Being and Time'?",
        choices: ["Martin Heidegger", "Jean-Paul Sartre", "Simone de Beauvoir", "Michel Foucault"],
        correctAnswer: "Martin Heidegger"
    },
    {
        category: "Economics",
        difficulty: "Extreme",
        question: "What is the Arrow's Impossibility Theorem?",
        choices: [
            "A theorem stating that no rank-order voting system can meet a set of fairness criteria",
            "A principle in supply and demand",
            "A theory of market equilibrium",
            "A concept in behavioral economics"
        ],
        correctAnswer: "A theorem stating that no rank-order voting system can meet a set of fairness criteria"
    }
];

const questions = categorizedQuestions;

module.exports = { categories, difficultyLevels, categorizedQuestions, questions };