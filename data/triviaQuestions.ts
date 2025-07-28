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
    options: ["Philippines", "Japan", "USA", "Indonesia"],
    correctAnswer: 3,
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
    options: ["Genoa", "Nice", "Pisa", "Monaco"],
    correctAnswer: 3,
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
    options: ["White Sea", "Wadden Sea", "West Sea", "Weddell Sea"],
    correctAnswer: 3,
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
    options: ["The Dark Knight", "Transformers: Revenge of the Fallen", "Avatar", "Harry Potter and the Half-Blood Prince"],
    correctAnswer: 2,
    category: "TV & Cinema",
    difficulty: "easy"
  },
  {
    id: 36,
    question: "Which 1954 romantic comedy starring Audrey Hepburn and William Holden was re-made in 1995 (with Harrison Ford and Julia Ormond)?",
    options: ["Roman Holiday", "Charade", "Sabrina", "Breakfast at Tiffany's"],
    correctAnswer: 2,
    category: "TV & Cinema",
    difficulty: "medium"
  },
  {
    id: 37,
    question: "In which film does a pit bull named Brandy help save his owner's life from house intruders?",
    options: ["Once Upon A Time In Hollywood", "Lassie", "Turner & Hooch", "Air Bud"],
    correctAnswer: 0,
    category: "TV & Cinema",
    difficulty: "medium"
  },
  {
    id: 38,
    question: "The Crysknife is made from the tooth of a dead what?",
    options: ["Shark", "Sandworm", "Beast", "Dragon"],
    correctAnswer: 1,
    category: "Science & Technology",
    difficulty: "hard"
  },
  {
    id: 39,
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
    id: 40,
    question: "Over 90% of all the Fine Opals in the world are found in mines located in which country?",
    options: ["Brazil", "Mexico", "Australia", "USA"],
    correctAnswer: 2,
    category: "Geography & Nature",
    difficulty: "medium"
  },
  {
    id: 41,
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
    id: 42,
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
    id: 43,
    question: "Which famous gold coin, first introduced in the 13th century, was named after a European city?",
    options: ["Guilder", "Denarius", "Florin", "Thaler"],
    correctAnswer: 2,
    category: "History & Politics",
    difficulty: "medium"
  },
  {
    id: 44,
    question: "Since the Open era in 1968, which male tennis player holds the record as the oldest finalist at Wimbledon, the US Open and the Australian Open?",
    options: ["Roger Federer", "Jimmy Connors", "Novak Djokovic", "Ken Rosewall"],
    correctAnswer: 3,
    category: "Sports",
    difficulty: "medium"
  },
  {
    id: 45,
    question: "What is the name of the second most widely planted red wine grape in the world?",
    options: ["Grenache", "Merlot", "Tempranillo", "Gamay"],
    correctAnswer: 0,
    category: "Science & Technology",
    difficulty: "medium"
  },
  {
    id: 46,
    question: "What is the other name for the alternative alphabet sometimes known as '1337'?",
    options: ["Pig Latin", "Morse Code", "Leet", "Semaphore"],
    correctAnswer: 2,
    category: "Language",
    difficulty: "medium"
  },
  {
    id: 47,
    question: "Which word, derived from the hebrew for 'ibreian' or 'hispanic', denotes a specific and rather large community of Jewish people?",
    options: ["Ashkenazi", "Sephardi", "Talmudic", "Mizrahi"],
    correctAnswer: 1,
    category: "Language",
    difficulty: "medium"
  },
  {
    id: 48,
    question: "Which artist has had a record five posthumous number one hit singles in the UK music charts?",
    options: ["John Lennon", "Michael Jackson", "Tupac Shakur", "Elvis Presley"],
    correctAnswer: 3,
    category: "Music",
    difficulty: "medium"
  },
  {
    id: 49,
    question: "Which well known Greek word means 'Big O'?",
    options: ["Alpha", "Omega", "Theta", "Omicron"],
    correctAnswer: 1,
    category: "Language",
    difficulty: "easy"
  },
  {
    id: 50,
    question: "Which American crime boss is said to have been responsible for fixing the 1919 baseball World Series?",
    options: ["Al Capone", "Lucky Luciano", "Meyer Lansky", "Arnold Rothstein"],
    correctAnswer: 3,
    category: "History & Politics",
    difficulty: "medium"
  },
  {
    id: 51,
    question: "What is the largest beer exporting country in the world today?",
    options: ["Netherlands", "China", "Mexico", "Germany"],
    correctAnswer: 2,
    category: "Geography & Nature",
    difficulty: "medium"
  },
  {
    id: 52,
    question: "The Swallow Sidecar Company was the former name of which world famous car manufacturer?",
    options: ["Aston Martin", "Rolls-Royce", "Jaguar", "Bentley"],
    correctAnswer: 2,
    category: "Science & Technology",
    difficulty: "medium"
  },
  {
    id: 53,
    question: "What is the second smallest planet in our solar system?",
    options: ["Mercury", "Mars", "Venus", "Earth"],
    correctAnswer: 1,
    category: "Science & Technology",
    difficulty: "easy"
  },
  {
    id: 54,
    question: "Which popular variety of hot chili pepper is named after a capital city?",
    options: ["Habanero", "Jalapeño", "Sichuan pepper", "Bhut Jolokia"],
    correctAnswer: 0,
    category: "Geography & Nature",
    difficulty: "medium"
  },
  {
    id: 55,
    question: "The 75 steep steps at the end of M Street Georgetown, Washington DC play a role in which controversial 1973 film?",
    options: ["Rosemary's Baby", "The Wicker Man", "The Texas Chain Saw Massacre", "The Exorcist"],
    correctAnswer: 3,
    category: "TV & Cinema",
    difficulty: "medium"
  },
  {
    id: 56,
    question: "What is the Barber of Seville's first name?",
    options: ["Bartolo", "Almaviva", "Figaro", "Rossini"],
    correctAnswer: 2,
    category: "Music",
    difficulty: "easy"
  },
  {
    id: 57,
    question: "How long is the Statue of Liberty's index finger?",
    options: ["215 cm", "223 cm", "244 cm", "250 cm"],
    correctAnswer: 2,
    category: "Science & Technology",
    difficulty: "medium"
  },
  {
    id: 58,
    question: "The name of which tragic King translated means \"son of life\"?",
    options: ["Lear", "Richard", "Edgar", "Macbeth"],
    correctAnswer: 3,
    category: "Literature",
    difficulty: "hard"
  },
  {
    id: 59,
    question: "The profanity or expression of surprise \"Shazbot\" stems from which planet?",
    options: ["Ork", "Vulcan", "Krypton", "Gallifrey"],
    correctAnswer: 0,
    category: "TV & Cinema",
    difficulty: "medium"
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
  },
  {
    id: 64,
    question: "How old was US President John F Kennedy when he died?",
    options: ["45", "46", "47", "48"],
    correctAnswer: 1,
    category: "History & Politics",
    difficulty: "easy"
  },
  {
    id: 65,
    question: "What was the name of the backing band consisting of Mick Ronson, Trevor Bolder and Mick Woodmansey?",
    options: ["The Spiders From Mars", "The Velvet Underground", "The Faces", "The New York Dolls"],
    correctAnswer: 0,
    category: "Music",
    difficulty: "medium"
  },
  {
    id: 66,
    question: "In which year was Alice's Adventures in Wonderland first published?",
    options: ["1840", "1850", "1865", "1890"],
    correctAnswer: 2,
    category: "Literature",
    difficulty: "medium"
  },
  {
    id: 67,
    question: "Which 1984 sci fi movie ends with the following words? \"What did he just say?\"; \"He said there's a storm coming.\"; \"I know.\"",
    options: ["Blade Runner", "Terminator", "The Last Starfighter", "2010"],
    correctAnswer: 1,
    category: "TV & Cinema",
    difficulty: "easy"
  },
  {
    id: 68,
    question: "The longest winning streak in NFL history is how many games?",
    options: ["21", "23", "25", "27"],
    correctAnswer: 1,
    category: "Sports",
    difficulty: "medium"
  },
  {
    id: 69,
    question: "On May 5, 1994, more than 3,000,000 people in Sao Paulo attended the funeral of which famous Brazilian?",
    options: ["Pelé", "Ayrton Senna", "Zico", "Sergio Mendes"],
    correctAnswer: 1,
    category: "Sports",
    difficulty: "medium"
  },
  {
    id: 70,
    question: "Which game translated means 'yes yes'?",
    options: ["Scrabble", "Ouija", "Monopoly", "Pictionary"],
    correctAnswer: 1,
    category: "Language",
    difficulty: "medium"
  },
  {
    id: 71,
    question: "Who was Bonnie Blue's doting father?",
    options: ["Scarlett O'Hara", "Ashley Wilkes", "Rhett Butler", "Mammy"],
    correctAnswer: 2,
    category: "Literature",
    difficulty: "medium"
  },
  {
    id: 72,
    question: "What is the only country in the world whose flag is not rectangular or square?",
    options: ["Switzerland", "Vatican City", "Nepal", "Japan"],
    correctAnswer: 2,
    category: "Geography & Nature",
    difficulty: "medium"
  },
  {
    id: 73,
    question: "Which scientist is credited with the discovery of penicillin?",
    options: ["Marie Curie", "Alexander Fleming", "Louis Pasteur", "Isaac Newton"],
    correctAnswer: 1,
    category: "Science & Technology",
    difficulty: "easy"
  },
  {
    id: 74,
    question: "Who wrote the epic poem 'Paradise Lost'?",
    options: ["John Milton", "William Wordsworth", "Geoffrey Chaucer", "Samuel Taylor Coleridge"],
    correctAnswer: 0,
    category: "Literature",
    difficulty: "medium"
  },
  {
    id: 75,
    question: "Which composer wrote the famous 1812 Overture?",
    options: ["Ludwig van Beethoven", "Pyotr Ilyich Tchaikovsky", "Johannes Brahms", "Franz Schubert"],
    correctAnswer: 1,
    category: "Music",
    difficulty: "easy"
  },
  {
    id: 76,
    question: "Who was the first woman to win a Nobel Prize?",
    options: ["Rosalind Franklin", "Marie Curie", "Ada Lovelace", "Dorothy Hodgkin"],
    correctAnswer: 1,
    category: "History & Politics",
    difficulty: "medium"
  },
  {
    id: 77,
    question: "Which language has the most native speakers worldwide?",
    options: ["English", "Hindi", "Spanish", "Mandarin Chinese"],
    correctAnswer: 3,
    category: "Language",
    difficulty: "easy"
  },
  {
    id: 78,
    question: "What is the tallest mountain in Africa?",
    options: ["Mount Kenya", "Mount Kilimanjaro", "Mount Elgon", "Mount Meru"],
    correctAnswer: 1,
    category: "Geography & Nature",
    difficulty: "easy"
  },
  {
    id: 79,
    question: "Which artist is famous for the mural 'Guernica'?",
    options: ["Salvador Dalí", "Pablo Picasso", "Diego Rivera", "Henri Matisse"],
    correctAnswer: 1,
    category: "Art & Culture",
    difficulty: "easy"
  },
  {
    id: 80,
    question: "In which year did the Berlin Wall fall?",
    options: ["1987", "1988", "1989", "1990"],
    correctAnswer: 2,
    category: "History & Politics",
    difficulty: "medium"
  },
  {
    id: 81,
    question: "Which chemical element has the atomic number 6?",
    options: ["Oxygen", "Carbon", "Nitrogen", "Boron"],
    correctAnswer: 1,
    category: "Science & Technology",
    difficulty: "easy"
  },
  {
    id: 82,
    question: "Who played the character Tony Stark in the Marvel Cinematic Universe?",
    options: ["Chris Evans", "Robert Downey Jr.", "Mark Ruffalo", "Chris Hemsworth"],
    correctAnswer: 1,
    category: "TV & Cinema",
    difficulty: "easy"
  },
  {
    id: 83,
    question: "Which river is the longest in South America?",
    options: ["Paraná", "Amazon", "Orinoco", "São Francisco"],
    correctAnswer: 1,
    category: "Geography & Nature",
    difficulty: "medium"
  },
  {
    id: 84,
    question: "Who is the author of the Harry Potter series?",
    options: ["J.R.R. Tolkien", "J.K. Rowling", "Suzanne Collins", "Philip Pullman"],
    correctAnswer: 1,
    category: "Literature",
    difficulty: "easy"
  },
  {
    id: 85,
    question: "Which country won the FIFA World Cup in 2014?",
    options: ["Brazil", "Argentina", "Germany", "Spain"],
    correctAnswer: 2,
    category: "Sports",
    difficulty: "medium"
  },
  {
    id: 86,
    question: "What is the main ingredient in traditional Japanese miso soup?",
    options: ["Seaweed", "Soybean paste", "Rice", "Fish"],
    correctAnswer: 1,
    category: "Art & Culture",
    difficulty: "medium"
  },
  {
    id: 87,
    question: "In which country were each of the following actresses born? a. Margot Robbie b. Eva Green c. Natalie Portman d. Emma Watson",
    options: [
      "Australia, France, Israel, France",
      "Australia, France, UK, USA",
      "New Zealand, France, Israel, France",
      "Australia, Spain, Israel, UK"
    ],
    correctAnswer: 0,
    category: "TV & Cinema",
    difficulty: "medium"
  },
  {
    id: 88,
    question: "How many floors does the Empire State Building have?",
    options: ["97", "102", "110", "115"],
    correctAnswer: 1,
    category: "Science & Technology",
    difficulty: "medium"
  },
  {
    id: 89,
    question: "Which Portuguese explorer gave the Pacific ocean its name?",
    options: ["Vasco da Gama", "Ferdinand Magellan", "Pedro Álvares Cabral", "Bartolomeu Dias"],
    correctAnswer: 1,
    category: "History & Politics",
    difficulty: "medium"
  },
  {
    id: 90,
    question: "The City of Paris, Normandie, Deutschland and the United States were all holders of what?",
    options: ["America's Cup", "Transatlantic Trophy", "Blue Riband", "Henley Regatta"],
    correctAnswer: 2,
    category: "Sports",
    difficulty: "hard"
  },
  {
    id: 91,
    question: "The song Wild Horses was a chart success for the Rolling Stones in 1971. What kind of 'Horses' from another group reached No 2 in the UK and No 14 in the US charts in 1973? Note: 'Horses' not 'Horse'",
    options: ["Wild Horses", "Silver Horses", "Phantom Horses", "Crazy Horses"],
    correctAnswer: 3,
    category: "Music",
    difficulty: "hard"
  },
  {
    id: 92,
    question: "The colossal 'Palace of the People' or 'Palace of the Parliament' is one of the world's heaviest buildings. In which European capital is it located?",
    options: ["Budapest", "Bucharest", "Belgrade", "Vienna"],
    correctAnswer: 1,
    category: "Geography & Nature",
    difficulty: "hard"
  },
  {
    id: 93,
    question: "In which gangster film is Tony Montana the central character?",
    options: ["Scarface", "The Godfather", "Goodfellas", "Carlito's Way"],
    correctAnswer: 0,
    category: "TV & Cinema",
    difficulty: "medium"
  },
  {
    id: 94,
    question: "In which year was the term 'flying saucer' first coined?",
    options: ["1940", "1947", "1962", "1969"],
    correctAnswer: 1,
    category: "Science & Technology",
    difficulty: "hard"
  },
  {
    id: 95,
    question: "What was the fourth country to acquire the atom bomb?",
    options: ["United Kingdom", "France", "China", "Israel"],
    correctAnswer: 1,
    category: "History & Politics",
    difficulty: "medium"
  },
  {
    id: 96,
    question: "What colour jersey does the overall leader of the Giro d'Italia wear?",
    options: ["Yellow", "Pink", "Green", "Red"],
    correctAnswer: 1,
    category: "Sports",
    difficulty: "easy"
  },
  {
    id: 97,
    question: "In 1877 Spencer Gore became the inaugural winner of which sporting title?",
    options: ["Henley Regatta", "Tour de France", "US Open", "Men's singles Wimbledon Championship"],
    correctAnswer: 3,
    category: "Sports",
    difficulty: "hard"
  },
  {
    id: 98,
    question: "H5N1 is better known as what?",
    options: ["Bird flu", "Swine flu", "Covid", "Avian influenza"],
    correctAnswer: 0,
    category: "Science & Technology",
    difficulty: "medium"
  },
  {
    id: 99,
    question: "A Japanese motor company and a month in the Jewish calendar.",
    options: ["Toyota", "Nissan", "Mazda", "Subaru"],
    correctAnswer: 1,
    category: "Language",
    difficulty: "easy"
  },
  {
    id: 100,
    question: "The name of which arms control treaty between the USA and the former USSR is also something to eat?",
    options: ["LARD", "SALT", "MSG", "PIES"],
    correctAnswer: 1,
    category: "History & Politics",
    difficulty: "hard"
  },
  {
    id: 101,
    question: "What is the well known Hindi word for 'panther'?",
    options: ["Sheru", "Bagheera", "Panthera", "Khan"],
    correctAnswer: 1,
    category: "Language",
    difficulty: "medium"
  },
  {
    id: 102,
    question: "What would a 'Maria Gravida' painting in the Catholic church depict?",
    options: ["A pregnant Virgin Mary", "The Annunciation", "The Coronation of Mary", "The Assumption"],
    correctAnswer: 0,
    category: "Art & Culture",
    difficulty: "medium"
  },
  {
    id: 103,
    question: "“Bigger. Smarter. Faster. Meaner.” was a movie poster tag line for which 1999 sci fi horror film?",
    options: ["The Matrix", "The Faculty", "Deep Blue Sea", "Event Horizon"],
    correctAnswer: 2,
    category: "TV & Cinema",
    difficulty: "medium"
  },
  {
    id: 104,
    question: "What did the Wright brothers build for a living before they found fame with their Flyer I aeroplane?",
    options: ["Cars", "Bicycles", "Typewriters", "Watches"],
    correctAnswer: 1,
    category: "Science & Technology",
    difficulty: "medium"
  },
  {
    id: 105,
    question: "In which Arnold Schwarzenegger film are there robotic automatons called \"Johnny Cabs\"?",
    options: ["Terminator 2", "Total Recall", "Commando", "Predator"],
    correctAnswer: 1,
    category: "TV & Cinema",
    difficulty: "medium"
  },
  {
    id: 106,
    question: "What winds all told circa 30,000 km from Prudhoe Bay to Ushuaia?",
    options: ["Trans‑Siberian Railway", "Pan‑American Highway", "Route 66", "Silk Road"],
    correctAnswer: 1,
    category: "Geography & Nature",
    difficulty: "medium"
  },
  {
    id: 107,
    question: "The name for which type of building stems from the Greek word for a unit of measurement and/or a foot race?",
    options: ["Arena", "Theater", "Gymnasium", "Stadium"],
    correctAnswer: 3,
    category: "Language",
    difficulty: "medium"
  },
  {
    id: 108,
    question: "Which famed guitarist played on Petula Clark's \"Downtown\", Donovan's \"Sunshine Superman\", Shirley Bassey's \"Goldfinger\" and Joe Cocker's \"With A Little Help From My Friends\"?",
    options: ["Eric Clapton", "Jimmy Page", "Jeff Beck", "Carlos Santana"],
    correctAnswer: 1,
    category: "Music",
    difficulty: "hard"
  },
  {
    id: 109,
    question: "What was Jakarta called from the early 17th century up until 1949?",
    options: ["Batavia", "Byzantium", "Constantinople", "Benghazi"],
    correctAnswer: 0,
    category: "History & Politics",
    difficulty: "medium"
  },
  {
    id: 110,
    question: "What was the name of the CIA's black ops program that created the assassin Jason Bourne?",
    options: ["Operation Pandora", "Treadstone", "Threadstone", "Project Nemesis"],
    correctAnswer: 2,
    category: "TV & Cinema",
    difficulty: "hard"
  },
  {
    id: 111,
    question: "Which two countries were involved in the 1939 'Winter War'?",
    options: ["Finland and Norway", "Sweden and Finland", "Soviet Union and Finland", "Soviet Union and Poland"],
    correctAnswer: 2,
    category: "History & Politics",
    difficulty: "medium"
  },
  {
    id: 112,
    question: "Which two European countries have the shortest coastlines in the world?",
    options: ["Monaco and San Marino", "Monaco and Andorra", "Monaco and Bosnia and Herzegovina", "San Marino and Liechtenstein"],
    correctAnswer: 2,
    category: "Geography & Nature",
    difficulty: "hard"
  },
  {
    id: 113,
    question: "The film debuts for both William Hurt and Drew Barrymore were in which 1980 Ken Russell film?",
    options: ["Hair", "Altered States", "My Dinner with Andre", "Slipstream"],
    correctAnswer: 1,
    category: "TV & Cinema",
    difficulty: "medium"
  },
  {
    id: 114,
    question: "In which year were the Olympic Games held for the first time in an Asian country?",
    options: ["1960", "1964", "1968", "1972"],
    correctAnswer: 1,
    category: "Sports",
    difficulty: "medium"
  },
  {
    id: 115,
    question: "Perfect, Fibonacci, Mersenne, Odd, Transcendental and Fermat are all examples of what?",
    options: ["Algorithms", "Theorems", "Numbers", "Shapes"],
    correctAnswer: 2,
    category: "Science & Technology",
    difficulty: "easy"
  },
  {
    id: 116,
    question: "The album cover art work for which Rod Stewart album is based on Renoir's painting 'Le Moulin de la Galette'?",
    options: ["Footloose", "A Night on the Town", "Blondes Have More Fun", "Every Picture Tells a Story"],
    correctAnswer: 1,
    category: "Music",
    difficulty: "medium"
  },
  {
    id: 117,
    question: "What are the 8 bones that form the human wrist called?",
    options: ["Tarsal bones", "Metatarsal bones", "Carpal bones", "Phalanges"],
    correctAnswer: 2,
    category: "Science & Technology",
    difficulty: "easy"
  },
  {
    id: 118,
    question: "Who is known as \"the father of the zombie film\"?",
    options: ["Wes Craven", "George A. Romero", "John Carpenter", "Sam Raimi"],
    correctAnswer: 1,
    category: "TV & Cinema",
    difficulty: "medium"
  },
  {
    id: 119,
    question: "In which year did the world population first reach 1,000,000,000?",
    options: ["1600", "1700", "1800", "1900"],
    correctAnswer: 2,
    category: "History & Politics",
    difficulty: "medium"
  },
  {
    id: 120,
    question: "What is: a. the longest river in Italy; b. the largest lake in Italy?",
    options: ["Po and Lake Garda", "Tiber and Lake Como", "Arno and Lake Maggiore", "Adige and Lake Como"],
    correctAnswer: 0,
    category: "Geography & Nature",
    difficulty: "medium"
  },
  {
    id: 121,
    question: "List the four Beatles in order of age, starting with the oldest.",
    options: ["John, Paul, George, Ringo", "Paul, John, George, Ringo", "Ringo, John, Paul, George", "George, Ringo, John, Paul"],
    correctAnswer: 2,
    category: "Music",
    difficulty: "medium"
  },
  {
    id: 122,
    question: "Which of the following is one of the world's most venomous marine animals?",
    options: ["Black-ringed octopus", "Blue-ringed octopus", "Red-ringed octopus", "Yellow-ringed octopus"],
    correctAnswer: 1,
    category: "Science & Technology",
    difficulty: "hard"
  },
  {
    id: 123,
    question: "Which western held the prime time TV record in the US for most episodes until The Simpsons surpassed it in 2018?",
    options: ["Bonanza", "Gunsmoke", "Wagon Train", "The Rifleman"],
    correctAnswer: 1,
    category: "TV & Cinema",
    difficulty: "medium"
  },
  {
    id: 124,
    question: "The world famous House of Fabergé was founded in which city?",
    options: ["Paris", "St Petersburg", "London", "Vienna"],
    correctAnswer: 1,
    category: "Art & Culture",
    difficulty: "medium"
  },
  {
    id: 125,
    question: "Which Olympic swimmer turned actor was the only man to have played Tarzan, Buck Rogers and Flash Gordon in film?",
    options: ["Johnny Weissmuller", "Gordon Scott", "Lex Barker", "Buster Crabbe"],
    correctAnswer: 3,
    category: "Sports",
    difficulty: "medium"
  },
  {
    id: 126,
    question: "Which \"Boy\" does one associate with Thomas Gainsborough?",
    options: ["Blue Boy", "Red Boy", "Gold Boy", "Green Boy"],
    correctAnswer: 0,
    category: "Art & Culture",
    difficulty: "medium"
  },
  {
    id: 127,
    question: "Which song from the band Queen became an anthem for the ANC in South Africa in the late 1980s?",
    options: ["We Are the Champions", "I Want to Break Free", "Bohemian Rhapsody", "Radio Ga Ga"],
    correctAnswer: 1,
    category: "Music",
    difficulty: "medium"
  },
  {
    id: 128,
    question: "What is Barbie's boyfriend Ken's last name?",
    options: ["Miller", "Carson", "Anderson", "Smith"],
    correctAnswer: 1,
    category: "TV & Cinema",
    difficulty: "easy"
  },
  {
    id: 129,
    question: "Which blonde bombshell and Hollywood sex goddess died in a tragic car accident in 1967?",
    options: ["Marilyn Monroe", "Brigitte Bardot", "Sophia Loren", "Jayne Mansfield"],
    correctAnswer: 3,
    category: "TV & Cinema",
    difficulty: "easy"
  },
  {
    id: 130,
    question: "Who was Indira Gandhi's father?",
    options: ["Nehru", "Patel", "Gandhi", "Tagore"],
    correctAnswer: 0,
    category: "History & Politics",
    difficulty: "easy"
  },
  {
    id: 131,
    question: "How many rounds per minute could the formidable 1861 Gatling gun fire?",
    options: ["100", "200", "400", "800"],
    correctAnswer: 2,
    category: "Science & Technology",
    difficulty: "medium"
  },
  {
    id: 132,
    question: "What is the name of the peninsula on which Denmark lies?",
    options: ["Scandinavia", "Jutland", "Iberian Peninsula", "Balkan Peninsula"],
    correctAnswer: 1,
    category: "Geography & Nature",
    difficulty: "easy"
  },
  {
    id: 133,
    question: "Briard, Puli, Schipperke, Papillon, Akbash and Akita are all examples of what?",
    options: ["Cat breeds", "Bird species", "Horse breeds", "Dog breeds"],
    correctAnswer: 3,
    category: "Geography & Nature",
    difficulty: "easy"
  },
  {
    id: 134,
    question: "Who was the first living Australian to appear on a postage stamp?",
    options: ["Dawn Fraser", "Rod Laver", "Don Bradman", "Dame Nellie Melba"],
    correctAnswer: 2,
    category: "History & Politics",
    difficulty: "medium"
  },
  {
    id: 135,
    question: "Which intoxicating spirit does one mix with Champagne in order to make the Death in the Afternoon cocktail?",
    options: ["Absinthe", "Gin", "Vodka", "Tequila"],
    correctAnswer: 0,
    category: "Art & Culture",
    difficulty: "medium"
  },
  {
    id: 136,
    question: "Which popular polymer-framed pistol, used by military and police forces around the world, is named after the Austrian manufacturer's founder?",
    options: ["Beretta", "Glock", "Colt", "SIG Sauer"],
    correctAnswer: 1,
    category: "Science & Technology",
    difficulty: "medium"
  },
  {
    id: 137,
    question: "Who wields Mjölnir (me ol near)?",
    options: ["Zeus", "Thor", "Odin", "Loki"],
    correctAnswer: 1,
    category: "Art & Culture",
    difficulty: "easy"
  },
  {
    id: 138,
    question: "In which European capital city did an estimated 60,000 people die due to an earthquake on the 1st of November, 1775?",
    options: ["Lisbon", "Madrid", "Rome", "Paris"],
    correctAnswer: 0,
    category: "Geography & Nature",
    difficulty: "hard"
  },
  {
    id: 139,
    question: "Who made headlines around the world on the 12th of April, 1961?",
    options: ["Neil Armstrong", "Yuri Gagarin", "Buzz Aldrin", "John Glenn"],
    correctAnswer: 1,
    category: "History & Politics",
    difficulty: "medium"
  },
  {
    id: 140,
    question: "Name the four island countries in the world that begin with the letter \"C\".",
    options: [
      "Cuba, Cyprus, Cape Verde, Comoros",
      "Cuba, Cayman Islands, Cape Verde, Comoros",
      "Curaçao, Cyprus, Cape Verde, Comoros",
      "Cuba, Cyprus, Canary Islands, Comoros"
    ],
    correctAnswer: 0,
    category: "Geography & Nature",
    difficulty: "hard"
  },
  {
    id: 141,
    question: "Which J.J.A was the first multi-millionaire in the United States?",
    options: ["John James Audubon", "J.P. Morgan", "John Jacob Astor", "John Adams"],
    correctAnswer: 2,
    category: "History & Politics",
    difficulty: "hard"
  },
  {
    id: 142,
    question: "In which year was the USS Enterprise NCC 1701 launched?",
    options: ["2195", "2245", "2265", "2295"],
    correctAnswer: 1,
    category: "TV & Cinema",
    difficulty: "hard"
  },
  {
    id: 143,
    question: "Which Summer Olympic games were the first to be televised via satellite? Note \"via satellite\"",
    options: ["1960 Rome Olympics", "1964 Tokyo Olympics", "1968 Mexico City Olympics", "1972 Munich Olympics"],
    correctAnswer: 1,
    category: "Sports",
    difficulty: "medium"
  },
  {
    id: 144,
    question: "Who did Kristen Shepard shoot?",
    options: ["J.R. Ewing", "Sue Ellen Ewing", "Bobby Ewing", "Cliff Barnes"],
    correctAnswer: 0,
    category: "TV & Cinema",
    difficulty: "medium"
  },
  {
    id: 145,
    question: "In song, how old is Lucy Jordan? (The Ballad of Lucy Jordan)",
    options: ["35", "36", "37", "38"],
    correctAnswer: 2,
    category: "Music",
    difficulty: "medium"
  },
  {
    id: 146,
    question: "With a seating capacity for 132,000 spectators, the world's largest sports stadium is located in which country?",
    options: ["USA", "India", "Brazil", "China"],
    correctAnswer: 1,
    category: "Sports",
    difficulty: "easy"
  },
  {
    id: 147,
    question: "\"When Days Turn To Weeks\" was a movie poster tag line for which 2007 film sequel?",
    options: ["28 Days Later", "28 Weeks Later", "300", "Saw IV"],
    correctAnswer: 1,
    category: "TV & Cinema",
    difficulty: "medium"
  },
  {
    id: 148,
    question: "Muhammad Ali and Joe Frazier met in the ring 3 times. Their first fight was billed as \"The Fight of the Century\". What was their 3rd and final fight called?",
    options: ["The Rumble in the Jungle", "The Brawl in Montreal", "The Clash in Cairo", "The Thrilla in Manila"],
    correctAnswer: 3,
    category: "Sports",
    difficulty: "medium"
  },
  {
    id: 149,
    question: "Which American pianist and composer with the initials T. M. was a pioneer of modern jazz?",
    options: ["Tommy Morgan", "Terry Melcher", "Tony Martin", "Thelonious Monk"],
    correctAnswer: 3,
    category: "Music",
    difficulty: "easy"
  },
  {
    id: 150,
    question: "In which two films did Paul Newman play the role of \"Fast Eddie\" Felson?",
    options: ["Cool Hand Luke and The Hustler", "The Hustler and The Color of Money", "The Sting and The Color of Money", "The Hustler and Cool Hand Luke"],
    correctAnswer: 1,
    category: "TV & Cinema",
    difficulty: "medium"
  },
  {
    id: 151,
    question: "With 829 m (2,727 ft) in height and 163 floors, the tallest skyscraper in the world is located in which city?",
    options: ["Dubai", "New York City", "Shanghai", "Mumbai"],
    correctAnswer: 0,
    category: "Geography & Nature",
    difficulty: "easy"
  },
  {
    id: 152,
    question: "What was the first country in the world to legalise same sex marriage?",
    options: ["Canada", "Belgium", "Denmark", "Netherlands"],
    correctAnswer: 3,
    category: "History & Politics",
    difficulty: "medium"
  },
  {
    id: 153,
    question: "What is a curling tournament called?",
    options: ["Skateoff", "Curloff", "Bonspiel", "Stonegame"],
    correctAnswer: 2,
    category: "Sports",
    difficulty: "medium"
  },
  {
    id: 154,
    question: "USA aside, which other two countries border Mexico?",
    options: ["Honduras, Belize", "Guatemala, Belize", "Guatemala, Cuba", "Belize, El Salvador"],
    correctAnswer: 1,
    category: "Geography & Nature",
    difficulty: "easy"
  },
  {
    id: 155,
    question: "Which unit of electrical resistance is named after a 19th century German physicist?",
    options: ["Watt", "Tesla", "Ohm", "Abbe"],
    correctAnswer: 2,
    category: "Science & Technology",
    difficulty: "easy"
  },
  {
    id: 156,
    question: "How many Beatles were left handed?",
    options: ["One", "Two", "Three", "Four"],
    correctAnswer: 1,
    category: "Music",
    difficulty: "hard"
  },
  {
    id: 157,
    question: "Meaning 'King' when translated, what is the most common surname in the world?",
    options: ["Stor", "Lyre", "Wang", "Kihm"],
    correctAnswer: 2,
    category: "Language",
    difficulty: "medium"
  },
  {
    id: 158,
    question: "Who was the first black World Heavyweight Boxing Champion?",
    options: ["Jack Johnson", "Joe Louis", "George Foreman", "Muhammad Ali"],
    correctAnswer: 0,
    category: "Sports",
    difficulty: "medium"
  },
  {
    id: 159,
    question: "Barcarolles are songs traditionally sung by men in which profession?",
    options: ["Miners", "Gondoliers", "Sailors", "Fishermen"],
    correctAnswer: 1,
    category: "Music",
    difficulty: "medium"
  },
  {
    id: 160,
    question: "What does \"Chow mein\" mean translated?",
    options: ["Stir fried noodles", "Boiled noodles", "Fried noodles", "Dry noodles"],
    correctAnswer: 2,
    category: "Language",
    difficulty: "easy"
  },
  {
    id: 161,
    question: "The Vatican excluded, what is the only country in the world without divorce laws?",
    options: ["China", "Andorra", "Bangladesh", "Philippines"],
    correctAnswer: 3,
    category: "History & Politics",
    difficulty: "medium"
  },
  {
    id: 162,
    question: "Who was the first rapper to win an Oscar?",
    options: ["Dr. Dre", "Eminem", "Jay-Z", "Kanye West"],
    correctAnswer: 1,
    category: "Music",
    difficulty: "medium"
  },
  {
    id: 163,
    question: "The world's longest suspension bridge spans which famous strait?",
    options: ["Strait of Gibraltar", "Bosporus", "Dardanelles", "English Channel"],
    correctAnswer: 2,
    category: "Geography & Nature",
    difficulty: "medium"
  },
  {
    id: 164,
    question: "The Empire State Building and the Chrysler Building in New York City are both examples of which architectural style?",
    options: ["Art Nouveau", "Neoclassical", "Art Deco", "Modernist"],
    correctAnswer: 2,
    category: "Art & Culture",
    difficulty: "easy"
  },
  {
    id: 165,
    question: "\"Major Tom's a junkie\" is a line in which David Bowie song?",
    options: ["Space Oddity", "Starman", "Ashes to Ashes", "Changes"],
    correctAnswer: 2,
    category: "Music",
    difficulty: "medium"
  },
  {
    id: 166,
    question: "Which country, despite only being a two-time winner of the FIFA World Cup, has four stars on their shirt?",
    options: ["Uruguay", "Italy", "England", "France"],
    correctAnswer: 0,
    category: "Sports",
    difficulty: "medium"
  },
  {
    id: 167,
    question: "Which epic film and winner of seven Academy Awards begins with the words \"He was the most extraordinary man I ever knew.\"?",
    options: ["Ben-Hur", "Lawrence of Arabia", "Gladiator", "Braveheart"],
    correctAnswer: 1,
    category: "TV & Cinema",
    difficulty: "hard"
  },
  {
    id: 168,
    question: "Which number one hit song from Whitney Houston was recorded for the 1988 Summer Olympic Games in Seoul?",
    options: ["I Will Always Love You", "The Greatest Love of All", "One Moment in Time", "Saving All My Love"],
    correctAnswer: 2,
    category: "Music",
    difficulty: "medium"
  },
  {
    id: 169,
    question: "What name did Forrest Gump give his fishing boat?",
    options: ["Gump", "Peaches", "Jenny", "Bubba"],
    correctAnswer: 2,
    category: "TV & Cinema",
    difficulty: "easy"
  },
  {
    id: 170,
    question: "Measured from north to south what is the longest country in the world?",
    options: ["Chile", "China", "Russia", "Brazil"],
    correctAnswer: 3,
    category: "Geography & Nature",
    difficulty: "medium"
  },
  {
    id: 171,
    question: "Which famous musician built the Electric Lady recording studio in New York City?",
    options: ["Paul McCartney", "David Bowie", "Bob Dylan", "Jimi Hendrix"],
    correctAnswer: 3,
    category: "Music",
    difficulty: "easy"
  },
  {
    id: 172,
    question: "Roughly 25 minutes after the film begins, \"Here you are, sir. Main Level D.\" are the first words to which classic movie?",
    options: ["2001: A Space Odyssey", "Blade Runner", "Star Wars", "Alien"],
    correctAnswer: 0,
    category: "TV & Cinema",
    difficulty: "hard"
  },
  {
    id: 173,
    question: "One of the world's busiest airports has the IATA code CDG. Can you name the airport?",
    options: ["Heathrow", "Charles de Gaulle", "JFK", "Schiphol"],
    correctAnswer: 1,
    category: "Geography & Nature",
    difficulty: "medium"
  },
  {
    id: 174,
    question: "Which one of the following is a collective noun for zebras?",
    options: ["fright", "startle", "dazzle", "blur"],
    correctAnswer: 2,
    category: "Language",
    difficulty: "medium"
  },
  {
    id: 175,
    question: "Which 1943 novel from Antoine de Saint-Exupéry is one of the best-selling books in history?",
    options: ["Pilote de guerre", "Night Flight", "The Little Prince", "Wind, Sand and Stars"],
    correctAnswer: 2,
    category: "Literature",
    difficulty: "easy"
  },
  {
    id: 176,
    question: "Nagy and Kovács are the two most common surnames in which European country?",
    options: ["Poland", "Hungary", "Romania", "Czech Republic"],
    correctAnswer: 1,
    category: "Language",
    difficulty: "medium"
  },
  {
    id: 177,
    question: "‘Green Car Crash’ is one of the most expensive paintings ever sold. Who painted it?",
    options: ["Jackson Pollock", "Francis Bacon", "Andy Warhol", "Willem de Kooning"],
    correctAnswer: 2,
    category: "Art & Culture",
    difficulty: "medium"
  },
  {
    id: 178,
    question: "Which given name meaning \"Lion of God\" is also the central character in the Disney film 'The Little Mermaid'?",
    options: ["Leora", "Ariel", "Aslan", "Leonard"],
    correctAnswer: 1,
    category: "Language",
    difficulty: "medium"
  },
  {
    id: 179,
    question: "Basel Dove, Inverted Jenny, Hawaiian Missionaries and Treskilling Yellow are all rare and valuable examples of what?",
    options: ["Coins", "Baseball cards", "Postage stamps", "Manuscripts"],
    correctAnswer: 2,
    category: "Art & Culture",
    difficulty: "hard"
  },
  {
    id: 180,
    question: "Which person, once dubbed as \"the wickedest man in the world\" by the British press, is found on the Beatles Sgt. Pepper's Lonely Hearts Club Band album cover?",
    options: ["William Blake", "Oscar Wilde", "Aleister Crowley", "Salvador Dalí"],
    correctAnswer: 2,
    category: "Music",
    difficulty: "hard"
  },
  {
    id: 181,
    question: "In which year did Mattel first introduce Barbie?",
    options: ["1955", "1957", "1959", "1961"],
    correctAnswer: 2,
    category: "History & Politics",
    difficulty: "medium"
  },
  {
    id: 182,
    question: "Which actor, known for his role as 'The Rifleman', was one of the few people to have played professional baseball and basketball in the USA?",
    options: ["John Wayne", "Clint Eastwood", "James Arness", "Chuck Connors"],
    correctAnswer: 3,
    category: "TV & Cinema",
    difficulty: "medium"
  },
  {
    id: 183,
    question: "Which popular hat style is named after an 1882 French play?",
    options: ["Fedora", "Trilby", "Bowler", "Cloche"],
    correctAnswer: 0,
    category: "Art & Culture",
    difficulty: "medium"
  },
  {
    id: 184,
    question: "In which year did Russia adopt the Gregorian calendar?",
    options: ["1905", "1912", "1918", "1920"],
    correctAnswer: 2,
    category: "History & Politics",
    difficulty: "medium"
  },
  {
    id: 185,
    question: "Which film, ranked number one on the American Film Institute's list of '100 Best American Movies', ends with the words \"Throw that junk.\"?",
    options: ["The Godfather", "Casablanca", "Gone with the Wind", "Citizen Kane"],
    correctAnswer: 3,
    category: "TV & Cinema",
    difficulty: "medium"
  },
  {
    id: 186,
    question: "In 1997 Craig MacTavish was the only NHL player who didn't do what?",
    options: ["Tie his skates", "Shake hands after games", "Use a visor", "Wear a helmet"],
    correctAnswer: 3,
    category: "Sports",
    difficulty: "medium"
  },
  {
    id: 187,
    question: "Which two singer-songwriters appeared in the 1973 film 'Pat Garrett and Billy the Kid'?",
    options: ["Tom Petty and Bob Seger", "Paul Simon and Art Garfunkel", "Bob Dylan and Kris Kristofferson", "Neil Young and Graham Nash"],
    correctAnswer: 2,
    category: "Music",
    difficulty: "medium"
  },
  {
    id: 188,
    question: "Which of the following is a collective noun for hummingbirds?",
    options: ["blessing", "rhumba", "bouquet", "dazzle"],
    correctAnswer: 2,
    category: "Language",
    difficulty: "hard"
  },
  {
    id: 189,
    question: "In 1958, at age 15, who became the then youngest chess grandmaster ever?",
    options: ["Garry Kasparov", "Bobby Fischer", "Magnus Carlsen", "Anatoly Karpov"],
    correctAnswer: 1,
    category: "Sports",
    difficulty: "easy"
  },
  {
    id: 190,
    question: "What are the middle names of each of the following US presidents? a. Richard M. Nixon; b. John F. Kennedy; c. Lyndon B. Johnson",
    options: ["Milhous, Fitzgerald, Baines", "Milton, Franklin, Bryan", "Michael, Francis, Benjamin", "Mark, Frederick, Bernard"],
    correctAnswer: 0,
    category: "History & Politics",
    difficulty: "hard"
  },
  {
    id: 191,
    question: "Which brown bear subspecies can sometimes rival the polar bear in size?",
    options: ["Grizzly bear", "American black bear", "Sloth bear", "Kodiak bear"],
    correctAnswer: 3,
    category: "Geography & Nature",
    difficulty: "medium"
  },
  {
    id: 192,
    question: "With 418 m below sea level, the Dead Sea is the lowest point on Earth. Which nearby sea comes in second place with 214 m below sea level?",
    options: ["Red Sea", "Black Sea", "Caspian Sea", "Sea of Galilee"],
    correctAnswer: 3,
    category: "Geography & Nature",
    difficulty: "medium"
  },
  {
    id: 193,
    question: "Which East German woman won four world titles in figure skating during the 1980s?",
    options: ["Peggy Fleming", "Tara Lipinski", "Katarina Witt", "Michelle Kwan"],
    correctAnswer: 2,
    category: "Sports",
    difficulty: "medium"
  },
  {
    id: 194,
    question: "How many people survived the sinking of the Titanic?",
    options: ["600", "706", "800", "950"],
    correctAnswer: 1,
    category: "History & Politics",
    difficulty: "medium"
  },
  {
    id: 195,
    question: "Which painting was also a hit song for Nat King Cole?",
    options: ["Starry Night", "The Scream", "Girl with a Pearl Earring", "Mona Lisa"],
    correctAnswer: 3,
    category: "Music",
    difficulty: "medium"
  },
  {
    id: 196,
    question: "According to some conspiracists, which famous American director filmed the hoaxed moon landing?",
    options: ["Alfred Hitchcock", "Steven Spielberg", "George Lucas", "Stanley Kubrick"],
    correctAnswer: 3,
    category: "TV & Cinema",
    difficulty: "hard"
  },
  {
    id: 197,
    question: "Named after a city, what is the largest lake in France?",
    options: ["Lake Como", "Lake Garda", "Lake Geneva", "Lake Constance"],
    correctAnswer: 2,
    category: "Geography & Nature",
    difficulty: "medium"
  },
  {
    id: 198,
    question: "Which actress was Antonio Banderas married to for 20 years?",
    options: ["Pierce Brosnan", "Melanie Griffith", "Salma Hayek", "Linda Hamilton"],
    correctAnswer: 1,
    category: "TV & Cinema",
    difficulty: "easy"
  },
  {
    id: 199,
    question: "Which region of France lends its name to a very expensive black truffle?",
    options: ["Perigord", "Champagne", "Bordeaux", "Burgundy"],
    correctAnswer: 0,
    category: "Geography & Nature",
    difficulty: "medium"
  },
  {
    id: 200,
    question: "The movie poster tag line for which George Lucas film was \"Where were you in '62\"?",
    options: ["Star Wars", "American Graffiti", "THX 1138", "Indiana Jones"],
    correctAnswer: 1,
    category: "TV & Cinema",
    difficulty: "medium"
  },
  {
    id: 201,
    question: "Spencer Tracy was nominated a record nine times for the Oscar for Best Actor. Which English Sir does he share this record with?",
    options: ["Sir Alec Guinness", "Sir Michael Caine", "Sir Peter O'Toole", "Sir Laurence Olivier"],
    correctAnswer: 3,
    category: "TV & Cinema",
    difficulty: "hard"
  },
  {
    id: 202,
    question: "Which song title was a hit for both Madness and Crosby, Stills, Nash and Young?",
    options: ["House of Fun", "Sweet Home Alabama", "Our Song", "Our House"],
    correctAnswer: 3,
    category: "Music",
    difficulty: "medium"
  },
  {
    id: 203,
    question: "On the national flag of which African country is the 'Eagle of Saladin' depicted?",
    options: ["Egypt", "Ethiopia", "Kenya", "Libya"],
    correctAnswer: 0,
    category: "Geography & Nature",
    difficulty: "medium"
  },
  {
    id: 204,
    question: "The 1934 biographical novel Lust for Life; later made into a movie, was about which troubled man?",
    options: ["Pablo Picasso", "Salvador Dalí", "Claude Monet", "Vincent van Gogh"],
    correctAnswer: 3,
    category: "Art & Culture",
    difficulty: "medium"
  },
  {
    id: 205,
    question: "Which small deciduous tree native to Southern Europe is named after one of the Twelve Apostles?",
    options: ["Olive Tree", "Fig Tree", "Palm Tree", "Judas Tree"],
    correctAnswer: 3,
    category: "Geography & Nature",
    difficulty: "medium"
  },
  {
    id: 206,
    question: "Which controversial English bassist was named after an aggressive pet hamster?",
    options: ["John Entwistle", "Steve Harris", "Sid Vicious", "Cliff Burton"],
    correctAnswer: 2,
    category: "Music",
    difficulty: "medium"
  },
  {
    id: 207,
    question: "Demerara sugar. Demerara is a region in which South American country?",
    options: ["Guyana", "Brazil", "Suriname", "Venezuela"],
    correctAnswer: 0,
    category: "Geography & Nature",
    difficulty: "medium"
  },
  {
    id: 208,
    question: "Which 1965 film, based on a 1949 autobiography, was the biggest box office hit of the 1960s?",
    options: ["My Fair Lady", "Doctor Zhivago", "Goldfinger", "The Sound of Music"],
    correctAnswer: 3,
    category: "TV & Cinema",
    difficulty: "medium"
  },
  {
    id: 209,
    question: "Tisane is another word for which popular kind of beverage?",
    options: ["Fruit punch", "Herbal tea", "Iced tea", "Green tea"],
    correctAnswer: 1,
    category: "Art & Culture",
    difficulty: "easy"
  },
  {
    id: 210,
    question: "Which M.R. was a 'Spider from Mars'?",
    options: ["Mark Ronson", "Mike Ronson", "Mick Ronson", "Matt Ronson"],
    correctAnswer: 2,
    category: "Music",
    difficulty: "medium"
  },
  {
    id: 211,
    question: "The Admiral Benbow Inn is an important setting in which popular novel?",
    options: ["Treasure Island", "Moby Dick", "Oliver Twist", "Wuthering Heights"],
    correctAnswer: 0,
    category: "Literature",
    difficulty: "easy"
  },
  {
    id: 212,
    question: "A well known southern US city and the most populated city in the world in 2000 BC.",
    options: ["Memphis", "Babylon", "Rome", "Thebes"],
    correctAnswer: 0,
    category: "History & Politics",
    difficulty: "medium"
  },
  {
    id: 213,
    question: "Mayday is an emergency call used in maritime and aeronautical radio communications to signal imminent danger. Which two words, repeated three times, signal a state of urgency?",
    options: ["May Day", "Secco-Secco", "Securite", "Pan-Pan"],
    correctAnswer: 3,
    category: "Science & Technology",
    difficulty: "medium"
  },
  {
    id: 214,
    question: "Who is the only person to have won the so-called 'Golden Slam' in tennis?",
    options: ["Serena Williams", "Martina Navratilova", "Chris Evert", "Steffi Graf"],
    correctAnswer: 3,
    category: "Sports",
    difficulty: "medium"
  },
  {
    id: 215,
    question: "What is the only country in the world with five red crosses on its national flag?",
    options: ["Switzerland", "Georgia", "United Kingdom", "Malta"],
    correctAnswer: 1,
    category: "History & Politics",
    difficulty: "medium"
  },
  {
    id: 216,
    question: "Which 19th century painting technique used countless tiny distinct dots of pure colour?",
    options: ["Cubism", "Impressionism", "Fauvism", "Pointillism"],
    correctAnswer: 3,
    category: "Art & Culture",
    difficulty: "medium"
  },
  {
    id: 217,
    question: "Who did Joy and George Adamson raise?",
    options: ["Simba the lion", "Elsa the lioness", "Mufasa the lion", "Aslan the lion"],
    correctAnswer: 1,
    category: "Literature",
    difficulty: "medium"
  },
  {
    id: 218,
    question: "Which dance is usually performed to an opera bouffon music piece titled 'The Infernal Galop'?",
    options: ["Waltz", "Tango", "Foxtrot", "Can-can"],
    correctAnswer: 3,
    category: "Music",
    difficulty: "medium"
  },
  {
    id: 219,
    question: "The following is the movie poster tag line from which Spaghetti Western? \"For three men the Civil War wasn't hell. It was practice!\"",
    options: ["A Fistful of Dollars", "Once Upon a Time in the West", "Django", "The Good, the Bad and the Ugly"],
    correctAnswer: 3,
    category: "TV & Cinema",
    difficulty: "medium"
  },
  {
    id: 220,
    question: "The Old French name given to the leader of a troop of demons on horseback and a kind of jester or clown. One word.",
    options: ["Harlequin", "Buffoon", "Jester", "Rogue"],
    correctAnswer: 0,
    category: "Art & Culture",
    difficulty: "medium"
  },
  {
    id: 221,
    question: "What is the name of the green tea used in a Japanese tea ceremony?",
    options: ["Bancha", "Matcha", "Gyokuro", "Sencha"],
    correctAnswer: 1,
    category: "Art & Culture",
    difficulty: "medium"
  },
  {
    id: 222,
    question: "What was the title of Pink Floyd's memorable 1972 concert film?",
    options: ["The Wall", "Pulse", "Delicate Sound of Thunder", "Live at Pompeii"],
    correctAnswer: 3,
    category: "TV & Cinema",
    difficulty: "medium"
  },
  {
    id: 223,
    question: "Who was the first US billionaire?",
    options: ["Andrew Carnegie", "John D. Rockefeller", "Cornelius Vanderbilt", "J.P. Morgan"],
    correctAnswer: 1,
    category: "History & Politics",
    difficulty: "medium"
  },
  {
    id: 224,
    question: "Led Zeppelin's fifth studio album, Houses of the Holy, features what natural landmark on its cover?",
    options: ["White Cliffs of Dover", "Stonehenge", "Cheddar Gorge", "Giant's Causeway"],
    correctAnswer: 3,
    category: "Music",
    difficulty: "hard"
  },
  {
    id: 225,
    question: "With a population of 400,000, Iquitos is the largest city in the world not connected to the outside world by road. In which country is it located?",
    options: ["Colombia", "Peru", "Ecuador", "Bolivia"],
    correctAnswer: 1,
    category: "Geography & Nature",
    difficulty: "medium"
  },
  {
    id: 226,
    question: "Which of the following was the bloodiest day in American military history?",
    options: ["Pearl Harbor Attack", "D-Day", "Battle of New Orleans", "Battle of Antietam"],
    correctAnswer: 3,
    category: "History & Politics",
    difficulty: "medium"
  },
  {
    id: 227,
    question: "Gaw, Ika, Hourk, Faum and Gammla are a few of the many characters in which 1981 prehistoric adventure film that won an Academy Award for Makeup?",
    options: ["Clan of the Cave Bear", "Quest for Fire", "One Million Years B.C.", "Alpha and Omega"],
    correctAnswer: 1,
    category: "TV & Cinema",
    difficulty: "medium"
  },
  {
    id: 228,
    question: "The name of which famous Spanish fortress translated means \"the red one\"?",
    options: ["Alcazar", "El Castel Rio", "Castel del Moro", "Alhambra"],
    correctAnswer: 3,
    category: "History & Politics",
    difficulty: "medium"
  },
  {
    id: 229,
    question: "The movie poster tag line for which 1997 horror sequel was \"Things are about to get a little hairy\"?",
    options: ["An American Werewolf in Paris", "Bride of Chucky", "Halloween: H20", "Scream"],
    correctAnswer: 0,
    category: "TV & Cinema",
    difficulty: "medium"
  },
  {
    id: 230,
    question: "Which two countries joined to form the short lived United Arab Republic between the years 1958-1961?",
    options: ["Iraq and Jordan", "Saudi Arabia and Yemen", "Libya and Tunisia", "Egypt and Syria"],
    correctAnswer: 3,
    category: "History & Politics",
    difficulty: "medium"
  },
  {
    id: 231,
    question: "What is Mr. Darcy's first name in Pride and Prejudice?",
    options: ["George", "Edward", "Henry", "Fitzwilliam"],
    correctAnswer: 3,
    category: "Literature",
    difficulty: "easy"
  },
  {
    id: 232,
    question: "The tragus is located on which part of the human body?",
    options: ["Ear", "Nose", "Thumb", "Wrist"],
    correctAnswer: 0,
    category: "Science & Technology",
    difficulty: "easy"
  },
  {
    id: 233,
    question: "A popular board game and the name of US President Richard Nixon's pet cocker spaniel.",
    options: ["Chess", "Clue", "Monopoly", "Checkers"],
    correctAnswer: 3,
    category: "History & Politics",
    difficulty: "medium"
  },
  {
    id: 234,
    question: "What is the only US state that borders three Canadian provinces?",
    options: ["Montana", "Alaska", "Michigan", "Washington"],
    correctAnswer: 0,
    category: "Geography & Nature",
    difficulty: "medium"
  },
  {
    id: 235,
    question: "Which historical figure is mentioned in The Beatles song 'I'm So Tired'?",
    options: ["Queen Victoria", "King James", "Lord Byron", "Sir Walter Raleigh"],
    correctAnswer: 3,
    category: "Music",
    difficulty: "medium"
  },
  {
    id: 236,
    question: "Which epic historical 2005 film ends with the following words? \"And I am the King of England.\" \"I am the blacksmith.\"",
    options: ["Gladiator", "Kingdom of Heaven", "Braveheart", "Troy"],
    correctAnswer: 1,
    category: "TV & Cinema",
    difficulty: "medium"
  },
  {
    id: 237,
    question: "Andrew is the name of the family dog in which very popular Disney film?",
    options: ["Mary Poppins", "The Sound of Music", "101 Dalmatians", "Lady and the Tramp"],
    correctAnswer: 0,
    category: "TV & Cinema",
    difficulty: "easy"
  },
  {
    id: 238,
    question: "A meat salad named 'Larb' is regarded as the national dish in which Asian country?",
    options: ["Nepal", "Vietnam", "Mongolia", "Laos"],
    correctAnswer: 3,
    category: "Geography & Nature",
    difficulty: "medium"
  },
  {
    id: 239,
    question: "The human pancreas looks like which one of the following fruits?",
    options: ["Banana", "Avocado", "Strawberry", "Mandarin"],
    correctAnswer: 0,
    category: "Science & Technology",
    difficulty: "easy"
  },
  {
    id: 240,
    question: "Who are the only father and daughter collaboration to have had a number one hit single in the US music charts?",
    options: ["Billy Ray and Miley Cyrus", "Will and Willow Smith", "Jay-Z and Blue Ivy", "Frank and Nancy Sinatra"],
    correctAnswer: 3,
    category: "Music",
    difficulty: "medium"
  },
  {
    id: 241,
    question: "Which epic 1980 movie starring Kris Kristofferson apparently drove the film studio United Artists into financial ruin?",
    options: ["Urban Cowboy", "Apocalypse Now", "Days of Thunder", "Heaven's Gate"],
    correctAnswer: 3,
    category: "TV & Cinema",
    difficulty: "hard"
  },
  {
    id: 242,
    question: "Which two Scottish bands had a number one hit single in the US Hot 100 charts during the 1970s?",
    options: ["Bay City Rollers and The Average White Band", "Bay City Rollers and The Doobie Brothers", "The Average White Band and Wings", "Bay City Rollers and Bee Gees"],
    correctAnswer: 0,
    category: "Music",
    difficulty: "hard"
  },
  {
    id: 243,
    question: "In which capital city is the tallest freestanding structure in Europe?",
    options: ["London", "Moscow", "Paris", "Rome"],
    correctAnswer: 1,
    category: "Geography & Nature",
    difficulty: "medium"
  },
  {
    id: 244,
    question: "The name of which soup translated means \"to boil\" and \"to simmer\"?",
    options: ["Bouillabaisse", "Minestrone", "Gazpacho", "Borscht"],
    correctAnswer: 0,
    category: "Art & Culture",
    difficulty: "medium"
  },
  {
    id: 245,
    question: "The names of which two national airlines translated both mean \"air fleet\"?",
    options: ["British Airways and Air France", "Lufthansa and Korean Air", "Qantas and Emirates", "Aer Lingus and Aeroflot"],
    correctAnswer: 3,
    category: "Science & Technology",
    difficulty: "hard"
  },
  {
    id: 246,
    question: "A 2011 number one hit song in the US (number 3 in the UK) and a 1982 film that won four Oscars.",
    options: ["E.T.", "Firework", "Dark Horse", "Roar"],
    correctAnswer: 0,
    category: "Music",
    difficulty: "medium"
  },
  {
    id: 247,
    question: "Who received a posthumous Tony award in 1983 for his contribution to the musical Cats?",
    options: ["Andrew Lloyd Webber", "Stephen Sondheim", "George Bernard Shaw", "T S Eliot"],
    correctAnswer: 3,
    category: "Literature",
    difficulty: "medium"
  },
  {
    id: 248,
    question: "In MASH, what was Major Charles Winchester III's middle name?",
    options: ["Emerson", "Elbridge", "Eugene", "Everett"],
    correctAnswer: 0,
    category: "TV & Cinema",
    difficulty: "medium"
  },
  {
    id: 249,
    question: "The Tex Mex name for which meat dish means \"little strips\" or \"little belts\" of meat?",
    options: ["Nachos", "Tacos", "Burritos", "Fajitas"],
    correctAnswer: 3,
    category: "Art & Culture",
    difficulty: "medium"
  },
  {
    id: 250,
    question: "After the Beatles song Yesterday, which Bossa Nova song is believed to be the second most recorded pop song in history?",
    options: ["Fly Me to the Moon", "Summertime", "Something", "The Girl From Ipanema"],
    correctAnswer: 3,
    category: "Music",
    difficulty: "medium"
  },
  {
    id: 251,
    question: "Patty Hearst is perhaps one of the best known examples of which syndrome?",
    options: ["Stockholm Syndrome", "Munchausen Syndrome", "Tourette's Syndrome", "Down Syndrome"],
    correctAnswer: 0,
    category: "History & Politics",
    difficulty: "medium"
  },
  {
    id: 252,
    question: "What is Mount Everest known as locally in Nepal?",
    options: ["Qomolangma", "Singu Chuli", "Kangchenjunga", "Sagarmatha"],
    correctAnswer: 3,
    category: "Geography & Nature",
    difficulty: "hard"
  },
  {
    id: 253,
    question: "Nuuk excluded, what is the most northerly capital city in the world?",
    options: ["Reykjavik", "Oslo", "Helsinki", "Stockholm"],
    correctAnswer: 0,
    category: "Geography & Nature",
    difficulty: "medium"
  },
  {
    id: 254,
    question: "Which American music icon has an acoustic guitar named \"Trigger\"?",
    options: ["Bob Dylan", "Eric Clapton", "Bruce Springsteen", "Willie Nelson"],
    correctAnswer: 3,
    category: "Music",
    difficulty: "medium"
  },
  {
    id: 255,
    question: "In literature, which notorious Captain's last words were \"Bad form!\"?",
    options: ["Captain Ahab", "Captain Nemo", "Captain Hook", "Captain Haddock"],
    correctAnswer: 2,
    category: "Literature",
    difficulty: "medium"
  },
  {
    id: 256,
    question: "Which popular breakfast dish was the working title for the Beatles song Yesterday?",
    options: ["Scrambled Eggs", "Sunny Side Up", "Good Day Sunshine", "Octopus's Garden"],
    correctAnswer: 0,
    category: "Music",
    difficulty: "easy"
  },
  {
    id: 257,
    question: "Who played the role of Django in the 1966 spaghetti western 'Django'?",
    options: ["Bud Spencer", "Clint Eastwood", "Franco Nero", "Lee Van Cleef"],
    correctAnswer: 2,
    category: "TV & Cinema",
    difficulty: "easy"
  },
  {
    id: 258,
    question: "Located in Germany, what was the tallest building in the world between the years 1880-1884?",
    options: ["Cologne Cathedral", "Ulm Minster", "St Peter's Cathedral", "Notre Dame"],
    correctAnswer: 0,
    category: "Art & Culture",
    difficulty: "medium"
  },
  {
    id: 259,
    question: "What does a riddler (or a remueur) turn for a living?",
    options: ["Mills", "Spinners", "Wheels", "Champagne bottles"],
    correctAnswer: 3,
    category: "Art & Culture",
    difficulty: "medium"
  },
  {
    id: 260,
    question: "At the end of which film does the RMS Titanic arrive in New York City?",
    options: ["Titanic", "A Night to Remember", "Ship of Dreams", "Raise the Titanic"],
    correctAnswer: 3,
    category: "TV & Cinema",
    difficulty: "medium"
  },
  {
    id: 261,
    question: "Eugenia Smith and Anna Anderson both claimed to be what?",
    options: ["Queen Victoria", "Princess Diana", "Empress Theodora", "The Grand Duchess Anastasia"],
    correctAnswer: 3,
    category: "History & Politics",
    difficulty: "medium"
  },
  {
    id: 262,
    question: "Named after a German town, what kind of hat does one associate with Winston Churchill?",
    options: ["Bowler", "Fedora", "Trilby", "Homburg"],
    correctAnswer: 3,
    category: "Art & Culture",
    difficulty: "medium"
  },
  {
    id: 263,
    question: "After her death in 1975, many obituaries claimed this performer was once the richest black woman who ever lived. Name her.",
    options: ["Josephine Baker", "Diana Ross", "Ella Fitzgerald", "Aretha Franklin"],
    correctAnswer: 0,
    category: "Art & Culture",
    difficulty: "medium"
  },
  {
    id: 264,
    question: "What is Indiana Jones's first name?",
    options: ["Indiana", "Henry", "George", "James"],
    correctAnswer: 1,
    category: "TV & Cinema",
    difficulty: "easy"
  },
  {
    id: 265,
    question: "Which Asian curry dish translated means \"double onions\" or \"two onions\"?",
    options: ["Bhuna", "Madras", "Dopiaza", "Vindaloo"],
    correctAnswer: 2,
    category: "Art & Culture",
    difficulty: "medium"
  },
  {
    id: 266,
    question: "With 31 years of age, Stan Wawrinka is the second oldest winner of the US Open Men's Singles title since the introduction of the open era. At 35, which Australian man is the oldest winner?",
    options: ["Ken Rosewall", "Rafael Nadal", "Roger Federer", "Pete Sampras"],
    correctAnswer: 0,
    category: "Sports",
    difficulty: "hard"
  },
  {
    id: 267,
    question: "The name for which country translated means \"ancient and bearded\"?",
    options: ["Trinidad and Tobago", "Saint Kitts and Nevis", "Barbados", "Antigua and Barbuda"],
    correctAnswer: 3,
    category: "Geography & Nature",
    difficulty: "medium"
  },
  {
    id: 268,
    question: "How many eyes does a box jellyfish have?",
    options: ["19", "24", "32", "16"],
    correctAnswer: 1,
    category: "Science & Technology",
    difficulty: "medium"
  },
  {
    id: 269,
    question: "What is the name of Yale University's secret society for undergraduate seniors?",
    options: ["Scroll and Key", "Wolf's Head", "Skull and Bones", "Book and Snake"],
    correctAnswer: 2,
    category: "History & Politics",
    difficulty: "medium"
  },
  {
    id: 270,
    question: "The following are the final words in which film? \"You maniacs! You blew it up! Ah, god damn you! God damn you all to hell.\"",
    options: ["Planet of the Apes", "The Poseidon Adventure", "Armageddon", "Deep Impact"],
    correctAnswer: 0,
    category: "TV & Cinema",
    difficulty: "hard"
  },
  {
    id: 271,
    question: "Meaning \"heap\" in Sanskrit, which mound-like structure houses the remains of Buddhist monks?",
    options: ["Mandapa", "Stupa", "Chaitya", "Pagoda"],
    correctAnswer: 1,
    category: "Art & Culture",
    difficulty: "hard"
  },
  {
    id: 272,
    question: "What are the two longest venomous snakes?",
    options: ["King Cobra and Black Mamba", "Eastern Brown Snake and Inland Taipan", "Black Mamba and Inland Taipan", "King Cobra and Taipan"],
    correctAnswer: 0,
    category: "Science & Technology",
    difficulty: "hard"
  },
  {
    id: 273,
    question: "The outdoor landscape scenes in the film The Martian were filmed in which country?",
    options: ["China", "Mexico", "Australia", "Jordan"],
    correctAnswer: 3,
    category: "TV & Cinema",
    difficulty: "easy"
  },
  {
    id: 274,
    question: "Which was the first country to adopt Christianity as its official religion?",
    options: ["Andorra", "Greece", "Russia", "Armenia"],
    correctAnswer: 3,
    category: "History & Politics",
    difficulty: "medium"
  },
  {
    id: 275,
    question: "Who wrote the novella 'Breakfast at Tiffany's'?",
    options: ["Truman Capote", "F. Scott Fitzgerald", "Ernest Hemingway", "Ray Bradbury"],
    correctAnswer: 0,
    category: "Literature",
    difficulty: "medium"
  },
  {
    id: 276,
    question: "With about 20 km in diameter, what are the smallest known stars called?",
    options: ["White dwarfs", "Red dwarfs", "Neutron stars", "Brown dwarfs"],
    correctAnswer: 2,
    category: "Science & Technology",
    difficulty: "medium"
  },
  {
    id: 277,
    question: "The following was a movie poster tag line for which 2012 prequel film? \"They went looking for our beginning. What they found could be our end.\"",
    options: ["Prometheus", "Alien: Covenant", "Gravity", "Interstellar"],
    correctAnswer: 0,
    category: "TV & Cinema",
    difficulty: "medium"
  },
  {
    id: 278,
    question: "What was a medieval knight's warhorse called?",
    options: ["Destrier", "Hipparion", "Courser", "Palfrey"],
    correctAnswer: 0,
    category: "History & Politics",
    difficulty: "medium"
  },
  {
    id: 279,
    question: "Which band that outsold both The Beatles and The Rolling Stones in 1967 has not been inducted into the Rock and Roll Hall of Fame?",
    options: ["The Beatles", "The Rolling Stones", "The Beach Boys", "The Monkees"],
    correctAnswer: 3,
    category: "Music",
    difficulty: "medium"
  },
  {
    id: 280,
    question: "What are the two biggest opium producing countries in the world today?",
    options: ["Myanmar and Afghanistan", "Thailand and Laos", "Mexico and Colombia", "Iraq and Iran"],
    correctAnswer: 0,
    category: "Geography & Nature",
    difficulty: "medium"
  },
  {
    id: 281,
    question: "The name for which Indian curry translated means \"bucket\"?",
    options: ["Bhuna", "Balti", "Korma", "Jalfrezi"],
    correctAnswer: 1,
    category: "Art & Culture",
    difficulty: "medium"
  },
  {
    id: 282,
    question: "A ghoulish looking octopus is the symbol (or logo) for which fictional crime syndicate?",
    options: ["SPECTRE", "HYDRA", "SHIELD", "COSA NOSTRA"],
    correctAnswer: 0,
    category: "TV & Cinema",
    difficulty: "medium"
  },
  {
    id: 283,
    question: "Which three men have captained the USS Enterprise NCC‑1701?",
    options: [
      "Christopher Pike, James T. Kirk and Spock",
      "Jean‑Luc Picard, James T. Kirk and Spock",
      "Christopher Pike, Jean‑Luc Picard and James T. Kirk",
      "Christopher Pike, Spock and Jean‑Luc Picard"
    ],
    correctAnswer: 0,
    category: "TV & Cinema",
    difficulty: "hard"
  },
  {
    id: 284,
    question: "Lionel Messi's No 10 World Cup shirt recently sold for $7.8 M. Which American superstar's jersey sold for a record $10.1 M?",
    options: ["LeBron James", "Kobe Bryant", "Tom Brady", "Michael Jordan"],
    correctAnswer: 3,
    category: "Sports",
    difficulty: "medium"
  },
  {
    id: 285,
    question: "Langos are a deep-fried flat bread speciality from which European country?",
    options: ["Poland", "Italy", "Portugal", "Hungary"],
    correctAnswer: 3,
    category: "Geography & Nature",
    difficulty: "easy"
  },
  {
    id: 286,
    question: "The following was the tagline for which TV movie? \"It's 196What if Hitler had won the war?\"",
    options: ["Fatherland", "Valkyrie", "Downfall", "Hitler: The Rise of Evil"],
    correctAnswer: 0,
    category: "TV & Cinema",
    difficulty: "hard"
  },
  {
    id: 287,
    question: "A World War II British Commando raid on which port city in France has since been called 'The Greatest Raid Of All'?",
    options: ["Dieppe", "Calais", "Cherbourg", "Saint Nazaire"],
    correctAnswer: 3,
    category: "History & Politics",
    difficulty: "hard"
  },
  {
    id: 288,
    question: "What was the three letter acronym for the famous film studio that made the classic films Citizen Kane and the original King Kong?",
    options: ["RKO", "MGM", "20th", "FOX"],
    correctAnswer: 0,
    category: "TV & Cinema",
    difficulty: "medium"
  },
  {
    id: 289,
    question: "According to data released in 2011, in which South East Asian country is John Paul the most popular name given to boys?",
    options: ["Thailand", "Indonesia", "Malaysia", "Philippines"],
    correctAnswer: 3,
    category: "History & Politics",
    difficulty: "hard"
  },
  {
    id: 290,
    question: "Which singer plays himself in the 2000 film High Fidelity?",
    options: ["Bruce Springsteen", "Mick Jagger", "Billy Joel", "Elton John"],
    correctAnswer: 0,
    category: "TV & Cinema",
    difficulty: "medium"
  },
  {
    id: 291,
    question: "The name of which country, host to a Formula One race, translated means \"The Two Seas\"?",
    options: ["Monaco", "Singapore", "Abu Dhabi", "Bahrain"],
    correctAnswer: 3,
    category: "Geography & Nature",
    difficulty: "easy"
  },
  {
    id: 292,
    question: "Until its abolition in the late 1950s, what was for more than one and a half centuries the principal device used for execution in Spain?",
    options: ["Garrote", "Guillotine", "Electric chair", "Hanging"],
    correctAnswer: 0,
    category: "History & Politics",
    difficulty: "hard"
  },
  {
    id: 293,
    question: "Which number, or its reverse or multiples, appears in almost every episode of the Star Trek spinoffs?",
    options: ["39", "53", "71", "47"],
    correctAnswer: 3,
    category: "TV & Cinema",
    difficulty: "medium"
  },
  {
    id: 294,
    question: "Who once said that \"Only the pure in heart can make a good soup.\"?",
    options: [
      "Martha Washington",
      "Mike Tyson",
      "Ludwig van Beethoven",
      "Mahatma Gandhi"
    ],
    correctAnswer: 2,
    category: "Art & Culture",
    difficulty: "hard"
  },
  {
    id: 295,
    question: "Fleetwood Mac's 'Don't Stop' was which US president's campaign song?",
    options: ["Bill Clinton", "Ronald Reagan", "George Bush", "Barack Obama"],
    correctAnswer: 0,
    category: "History & Politics",
    difficulty: "easy"
  },
  {
    id: 296,
    question: "Which 1967 album was the first rock LP to have lyrics printed on the cover?",
    options: ["The Doors", "Are You Experienced", "Pet Sounds", "Sgt. Pepper's Lonely Hearts Club Band"],
    correctAnswer: 3,
    category: "Music",
    difficulty: "medium"
  },
  {
    id: 297,
    question: "What is a straw covered Chianti wine flask called?",
    options: ["Fiasco", "Carafe", "Decanter", "Flagon"],
    correctAnswer: 0,
    category: "Art & Culture",
    difficulty: "easy"
  },
  {
    id: 298,
    question: "What is the annual salary for a US President?",
    options: ["200,000 dollars", "600,000 dollars", "800,000 dollars", "400,000 dollars"],
    correctAnswer: 3,
    category: "History & Politics",
    difficulty: "medium"
  },
  {
    id: 299,
    question: "Which major league baseball team is the oldest sports club in North America?",
    options: ["Chicago Cubs", "New York Yankees", "Boston Red Sox", "Philadelphia Phillies"],
    correctAnswer: 0,
    category: "Sports",
    difficulty: "medium"
  },
  {
    id: 300,
    question: "Which mega hit song from 1967 begins with the words \"Seven-A\"?",
    options: ["California Dreamin'", "Light My Fire", "All You Need Is Love", "Daydream Believer"],
    correctAnswer: 3,
    category: "Music",
    difficulty: "medium"
  },
  {
    id: 301,
    question: "Which French town has the greatest number of hotels per sq km after Paris?",
    options: ["Lourdes", "Nice", "Cannes", "Biarritz"],
    correctAnswer: 0,
    category: "Geography & Nature",
    difficulty: "hard"
  },
  {
    id: 302,
    question: "Which time keeping monsters sound \"like Rice Krispies after you pour the milk in\"?",
    options: ["Sandworms", "Clockwork Orange droogs", "Weeping Angels", "Langoliers"],
    correctAnswer: 3,
    category: "TV & Cinema",
    difficulty: "medium"
  },
  {
    id: 303,
    question: "Which woman spent a record 377 weeks at No 1 in the WTA rankings?",
    options: ["Serena Williams", "Chris Evert", "Stefi Graf", "Martina Navratilova"],
    correctAnswer: 2,
    category: "Sports",
    difficulty: "hard"
  },
  {
    id: 304,
    question: "The name for which Indian curry dish translated means \"hot fry\"?",
    options: ["Jalfrezi", "Vindaloo", "Tikka Masala", "Madras"],
    correctAnswer: 0,
    category: "Art & Culture",
    difficulty: "medium"
  },
  {
    id: 305,
    question: "Where did Saint Simeon Stylites the Elder spend 39 years of his life?",
    options: ["In a cave", "In a monastery", "At sea", "On top of a pillar"],
    correctAnswer: 3,
    category: "History & Politics",
    difficulty: "medium"
  },
  {
    id: 306,
    question: "In which film does the mere mention of the name Frau Blücher frighten all the horses?",
    options: ["Young Frankenstein", "The Producers", "Ghostbusters", "Blazing Saddles"],
    correctAnswer: 0,
    category: "TV & Cinema",
    difficulty: "easy"
  },
  {
    id: 307,
    question: "Which Sir is Sean Lennon's godfather?",
    options: ["Sir Paul McCartney", "Sir Mick Jagger", "Sir David Bowie", "Sir Elton John"],
    correctAnswer: 3,
    category: "Music",
    difficulty: "medium"
  },
  {
    id: 308,
    question: "In Game of Thrones, many of the backdrop scenes for King's Landing are filmed in which European coastal city?",
    options: ["Valletta", "Santorini", "Cadaqués", "Dubrovnik"],
    correctAnswer: 3,
    category: "Geography & Nature",
    difficulty: "medium"
  },
  {
    id: 309,
    question: "Which chocolate bar was named after Ethel Mars' favourite race horse?",
    options: ["Bounty", "Aero", "Kit Kat", "Snickers"],
    correctAnswer: 3,
    category: "Art & Culture",
    difficulty: "easy"
  },
  {
    id: 310,
    question: "Which controversial 1979 film stars Peter O'Toole, Helen Mirren and Malcolm McDowell?",
    options: ["Caligula", "The Elephant Man", "Apocalypse Now", "Alien"],
    correctAnswer: 0,
    category: "TV & Cinema",
    difficulty: "hard"
  },
  {
    id: 311,
    question: "What were the three most populated countries in the world in 1850? In order: ",
    options: ["China, Russia and India", "India, China and Russia", "Russia, China and India", "China, India and Russia"],
    correctAnswer: 3,
    category: "History & Politics",
    difficulty: "hard"
  },
  {
    id: 312,
    question: "In which year did the US Surgeon General first publish its report on the negative health effects of tobacco smoking?",
    options: ["1964", "1958", "1970", "1960"],
    correctAnswer: 0,
    category: "History & Politics",
    difficulty: "medium"
  },
  {
    id: 313,
    question: "Which Asian country's name means \"Holy Island\"?",
    options: ["Japan", "Indonesia", "Malaysia", "Sri Lanka"],
    correctAnswer: 3,
    category: "Geography & Nature",
    difficulty: "easy"
  },
  {
    id: 314,
    question: "Nicknamed the \"Black Pearl\", which American dancer helped the French Resistance during WWII?",
    options: ["Billie Holiday", "Ella Fitzgerald", "Dinah Washington", "Josephine Baker"],
    correctAnswer: 3,
    category: "Art & Culture",
    difficulty: "hard"
  },
  {
    id: 315,
    question: "Elton John was born Reginald Kenneth Dwight. What is his adopted middle name today?",
    options: [
      "Samson",
      "Apollo",
      "Hector",
      "Hercules"
    ],
    correctAnswer: 3,
    category: "TV & Cinema",
    difficulty: "hard"
  },
  {
    id: 316,
    question: "Which US President was a former director of the C.I.A.?",
    options: ["George H W Bush", "Jimmy Carter", "Bill Clinton", "Ronald Reagan"],
    correctAnswer: 0,
    category: "History & Politics",
    difficulty: "easy"
  },
  {
    id: 317,
    question: "Which fictional couple is mentioned in each of the following songs? Don’t Fear The Reaper, Fire, Fever and Stuck In The Moment",
    options: ["Antony and Cleopatra", "Tristan and Isolde", "Lancelot and Guinevere", "Romeo and Juliet"],
    correctAnswer: 3,
    category: "Music",
    difficulty: "hard"
  },
  {
    id: 318,
    question: "The following was the movie poster tag line for which 1970 documentary? \"The music that thrilled the world .... and the killing that stunned it.\"",
    options: ["Gimme Shelter", "Woodstock", "The Last Waltz", "Stop Making Sense"],
    correctAnswer: 0,
    category: "TV & Cinema",
    difficulty: "medium"
  },
  {
    id: 319,
    question: "Which ex RAF pilot; who coined such words as 'biffsquiggled', 'gobblefunking' and 'muggle-wumps', was buried with his snooker cues, HB pencils, favourite chocolate, a bottle of burgundy and a power saw?",
    options: ["J.K. Rowling", "C.S. Lewis", "Enid Blyton", "Roald Dahl"],
    correctAnswer: 3,
    category: "Literature",
    difficulty: "hard"
  },
  {
    id: 320,
    question: "In which organisation was Emilio Largo second in command?",
    options: ["SPECTRE", "Hydra", "A.I.M.", "SHIELD"],
    correctAnswer: 0,
    category: "TV & Cinema",
    difficulty: "medium"
  },
  {
    id: 321,
    question: "Which nickname was given to both The Monkees and The Rutles?",
    options: ["Sgt. Pepper", "Fab Four", "Four Tops", "Prefab four"],
    correctAnswer: 3,
    category: "Music",
    difficulty: "medium"
  },
  {
    id: 322,
    question: "The name for which well known award is derived from the nickname given to the image-orthicon tube?",
    options: ["Oscar", "Tony", "Grammy", "Emmy"],
    correctAnswer: 3,
    category: "TV & Cinema",
    difficulty: "easy"
  },
  {
    id: 323,
    question: "During the Second World War, which convoys did Winston Churchill describe as \"the worst journey in the world\"?",
    options: [
      "The Arctic convoys",
      "The Normandy convoys",
      "The Pacific convoys",
      "The Atlantic convoys"
    ],
    correctAnswer: 0,
    category: "History & Politics",
    difficulty: "medium"
  },
  {
    id: 324,
    question: "The Church of Our Lady Mary of Zion in Ethiopia claims to be the home of which religious artifact?",
    options: ["The Holy Grail", "The Shroud of Turin", "The Spear of Destiny", "The Ark of the Covenant"],
    correctAnswer: 3,
    category: "History & Politics",
    difficulty: "hard"
  },
  {
    id: 325,
    question: "What was the middle name of 19th century novelist William Thackeray?",
    options: ["Michael", "Makepeace", "Arnold", "Nicholas"],
    correctAnswer: 1,
    category: "Literature",
    difficulty: "hard"
  },
  {
    id: 326,
    question: "Who won a record four Academy Awards for Best Director?",
    options: ["John Ford", "Steven Spielberg", "Frank Capra", "Sidney Lumet"],
    correctAnswer: 0,
    category: "TV & Cinema",
    difficulty: "medium"
  },
  {
    id: 327,
    question: "Who was the first person to break the sound barrier as a human projectile?",
    options: ["Geoffrey de Havilland Jr", "Chuck Yeager", "Malcolm Campbell", "Felix Baumgartner"],
    correctAnswer: 3,
    category: "Science & Technology",
    difficulty: "medium"
  },
  {
    id: 328,
    question: "Brenda Lee recently became the oldest person to have a No 1 hit single in the US charts. In which 1973 hit song does she get the following mention? \"The radio is playin' some forgotten song  Brenda Lee's 'Coming On Strong'\"",
    options: ["I Love Rock 'n' Roll", "Maggie May", "American Pie", "Radar Love"],
    correctAnswer: 3,
    category: "Music",
    difficulty: "hard"
  },
  {
    id: 329,
    question: "Which song title do both The Beatles and The Doors share?",
    options: ["Help!", "Come Together", "Hello, Goodbye", "The End"],
    correctAnswer: 3,
    category: "Music",
    difficulty: "medium"
  },
  {
    id: 330,
    question: "What is the Hebrew translation for 'to the skies' or 'skywards'?",
    options: ["El AL", "Baruch", "Shalom", "L'Ma'an"],
    correctAnswer: 0,
    category: "Language",
    difficulty: "medium"
  },
  {
    id: 331,
    question: "Which heavy metal band toured in a 747 nicknamed Ed Force One?",
    options: ["Metallica", "Iron Maiden", "Judas Priest", "Black Sabbath"],
    correctAnswer: 1,
    category: "Music",
    difficulty: "medium"
  },
  {
    id: 332,
    question: "Art scholars claimed that the 12th century Italian painter and architect Giotto could do what perfectly?",
    options: ["Paint frescoes", "Draw a straight line", "Carve marble", "Draw a circle"],
    correctAnswer: 3,
    category: "Art & Culture",
    difficulty: "medium"
  },
  {
    id: 333,
    question: "What was the first name of Jason Voorhees’s deranged mother?",
    options: ["Pamela", "Victoria", "Alice", "Margaret"],
    correctAnswer: 0,
    category: "TV & Cinema",
    difficulty: "medium"
  },
  {
    id: 334,
    question: "Which best-selling novel begins with the words “It was nearing midnight and the Prime Minister was sitting alone in his office …”?",
    options: [
      "Harry Potter and the Half-Blood Prince",
      "The Da Vinci Code",
      "1984",
      "The Hobbit"
    ],
    correctAnswer: 0,
    category: "Literature",
    difficulty: "hard"
  },
  {
    id: 335,
    question: "Which album title was a #1 in the US for both Eric Clapton and Alicia Keys?",
    options: ["Unplugged", "Live at Wembley", "One Night Only", "MTV Unplugged"],
    correctAnswer: 0,
    category: "Music",
    difficulty: "medium"
  },
  {
    id: 336,
    question: "Which record company rejected the Beatles after their January 1, 1962 audition with “guitar groups are on the way out”?",
    options: ["EMI", "Decca Records", "Capitol Records", "Parlophone"],
    correctAnswer: 1,
    category: "Music",
    difficulty: "hard"
  },
  {
    id: 337,
    question: "Which 1990 action film ends with the lines:\n“You get this parking ticket in front of my airport?”\n“Ya.”\n“Ah, what the hell, it’s Christmas!”?",
    options: ["Heat", "Lethal Weapon 2", "Speed", "Die Hard 2"],
    correctAnswer: 3,
    category: "TV & Cinema",
    difficulty: "medium"
  },
  {
    id: 338,
    question: "In military slang, what is a “Sky Pilot”?",
    options: ["Pilot", "Navigator", "Paratrooper", "Chaplain"],
    correctAnswer: 3,
    category: "History & Politics",
    difficulty: "medium"
  },
  {
    id: 339,
    question: "In which year was the last public execution in the USA?",
    options: ["1926", "1936", "1946", "1916"],
    correctAnswer: 1,
    category: "History & Politics",
    difficulty: "hard"
  },
  {
    id: 340,
    question: "A form of transport and a cocktail containing cognac, orange liqueur and lemon juice.",
    options: ["Roller", "Jeep", "Sailboat", "Sidecar"],
    correctAnswer: 3,
    category: "Language",
    difficulty: "hard"
  },
    {
    id: 341,
    question: "Which Bruce Springsteen song was a number one hit in the US charts for a British band in 1977?",
    options: [
      "Born to Run",
      "Blinded By the Light",
      "Thunder Road",
      "Dancing in the Dark"
    ],
    correctAnswer: 1,
    category: "Music",
    difficulty: "medium"
  },
  {
    id: 342,
    question: "Which E.U. capital city is named after a 16th century Grand Master of the Order of Saint John?",
    options: ["Valletta", "Mdina", "Brussels", "Zagreb"],
    correctAnswer: 0,
    category: "Geography & Nature",
    difficulty: "medium"
  },
    {
    id: 343,
    question: "Fangotherapy is a popular wellness technique. Fango is the Italian word for what?",
    options: ["Clay", "Sand", "Mud", "Steam"],
    correctAnswer: 2,
    category: "Science & Technology",
    difficulty: "medium"
  },
  {
    id: 344,
    question: "The title of a song from a popular musical and a national symbol which translated means \"noble white\". One word.",
    options: ["Alpenliebe", "Edelweiss", "Brightstar", "Weissgold"],
    correctAnswer: 1,
    category: "Music",
    difficulty: "medium"
  },
  {
    id: 345,
    question: "Which famous three word cartoon phrase is inscribed on Mel Blanc's gravestone?",
    options: ["That's All Folks", "Who's on First", "Just Keep Swimming", "See You Later"],
    correctAnswer: 0,
    category: "TV & Cinema",
    difficulty: "easy"
  },
  {
    id: 346,
    question: "The name of which part of Manhattan was a metonym for the American music industry in the late 19th and early 20th century?",
    options: ["Broadway", "Harlem", "Greenwich Village", "Tin Pan Alley"],
    correctAnswer: 3,
    category: "History & Politics",
    difficulty: "medium"
  },
  {
    id: 347,
    question: "In the 1965 war film The Heroes of Telemark, a Norwegian commando sinks a ferry loaded with deuterium oxide destined for Nazi Germany. Deuterium oxide is better known as what?",
    options: ["Heavy water", "Hydrogen peroxide", "Boiling water", "Distilled water"],
    correctAnswer: 0,
    category: "Science & Technology",
    difficulty: "hard"
  },
  {
    id: 348,
    question: "With which US city does one associate the slogan \"What Happens Here, Stays Here\"?",
    options: ["New Orleans", "Las Vegas", "Miami", "Los Angeles"],
    correctAnswer: 1,
    category: "Geography & Nature",
    difficulty: "easy"
  },
  {
    id: 349,
    question: "In which Dashiell Hammett novel are the detective couple Nick and Nora Charles the central characters?",
    options: ["The Thin Man", "Red Harvest", "The Maltese Falcon", "The Glass Key"],
    correctAnswer: 0,
    category: "Literature",
    difficulty: "medium"
  },
  {
    id: 350,
    question: "Pluto's largest moon is named after which underworld figure?",
    options: ["Cerberus", "Hades", "Persephone", "Charon"],
    correctAnswer: 3,
    category: "Science & Technology",
    difficulty: "easy"
  },
  {
    id: 351,
    question: "Which British controlled territory in the Indian Ocean, leased to the US military, is a so-called \"unsinkable aircraft carrier\"?",
    options: ["Bermuda", "Diego Garcia", "Gibraltar", "Malta"],
    correctAnswer: 1,
    category: "Geography & Nature",
    difficulty: "hard"
  },
  {
    id: 352,
    question: "Which poet's father died by falling off a horse?",
    options: ["John Milton", "William Wordsworth", "John Keats", "William Butler Yeats"],
    correctAnswer: 2,
    category: "Literature",
    difficulty: "hard"
  },
  {
    id: 353,
    question: "In which city does most of the novel 'Crime and Punishment' take place?",
    options: ["St. Petersburg", "Moscow", "Vladivostok", "Stalingrad"],
    correctAnswer: 0,
    category: "Literature",
    difficulty: "easy"
  },
  {
    id: 354,
    question: "Bubble tea originated in which country?",
    options: ["China", "Japan", "Taiwan", "Thailand"],
    correctAnswer: 2,
    category: "Geography & Nature",
    difficulty: "easy"
  },
  {
    id: 355,
    question: "After USA, which NATO member has the most military personnel?",
    options: ["Canada", "Germany", "France", "Turkey"],
    correctAnswer: 3,
    category: "History & Politics",
    difficulty: "medium"
  },
  {
    id: 356,
    question: "The following was a movie poster tag line for which Oscar winning film? 'Doyle is bad news - but a good cop'",
    options: ["Leathal Weapon", "Catch Me If You Can", "The French Connection", "The Departed"],
    correctAnswer: 2,
    category: "TV & Cinema",
    difficulty: "medium"
  },
  {
    id: 357,
    question: "Santana had a mega hit with a cover of the song 'Black Magic Woman' in 1970. Which cult musician wrote the song?",
    options: ["Carly Simon", "Cat Stevens", "Peter Green", "Tom Petty"],
    correctAnswer: 2,
    category: "Music",
    difficulty: "hard"
  },
  {
    id: 358,
    question: "'Something wonderful is about to happen' was a movie poster tag line for which sci-fi sequel?",
    options: ["Star Trek II: The Wrath of Khan", "Blade Runner 2049", "2010: The Year We Make Contact", "2001: A Space Odyssey"],
    correctAnswer: 2,
    category: "TV & Cinema",
    difficulty: "hard"
  },
  {
    id: 359,
    question: "Which islands in the Indian Ocean are home to the only known Paleolithic people?",
    options: ["Maldives", "Seychelles", "Andaman Islands", "Mauritius"],
    correctAnswer: 2,
    category: "Geography & Nature",
    difficulty: "hard"
  },
  {
    id: 360,
    question: "Which man's bones were first buried in Valladolid, moved to Seville, transported to Santo Domingo, Havana, and finally rest again in Sevilla?",
    options: ["Christopher Columbus", "Ferdinand Magellan", "Hernan Cortes", "Francisco Pizarro"],
    correctAnswer: 0,
    category: "History & Politics",
    difficulty: "hard"
  },
  {
    id: 361,
    question: "An old man and a six litre bottle of wine. One word.",
    options: ["Jeroboam", "Salmanazar", "Methuselah", "Nebuchadnezzar"],
    correctAnswer: 2,
    category: "Art & Culture",
    difficulty: "medium"
  },
  {
    id: 362,
    question: "Which 20th Century novel is a creative retelling of Charlotte Brontë's 'Jane Eyre'?",
    options: ["Wide Sargasso Sea by Jean Rhys", "Mrs Dalloway by Virginia Woolf", "The Age of Innocence by Edith Wharton", "Tender Is The Night by F. Scott Fitzgerald"],
    correctAnswer: 0,
    category: "Literature",
    difficulty: "medium"
  },
  {
    id: 363,
    question: "Which four colours are found on the flag of Palestine?",
    options: ["Black, red, white and orange", "White, red, and green", "Black, white and green", "Black, red, white and green"],
    correctAnswer: 3,
    category: "Geography & Nature",
    difficulty: "medium"
  },
  {
    id: 364,
    question: "Since 1947, the Radcliffe Line is a boundary which separates which two countries?",
    options: ["India and Pakistan", "India and Bangladesh", "Pakistan and Afghanistan", "India and China"],
    correctAnswer: 0,
    category: "History & Politics",
    difficulty: "medium"
  },
  {
    id: 365,
    question: "What is the most common surname in France?",
    options: ["Simon", "Richard", "Robert", "Martin"],
    correctAnswer: 3,
    category: "Language",
    difficulty: "hard"
  },
  {
    id: 366,
    question: "\"She doesn't give an F\" was a movie poster tag line for which 2011 Hollywood comedy?",
    options: ["Bridesmaids", "Easy A", "Bad Teacher", "Horrible Bosses"],
    correctAnswer: 2,
    category: "TV & Cinema",
    difficulty: "medium"
  },
  {
    id: 367,
    question: "What is the land speed record for a saltwater crocodile?",
    options: ["7 km/hr", "17 km/hr", "27 km/hr", "37 km/hr"],
    correctAnswer: 1,
    category: "Geography & Nature",
    difficulty: "hard"
  },
  {
    id: 368,
    question: "To what famous novel is this the opening line? 'Stately, plump Buck Mulligan came from the stairhead, bearing a bowl of lather on which a mirror and a razor lay crossed'",
    options: ["The House of Mirth by Edith Wharton", "Hard Times by Charles Dickens", "The Third Policeman by Flann O'Brien", "Ulysses by James Joyce"],
    correctAnswer: 3,
    category: "Literature",
    difficulty: "hard"
  },
  {
    id: 369,
    question: "Which Russian artist is widely credited with creating the world's first truly abstract paintings?",
    options: ["Kandinsky", "Chagall", "Malevich", "Tatlin"],
    correctAnswer: 0,
    category: "Art & Culture",
    difficulty: "easy"
  },
  {
    id: 370,
    question: "Which Jane Austen novel is a satire of the gothic novel genre",
    options: ["Manchester Park", "Northanger Abbey", "Persuasion", "Sense and Sensibility"],
    correctAnswer: 1,
    category: "Literature",
    difficulty: "easy"
  },
  {
    id: 371,
    question: "What was the name of the on-line black market found in the dark web which was shut down by the FBI in 2013?",
    options: ["Dark Market", "Shadow Bazaar", "Crypto Cartel", "Silk Road"],
    correctAnswer: 3,
    category: "Science & Technology",
    difficulty: "medium"
  },
  {
    id: 372,
    question: "The peel from which kind of orange is used to flavour Earl Grey and Lady Grey teas?",
    options: ["Seville orange", "Blood orange", "Bergamot", "Valencia orange"],
    correctAnswer: 2,
    category: "Geography & Nature",
    difficulty: "medium"
  },
  {
    id: 373,
    question: "A melody composed in 1784 is found in which hit song for both Elvis and UB40?",
    options: ["Can't Help Falling in Love", "Love Me Tender", "Blue Suede Shoes", "Suspicious Minds"],
    correctAnswer: 0,
    category: "Music",
    difficulty: "medium"
  },
  {
    id: 374,
    question: "What is the most populated city in India?",
    options: ["Delhi", "Mumbai", "Kolkata", "Chennai"],
    correctAnswer: 1,
    category: "Geography & Nature",
    difficulty: "easy"
  },
  {
    id: 375,
    question: "Which woman, born in London and with residence in Wimbledon, is found in Forbes' list of the wealthiest fictional characters?",
    options: ["Mary Poppins", "Alice", "Jane Eyre", "Lara Croft"],
    correctAnswer: 3,
    category: "TV & Cinema",
    difficulty: "medium"
  },
  {
    id: 376,
    question: "Which film starring James Dean is based on a John Steinbeck novel?",
    options: ["Rebel Without a Cause", "Giant", "East of Eden", "Somebody Up There Likes Me"],
    correctAnswer: 2,
    category: "TV & Cinema",
    difficulty: "medium"
  },
  {
    id: 377,
    question: "In the song by Wheatus, which heavy metal band does the \"Teenage Dirtbag\" listen to?",
    options: ["Metallica", "Slayer", "Megadeth", "Iron Maiden"],
    correctAnswer: 3,
    category: "Music",
    difficulty: "easy"
  },
    {
    id: 378,
    question: "How many eyes do both the praying mantis and the bumble bee have?",
    options: ["Four", "Five", "Six", "Eight"],
    correctAnswer: 1,
    category: "Geography & Nature",
    difficulty: "medium"
  },
  {
    id: 379,
    question: "What is depicted on The Velvet Underground & Nico album cover?",
    options: ["An apple", "A strawberry", "A banana", "A grape"],
    correctAnswer: 2,
    category: "Music",
    difficulty: "easy"
  },
  {
    id: 380,
    question: "Which D.D. was the first African American to be nominated for the Academy Award for Best Actress?",
    options: ["Dorothy Dandridge", "Diahann Carroll", "Diana Ross", "Debbie Allen"],
    correctAnswer: 0,
    category: "TV & Cinema",
    difficulty: "medium"
  },
  {
    id: 381,
    question: "The Wall Street Crash that took place on October 29th, 1929 is also known as \"Black\" what?",
    options: ["Black Monday", "Black Tuesday", "Black Thursday", "Black Friday"],
    correctAnswer: 1,
    category: "History & Politics",
    difficulty: "medium"
  },
  {
    id: 382,
    question: "The name of which world famous landmark stems from the Persian for \"Crown of the Palace\"?",
    options: ["Red Fort", "Buckingham Palace", "Taj Mahal", "White House"],
    correctAnswer: 2,
    category: "Art & Culture",
    difficulty: "medium"
  },
  {
    id: 383,
    question: "Which American singer, actress, dancer and model was the first woman to have a posthumous No. 1 hit single in the UK charts in January 2002?",
    options: ["Aaliyah", "Whitney Houston", "Selena", "Amy Winehouse"],
    correctAnswer: 0,
    category: "Music",
    difficulty: "hard"
  },
  {
    id: 384,
    question: "The Japanese Yen, the Korean Won and the Chinese Yuan all translate as which word?",
    options: ["royal", "silver", "trust", "round"],
    correctAnswer: 3,
    category: "Language",
    difficulty: "hard"
  },
  {
    id: 385,
    question: "In which year did the French penal colony known as Devil's Island officially close?",
    options: ["1948", "1953", "1958", "1963"],
    correctAnswer: 1,
    category: "History & Politics",
    difficulty: "medium"
  },
  {
    id: 386,
    question: "What is the official drink of the Kentucky Derby?",
    options: ["Mint julep", "Old Fashioned", "Manhattan", "Mojito"],
    correctAnswer: 0,
    category: "Art & Culture",
    difficulty: "medium"
  },
  {
    id: 387,
    question: "Based on TV viewership, what is, after the NFL, the second most popular sport in the United States?",
    options: ["NBA basketball", "MLB baseball", "NASCAR racing", "NCAA college football"],
    correctAnswer: 2,
    category: "Sports",
    difficulty: "medium"
  },
  {
    id: 388,
    question: "According to 'Paul is dead' theorists, which man with the initials B.S. replaced McCartney on the Sgt. Pepper's album?",
    options: ["Billy Shears", "Bill Sinclair", "Bob Sanders", "Barry Spence"],
    correctAnswer: 0,
    category: "Music",
    difficulty: "hard"
  },
    {
    id: 389,
    question: "Which two cities have the most 5 Star hotels?",
    options: ["Paris and New York", "London and Dubai", "Tokyo and Hong Kong", "Moscow and Shanghai"],
    correctAnswer: 1,
    category: "Geography & Nature",
    difficulty: "hard"
  },
  {
    id: 390,
    question: "What is a naturally magnetised piece of metal called?",
    options: ["Iron ore", "Magnetite", "Lodestone", "Hematite"],
    correctAnswer: 2,
    category: "Science & Technology",
    difficulty: "medium"
  },
  {
    id: 391,
    question: "The English name for which thin all-cotton fabric stems from the Persian words for \"milk\" and \"sugar\"?",
    options: ["Muslin", "Madras", "Seersucker", "Organdy"],
    correctAnswer: 2,
    category: "Language",
    difficulty: "hard"
  },
  {
    id: 392,
    question: "In which 1996 film does Natalie Portman play a member of 'The First Family of the United States'?",
    options: ["Starship Troopers", "Beautiful Girls", "Heat", "Mars Attacks!"],
    correctAnswer: 3,
    category: "TV & Cinema",
    difficulty: "medium"
  },
  {
    id: 393,
    question: "With up to a million hairs per square inch, which marine mammal has the densest fur in the animal kingdom?",
    options: ["Sea lion", "Polar bear", "Sea otter", "Walrus"],
    correctAnswer: 2,
    category: "Geography & Nature",
    difficulty: "medium"
  },
  {
    id: 394,
    question: "Lion and Crescent are both currency names in which popular series of books?",
    options: ["Harry Potter", "The Chronicles of Narnia", "Game of Thrones", "His Dark Materials"],
    correctAnswer: 1,
    category: "Literature",
    difficulty: "hard"
  },
  {
    id: 395,
    question: "According to the U.S. Census Bureau, what will be the four most populated countries in 2050 (in order)?",
    options: [
      "India, China, USA, Nigeria",
      "China, India, USA, Indonesia",
      "India, China, Indonesia, Pakistan",
      "China, India, USA, Pakistan"
    ],
    correctAnswer: 0,
    category: "Geography & Nature",
    difficulty: "hard"
  },
  {
    id: 396,
    question: "Where is the world's largest national park located?",
    options: ["Canada", "Russia", "USA", "Greenland"],
    correctAnswer: 3,
    category: "Geography & Nature",
    difficulty: "hard"
  },
  {
    id: 397,
    question: "Which island country was a European kingdom from 1918 to 1944?",
    options: ["Iceland", "Ireland", "Cyprus", "Malta"],
    correctAnswer: 0,
    category: "History & Politics",
    difficulty: "medium"
  },
  {
    id: 398,
    question: "What are the two largest bays in the world?",
    options: ["Gulf of Mexico and Bay of Biscay", "Bay of Fundy and Gulf of Alaska", "Bay of Bengal and Hudson Bay", "Bay of Bengal and Gulf of Mexico"],
    correctAnswer: 2,
    category: "Geography & Nature",
    difficulty: "hard"
  },
  {
    id: 399,
    question: "In Bon Jovi's hit, what were Tommy and Gina \"livin' on\"?",
    options: ["a prayer", "a dream", "hope", "love"],
    correctAnswer: 0,
    category: "Music",
    difficulty: "easy"
  },
  {
    id: 400,
    question: "What is the name of the high school Sandy attends in the film Grease?",
    options: ["Riverdale High", "Ridgemont High", "Rydell High", "Shermer High"],
    correctAnswer: 2,
    category: "TV & Cinema",
    difficulty: "easy"
  },
  {
    id: 401,
    question: "Which superhero's real name is Anung Un Rama?",
    options: ["Batman", "Superman", "Spawn", "Hellboy"],
    correctAnswer: 3,
    category: "TV & Cinema",
    difficulty: "medium"
  },
  {
    id: 402,
    question: "George Blanda was the oldest NFL player when he retired in 1976. How old was he?",
    options: ["46", "48", "50", "52"],
    correctAnswer: 1,
    category: "Sports",
    difficulty: "hard"
  },
  {
    id: 403,
    question: "In which 2013 film does a fail‐safe called the Cerberus Code nearly annihilate the U.S.?",
    options: ["White House Down", "London Has Fallen", "Angel Has Fallen", "Olympus Has Fallen"],
    correctAnswer: 3,
    category: "TV & Cinema",
    difficulty: "hard"
  },
  {
    id: 404,
    question: "Which 1960s–70s vocal group named themselves after a bowling alley?",
    options: ["The Four Seasons", "The Temptations", "The Beach Boys", "The Drifters"],
    correctAnswer: 0,
    category: "Music",
    difficulty: "medium"
  },
  {
    id: 405,
    question: "What was the 1901 population of England, Scotland and Wales?",
    options: ["30 million", "37 million", "44 million", "50 million"],
    correctAnswer: 1,
    category: "Geography & Nature",
    difficulty: "hard"
  },
  {
    id: 406,
    question: "In Roger Miller’s 'King of the Road', what \"buys an eight by twelve four‐bit room\"?",
    options: ["Two hours of pushin' broom", "A dollar and a dime", "A one‐way ticket", "A bottle of wine"],
    correctAnswer: 0,
    category: "Music",
    difficulty: "medium"
  },
  {
    id: 407,
    question: "Sidon is the third largest city in which Mediterranean country?",
    options: ["Israel", "Syria", "Turkey", "Lebanon"],
    correctAnswer: 3,
    category: "Geography & Nature",
    difficulty: "medium"
  },
  {
    id: 408,
    question: "Canadian Capt. Roy Brown was credited with the demise of which pilot?",
    options: ["Erwin Rommel", "Winston Churchill", "Manfred von Richthofen", "Charles Lindbergh"],
    correctAnswer: 2,
    category: "History & Politics",
    difficulty: "hard"
  },
    {
    id: 409,
    question: "The movie poster tag line for which 1988 film, set in late 19th century British Columbia, was: \"He's an orphan ... at the start of a journey. A journey to survive.\"",
    options: ["The Bear", "The Orphan", "The Journey", "Survivor"],
    correctAnswer: 0,
    category: "TV & Cinema",
    difficulty: "hard"
  },
  {
    id: 410,
    question: "Which color is also the 5th most popular surname in the US?",
    options: ["Smith", "Johnson", "Taylor", "Brown"],
    correctAnswer: 3,
    category: "Geography & Nature",
    difficulty: "hard"
  },
  {
    id: 411,
    question: "\"I'm glad it's you\" are the last dying words from a character played by Paul Newman. Name the film.",
    options: ["Road to Perdition", "Cool Hand Luke", "The Hustler", "Rebel"],
    correctAnswer: 0,
    category: "TV & Cinema",
    difficulty: "medium"
  },
  {
    id: 412,
    question: "What is the oldest continuously inhabited European settlement on the Pacific coast of the Americas?",
    options: ["San Jose", "Panama City", "Lima", "New Archangel"],
    correctAnswer: 1,
    category: "Geography & Nature",
    difficulty: "hard"
  },
  {
    id: 413,
    question: "The 1990 film Total Recall is loosely based on a novel from which American writer?",
    options: ["Philip K. Dick", "Isaac Asimov", "Ray Bradbury", "Arthur C. Clarke"],
    correctAnswer: 0,
    category: "Literature",
    difficulty: "medium"
  },
  {
    id: 414,
    question: "No matter in which way or manner it is measured, which country has the longest coastline in the world?",
    options: ["Australia", "USA", "Canada", "Russia"],
    correctAnswer: 2,
    category: "Geography & Nature",
    difficulty: "easy"
  },
  {
    id: 415,
    question: "In the Terminator film series, what was the name of the corporation that built Skynet?",
    options: ["Cyberdyne Systems", "Skynet Inc", "Tyrell Corporation", "OmniCorp"],
    correctAnswer: 0,
    category: "TV & Cinema",
    difficulty: "medium"
  },
  {
    id: 416,
    question: "The name for which sometimes controversial biological preparation stems from a Latin word meaning \"from cows\"?",
    options: ["Serum", "Antibiotic", "Vaccine", "Tonic"],
    correctAnswer: 2,
    category: "Science & Technology",
    difficulty: "medium"
  },
  {
    id: 417,
    question: "Which of the following is the only US group to have had a number 1 hit single in the US Billboard Hot 100 six years in a row?",
    options: ["The Beach Boys", "Van Halen", "CCR", "The Supremes"],
    correctAnswer: 3,
    category: "Music",
    difficulty: "medium"
  },
  {
    id: 418,
    question: "Which famous 1960s TV heroine’s name is a play on the phrase ‘man appeal’?",
    options: ["Emma Peel", "Diana Prince", "Lois Lane", "Donna Reed"],
    correctAnswer: 0,
    category: "TV & Cinema",
    difficulty: "medium"
  },
  {
    id: 419,
    question: "The winners of which major sport competition are awarded the Henri Delaunay Trophy?",
    options: ["Copa América", "FIFA World Cup", "UEFA European Championship", "African Cup of Nations"],
    correctAnswer: 2,
    category: "Sports",
    difficulty: "easy"
  },
  {
    id: 420,
    question: "Which winner of five Grammys, an Oscar, a Tony and a Golden Globe can be heard singing and playing piano on John Lennon’s ‘Whatever Gets You Through the Night’?",
    options: ["Billy Joel", "Paul McCartney", "David Bowie", "Elton John"],
    correctAnswer: 3,
    category: "Music",
    difficulty: "hard"
  },
  {
    id: 421,
    question: "The following was a movie poster tag line for which film? “The Bride is back for the final cut”",
    options: ["Kill Bill: Volume 2", "Pulp Fiction", "Raging Bull", "The Bride"],
    correctAnswer: 0,
    category: "TV & Cinema",
    difficulty: "medium"
  },
  {
    id: 422,
    question: "Who was the first man to win a Grand Slam singles title using a non-wooden tennis racquet?",
    options: ["Björn Borg", "John McEnroe", "Ivan Lendl", "Jimmy Connors"],
    correctAnswer: 3,
    category: "Sports",
    difficulty: "medium"
  },
  {
    id: 423,
    question: "Who still holds the record for the youngest player to score a hat-trick in a FIFA World Cup?",
    options: ["Lionel Messi", "Pelé", "Diego Maradona", "Kylian Mbappé"],
    correctAnswer: 1,
    category: "Sports",
    difficulty: "easy"
  },
  {
    id: 424,
    question: "Which country was a 1981 hit song for Kim Wilde?",
    options: ["Cambodia", "Vietnam", "Burma", "Bhutan"],
    correctAnswer: 0,
    category: "Music",
    difficulty: "hard"
  },
  {
    id: 425,
    question: "Air Force One is the official air traffic call sign for a USAF aircraft carrying a US President. What is the call sign for any civil aircraft carrying the US President?",
    options: ["Alpha One", "Eagle One", "Executive One", "Convoy One"],
    correctAnswer: 2,
    category: "History & Politics",
    difficulty: "easy"
  },
  {
    id: 426,
    question: "What name did captured US servicemen give to North Vietnam’s notorious Hoa Lo prison?",
    options: ["The Hanoi Hilton", "The Saigon Hilton", "Phu Quoc Hilton", "The Tiger Cage"],
    correctAnswer: 0,
    category: "History & Politics",
    difficulty: "medium"
  },
  {
    id: 427,
    question: "In which film are “Is that a raincoat?” the last words from an investment banker?",
    options: ["Wall Street", "The Wolf of Wall Street", "American Psycho", "Boiler Room"],
    correctAnswer: 2,
    category: "TV & Cinema",
    difficulty: "hard"
  },
    {
    id: 428,
    question: "Ashgabat is the capital of which 'stan'?",
    options: ["Kazakhstan", "Turkmenistan", "Uzbekistan", "Afghanistan"],
    correctAnswer: 1,
    category: "Geography & Nature",
    difficulty: "easy"
  },
  {
    id: 429,
    question: "In which state is the southernmost city in the United States?",
    options: ["Alaska", "Florida", "Hawaii", "Texas"],
    correctAnswer: 2,
    category: "Geography & Nature",
    difficulty: "medium"
  },
  {
    id: 430,
    question: "Billy Connolly, Gerry Rafferty and Tam Harvey were which Scottish folk group?",
    options: ["Humblebums", "Scotch Mist", "Fairport Convention", "Runrig"],
    correctAnswer: 0,
    category: "Music",
    difficulty: "hard"
  },
  {
    id: 431,
    question: "Which E.T. is known as \"the father of the hydrogen bomb\"?",
    options: ["Eli Turret", "Edward Teller", "Edmund Taft", "Edwin Torr"],
    correctAnswer: 1,
    category: "Science & Technology",
    difficulty: "medium"
  },
  {
    id: 432,
    question: "In which 1996 film did Jack Nicholson play two different roles?",
    options: ["The Shining", "The Departed", "The Pledge", "Mars Attacks"],
    correctAnswer: 3,
    category: "TV & Cinema",
    difficulty: "medium"
  },
  {
    id: 433,
    question: "The map of Cyprus depicted on the flag of Cyprus is which colour?",
    options: ["red", "green", "orange", "blue"],
    correctAnswer: 2,
    category: "Geography & Nature",
    difficulty: "hard"
  },
  {
    id: 434,
    question: "Which wine term, derived from the French word for \"tank\" or \"vat\", is often found on the labels of French wine and champagne bottles?",
    options: ["Cuvee", "Reserve", "Grand Cru", "Sec"],
    correctAnswer: 0,
    category: "Art & Culture",
    difficulty: "easy"
  },
  {
    id: 435,
    question: "Which American writer famously served as an ambulance driver in the Italian military?",
    options: ["Norman Mailer", "Robert Frost", "Ernest Hemingway", "Jack Kerouac"],
    correctAnswer: 2,
    category: "Literature",
    difficulty: "easy"
  },
  {
    id: 436,
    question: "The name for which element in the periodic table stems from the Greek for \"I bring forth acid\"?",
    options: ["Hydrogen", "Nitrogen", "Oxygen", "Carbon"],
    correctAnswer: 2,
    category: "Science & Technology",
    difficulty: "medium"
  },
  {
    id: 437,
    question: "Named after the city in which it occurred, what was the decisive battle between the combined forces of humans and Autobots against the Decepticons called?",
    options: ["Battle of Chicago", "Battle of New York", "Battle of Boston", "Battle of Birmingham"],
    correctAnswer: 0,
    category: "TV & Cinema",
    difficulty: "hard"
  },
  {
    id: 438,
    question: "At the conclusion to which Beatles song is an ultra-sonic dog whistle used?",
    options: ["Lucy In The Sky With Diamonds", "A Day In The Life", "Here Comes The Sun", "Taxman"],
    correctAnswer: 2,
    category: "Music",
    difficulty: "medium"
  },
  {
    id: 439,
    question: "What was Al Capone's nickname?",
    options: ["The Boss", "Big Al", "Scarface", "Kingpin"],
    correctAnswer: 2,
    category: "History & Politics",
    difficulty: "easy"
  },
  {
    id: 440,
    question: "Based on record sales, which two groups were the best selling music artists in the US between 1962-1964?",
    options: ["The Beach Boys and The Four Seasons", "The Beatles and Mamas And The Papas", "Rolling Stones and The Animals", "The Bee Gees and Crosby, Stills And Nash"],
    correctAnswer: 0,
    category: "Music",
    difficulty: "hard"
  },
  {
    id: 441,
    question: "Which English actor's memoir was titled \"My Word is My Bond\"?",
    options: ["Sean Connery", "Michael Caine", "Roger Moore", "Ian McKellen"],
    correctAnswer: 2,
    category: "TV & Cinema",
    difficulty: "medium"
  },
  {
    id: 442,
    question: "Which writer was a patron to authors like Ernest Hemingway and Sherwood Anderson, and to painters like Picasso and Modigliani?",
    options: ["Gertrude Stein", "Henry James", "E.M. Forster", "James Joyce"],
    correctAnswer: 0,
    category: "Literature",
    difficulty: "hard"
  },
  {
    id: 443,
    question: "'It Doesn't Matter Any More' was a posthumous hit for Buddy Holly. Which Canadian singer-songwriter wrote the song?",
    options: ["Raymond Egan", "Percy Faith", "Paul Anka", "Bonnie Dobson"],
    correctAnswer: 2,
    category: "Music",
    difficulty: "medium"
  },
  {
    id: 444,
    question: "Ringo's only featured drum solo with The Beatles can be heard on which song?",
    options: ["All You Need Is Love", "Oh! Darling", "The End", "Hey Jude"],
    correctAnswer: 2,
    category: "TV & Cinema",
    difficulty: "hard"
  },
  {
    id: 445,
    question: "Who wrote 'Heartbreaker', 'Chain Reaction', 'Islands in the Stream' and 'Emotion'?",
    options: ["Bee Gees", "ABBA", "The Beatles", "Queen"],
    correctAnswer: 0,
    category: "Music",
    difficulty: "easy"
  },
  {
    id: 446,
    question: "When 7 UP was first introduced in 1929 it was marketed as an antidepressant. Which one of the following additives did it contain?",
    options: ["morphine", "cocaine", "opium", "lithium"],
    correctAnswer: 3,
    category: "Science & Technology",
    difficulty: "medium"
  },
  {
    id: 447,
    question: "The 2007 album titled 'The Long Road Out Of Eden' was the first number one album since 1979 for which band?",
    options: ["The Eagles", "The Doors", "AC/DC", "Fleetwood Mac"],
    correctAnswer: 0,
    category: "Music",
    difficulty: "medium"
  },
  {
    id: 448,
    question: "The name of which tragic King translated means \"son of life\"?",
    options: ["Lear", "Oedipus", "Macbeth", "Arthur"],
    correctAnswer: 2,
    category: "Literature",
    difficulty: "medium"
  },
  {
    id: 449,
    question: "The profanity or expression of surprise 'Shazbot' stems from which planet?",
    options: ["Zebes", "Krypton", "Ork", "Vulcan"],
    correctAnswer: 2,
    category: "TV & Cinema",
    difficulty: "hard"
  },
  {
    id: 450,
    question: "'Cut the red one' was a movie poster tag line for which critically acclaimed film?",
    options: ["No Country for Old Men", "The Hurt Locker", "Zero Dark Thirty", "Argo"],
    correctAnswer: 1,
    category: "TV & Cinema",
    difficulty: "hard"
  },
  {
    id: 451,
    question: "Which American man was the world number one professional tennis player eight years in a row from 1952 to 1960?",
    options: ["Bill Tilden", "Rod Laver", "Don Budge", "Pancho Gonzales"],
    correctAnswer: 3,
    category: "Sports",
    difficulty: "hard"
  },
  {
    id: 452,
    question: "What kind of water has sometimes been used in emergencies as a substitute for blood plasma?",
    options: ["Rain water", "Coconut water", "Saline solution", "Distilled water"],
    correctAnswer: 1,
    category: "Science & Technology",
    difficulty: "medium"
  },
  {
    id: 453,
    question: "Which Beatle is on the far left of the Abbey Road album cover?",
    options: ["Paul McCartney", "John Lennon", "George Harrison", "Ringo Starr"],
    correctAnswer: 2,
    category: "Music",
    difficulty: "easy"
  },
  {
    id: 454,
    question: "What were the two most populated cities in Europe in the year 1300 AD?",
    options: [
      "Paris and Florence",
      "Venice and Milan",
      "Paris and Venice",
      "Rome and Paris"
    ],
    correctAnswer: 2,
    category: "Geography & Nature",
    difficulty: "medium"
  },
  {
    id: 455,
    question: "Which one country is the world's largest producer of cherries, apricots, figs, and hazelnuts?",
    options: ["Greece", "Turkey", "USA", "China"],
    correctAnswer: 1,
    category: "Geography & Nature",
    difficulty: "easy"
  },
  {
    id: 456,
    question: "A 2012 sci-fi prequel movie and the Titan responsible for creating mankind.",
    options: ["Interstellar", "Prometheus", "Gravity", "Avatar"],
    correctAnswer: 1,
    category: "TV & Cinema",
    difficulty: "medium"
  },
  {
    id: 457,
    question: "What is the name of the 'ghost town' beside the crippled Chernobyl nuclear power plant?",
    options: ["Pripyat", "Gomel", "Kharkiv", "Poltava"],
    correctAnswer: 0,
    category: "Geography & Nature",
    difficulty: "medium"
  },
  {
    id: 458,
    question: "'There is no force more powerful than the will to live' was a 2010 movie poster tag line for which Hollywood survival film?",
    options: ["Cast Away", "The Revenant", "127 Hours", "Gravity"],
    correctAnswer: 2,
    category: "TV & Cinema",
    difficulty: "easy"
  },
  {
    id: 459,
    question: "Who said 'My dear girl, there are some things that just aren't done, such as drinking Dom Perignon 53 above the temperature of 38 degrees Fahrenheit'?",
    options: ["Holly Golightly", "Mary Poppins", "James Bond", "Atticus Finch"],
    correctAnswer: 2,
    category: "TV & Cinema",
    difficulty: "hard"
  },
  {
    id: 460,
    question: "Mount Everest is officially the highest point in which two countries?",
    options: ["India and Nepal", "Tibet and Bhutan", "China and India", "Nepal and China"],
    correctAnswer: 3,
    category: "Geography & Nature",
    difficulty: "easy"
  },
  {
    id: 461,
    question: "Which 'rock n roll history' song begins with the words 'In the beginning back in 1955'?",
    options: ["Rock Around the Clock", "Johnny B. Goode", "Let There Be Rock", "Great Balls of Fire"],
    correctAnswer: 2,
    category: "Music",
    difficulty: "medium"
  },
  {
    id: 462,
    question: "What were the two tallest buildings in the world in 1950?",
    options: ["Sears Tower and Empire State Building", "Chrysler Building and Sears Tower", "Empire State Building and Chrysler Building", "Empire State Building and World Trade Center"],
    correctAnswer: 2,
    category: "Science & Technology",
    difficulty: "hard"
  },
  {
    id: 463,
    question: "On which island is the oldest European settlement in the Americas located?",
    options: ["Newfoundland", "Cuba", "Puerto Rico", "Hispaniola"],
    correctAnswer: 0,
    category: "Geography & Nature",
    difficulty: "medium"
  },
  {
    id: 464,
    question: "Who won an Oscar for Best Actor portraying Canadian captain Charlie Allnut?",
    options: ["Paul Newman", "Marlon Brando", "Gregory Peck", "Humphrey Bogart"],
    correctAnswer: 3,
    category: "TV & Cinema",
    difficulty: "medium"
  },
  {
    id: 465,
    question: "Built from oak timbers of HMS Resolute, the 1,300‑lb 'Resolute Desk' is the centerpiece in which room?",
    options: ["Oval Office", "Cabinet Room", "Situation Room", "Roosevelt Room"],
    correctAnswer: 0,
    category: "History & Politics",
    difficulty: "medium"
  },
  {
    id: 466,
    question: "Which 2011 Hollywood movie begins with a black screen and a foreboding cough?",
    options: ["Contagion", "28 Weeks Later", "I Am Legend", "The Tree of Life"],
    correctAnswer: 0,
    category: "TV & Cinema",
    difficulty: "medium"
  },
  {
    id: 467,
    question: "Between 1952 and 1955, La Plata, Argentina was renamed after whom?",
    options: ["Juan Peron", "Che Guevara", "Jorge Newbery", "Eva Peron"],
    correctAnswer: 3,
    category: "History & Politics",
    difficulty: "medium"
  },
  {
    id: 468,
    question: "Which country singer and member of The Highwaymen gave up his seat to the Big Bopper on the ill-fated flight that killed Ritchie Valens, the Big Bopper, and Buddy Holly?",
    options: ["Willie Nelson", "Waylon Jennings", "Kris Kristofferson", "Johnny Cash"],
    correctAnswer: 1,
    category: "Music",
    difficulty: "medium"
  },
  {
    id: 469,
    question: "Which city in India is nicknamed \"City of Joy\"?",
    options: ["Mumbai", "Delhi", "Kolkata", "Chennai"],
    correctAnswer: 2,
    category: "Geography & Nature",
    difficulty: "medium"
  },
  {
    id: 470,
    question: "Which other character was Peter Sellers supposed to play in the film Dr. Strangelove?",
    options: ["General Turgidson", "Major Kong", "President Muffley", "Dr. Strangelove"],
    correctAnswer: 1,
    category: "TV & Cinema",
    difficulty: "medium"
  },
  {
    id: 471,
    question: "An exhausting event and the Ancient Greek name for fennel. One word.",
    options: ["Decathlon", "Pentathlon", "Marathon", "Triathlon"],
    correctAnswer: 2,
    category: "Sports",
    difficulty: "medium"
  },
  {
    id: 472,
    question: "Which member of The Animals managed both Slade and Jimi Hendrix?",
    options: ["Eric Burdon", "Chas Chandler", "Alan Price", "John Steel"],
    correctAnswer: 1,
    category: "Music",
    difficulty: "medium"
  },
  {
    id: 473,
    question: "Which 1990 novelty song, co-written by Michael Jackson and sung by Nancy Cartwright, reached number one in the UK, Ireland, Australia, New Zealand and Norway?",
    options: ["Mickey Mouse Groove", "Do The Bartman", "The Fox Dance", "Ice Ice Baby"],
    correctAnswer: 1,
    category: "Music",
    difficulty: "medium"
  },
  {
    id: 474,
    question: "What is the only South American country in which English is the official language?",
    options: ["Guyana", "Suriname", "Brazil", "Venezuela"],
    correctAnswer: 0,
    category: "Geography & Nature",
    difficulty: "medium"
  },
  {
    id: 475,
    question: "Which sturdy breed of cat is considered to be the 'national cat of France'?",
    options: ["Persian", "Siamese", "Maine Coon", "Chartreux"],
    correctAnswer: 3,
    category: "Geography & Nature",
    difficulty: "medium"
  },
  {
    id: 476,
    question: "Oscar-winning Best Director James Cameron was once married to which Oscar-winning Best Director?",
    options: ["Greta Gerwig", "Sofia Coppola", "Kathryn Bigelow", "Barbra Streisand"],
    correctAnswer: 2,
    category: "TV & Cinema",
    difficulty: "medium"
  },
  {
    id: 477,
    question: "What did President George H. W. Bush ban from the White House in the spring of 1990?",
    options: ["Red meat", "Soft drinks", "Broccoli", "Coffee"],
    correctAnswer: 2,
    category: "History & Politics",
    difficulty: "easy"
  },
  {
    id: 478,
    question: "Die Hard 4 (Live Free or Die Hard) takes place over which holiday?",
    options: ["New Year's Eve", "Christmas Eve", "Thanksgiving", "Independence Day"],
    correctAnswer: 3,
    category: "TV & Cinema",
    difficulty: "medium"
  },
  {
    id: 479,
    question: "In the event of the death of a US president, the Vice President is first in line. Who is second?",
    options: ["The Speaker of the House", "The Secretary of State", "The Senate Majority Leader", "The Chief Justice"],
    correctAnswer: 0,
    category: "History & Politics",
    difficulty: "medium"
  },
  {
    id: 480,
    question: "Rudie van Vuuren has represented Namibia at World Cups in two different sports. Can you name the two sports?",
    options: ["Rugby and cricket", "Golf and tennis", "Soccer and basketball", "Athletics and swimming"],
    correctAnswer: 0,
    category: "Sports",
    difficulty: "hard"
  },
  {
    id: 481,
    question: "Which song did Michael Jackson originally remove then later add to the setlist at his July 16 1988 Wembley concert?",
    options: ["Smooth Criminal", "Thriller", "Billie Jean", "Dirty Diana"],
    correctAnswer: 3,
    category: "Music",
    difficulty: "hard"
  },
  {
    id: 482,
    question: "The name of which large European country translated means 'borderland'?",
    options: ["Ukraine", "Poland", "Finland", "Iceland"],
    correctAnswer: 0,
    category: "Language",
    difficulty: "medium"
  },
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