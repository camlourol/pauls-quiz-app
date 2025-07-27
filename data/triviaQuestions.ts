export interface TriviaQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  category: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

export const triviaQuestions: TriviaQuestion[] = [
  {
    id: 1,
    question: "What is the capital of Burkina Faso?",
    options: ["Gabarone", "Yaoundé", "Ouagadougou", "Moroni"],
    correctAnswer: 2,
    category: "Geography & Nature",
    difficulty: "medium"
  },
  {
    id: 2,
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    correctAnswer: 1,
    category: "Science & Technology",
    difficulty: "easy"
  },
  {
    id: 3,
    question: "Who painted the The Annunciation (1472–1476)?",
    options: ["Domenico Ghirlandaio", "Sandro Botticelli", "Leonardo da Vinci", "Pietro Perugino"],
    correctAnswer: 2,
    category: "Art & Culture",
    difficulty: "medium"
  },
  {
    id: 4,
    question: "Which man with the initials F. L. W. has been described as 'the greatest American architect of all time'?",
    options: ["Francis Len Walker", "Frank Lloyd Wright", "Ford Lee Wrought", "Frank Leonard Witte"],
    correctAnswer: 1,
    category: "Art & Culture",
    difficulty: "easy"
  },
  {
    id: 5,
    question: "Quezon Avenue is the most expensive property in which Asian country's version of Monopoly?",
    options: ["Thailand", "Philippines", "China", "Singapore"],
    correctAnswer: 1,
    category: "Geography & Nature",
    difficulty: "hard"
  },
  {
    id: 6,
    question: "What is the chemical symbol for gold?",
    options: ["Go", "Gd", "Au", "Ag"],
    correctAnswer: 2,
    category: "Science & Technology",
    difficulty: "easy"
  },
  {
    id: 7,
    question: "'The Factory' was the name given to which celebrity's New York studio?",
    options: ["Jean-Michel Basquiat", "Mary Abbott", "Elaine de Kooning", "Andy Warhol"],
    correctAnswer: 3,
    category: "Art & Culture",
    difficulty: "easy"
  },
  {
    id: 8,
    question: "What is the smallest country in the world?",
    options: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"],
    correctAnswer: 1,
    category: "Geography & Nature",
    difficulty: "medium"
  },
  {
    id: 9,
    question: "Who wrote 'The Comedy of Errors'?",
    options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
    correctAnswer: 1,
    category: "Literature",
    difficulty: "medium"
  },
  {
    id: 10,
    question: "How many hearts does an octopus have?",
    options: ["1", "2", "3", "4"],
    correctAnswer: 2,
    category: "Science & Technology",
    difficulty: "medium"
  },
  {
    id: 11,
    question: "Which eccentric American was obsessed with the film 'Ice Station Zebra'?",
    options: [
      "Warren Buffett",
      "Howard Stern",
      "William Randolph Hearst",
      "Howard Hughes"
    ],
    correctAnswer: 3,
    category: "TV & Cinema",
    difficulty: "hard"
  },
  {
    id: 12,
    question: "What is both an African cattle breed and the name of a very popular early 1960s dance style in the USA?",
    options: ["Zebu", "Mambo", "Watusi", "Polka"],
    correctAnswer: 2,
    category: "Music",
    difficulty: "medium"
  },
  {
    id: 13,
    question: "The largest volcanic eruption of the 20th century took place in 1912. Name the country in which it occurred.",
    options: ["Indonesia", "Philippines", "Russia", "USA"],
    correctAnswer: 0,
    category: "Geography & Nature",
    difficulty: "hard"
  },
  {
    id: 14,
    question: "Which European country has a dark blue triangle on the left hand side of its national flag?",
    options: ["Czech Republic", "Slovakia", "Ukraine", "Estonia"],
    correctAnswer: 0,
    category: "Geography",
    difficulty: "medium"
  },
  {
    id: 15,
    question: "Which capital city borders the Ligurian Sea?",
    options: ["Monaco", "Genoa", "Nice", "Pisa"],
    correctAnswer: 0,
    category: "Geography & Nature",
    difficulty: "medium"
  },
  {
    id: 16,
    question: "The British Overseas Territory Bermuda excluded, name the four island countries in the world that begin with the letter \"B\".",
    options: [
      "Bahamas, Barbados, Brunei, Bahrain",
      "Barbados, Bahamas, Belize, Bangladesh",
      "Bahrain, Belize, Benin, Brunei",
      "Barbados, Brunei, Botswana, Bahamas"
    ],
    correctAnswer: 0,
    category: "Geography & Nature",
    difficulty: "hard"
  },
  {
    id: 17,
    question: "Which ice cold sea beginning with the letter \"W\" has the clearest water of any sea in the world?",
    options: ["Weddell Sea", "White Sea", "Wadden Sea", "West Sea"],
    correctAnswer: 0,
    category: "Geography & Nature",
    difficulty: "medium"
  },
  {
    id: 18,
    question: "TAP is the national airline of which country?",
    options: ["Spain", "Portugal", "Italy", "Greece"],
    correctAnswer: 1,
    category: "Geography & Nature",
    difficulty: "easy"
  },
  {
    id: 19,
    question: "What is the largest country in the world without an airport?",
    options: ["Liechtenstein", "Monaco", "Andorra", "San Marino"],
    correctAnswer: 2,
    category: "Geography & Nature",
    difficulty: "hard"
  },
  {
    id: 20,
    question: "The territory French Guiana excluded, what is the smallest sovereign country in South America?",
    options: ["Guyana", "Suriname", "Uruguay", "Paraguay"],
    correctAnswer: 1,
    category: "Geography & Nature",
    difficulty: "medium"
  },
  {
    id: 21,
    question: "In the early 16th century almost half of the African east coast was claimed by which European country?",
    options: ["Portugal", "Spain", "Britain", "France"],
    correctAnswer: 0,
    category: "History & Politics",
    difficulty: "medium"
  },
  {
    id: 22,
    question: "Rama X is the reigning King of which country?",
    options: ["Cambodia", "Thailand", "Myanmar", "Laos"],
    correctAnswer: 1,
    category: "History & Politics",
    difficulty: "easy"
  },
  {
    id: 23,
    question: "Due to France's opposition to a war on Iraq in 2003, French fries in the U.S. House cafeterias were re‑named what?",
    options: ["Liberty Fries", "Patriot Fries", "Freedom Fries", "Democracy Fries"],
    correctAnswer: 2,
    category: "History & Politics",
    difficulty: "hard"
  },
  {
    id: 24,
    question: "What are members of The Society of Friends better known as?",
    options: ["Puritans", "Quakers", "Shakers", "Methodists"],
    correctAnswer: 1,
    category: "History & Politics",
    difficulty: "easy"
  },
  {
    id: 25,
    question: "The name of which collection of houses is derived from the French word 'to speak'?",
    options: ["Houses of Parliament", "Palace of Versailles", "Chamber of Deputies", "House of Commons"],
    correctAnswer: 0,
    category: "Language",
    difficulty: "medium"
  },
  {
    id: 26,
    question: "The name of which kind of horse means 'painted'?",
    options: ["Palomino", "Appaloosa", "Pinto", "Clydesdale"],
    correctAnswer: 2,
    category: "Language",
    difficulty: "medium"
  },
  {
    id: 27,
    question: "What are the three longest songs found on Beatles studio albums?",
    options: [
      "Hey Jude, Let It Be, A Day in the Life",
      "I Want You (She's So Heavy), Hey Jude, Come Together",
      "Revolution #9, I Want You (She's So Heavy), Hey Jude",
      "Revolution #9, Get Back, I Am the Walrus"
    ],
    correctAnswer: 2,
    category: "Music",
    difficulty: "hard"
  },
  {
    id: 28,
    question: "Elvis Presley had an 8th degree black belt in which karate style?",
    options: ["Shotokan", "Goju-ryu", "Kenpo", "Wado-ryu"],
    correctAnswer: 2,
    category: "Music",
    difficulty: "medium"
  },
  {
    id: 29,
    question: "The Scottish keyboardist Ian Stewart is also known as 'The Sixth' what?",
    options: ["Stone", "Beatle", "Rolling Stone", "Keymaster"],
    correctAnswer: 2,
    category: "Music",
    difficulty: "easy"
  },
  {
    id: 30,
    question: "Bush, Fae's, Pit, McMahon's and Russell's are all examples of what?",
    options: ["Elapids", "Vipers", "Boas", "Pythons"],
    correctAnswer: 1,
    category: "Geography & Nature",
    difficulty: "medium"
  },
  {
    id: 31,
    question: "What is the world's largest twin jet wide bodied airliner?",
    options: ["Airbus A380", "Boeing 777", "Boeing 747", "Airbus A350"],
    correctAnswer: 1,
    category: "Science & Technology",
    difficulty: "medium"
  },
  {
    id: 32,
    question: "Archimedes' Constant is better known as what?",
    options: ["Euler's number (e)", "Pi (π)", "Golden ratio (φ)", "Tau (τ)"],
    correctAnswer: 1,
    category: "Science & Technology",
    difficulty: "easy"
  },
  {
    id: 33,
    question: "Known as \"The Battle of Nuremburg\", a FIFA World Cup match between which two nations saw a record 4 red cards and 16 yellows?",
    options: ["France vs Brazil", "Germany vs Italy", "Portugal vs The Netherlands", "England vs Argentina"],
    correctAnswer: 2,
    category: "Sports",
    difficulty: "hard"
  },
  {
    id: 34,
    question: "Which former champion of the world once quipped \"I'm so fast that last night I turned off the light switch in my hotel room and was in bed before the room got dark\"?",
    options: ["Floyd Mayweather", "Joe Frazier", "Sugar Ray Leonard", "Muhammad Ali"],
    correctAnswer: 3,
    category: "Sports",
    difficulty: "medium"
  },
  {
    id: 35,
    question: "Which 2009 film broke Titanic's record as the highest grossing film of all time?",
    options: ["Avatar", "The Dark Knight", "Transformers: Revenge of the Fallen", "Harry Potter and the Half-Blood Prince"],
    correctAnswer: 0,
    category: "TV & Cinema",
    difficulty: "easy"
  },
  {
    id: 39,
    question: "Which 1954 romantic comedy starring Audrey Hepburn and William Holden was re-made in 1995 (with Harrison Ford and Julia Ormond)?",
    options: ["Roman Holiday", "Charade", "Sabrina", "Breakfast at Tiffany's"],
    correctAnswer: 2,
    category: "TV & Cinema",
    difficulty: "medium"
  },
  {
    id: 40,
    question: "In which film does a pit bull named Brandy help save his owner's life from house intruders?",
    options: ["Once Upon A Time In Hollywood", "Lassie", "Turner & Hooch", "Air Bud"],
    correctAnswer: 0,
    category: "TV & Cinema",
    difficulty: "medium"
  },
  {
    id: 41,
    question: "The Crysknife is made from the tooth of a dead what?",
    options: ["Shark", "Sandworm", "Beast", "Dragon"],
    correctAnswer: 1,
    category: "Science & Technology",
    difficulty: "hard"
  },
  {
    id: 42,
    question: "Which one of the following is the world's largest honey bee?",
    options: [
      "Himalayan giant honey bee",
      "Rocky Mt giant honey bee",
      "Alpen giant honey bee",
      "Andean giant honey bee"
    ],
    correctAnswer: 0,
    category: "Geography & Nature",
    difficulty: "medium"
  },
  {
    id: 43,
    question: "Over 90% of all the Fine Opals in the world are found in mines located in which country?",
    options: [
      "Australia",
      "Brazil",
      "Mexico",
      "USA"
    ],
    correctAnswer: 0,
    category: "Geography & Nature",
    difficulty: "medium"
  },
  {
    id: 44,
    question: "In which film does Laurence Olivier play a Nazi hunter?",
    options: [
      "Marathon Man",
      "Schindler's List",
      "The Boys From Brazil",
      "The Reader"
    ],
    correctAnswer: 2,
    category: "TV & Cinema",
    difficulty: "medium"
  },
  {
    id: 45,
    question: "In which film does Laurence Olivier play a hunted Nazi?",
    options: [
      "The Boys From Brazil",
      "Marathon Man",
      "Valkyrie",
      "The Pianist"
    ],
    correctAnswer: 1,
    category: "TV & Cinema",
    difficulty: "medium"
  },
  {
    id: 46,
    question: "Which famous gold coin, first introduced in the 13th century, was named after a European city?",
    options: ["Guilder", "Denarius", "Florin", "Thaler"],
    correctAnswer: 2,
    category: "History & Politics",
    difficulty: "medium"
  },
  {
    id: 47,
    question: "Since the Open era in 1968, which male tennis player holds the record as the oldest finalist at Wimbledon, the US Open and the Australian Open?",
    options: ["Roger Federer", "Jimmy Connors", "Novak Djokovic", "Ken Rosewall"],
    correctAnswer: 3,
    category: "Sports",
    difficulty: "medium"
  },
  {
    id: 48,
    question: "What is the name of the second most widely planted red wine grape in the world?",
    options: ["Grenache", "Merlot", "Tempranillo", "Gamay"],
    correctAnswer: 0,
    category: "Science & Technology",
    difficulty: "medium"
  },
  {
    id: 49,
    question: "What is the other name for the alternative alphabet sometimes known as '1337'?",
    options: ["Leet", "Pig Latin", "Morse Code", "Semaphore"],
    correctAnswer: 0,
    category: "Language",
    difficulty: "medium"
  },
  {
    id: 50,
    question: "As of May 2024, approximately how many billionaires are there in the UK (±25)?",
    options: ["140", "165", "190", "215"],
    correctAnswer: 1,
    category: "History & Politics",
    difficulty: "medium"
  },
  {
    id: 51,
    question: "Which artist has had a record five posthumous number one hit singles in the UK music charts?",
    options: ["John Lennon", "Michael Jackson", "Tupac Shakur", "Elvis Presley"],
    correctAnswer: 3,
    category: "Music",
    difficulty: "medium"
  },
  {
    id: 52,
    question: "Which well known Greek word means 'Big O'?",
    options: ["Alpha", "Omega", "Theta", "Omicron"],
    correctAnswer: 1,
    category: "Language",
    difficulty: "easy"
  },
  {
    id: 53,
    question: "Which American crime boss is said to have been responsible for fixing the 1919 baseball World Series?",
    options: ["Al Capone", "Lucky Luciano", "Meyer Lansky", "Arnold Rothstein"],
    correctAnswer: 3,
    category: "History & Politics",
    difficulty: "medium"
  },
  {
    id: 54,
    question: "What is the largest beer exporting country in the world today?",
    options: ["Netherlands", "China", "Mexico", "Germany"],
    correctAnswer: 2,
    category: "Geography & Nature",
    difficulty: "medium"
  },
  {
    id: 55,
    question: "The Swallow Sidecar Company was the former name of which world famous car manufacturer?",
    options: ["Aston Martin", "Rolls-Royce", "Jaguar", "Bentley"],
    correctAnswer: 2,
    category: "Science & Technology",
    difficulty: "medium"
  },
  {
    id: 56,
    question: "What is the second smallest planet in our solar system?",
    options: ["Mercury", "Mars", "Venus", "Earth"],
    correctAnswer: 1,
    category: "Science & Technology",
    difficulty: "easy"
  },
  {
    id: 57,
    question: "Which popular variety of hot chili pepper is named after a capital city?",
    options: ["Jalapeño", "Sichuan pepper", "Bhut Jolokia", "Habanero"],
    correctAnswer: 3,
    category: "Geography & Nature",
    difficulty: "medium"
  },
  {
    id: 58,
    question: "The 75 steep steps at the end of M Street Georgetown, Washington DC play a role in which controversial 1973 film?",
    options: ["Rosemary's Baby", "The Wicker Man", "The Texas Chain Saw Massacre", "The Exorcist"],
    correctAnswer: 3,
    category: "TV & Cinema",
    difficulty: "medium"
  },
  {
    id: 59,
    question: "What is the Barber of Seville's first name?",
    options: ["Bartolo", "Almaviva", "Figaro", "Rossini"],
    correctAnswer: 2,
    category: "Music",
    difficulty: "easy"
  },
  {
    id: 60,
    question: "Probably the two largest bank robberies in history both occurred at the same bank in the same country—one in March 2003 for nearly $1 billion, the other between 2003 and 2009 for $6.6 billion. In which country did both take place?",
    options: ["USA", "Iraq", "Switzerland", "Venezuela"],
    correctAnswer: 1,
    category: "History & Politics",
    difficulty: "hard"
  },
  {
    id: 61,
    question: "What is the unit of length used in astronomy to measure 3.6 light years (30.9 trillion km)?",
    options: ["Astronomical unit", "Light-year", "Light-second", "Parsec"],
    correctAnswer: 3,
    category: "Science & Technology",
    difficulty: "medium"
  },
  {
    id: 62,
    question: "TSOP was a number one hit single in the USA in 1974. What do the letters T S O P stand for?",
    options: ["The Soul Of Pop", "The Sound Of Philadelphia", "The Spirit Of Peace", "The Songs Of Power"],
    correctAnswer: 1,
    category: "Music",
    difficulty: "medium"
  },
  {
    id: 63,
    question: "A Native American people, a helicopter and a wind. One word.",
    options: ["Apache", "Cherokee", "Chinook", "Comanche"],
    correctAnswer: 2,
    category: "Geography & Nature",
    difficulty: "medium"
  }
];

export const categories = [
  "Art & Culture",
  "Literature",
  "Music",
  "History & Politics",
  "Science & Technology",
  "Geography & Nature",
  "TV & Cinema",
  "Language",
  "Sports",
];

export const difficulties = [
  "All Difficulties",
  "easy",
  "medium", 
  "hard"
];