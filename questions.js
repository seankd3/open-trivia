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
  
  // MASSIVELY EXPANDED QUESTION SET
  const categorizedQuestions = [
    // ───────────────────────────────────────────────────────────────────────────
    // GEOGRAPHY
    // ───────────────────────────────────────────────────────────────────────────
  
    // --- HIGH SCHOOL ---
    {
      category: "Geography",
      difficulty: "Highschool",
      question: "Which country is home to the Great Barrier Reef?",
      choices: ["Australia", "Brazil", "South Africa", "India"],
      correctAnswer: "Australia"
    },
    {
      category: "Geography",
      difficulty: "Highschool",
      question: "What is the capital of France?",
      choices: ["Berlin", "Madrid", "Paris", "Lisbon"],
      correctAnswer: "Paris"
    },
    {
      category: "Geography",
      difficulty: "Highschool",
      question: "On which continent is the Sahara Desert located?",
      choices: ["Asia", "Africa", "Australia", "South America"],
      correctAnswer: "Africa"
    },
    // NEW HIGH SCHOOL QUESTIONS
    {
      category: "Geography",
      difficulty: "Highschool",
      question: "Which country is known as the 'Land of the Rising Sun'?",
      choices: ["China", "Japan", "Thailand", "South Korea"],
      correctAnswer: "Japan"
    },
    {
      category: "Geography",
      difficulty: "Highschool",
      question: "Mount Everest lies on the border between Nepal and which other country?",
      choices: ["China", "Bhutan", "Pakistan", "India"],
      correctAnswer: "China"
    },
    {
      category: "Geography",
      difficulty: "Highschool",
      question: "Which U.S. state is known as the 'Sunshine State'?",
      choices: ["California", "Florida", "Arizona", "Hawaii"],
      correctAnswer: "Florida"
    },
    {
      category: "Geography",
      difficulty: "Highschool",
      question: "Which European city is famously built on canals and includes over 100 small islands?",
      choices: ["Venice", "Amsterdam", "Stockholm", "Copenhagen"],
      correctAnswer: "Venice"
    },
  
    // --- UNDERGRAD ---
    {
      category: "Geography",
      difficulty: "Undergrad",
      question: "Which country has the longest coastline in the world?",
      choices: ["Australia", "Canada", "Russia", "United States"],
      correctAnswer: "Canada"
    },
    {
      category: "Geography",
      difficulty: "Undergrad",
      question: "What is the largest country in the world by area?",
      choices: ["Canada", "China", "Russia", "United States"],
      correctAnswer: "Russia"
    },
    // NEW UNDERGRAD QUESTIONS
    {
      category: "Geography",
      difficulty: "Undergrad",
      question: "Which three countries are the most populous in the world (in order)?",
      choices: [
        "China, India, United States",
        "India, China, United States",
        "United States, China, India",
        "China, United States, India"
      ],
      correctAnswer: "China, India, United States"
    },
    {
      category: "Geography",
      difficulty: "Undergrad",
      question: "Which island is the largest in the Mediterranean Sea?",
      choices: ["Sicily", "Sardinia", "Crete", "Cyprus"],
      correctAnswer: "Sicily"
    },
    {
      category: "Geography",
      difficulty: "Undergrad",
      question: "Which African country has the largest population?",
      choices: ["Nigeria", "Ethiopia", "Egypt", "South Africa"],
      correctAnswer: "Nigeria"
    },
    {
      category: "Geography",
      difficulty: "Undergrad",
      question: "Which city is located on two continents: Europe and Asia?",
      choices: ["Istanbul", "Moscow", "Athens", "Baku"],
      correctAnswer: "Istanbul"
    },
  
    // --- MASTERS ---
    {
      category: "Geography",
      difficulty: "Masters",
      question: "Which country has the most natural lakes in the world?",
      choices: ["Canada", "USA", "Russia", "Brazil"],
      correctAnswer: "Canada"
    },
    {
      category: "Geography",
      difficulty: "Masters",
      question: "What is the capital city of Australia?",
      choices: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
      correctAnswer: "Canberra"
    },
    // NEW MASTERS QUESTIONS
    {
      category: "Geography",
      difficulty: "Masters",
      question: "Which desert is considered the oldest desert in the world?",
      choices: ["Namib", "Sahara", "Gobi", "Kalahari"],
      correctAnswer: "Namib"
    },
    {
      category: "Geography",
      difficulty: "Masters",
      question: "Name the third-longest river in the world after the Nile and the Amazon.",
      choices: ["Yangtze", "Mississippi–Missouri", "Congo", "Mekong"],
      correctAnswer: "Yangtze"
    },
    {
      category: "Geography",
      difficulty: "Masters",
      question: "Which capital city is famously built around the Potala Palace?",
      choices: ["Lhasa", "Kathmandu", "Ulaanbaatar", "Thimphu"],
      correctAnswer: "Lhasa"
    },
    {
      category: "Geography",
      difficulty: "Masters",
      question: "Which strait separates North America from Asia at their closest point?",
      choices: ["Bering Strait", "Bosporus Strait", "Strait of Gibraltar", "Malacca Strait"],
      correctAnswer: "Bering Strait"
    },
  
    // --- PhD ---
    {
      category: "Geography",
      difficulty: "PhD",
      question: "What is the name of the tectonic plate that underlies most of the Pacific Ocean?",
      choices: ["Pacific Plate", "Eurasian Plate", "Nazca Plate", "Indo-Australian Plate"],
      correctAnswer: "Pacific Plate"
    },
    {
      category: "Geography",
      difficulty: "PhD",
      question: "What is the deepest point in the Earth's oceans?",
      choices: ["Mariana Trench", "Tonga Trench", "Puerto Rico Trench", "Kermadec Trench"],
      correctAnswer: "Mariana Trench"
    },
    {
      category: "Geography",
      difficulty: "PhD",
      question: "Which supercontinent existed during the late Paleozoic and early Mesozoic eras?",
      choices: ["Pangaea", "Gondwana", "Rodinia", "Laurasia"],
      correctAnswer: "Pangaea"
    },
    {
      category: "Geography",
      difficulty: "PhD",
      question: "What is the name of the longest mountain range on Earth?",
      choices: ["Andes", "Himalayas", "Mid-Atlantic Ridge", "Rocky Mountains"],
      correctAnswer: "Mid-Atlantic Ridge"
    },
    {
      category: "Geography",
      difficulty: "PhD",
      question: "Which is the smallest country in the world by both area and population?",
      choices: ["Vatican City", "Monaco", "San Marino", "Liechtenstein"],
      correctAnswer: "Vatican City"
    },
    // NEW PhD QUESTIONS
    {
      category: "Geography",
      difficulty: "PhD",
      question: "Which city is nicknamed 'The City of Bridges' for having more bridges than any other city in the world?",
      choices: ["Pittsburgh (USA)", "Hamburg (Germany)", "Venice (Italy)", "Amsterdam (Netherlands)"],
      correctAnswer: "Hamburg (Germany)" // (According to some metrics, Hamburg edges out Venice and Amsterdam. Pittsburgh also claims more bridges, but Hamburg is often recognized with ~2,500.)
    },
    {
      category: "Geography",
      difficulty: "PhD",
      question: "In which year and at which conference was the Greenwich Prime Meridian internationally adopted?",
      choices: [
        "1884, International Meridian Conference",
        "1901, Royal Geographical Society Conference",
        "1851, Crystal Palace Exhibition",
        "1920, League of Nations Summit"
      ],
      correctAnswer: "1884, International Meridian Conference"
    },
  
    // --- EXTREME ---
    {
      category: "Geography",
      difficulty: "Extreme",
      question: "Which archipelago, administered by Norway, is considered the northernmost place on Earth with a permanent civilian population?",
      choices: ["Svalbard", "Faroe Islands", "Novaya Zemlya", "Franz Josef Land"],
      correctAnswer: "Svalbard"
    },
    {
      category: "Geography",
      difficulty: "Extreme",
      question: "Which plateau in the southwestern Pacific is often cited as the largest submarine plateau on Earth?",
      choices: [
        "Ontong Java Plateau",
        "Kerguelen Plateau",
        "Campbell Plateau",
        "Manihiki Plateau"
      ],
      correctAnswer: "Ontong Java Plateau"
    },
    {
      category: "Geography",
      difficulty: "Extreme",
      question: "Which mountain range, located in Antarctica, is believed to be one of the longest and has peaks buried under ice?",
      choices: [
        "Gamburtsev Mountain Range",
        "Transantarctic Mountains",
        "Sentinel Range",
        "Ellsworth Mountains"
      ],
      correctAnswer: "Gamburtsev Mountain Range"
    },
    {
      category: "Geography",
      difficulty: "Extreme",
      question: "What is the approximate altitude of the Kármán line, commonly accepted as the boundary of space?",
      choices: ["100 km", "150 km", "85 km", "200 km"],
      correctAnswer: "100 km"
    },
  
    // ───────────────────────────────────────────────────────────────────────────
    // LITERATURE
    // ───────────────────────────────────────────────────────────────────────────
  
    // --- HIGH SCHOOL ---
    {
      category: "Literature",
      difficulty: "Highschool",
      question: "Who wrote 'To Kill a Mockingbird'?",
      choices: ["Harper Lee", "Mark Twain", "Ernest Hemingway", "F. Scott Fitzgerald"],
      correctAnswer: "Harper Lee"
    },
    {
      category: "Literature",
      difficulty: "Highschool",
      question: "Who wrote 'The Great Gatsby'?",
      choices: ["F. Scott Fitzgerald", "Ernest Hemingway", "Mark Twain", "John Steinbeck"],
      correctAnswer: "F. Scott Fitzgerald"
    },
    // NEW HIGH SCHOOL QUESTIONS
    {
      category: "Literature",
      difficulty: "Highschool",
      question: "Which playwright wrote 'Romeo and Juliet'?",
      choices: ["William Shakespeare", "Christopher Marlowe", "Ben Jonson", "Thomas Kyd"],
      correctAnswer: "William Shakespeare"
    },
    {
      category: "Literature",
      difficulty: "Highschool",
      question: "Who wrote the fantasy novel 'The Hobbit'?",
      choices: ["J.R.R. Tolkien", "C.S. Lewis", "J.K. Rowling", "George R.R. Martin"],
      correctAnswer: "J.R.R. Tolkien"
    },
    {
      category: "Literature",
      difficulty: "Highschool",
      question: "Which American author wrote the short story 'The Tell-Tale Heart'?",
      choices: ["Edgar Allan Poe", "Mark Twain", "Nathaniel Hawthorne", "Ambrose Bierce"],
      correctAnswer: "Edgar Allan Poe"
    },
  
    // --- UNDERGRAD ---
    {
      category: "Literature",
      difficulty: "Undergrad",
      question: "In which year was '1984' by George Orwell first published?",
      choices: ["1945", "1949", "1951", "1954"],
      correctAnswer: "1949"
    },
    {
      category: "Literature",
      difficulty: "Undergrad",
      question: "Who wrote 'Moby-Dick'?",
      choices: ["Herman Melville", "Nathaniel Hawthorne", "Edgar Allan Poe", "Henry James"],
      correctAnswer: "Herman Melville"
    },
    // NEW UNDERGRAD QUESTIONS
    {
      category: "Literature",
      difficulty: "Undergrad",
      question: "Who wrote 'The Adventures of Tom Sawyer' and 'Adventures of Huckleberry Finn'?",
      choices: ["Mark Twain", "Ernest Hemingway", "F. Scott Fitzgerald", "John Steinbeck"],
      correctAnswer: "Mark Twain"
    },
    {
      category: "Literature",
      difficulty: "Undergrad",
      question: "Which author wrote 'Brave New World'?",
      choices: ["Aldous Huxley", "George Orwell", "Ray Bradbury", "Philip K. Dick"],
      correctAnswer: "Aldous Huxley"
    },
    {
      category: "Literature",
      difficulty: "Undergrad",
      question: "Which novel by John Steinbeck centers around the Joad family during the Great Depression?",
      choices: [
        "The Grapes of Wrath",
        "Of Mice and Men",
        "East of Eden",
        "Tortilla Flat"
      ],
      correctAnswer: "The Grapes of Wrath"
    },
  
    // --- MASTERS ---
    {
      category: "Literature",
      difficulty: "Masters",
      question: "Who is the author of 'Pride and Prejudice'?",
      choices: ["Jane Austen", "Charlotte Brontë", "Emily Brontë", "Mary Shelley"],
      correctAnswer: "Jane Austen"
    },
    {
      category: "Literature",
      difficulty: "Masters",
      question: "Who wrote 'War and Peace'?",
      choices: ["Leo Tolstoy", "Fyodor Dostoevsky", "Anton Chekhov", "Ivan Turgenev"],
      correctAnswer: "Leo Tolstoy"
    },
    {
      category: "Literature",
      difficulty: "Masters",
      question: "Who wrote 'The Brothers Karamazov'?",
      choices: ["Fyodor Dostoevsky", "Leo Tolstoy", "Anton Chekhov", "Ivan Turgenev"],
      correctAnswer: "Fyodor Dostoevsky"
    },
    // NEW MASTERS QUESTIONS
    {
      category: "Literature",
      difficulty: "Masters",
      question: "Which French author wrote 'Les Misérables'?",
      choices: ["Victor Hugo", "Alexandre Dumas", "Gustave Flaubert", "Honoré de Balzac"],
      correctAnswer: "Victor Hugo"
    },
    {
      category: "Literature",
      difficulty: "Masters",
      question: "In Joseph Conrad’s 'Heart of Darkness,' which river is the starting point of Marlow’s journey?",
      choices: ["The Thames", "The Congo", "The Nile", "The Amazon"],
      correctAnswer: "The Thames"
    },
  
    // --- PhD ---
    {
      category: "Literature",
      difficulty: "PhD",
      question: "Who wrote 'The Divine Comedy'?",
      choices: ["Dante Alighieri", "Geoffrey Chaucer", "John Milton", "Homer"],
      correctAnswer: "Dante Alighieri"
    },
    {
      category: "Literature",
      difficulty: "PhD",
      question: "Who wrote 'In Search of Lost Time'?",
      choices: ["Marcel Proust", "James Joyce", "Virginia Woolf", "Franz Kafka"],
      correctAnswer: "Marcel Proust"
    },
    {
      category: "Literature",
      difficulty: "PhD",
      question: "Who wrote 'Ulysses'?",
      choices: ["James Joyce", "Virginia Woolf", "T.S. Eliot", "Ezra Pound"],
      correctAnswer: "James Joyce"
    },
    {
      category: "Literature",
      difficulty: "PhD",
      question: "Who wrote 'One Hundred Years of Solitude'?",
      choices: ["Gabriel García Márquez", "Jorge Luis Borges", "Mario Vargas Llosa", "Isabel Allende"],
      correctAnswer: "Gabriel García Márquez"
    },
    {
      category: "Literature",
      difficulty: "PhD",
      question: "Who wrote 'The Waste Land'?",
      choices: ["T.S. Eliot", "Ezra Pound", "W.B. Yeats", "Robert Frost"],
      correctAnswer: "T.S. Eliot"
    },
    {
      category: "Literature",
      difficulty: "PhD",
      question: "Who wrote 'The Sound and the Fury'?",
      choices: ["William Faulkner", "Ernest Hemingway", "F. Scott Fitzgerald", "John Steinbeck"],
      correctAnswer: "William Faulkner"
    },
    {
      category: "Literature",
      difficulty: "PhD",
      question: "Who wrote 'The Trial'?",
      choices: ["Franz Kafka", "Albert Camus", "Jean-Paul Sartre", "Fyodor Dostoevsky"],
      correctAnswer: "Franz Kafka"
    },
    // NEW PhD QUESTIONS
    {
      category: "Literature",
      difficulty: "PhD",
      question: "Which Portuguese author wrote 'The Book of Disquiet'?",
      choices: ["Fernando Pessoa", "José Saramago", "Eça de Queirós", "Camilo Castelo Branco"],
      correctAnswer: "Fernando Pessoa"
    },
    {
      category: "Literature",
      difficulty: "PhD",
      question: "Who wrote the 9th-century Old English epic poem 'Beowulf'?",
      choices: [
        "It is an anonymous work",
        "Geoffrey Chaucer",
        "The Venerable Bede",
        "Thomas Malory"
      ],
      correctAnswer: "It is an anonymous work"
    },
  
    // --- EXTREME ---
    {
      category: "Literature",
      difficulty: "Extreme",
      question: "Who penned the ancient Indian epic 'Mahabharata' traditionally, and in which language?",
      choices: [
        "Vyasa, Sanskrit",
        "Valmiki, Sanskrit",
        "Kalidasa, Prakrit",
        "Vyasa, Pali"
      ],
      correctAnswer: "Vyasa, Sanskrit"
    },
    {
      category: "Literature",
      difficulty: "Extreme",
      question: "Which 18th-century Japanese poet is most closely associated with the development of haiku?",
      choices: [
        "Matsuo Bashō",
        "Yosa Buson",
        "Kobayashi Issa",
        "Masaoka Shiki"
      ],
      correctAnswer: "Matsuo Bashō"
    },
  
    // ───────────────────────────────────────────────────────────────────────────
    // RUSSIAN LITERATURE
    // ───────────────────────────────────────────────────────────────────────────
  
    // We'll keep some of these for Highschool if they're more common, 
    // but original text lumps them into "PhD." 
    // Let’s add a simple Highschool question plus some advanced ones:
  
    {
      category: "Russian Literature",
      difficulty: "Highschool",
      question: "Which Russian novelist wrote 'The Overcoat' and 'Dead Souls'?",
      choices: ["Nikolai Gogol", "Fyodor Dostoevsky", "Leo Tolstoy", "Anton Chekhov"],
      correctAnswer: "Nikolai Gogol"
    },
    {
      category: "Russian Literature",
      difficulty: "PhD",
      question: "Who wrote 'Crime and Punishment'?",
      choices: ["Fyodor Dostoevsky", "Leo Tolstoy", "Anton Chekhov", "Ivan Turgenev"],
      correctAnswer: "Fyodor Dostoevsky"
    },
    {
      category: "Russian Literature",
      difficulty: "PhD",
      question: "Who wrote 'The Master and Margarita'?",
      choices: ["Mikhail Bulgakov", "Fyodor Dostoevsky", "Leo Tolstoy", "Anton Chekhov"],
      correctAnswer: "Mikhail Bulgakov"
    },
    {
      category: "Russian Literature",
      difficulty: "PhD",
      question: "Who wrote 'Anna Karenina'?",
      choices: ["Leo Tolstoy", "Fyodor Dostoevsky", "Anton Chekhov", "Ivan Turgenev"],
      correctAnswer: "Leo Tolstoy"
    },
    {
      category: "Russian Literature",
      difficulty: "PhD",
      question: "Who wrote 'The Idiot'?",
      choices: ["Fyodor Dostoevsky", "Leo Tolstoy", "Anton Chekhov", "Mikhail Bulgakov"],
      correctAnswer: "Fyodor Dostoevsky"
    },
    // NEW RUSSIAN LIT
    {
      category: "Russian Literature",
      difficulty: "PhD",
      question: "Which author wrote the play 'The Seagull'?",
      choices: ["Anton Chekhov", "Maxim Gorky", "Ivan Turgenev", "Alexander Ostrovsky"],
      correctAnswer: "Anton Chekhov"
    },
    {
      category: "Russian Literature",
      difficulty: "Extreme",
      question: "Which poet wrote the novel in verse 'Eugene Onegin'?",
      choices: ["Alexander Pushkin", "Mikhail Lermontov", "Vladimir Mayakovsky", "Anna Akhmatova"],
      correctAnswer: "Alexander Pushkin"
    },
    {
      category: "Russian Literature",
      difficulty: "Extreme",
      question: "Which writer is known for the philosophical poem 'The Prophet' and the novel 'A Hero of Our Time'?",
      choices: [
        "Mikhail Lermontov",
        "Alexander Pushkin",
        "Ivan Goncharov",
        "Alexander Blok"
      ],
      correctAnswer: "Mikhail Lermontov"
    },
  
    // ───────────────────────────────────────────────────────────────────────────
    // SCIENCE
    // ───────────────────────────────────────────────────────────────────────────
  
    // --- HIGH SCHOOL ---
    {
      category: "Science",
      difficulty: "Highschool",
      question: "What is the smallest planet in our Solar System?",
      choices: ["Earth", "Mars", "Mercury", "Venus"],
      correctAnswer: "Mercury"
    },
    {
      category: "Science",
      difficulty: "Highschool",
      question: "What is the powerhouse of the cell?",
      choices: ["Nucleus", "Ribosome", "Mitochondrion", "Chloroplast"],
      correctAnswer: "Mitochondrion"
    },
    // NEW HIGH SCHOOL QUESTIONS
    {
      category: "Science",
      difficulty: "Highschool",
      question: "Which gas do plants primarily absorb from the atmosphere during photosynthesis?",
      choices: ["Carbon Dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
      correctAnswer: "Carbon Dioxide"
    },
    {
      category: "Science",
      difficulty: "Highschool",
      question: "Which force keeps the planets in orbit around the Sun?",
      choices: ["Gravity", "Electromagnetism", "Strong Nuclear Force", "Weak Nuclear Force"],
      correctAnswer: "Gravity"
    },
    {
      category: "Science",
      difficulty: "Highschool",
      question: "What is the term for an animal that only eats plants?",
      choices: ["Herbivore", "Carnivore", "Omnivore", "Detritivore"],
      correctAnswer: "Herbivore"
    },
  
    // --- UNDERGRAD ---
    {
      category: "Science",
      difficulty: "Undergrad",
      question: "What is the most abundant gas in Earth's atmosphere?",
      choices: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
      correctAnswer: "Nitrogen"
    },
    // NEW UNDERGRAD QUESTIONS
    {
      category: "Science",
      difficulty: "Undergrad",
      question: "Which subatomic particles are found in the nucleus of an atom?",
      choices: [
        "Protons and neutrons",
        "Electrons and protons",
        "Neutrons and electrons",
        "Quarks and leptons"
      ],
      correctAnswer: "Protons and neutrons"
    },
    {
      category: "Science",
      difficulty: "Undergrad",
      question: "Which element has the highest electrical conductivity at room temperature?",
      choices: ["Silver", "Copper", "Gold", "Aluminum"],
      correctAnswer: "Silver"
    },
    {
      category: "Science",
      difficulty: "Undergrad",
      question: "Which branch of biology deals with the classification of organisms?",
      choices: ["Taxonomy", "Genetics", "Physiology", "Ecology"],
      correctAnswer: "Taxonomy"
    },
  
    // --- MASTERS ---
    {
      category: "Science",
      difficulty: "Masters",
      question: "What is the Second Law of Thermodynamics?",
      choices: [
        "Energy cannot be created or destroyed",
        "The entropy of an isolated system tends to increase",
        "For every action there is an equal and opposite reaction",
        "The total energy of an isolated system remains constant"
      ],
      correctAnswer: "The entropy of an isolated system tends to increase"
    },
    // NEW MASTERS QUESTIONS
    {
      category: "Science",
      difficulty: "Masters",
      question: "Which branch of science deals specifically with the behavior of subatomic particles?",
      choices: ["Quantum Mechanics", "Thermodynamics", "Classical Mechanics", "Optics"],
      correctAnswer: "Quantum Mechanics"
    },
    {
      category: "Science",
      difficulty: "Masters",
      question: "What is the main function of the Large Hadron Collider (LHC)?",
      choices: [
        "To collide particles at high energies to study fundamental physics",
        "To generate electricity for large cities",
        "To study the Earth’s magnetic field",
        "To simulate nuclear fusion for energy production"
      ],
      correctAnswer: "To collide particles at high energies to study fundamental physics"
    },
  
    // --- PhD ---
    {
      category: "Science",
      difficulty: "PhD",
      question: "What is the Heisenberg Uncertainty Principle?",
      choices: [
        "It is impossible to know both the position and momentum of a particle simultaneously",
        "Energy cannot be created or destroyed",
        "For every action there is an equal and opposite reaction",
        "The total entropy of an isolated system can never decrease"
      ],
      correctAnswer: "It is impossible to know both the position and momentum of a particle simultaneously"
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
      category: "Science",
      difficulty: "PhD",
      question: "What is the Schrödinger equation used for?",
      choices: [
        "To describe how the quantum state of a system evolves over time",
        "To calculate the speed of light",
        "To determine the gravitational force between two objects",
        "To measure the entropy of a system"
      ],
      correctAnswer: "To describe how the quantum state of a system evolves over time"
    },
    {
      category: "Science",
      difficulty: "PhD",
      question: "What is the main idea of the Copenhagen interpretation of quantum mechanics?",
      choices: [
        "A particle does not have a definite state until it is measured",
        "Particles are always in a definite state",
        "The universe is fully deterministic",
        "Energy cannot be created or destroyed"
      ],
      correctAnswer: "A particle does not have a definite state until it is measured"
    },
    {
      category: "Science",
      difficulty: "PhD",
      question: "What is the Many-Worlds interpretation of quantum mechanics?",
      choices: [
        "All possible outcomes of quantum events are realized in some branch of the universe",
        "A particle does not have a definite state until it is measured",
        "Particles follow deterministic paths only",
        "Energy cannot be created or destroyed"
      ],
      correctAnswer: "All possible outcomes of quantum events are realized in some branch of the universe"
    },
    // NEW PhD QUESTIONS
    {
      category: "Science",
      difficulty: "PhD",
      question: "Which branch of physics deals with the emergent behavior of large collections of interacting particles?",
      choices: ["Statistical Mechanics", "Quantum Field Theory", "Electrodynamics", "Plasma Physics"],
      correctAnswer: "Statistical Mechanics"
    },
    {
      category: "Science",
      difficulty: "PhD",
      question: "What phenomenon describes the effect of time dilation experienced by objects traveling near the speed of light?",
      choices: [
        "Relativistic time dilation",
        "Absolute simultaneity",
        "Quantum entanglement",
        "Bell’s inequality"
      ],
      correctAnswer: "Relativistic time dilation"
    },
  
    // --- EXTREME ---
    {
      category: "Science",
      difficulty: "Extreme",
      question: "Which 19th-century physicist's 'kinetic theory of gases' led to the concept of Maxwell–Boltzmann distribution?",
      choices: [
        "James Clerk Maxwell",
        "Ludwig Boltzmann",
        "Rudolf Clausius",
        "Johann Josef Loschmidt"
      ],
      correctAnswer: "James Clerk Maxwell"
    },
    {
      category: "Science",
      difficulty: "Extreme",
      question: "Which experiment, conducted by Michelson and Morley in 1887, aimed to detect the luminiferous aether?",
      choices: [
        "Michelson–Morley experiment",
        "Young's double-slit experiment",
        "Rutherford gold-foil experiment",
        "Franck–Hertz experiment"
      ],
      correctAnswer: "Michelson–Morley experiment"
    },
  
    // ───────────────────────────────────────────────────────────────────────────
    // CHEMISTRY
    // ───────────────────────────────────────────────────────────────────────────
  
    // --- HIGH SCHOOL ---
    {
      category: "Chemistry",
      difficulty: "Highschool",
      question: "What is the chemical symbol for gold?",
      choices: ["Au", "Ag", "Pb", "Fe"],
      correctAnswer: "Au"
    },
    {
      category: "Chemistry",
      difficulty: "Highschool",
      question: "What is the chemical symbol for sodium?",
      choices: ["Na", "S", "N", "K"],
      correctAnswer: "Na"
    },
    {
      category: "Chemistry",
      difficulty: "Highschool",
      question: "What is the pH of lemon juice approximately?",
      choices: ["2", "4", "7", "9"],
      correctAnswer: "2"
    },
    // NEW HIGH SCHOOL QUESTIONS
    {
      category: "Chemistry",
      difficulty: "Highschool",
      question: "Which element has the chemical symbol 'O'?",
      choices: ["Oxygen", "Osmium", "Oganesson", "Oxonium"],
      correctAnswer: "Oxygen"
    },
    {
      category: "Chemistry",
      difficulty: "Highschool",
      question: "Which subatomic particles have a negative charge?",
      choices: ["Electrons", "Protons", "Neutrons", "Positrons"],
      correctAnswer: "Electrons"
    },
  
    // --- UNDERGRAD ---
    {
      category: "Chemistry",
      difficulty: "Undergrad",
      question: "What is the molecular formula for water?",
      choices: ["H2O", "H2O2", "CO2", "O2"],
      correctAnswer: "H2O"
    },
    {
      category: "Chemistry",
      difficulty: "Undergrad",
      question: "What is the chemical formula for table salt?",
      choices: ["NaCl", "KCl", "CaCl2", "NaF"],
      correctAnswer: "NaCl"
    },
    // NEW UNDERGRAD QUESTIONS
    {
      category: "Chemistry",
      difficulty: "Undergrad",
      question: "Which gas is commonly used to fill party balloons because it is lighter than air?",
      choices: ["Helium", "Hydrogen", "Nitrogen", "Neon"],
      correctAnswer: "Helium"
    },
    {
      category: "Chemistry",
      difficulty: "Undergrad",
      question: "Which term refers to a substance that speeds up a chemical reaction without being consumed?",
      choices: ["Catalyst", "Reactant", "Product", "Enzyme"],
      correctAnswer: "Catalyst"
    },
    {
      category: "Chemistry",
      difficulty: "Undergrad",
      question: "What is the name for the process of converting a solid directly into a gas?",
      choices: ["Sublimation", "Deposition", "Evaporation", "Condensation"],
      correctAnswer: "Sublimation"
    },
  
    // --- MASTERS ---
    {
      category: "Chemistry",
      difficulty: "Masters",
      question: "What is the chemical formula for ammonia?",
      choices: ["NH3", "NH4", "NO3", "HNO3"],
      correctAnswer: "NH3"
    },
    {
      category: "Chemistry",
      difficulty: "Masters",
      question: "What is the primary component of natural gas?",
      choices: ["Methane", "Ethane", "Propane", "Butane"],
      correctAnswer: "Methane"
    },
    // NEW MASTERS QUESTIONS
    {
      category: "Chemistry",
      difficulty: "Masters",
      question: "Which law states that the total pressure of a gas mixture is the sum of the partial pressures of each component gas?",
      choices: ["Dalton’s Law", "Henry’s Law", "Boyle’s Law", "Graham’s Law"],
      correctAnswer: "Dalton’s Law"
    },
    {
      category: "Chemistry",
      difficulty: "Masters",
      question: "Which principle explains why heavier atomic nuclei break into smaller fragments during fission?",
      choices: [
        "Binding energy per nucleon curve",
        "Pauli exclusion principle",
        "Le Chatelier’s principle",
        "Hund’s rule"
      ],
      correctAnswer: "Binding energy per nucleon curve"
    },
  
    // --- PhD ---
    {
      category: "Chemistry",
      difficulty: "PhD",
      question: "What is the chemical formula for benzene?",
      choices: ["C6H6", "C5H10", "C6H12", "C2H6O"],
      correctAnswer: "C6H6"
    },
    {
      category: "Chemistry",
      difficulty: "PhD",
      question: "What is the chemical formula for sulfuric acid?",
      choices: ["H2SO4", "HCl", "HNO3", "H3PO4"],
      correctAnswer: "H2SO4"
    },
    {
      category: "Chemistry",
      difficulty: "PhD",
      question: "What is a mass spectrometer primarily used for?",
      choices: [
        "Measuring the masses of particles and the composition of substances",
        "Determining the pH of a solution",
        "Measuring the boiling point of a liquid",
        "Calculating the density of a solid"
      ],
      correctAnswer: "Measuring the masses of particles and the composition of substances"
    },
    {
      category: "Chemistry",
      difficulty: "PhD",
      question: "What is the chemical formula for acetic acid?",
      choices: ["CH3COOH", "C2H5OH", "C6H12O6", "H2CO3"],
      correctAnswer: "CH3COOH"
    },
    {
      category: "Chemistry",
      difficulty: "PhD",
      question: "What is the chemical formula for ethanol?",
      choices: ["C2H5OH", "CH3OH", "C2H4O2", "C3H8"],
      correctAnswer: "C2H5OH"
    },
    {
      category: "Chemistry",
      difficulty: "PhD",
      question: "What is the chemical formula for methane?",
      choices: ["CH4", "C2H6", "C3H8", "C4H10"],
      correctAnswer: "CH4"
    },
    {
      category: "Chemistry",
      difficulty: "PhD",
      question: "What is the chemical formula for glucose?",
      choices: ["C6H12O6", "C12H22O11", "C6H6", "CH3COOH"],
      correctAnswer: "C6H12O6"
    },
    // NEW PhD QUESTIONS
    {
      category: "Chemistry",
      difficulty: "PhD",
      question: "Which theorem explains the equivalence of wavefunction symmetries and exchange of identical particles in quantum chemistry?",
      choices: [
        "Spin-statistics theorem",
        "Ehrenfest theorem",
        "Hund’s rule",
        "de Broglie hypothesis"
      ],
      correctAnswer: "Spin-statistics theorem"
    },
    {
      category: "Chemistry",
      difficulty: "PhD",
      question: "In molecular orbital theory, which rule states that the most stable electronic configuration for a molecule is the one with the highest total bond order?",
      choices: [
        "Hund–Mulliken principle",
        "Aufbau principle for MO",
        "Lewis rule of octet",
        "Pauli principle"
      ],
      correctAnswer: "Hund–Mulliken principle"
    },
  
    // --- EXTREME ---
    {
      category: "Chemistry",
      difficulty: "Extreme",
      question: "Which Russian chemist established the Periodic Law and developed the periodic table of elements?",
      choices: [
        "Dmitri Mendeleev",
        "Ivan Pavlov",
        "Alexander Butlerov",
        "Wilhelm Ostwald"
      ],
      correctAnswer: "Dmitri Mendeleev"
    },
    {
      category: "Chemistry",
      difficulty: "Extreme",
      question: "Which advanced spectroscopy method uses the resonance of atomic nuclei to provide detailed information about the structure of molecules?",
      choices: [
        "NMR Spectroscopy",
        "IR Spectroscopy",
        "Raman Spectroscopy",
        "UV-Vis Spectroscopy"
      ],
      correctAnswer: "NMR Spectroscopy"
    },
  
    // ───────────────────────────────────────────────────────────────────────────
    // ART
    // ───────────────────────────────────────────────────────────────────────────
  
    // --- HIGH SCHOOL ---
    {
      category: "Art",
      difficulty: "Highschool",
      question: "Who painted the Mona Lisa?",
      choices: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
      correctAnswer: "Leonardo da Vinci"
    },
    {
      category: "Art",
      difficulty: "Highschool",
      question: "Who painted 'The Starry Night'?",
      choices: ["Vincent van Gogh", "Pablo Picasso", "Claude Monet", "Salvador Dalí"],
      correctAnswer: "Vincent van Gogh"
    },
  
    // --- UNDERGRAD ---
    {
      category: "Art",
      difficulty: "Undergrad",
      question: "Which artist is known for the painting 'Starry Night'?",
      choices: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
      correctAnswer: "Vincent van Gogh"
    },
    {
      category: "Art",
      difficulty: "Undergrad",
      question: "Which artist created 'The Persistence of Memory' (the melting clocks painting)?",
      choices: ["Salvador Dalí", "Pablo Picasso", "Vincent van Gogh", "Claude Monet"],
      correctAnswer: "Salvador Dalí"
    },
  
    // --- MASTERS ---
    {
      category: "Art",
      difficulty: "Masters",
      question: "Which artist painted the ceiling of the Sistine Chapel?",
      choices: ["Michelangelo", "Raphael", "Leonardo da Vinci", "Donatello"],
      correctAnswer: "Michelangelo"
    },
    {
      category: "Art",
      difficulty: "Masters",
      question: "Which artist is known for the painting 'Guernica'?",
      choices: ["Pablo Picasso", "Salvador Dalí", "Vincent van Gogh", "Claude Monet"],
      correctAnswer: "Pablo Picasso"
    },
    {
      category: "Art",
      difficulty: "Masters",
      question: "Which artist is known for 'The Night Watch'?",
      choices: ["Rembrandt", "Vermeer", "Van Gogh", "Rubens"],
      correctAnswer: "Rembrandt"
    },
  
    // --- PhD ---
    {
      category: "Art",
      difficulty: "PhD",
      question: "Which artist created the sculpture 'David'?",
      choices: ["Michelangelo", "Donatello", "Bernini", "Ghiberti"],
      correctAnswer: "Michelangelo"
    },
    {
      category: "Art",
      difficulty: "PhD",
      question: "Which artist created 'The Garden of Earthly Delights'?",
      choices: ["Hieronymus Bosch", "Pieter Bruegel the Elder", "Albrecht Dürer", "Lucas Cranach the Elder"],
      correctAnswer: "Hieronymus Bosch"
    },
    {
      category: "Art",
      difficulty: "PhD",
      question: "Which artist painted 'The Birth of Venus'?",
      choices: ["Sandro Botticelli", "Leonardo da Vinci", "Michelangelo", "Raphael"],
      correctAnswer: "Sandro Botticelli"
    },
    {
      category: "Art",
      difficulty: "PhD",
      question: "Which artist painted 'The Last Supper'?",
      choices: ["Leonardo da Vinci", "Michelangelo", "Raphael", "Donatello"],
      correctAnswer: "Leonardo da Vinci"
    },
    {
      category: "Art",
      difficulty: "PhD",
      question: "Which artist painted 'The School of Athens'?",
      choices: ["Raphael", "Michelangelo", "Leonardo da Vinci", "Donatello"],
      correctAnswer: "Raphael"
    },
    {
      category: "Art",
      difficulty: "PhD",
      question: "Which artist created 'The Scream'?",
      choices: ["Edvard Munch", "Vincent van Gogh", "Pablo Picasso", "Claude Monet"],
      correctAnswer: "Edvard Munch"
    },
    // NEW PhD QUESTIONS
    {
      category: "Art",
      difficulty: "PhD",
      question: "Which Baroque painter was known for the intense use of chiaroscuro and painted 'The Calling of St Matthew'?",
      choices: ["Caravaggio", "Rubens", "Rembrandt", "Velázquez"],
      correctAnswer: "Caravaggio"
    },
    {
      category: "Art",
      difficulty: "PhD",
      question: "Who pioneered the Romantic landscape painting style with works like 'Wanderer above the Sea of Fog'?",
      choices: ["Caspar David Friedrich", "J.M.W. Turner", "John Constable", "Eugène Delacroix"],
      correctAnswer: "Caspar David Friedrich"
    },
  
    // --- EXTREME ---
    {
      category: "Art",
      difficulty: "Extreme",
      question: "Which Dutch painter of the 17th century is famous for painting 'Girl with a Pearl Earring'?",
      choices: ["Johannes Vermeer", "Rembrandt", "Jan Steen", "Frans Hals"],
      correctAnswer: "Johannes Vermeer"
    },
    {
      category: "Art",
      difficulty: "Extreme",
      question: "Which 20th-century art movement, spearheaded by André Breton, sought to unleash the unconscious mind's power?",
      choices: ["Surrealism", "Cubism", "Impressionism", "Expressionism"],
      correctAnswer: "Surrealism"
    },
  
    // ───────────────────────────────────────────────────────────────────────────
    // SPACE
    // ───────────────────────────────────────────────────────────────────────────
  
    {
      category: "Space",
      difficulty: "PhD",
      question: "What is the name of the first artificial Earth satellite?",
      choices: ["Sputnik 1", "Explorer 1", "Vanguard 1", "Luna 1"],
      correctAnswer: "Sputnik 1"
    },
    {
      category: "Space",
      difficulty: "PhD",
      question: "What is the name of the largest moon of Saturn?",
      choices: ["Titan", "Rhea", "Iapetus", "Dione"],
      correctAnswer: "Titan"
    },
    {
      category: "Space",
      difficulty: "PhD",
      question: "Who was the first human to journey into outer space?",
      choices: ["Yuri Gagarin", "Neil Armstrong", "Buzz Aldrin", "John Glenn"],
      correctAnswer: "Yuri Gagarin"
    },
    {
      category: "Space",
      difficulty: "PhD",
      question: "Which spacecraft was the first to land humans on the Moon?",
      choices: ["Apollo 11", "Luna 2", "Vostok 1", "Mariner 4"],
      correctAnswer: "Apollo 11"
    },
    {
      category: "Space",
      difficulty: "PhD",
      question: "Which object is recognized as the first interstellar visitor passing through our Solar System?",
      choices: ["‘Oumuamua", "Halley’s Comet", "Voyager 1", "New Horizons"],
      correctAnswer: "‘Oumuamua"
    },
    // NEW SPACE QUESTIONS
    {
      category: "Space",
      difficulty: "Masters",
      question: "What term describes the apparent backward motion of a planet as viewed from Earth?",
      choices: ["Retrograde motion", "Ecliptic drift", "Parallax shift", "Occultation"],
      correctAnswer: "Retrograde motion"
    },
    {
      category: "Space",
      difficulty: "Extreme",
      question: "Which region in space, located beyond Neptune's orbit, contains icy bodies such as Pluto, Makemake, and Haumea?",
      choices: [
        "Kuiper Belt",
        "Oort Cloud",
        "Asteroid Belt",
        "Scattered Disk"
      ],
      correctAnswer: "Kuiper Belt"
    },
  
    // ───────────────────────────────────────────────────────────────────────────
    // ROCKET SCIENCE
    // ───────────────────────────────────────────────────────────────────────────
  
    {
      category: "Rocket Science",
      difficulty: "PhD",
      question: "Who is considered the father of modern rocketry?",
      choices: ["Robert H. Goddard", "Wernher von Braun", "Konstantin Tsiolkovsky", "Sergei Korolev"],
      correctAnswer: "Robert H. Goddard"
    },
    {
      category: "Rocket Science",
      difficulty: "PhD",
      question: "What is the escape velocity from Earth's surface approximately?",
      choices: ["11.2 km/s", "9.8 km/s", "7.9 km/s", "5.6 km/s"],
      correctAnswer: "11.2 km/s"
    },
    {
      category: "Rocket Science",
      difficulty: "PhD",
      question: "What is the Tsiolkovsky rocket equation used for?",
      choices: [
        "To calculate the change in velocity (delta-v) of a rocket",
        "To determine the thrust of a rocket engine",
        "To measure the fuel density of a rocket",
        "To calculate the re-entry angle"
      ],
      correctAnswer: "To calculate the change in velocity (delta-v) of a rocket"
    },
    {
      category: "Rocket Science",
      difficulty: "PhD",
      question: "What is the primary function of a rocket nozzle?",
      choices: [
        "To accelerate exhaust gases and produce thrust",
        "To mix fuel and oxidizer",
        "To ignite the propellant",
        "To control overall rocket guidance"
      ],
      correctAnswer: "To accelerate exhaust gases and produce thrust"
    },
    {
      category: "Rocket Science",
      difficulty: "PhD",
      question: "What is the primary purpose of a liquid rocket engine’s turbopump?",
      choices: [
        "To pressurize and deliver propellants to the combustion chamber",
        "To ignite the propellant",
        "To stabilize the rocket’s flight path",
        "To cool the engine bell"
      ],
      correctAnswer: "To pressurize and deliver propellants to the combustion chamber"
    },
    // NEW ROCKET SCIENCE QUESTIONS
    {
      category: "Rocket Science",
      difficulty: "Extreme",
      question: "Which engineer led the development of the Saturn V rocket for NASA’s Apollo program?",
      choices: [
        "Wernher von Braun",
        "Sergei Korolev",
        "Arthur Rudolph",
        "Robert Esnault-Pelterie"
      ],
      correctAnswer: "Wernher von Braun"
    },
    {
      category: "Rocket Science",
      difficulty: "Extreme",
      question: "Which Soviet rocket, first launched in 1957, remains (in updated forms) one of the most reliable orbital launch vehicles?",
      choices: [
        "R-7 (Semyorka)",
        "Proton",
        "Zenit",
        "Energia"
      ],
      correctAnswer: "R-7 (Semyorka)"
    },
  
    // ───────────────────────────────────────────────────────────────────────────
    // ASTROPHYSICS
    // ───────────────────────────────────────────────────────────────────────────
  
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
      category: "Astrophysics",
      difficulty: "PhD",
      question: "What is the primary component of a neutron star?",
      choices: ["Neutrons", "Protons", "Electrons", "Quarks"],
      correctAnswer: "Neutrons"
    },
    {
      category: "Astrophysics",
      difficulty: "PhD",
      question: "What is the primary cause of a Type II supernova?",
      choices: [
        "The gravitational collapse of a massive star’s core",
        "The collision of two neutron stars",
        "A runaway thermonuclear reaction in a white dwarf",
        "A gamma-ray burst in a binary system"
      ],
      correctAnswer: "The gravitational collapse of a massive star’s core"
    },
    {
      category: "Astrophysics",
      difficulty: "PhD",
      question: "What is the primary method used to detect most exoplanets?",
      choices: [
        "Transit photometry",
        "Direct imaging",
        "Gravitational microlensing",
        "Astrometry"
      ],
      correctAnswer: "Transit photometry"
    },
    {
      category: "Astrophysics",
      difficulty: "PhD",
      question: "What is believed to be the primary constituent of dark matter?",
      choices: [
        "Hypothetical non-baryonic particles (WIMPs, etc.)",
        "Ordinary baryonic matter",
        "Protons and neutrons",
        "Neutrinos"
      ],
      correctAnswer: "Hypothetical non-baryonic particles (WIMPs, etc.)"
    },
    // NEW ASTROPHYSICS QUESTIONS
    {
      category: "Astrophysics",
      difficulty: "Extreme",
      question: "Which solution to Einstein’s field equations describes a rotating black hole?",
      choices: [
        "Kerr metric",
        "Schwarzschild metric",
        "Friedmann–Lemaître–Robertson–Walker metric",
        "Reissner–Nordström metric"
      ],
      correctAnswer: "Kerr metric"
    },
    {
      category: "Astrophysics",
      difficulty: "Extreme",
      question: "Which effect predicts the dragging of inertial frames around a rotating massive body?",
      choices: [
        "Lense–Thirring effect",
        "Doppler effect",
        "Zeeman effect",
        "Eötvös effect"
      ],
      correctAnswer: "Lense–Thirring effect"
    },
  
    // ───────────────────────────────────────────────────────────────────────────
    // POLITICS
    // ───────────────────────────────────────────────────────────────────────────
  
    {
      category: "Politics",
      difficulty: "PhD",
      question: "Who was the first President of the United States?",
      choices: ["George Washington", "Thomas Jefferson", "John Adams", "James Madison"],
      correctAnswer: "George Washington"
    },
    {
      category: "Politics",
      difficulty: "PhD",
      question: "Who was the British Prime Minister during most of World War II?",
      choices: ["Winston Churchill", "Neville Chamberlain", "Clement Attlee", "Harold Macmillan"],
      correctAnswer: "Winston Churchill"
    },
    {
      category: "Politics",
      difficulty: "PhD",
      question: "Who was the first female Prime Minister of the United Kingdom?",
      choices: ["Margaret Thatcher", "Theresa May", "Angela Merkel", "Indira Gandhi"],
      correctAnswer: "Margaret Thatcher"
    },
    {
      category: "Politics",
      difficulty: "PhD",
      question: "Who was the first President of Russia after the Soviet Union's collapse?",
      choices: ["Boris Yeltsin", "Vladimir Putin", "Mikhail Gorbachev", "Dmitry Medvedev"],
      correctAnswer: "Boris Yeltsin"
    },
    {
      category: "Politics",
      difficulty: "PhD",
      question: "Who was the first Chancellor of the German Empire (starting in 1871)?",
      choices: ["Otto von Bismarck", "Adolf Hitler", "Konrad Adenauer", "Angela Merkel"],
      correctAnswer: "Otto von Bismarck"
    },
    // NEW POLITICS QUESTIONS
    {
      category: "Politics",
      difficulty: "Masters",
      question: "Which ancient Greek philosopher wrote 'The Republic', a Socratic dialogue on justice and governance?",
      choices: ["Plato", "Aristotle", "Socrates", "Xenophon"],
      correctAnswer: "Plato"
    },
    {
      category: "Politics",
      difficulty: "Extreme",
      question: "Which Enlightenment thinker wrote 'The Spirit of the Laws' and introduced the theory of separation of powers?",
      choices: [
        "Montesquieu",
        "Voltaire",
        "John Locke",
        "Jean-Jacques Rousseau"
      ],
      correctAnswer: "Montesquieu"
    },
  
    // ───────────────────────────────────────────────────────────────────────────
    // HISTORY
    // ───────────────────────────────────────────────────────────────────────────
  
    {
      category: "History",
      difficulty: "PhD",
      question: "What year did the Berlin Wall fall?",
      choices: ["1989", "1990", "1991", "1992"],
      correctAnswer: "1989"
    },
    {
      category: "History",
      difficulty: "PhD",
      question: "In which year did the Titanic sink?",
      choices: ["1912", "1913", "1914", "1915"],
      correctAnswer: "1912"
    },
    {
      category: "History",
      difficulty: "PhD",
      question: "In what year did the American Civil War begin?",
      choices: ["1861", "1860", "1862", "1863"],
      correctAnswer: "1861"
    },
    {
      category: "History",
      difficulty: "PhD",
      question: "In what year did World War I begin?",
      choices: ["1914", "1915", "1916", "1917"],
      correctAnswer: "1914"
    },
    {
      category: "History",
      difficulty: "PhD",
      question: "In what year did the French Revolution begin?",
      choices: ["1789", "1790", "1791", "1792"],
      correctAnswer: "1789"
    },
    // NEW HISTORY QUESTIONS
    {
      category: "History",
      difficulty: "Masters",
      question: "Which empire, existing from 1299 to 1922, was founded by Osman I?",
      choices: [
        "Ottoman Empire",
        "Byzantine Empire",
        "Austro-Hungarian Empire",
        "Mughal Empire"
      ],
      correctAnswer: "Ottoman Empire"
    },
    {
      category: "History",
      difficulty: "Extreme",
      question: "Which treaty, signed in 1648, is often cited as the beginning of the modern international system of sovereign states?",
      choices: [
        "Treaty of Westphalia",
        "Treaty of Versailles",
        "Treaty of Utrecht",
        "Treaty of Tordesillas"
      ],
      correctAnswer: "Treaty of Westphalia"
    },
  
    // ───────────────────────────────────────────────────────────────────────────
    // TECHNOLOGY
    // ───────────────────────────────────────────────────────────────────────────
  
    {
      category: "Technology",
      difficulty: "PhD",
      question: "Who is known as the father of the computer?",
      choices: ["Charles Babbage", "Alan Turing", "John von Neumann", "Bill Gates"],
      correctAnswer: "Charles Babbage"
    },
    {
      category: "Technology",
      difficulty: "PhD",
      question: "What was the first programmable computer (created by Konrad Zuse)?",
      choices: ["Z3", "ENIAC", "UNIVAC", "Colossus"],
      correctAnswer: "Z3"
    },
    {
      category: "Technology",
      difficulty: "PhD",
      question: "Who invented the World Wide Web?",
      choices: ["Tim Berners-Lee", "Bill Gates", "Steve Jobs", "Mark Zuckerberg"],
      correctAnswer: "Tim Berners-Lee"
    },
    {
      category: "Technology",
      difficulty: "PhD",
      question: "What was the first commercially successful personal computer?",
      choices: ["Apple II", "IBM PC", "Commodore 64", "Altair 8800"],
      correctAnswer: "Apple II"
    },
    {
      category: "Technology",
      difficulty: "PhD",
      question: "What was arguably the first video game, created by William Higinbotham in 1958?",
      choices: ["Tennis for Two", "Pong", "Spacewar!", "Computer Golf"],
      correctAnswer: "Tennis for Two"
    },
    // NEW TECHNOLOGY QUESTIONS
    {
      category: "Technology",
      difficulty: "Masters",
      question: "Which device, invented in 1947 at Bell Labs, revolutionized electronics by replacing vacuum tubes?",
      choices: ["Transistor", "Relay", "Microprocessor", "Capacitor"],
      correctAnswer: "Transistor"
    },
    {
      category: "Technology",
      difficulty: "Extreme",
      question: "Which law states that the number of transistors on a microchip doubles approximately every two years?",
      choices: [
        "Moore’s Law",
        "Murphy’s Law",
        "Metcalfe’s Law",
        "Parkinson’s Law"
      ],
      correctAnswer: "Moore’s Law"
    },
  
    // ───────────────────────────────────────────────────────────────────────────
    // ENGINEERING
    // ───────────────────────────────────────────────────────────────────────────
  
    {
      category: "Engineering",
      difficulty: "PhD",
      question: "What is the primary material used in the construction of the Golden Gate Bridge?",
      choices: ["Steel", "Iron", "Concrete", "Aluminum"],
      correctAnswer: "Steel"
    },
    {
      category: "Engineering",
      difficulty: "PhD",
      question: "What is the primary function of a transistor in electronics?",
      choices: [
        "To amplify or switch electronic signals",
        "To store data in memory",
        "To convert AC to DC",
        "To measure resistance"
      ],
      correctAnswer: "To amplify or switch electronic signals"
    },
    {
      category: "Engineering",
      difficulty: "PhD",
      question: "What is the purpose of a bridge rectifier?",
      choices: ["To convert AC to DC", "To amplify signals", "To store energy", "To measure voltage"],
      correctAnswer: "To convert AC to DC"
    },
    {
      category: "Engineering",
      difficulty: "PhD",
      question: "What is the primary purpose of a heat exchanger?",
      choices: [
        "To transfer heat between two or more fluids",
        "To store thermal energy",
        "To measure temperature",
        "To convert heat into electricity"
      ],
      correctAnswer: "To transfer heat between two or more fluids"
    },
    {
      category: "Engineering",
      difficulty: "PhD",
      question: "What is the main function of a flywheel in mechanical systems?",
      choices: [
        "To store rotational energy",
        "To measure torque",
        "To convert kinetic energy to electrical energy",
        "To control engine speed"
      ],
      correctAnswer: "To store rotational energy"
    },
    // NEW ENGINEERING QUESTIONS
    {
      category: "Engineering",
      difficulty: "Undergrad",
      question: "Which field of engineering is primarily concerned with the design and production of aircraft and spacecraft?",
      choices: ["Aerospace Engineering", "Mechanical Engineering", "Civil Engineering", "Electrical Engineering"],
      correctAnswer: "Aerospace Engineering"
    },
    {
      category: "Engineering",
      difficulty: "Masters",
      question: "Which mechanical component allows for the free rotation of a shaft while constraining its motion in one axis?",
      choices: ["Bearing", "Gear", "Pulley", "Crankshaft"],
      correctAnswer: "Bearing"
    },
    {
      category: "Engineering",
      difficulty: "Extreme",
      question: "Which concept in structural engineering quantifies the system's ability to distribute loads beyond a local failure, preventing collapse?",
      choices: [
        "Redundancy",
        "Strain hardening",
        "Buckling",
        "Thermal bridging"
      ],
      correctAnswer: "Redundancy"
    },
  
    // ───────────────────────────────────────────────────────────────────────────
    // MATHEMATICS
    // ───────────────────────────────────────────────────────────────────────────
  
    {
      category: "Mathematics",
      difficulty: "PhD",
      question: "What is the Riemann Hypothesis?",
      choices: [
        "A conjecture about the non-trivial zeros of the Riemann zeta function and prime distribution",
        "A theorem about the convergence of series",
        "A principle in calculus about integrals",
        "A formula for calculating pi"
      ],
      correctAnswer: "A conjecture about the non-trivial zeros of the Riemann zeta function and prime distribution"
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
    // NEW MATH QUESTIONS
    {
      category: "Mathematics",
      difficulty: "Highschool",
      question: "What is the value of π (pi) approximately?",
      choices: ["3.14", "3.16", "2.72", "1.62"],
      correctAnswer: "3.14"
    },
    {
      category: "Mathematics",
      difficulty: "Undergrad",
      question: "Which theorem states that in a right-angled triangle, the square of the hypotenuse equals the sum of the squares of the other two sides?",
      choices: ["Pythagorean theorem", "Fermat’s little theorem", "Ceva’s theorem", "Rolle’s theorem"],
      correctAnswer: "Pythagorean theorem"
    },
    {
      category: "Mathematics",
      difficulty: "Masters",
      question: "Which concept in linear algebra states that every vector space has a basis?",
      choices: [
        "Zorn’s Lemma",
        "Axiom of Choice",
        "Hilbert’s Nullstellensatz",
        "Gauss's law"
      ],
      correctAnswer: "Axiom of Choice"
    },
    {
      category: "Mathematics",
      difficulty: "PhD",
      question: "Which theorem implies that any non-constant single-variable polynomial with complex coefficients has at least one complex root?",
      choices: [
        "Fundamental Theorem of Algebra",
        "Fermat’s Last Theorem",
        "Galois’ theorem",
        "Lagrange’s theorem"
      ],
      correctAnswer: "Fundamental Theorem of Algebra"
    },
  
    // ───────────────────────────────────────────────────────────────────────────
    // PHILOSOPHY
    // ───────────────────────────────────────────────────────────────────────────
  
    {
      category: "Philosophy",
      difficulty: "PhD",
      question: "Who wrote 'Critique of Pure Reason'?",
      choices: ["Immanuel Kant", "Friedrich Nietzsche", "Søren Kierkegaard", "Plato"],
      correctAnswer: "Immanuel Kant"
    },
    {
      category: "Philosophy",
      difficulty: "Extreme",
      question: "Who wrote 'Being and Time'?",
      choices: ["Martin Heidegger", "Jean-Paul Sartre", "Simone de Beauvoir", "Michel Foucault"],
      correctAnswer: "Martin Heidegger"
    },
    // NEW PHILOSOPHY QUESTIONS
    {
      category: "Philosophy",
      difficulty: "Highschool",
      question: "Which ancient Greek philosopher taught Alexander the Great and wrote on many subjects including logic and biology?",
      choices: ["Aristotle", "Socrates", "Plato", "Zeno"],
      correctAnswer: "Aristotle"
    },
    {
      category: "Philosophy",
      difficulty: "Undergrad",
      question: "Which philosopher wrote 'Meditations on First Philosophy' and coined the phrase 'I think, therefore I am'?",
      choices: ["René Descartes", "Baruch Spinoza", "John Locke", "David Hume"],
      correctAnswer: "René Descartes"
    },
    {
      category: "Philosophy",
      difficulty: "Masters",
      question: "Which existentialist philosopher wrote 'Being and Nothingness'?",
      choices: [
        "Jean-Paul Sartre",
        "Albert Camus",
        "Friedrich Nietzsche",
        "Martin Heidegger"
      ],
      correctAnswer: "Jean-Paul Sartre"
    },
    {
      category: "Philosophy",
      difficulty: "PhD",
      question: "Which philosopher proposed the 'categorical imperative' as a fundamental moral principle?",
      choices: ["Immanuel Kant", "G.W.F. Hegel", "Karl Marx", "Jean-Jacques Rousseau"],
      correctAnswer: "Immanuel Kant"
    },
  
    // ───────────────────────────────────────────────────────────────────────────
    // ECONOMICS
    // ───────────────────────────────────────────────────────────────────────────
  
    {
      category: "Economics",
      difficulty: "PhD",
      question: "What is the Nash Equilibrium?",
      choices: [
        "A solution concept in non-cooperative game theory",
        "A principle in supply and demand",
        "A theory of market equilibrium",
        "A concept in behavioral economics"
      ],
      correctAnswer: "A solution concept in non-cooperative game theory"
    },
    {
      category: "Economics",
      difficulty: "Extreme",
      question: "What is Arrow's Impossibility Theorem?",
      choices: [
        "No rank-order voting system can meet a specific set of fairness criteria simultaneously",
        "A principle in supply and demand",
        "A theory of cyclical market equilibrium",
        "A concept in behavioral economics"
      ],
      correctAnswer: "No rank-order voting system can meet a specific set of fairness criteria simultaneously"
    },
    // NEW ECONOMICS QUESTIONS
    {
      category: "Economics",
      difficulty: "Highschool",
      question: "Which term describes the measure of responsiveness of the quantity demanded to changes in price?",
      choices: [
        "Price elasticity of demand",
        "Marginal utility",
        "Opportunity cost",
        "Comparative advantage"
      ],
      correctAnswer: "Price elasticity of demand"
    },
    {
      category: "Economics",
      difficulty: "Undergrad",
      question: "Who is often referred to as the 'Father of Modern Economics' and wrote 'An Inquiry into the Nature and Causes of the Wealth of Nations'?",
      choices: ["Adam Smith", "John Maynard Keynes", "Milton Friedman", "David Ricardo"],
      correctAnswer: "Adam Smith"
    },
    {
      category: "Economics",
      difficulty: "Masters",
      question: "Which concept suggests that in the long run, advanced economies revert to steady growth levels, as described by Robert Solow?",
      choices: ["Solow Growth Model", "Phillips Curve", "Rational Expectations", "IS-LM Model"],
      correctAnswer: "Solow Growth Model"
    },
    {
      category: "Economics",
      difficulty: "PhD",
      question: "Which economist introduced the concept of 'creative destruction' in capitalist economies?",
      choices: ["Joseph Schumpeter", "Karl Marx", "Paul Samuelson", "David Ricardo"],
      correctAnswer: "Joseph Schumpeter"
    }
  ];
  
  // Alias for convenience
  const questions = categorizedQuestions;
  
  module.exports = { categories, difficultyLevels, categorizedQuestions, questions };
  