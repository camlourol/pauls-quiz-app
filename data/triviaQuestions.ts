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
    category: "Arts & Culture",
    difficulty: "medium"
  },
  {
    id: 4,
    question: "Which man with the initials F. L. W. has been described as 'the greatest American architect of all time'?",
    options: ["Francis Len Walker", "Frank Lloyd Wright", "Ford Lee Wrought", "Frank Leonard Witte"],
    correctAnswer: 1,
    category: "Arts & Culture",
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
    category: "Arts & Culture",
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
    category: "Geography & Nature",
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
    question: "What is the world's largest honey bee?",
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
    question: "O'Shea Jackson Sr. is better known as what?",
    options: [
      "50 Cent",
      "Ice Cube",
      "Dr. Dre",
      "Nas"
    ],
    correctAnswer: 1,
    category: "Arts & Culture",
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
    question: "Where might one find a \"flying buttress\"?",
    options: ["On a ship", "On a mountain", "In a zoo", "On a building"],
    correctAnswer: 3,
    category: "Arts & Culture",
    difficulty: "hard"
  },
  {
    id: 59,
    question: "The profanity or expression of surprise \"Shazbot\" stems from which planet?",
    options: ["Ork", "Vulcan", "Krypton", "Gallifrey"],
    correctAnswer: 0,
    category: "TV & Cinema",
    difficulty: "hard"
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
    question: "What is a word denoting a Native American people, a helicopter and a wind?",
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
    question: "The following epitaph belongs to which legendary leader? 'A tomb now suffices him for whom the whole world was not sufficient'",
    options: ["Julius Caesar", "Alexander the Great", "Winston Churchill", "F. D. Roosevelt"],
    correctAnswer: 1,
    category: "History & Politics",
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
    category: "Arts & Culture",
    difficulty: "easy"
  },
  {
    id: 80,
    question: "In which year did the Berlin Wall fall?",
    options: ["1987", "1988", "1989", "1990"],
    correctAnswer: 2,
    category: "History & Politics",
    difficulty: "easy"
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
    difficulty: "easy"
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
    question: "What is miso?",
    options: ["Seaweed paste", "Soybean paste", "Sesame paste", "Fish paste"],
    correctAnswer: 1,
    category: "Arts & Culture",
    difficulty: "easy"
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
    difficulty: "easy"
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
    category: "Arts & Culture",
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
    category: "Arts & Culture",
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
    category: "Arts & Culture",
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
    category: "Arts & Culture",
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
    category: "Arts & Culture",
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
    difficulty: "hard"
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
    category: "Arts & Culture",
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
    question: "In what city is James Joyce buried?",
    options: ["Dublin", "Paris", "New York City", "Zurich"],
    correctAnswer: 3,
    category: "Arts & Culture",
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
    question: "What is the collective noun for zebras?",
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
    category: "Arts & Culture",
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
    category: "Arts & Culture",
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
    category: "Arts & Culture",
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
    difficulty: "easy"
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
    category: "Arts & Culture",
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
    category: "Arts & Culture",
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
    category: "Arts & Culture",
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
    question: "What is a word denoting the Old French name given to the leader of a troop of demons on horseback and a kind of jester or clown?",
    options: ["Harlequin", "Buffoon", "Jester", "Rogue"],
    correctAnswer: 0,
    category: "Arts & Culture",
    difficulty: "medium"
  },
  {
    id: 221,
    question: "What is the name of the green tea used in a Japanese tea ceremony?",
    options: ["Bancha", "Matcha", "Gyokuro", "Sencha"],
    correctAnswer: 1,
    category: "Arts & Culture",
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
    question: "In which year was the French kind Louis XVI beheaded?",
    options: ["1792", "1789", "1794", "1776"],
    correctAnswer: 0,
    category: "History & Politics",
    difficulty: "medium"
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
    category: "Arts & Culture",
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
    difficulty: "hard"
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
    difficulty: "hard"
  },
  {
    id: 249,
    question: "The Tex Mex name for which meat dish means \"little strips\" or \"little belts\" of meat?",
    options: ["Nachos", "Tacos", "Burritos", "Fajitas"],
    correctAnswer: 3,
    category: "Arts & Culture",
    difficulty: "easy"
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
    difficulty: "easy"
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
    difficulty: "easy"
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
    category: "Arts & Culture",
    difficulty: "medium"
  },
  {
    id: 259,
    question: "What does a riddler (or a remueur) turn for a living?",
    options: ["Mills", "Spinners", "Wheels", "Champagne bottles"],
    correctAnswer: 3,
    category: "Arts & Culture",
    difficulty: "hard"
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
    category: "Arts & Culture",
    difficulty: "medium"
  },
  {
    id: 263,
    question: "After her death in 1975, which performer did many obituaries claim was once the richest black woman who ever lived?",
    options: ["Josephine Baker", "Diana Ross", "Ella Fitzgerald", "Aretha Franklin"],
    correctAnswer: 0,
    category: "Arts & Culture",
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
    question: "Which South Asian curry dish translated means \"double onions\" or \"two onions\"?",
    options: ["Bhuna", "Madras", "Dopiaza", "Vindaloo"],
    correctAnswer: 2,
    category: "Arts & Culture",
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
    category: "Arts & Culture",
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
    category: "Arts & Culture",
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
    category: "Arts & Culture",
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
    category: "Arts & Culture",
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
    category: "Arts & Culture",
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
    category: "Arts & Culture",
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
    category: "Arts & Culture",
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
    options: ["El Al", "Baruch", "Shalom", "L'Ma'an"],
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
    category: "Arts & Culture",
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
    question: "What is a word denoting the title of a song from a popular musical and a national symbol which translated means \"noble white\"?",
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
    question: "What is a word denoting an old man and a six litre bottle of wine?",
    options: ["Jeroboam", "Salmanazar", "Methuselah", "Nebuchadnezzar"],
    correctAnswer: 2,
    category: "Arts & Culture",
    difficulty: "hard"
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
    options: ["17 km/hr", "20 km/hr", "27 km/hr", "35 km/hr"],
    correctAnswer: 0,
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
    category: "Arts & Culture",
    difficulty: "easy"
  },
  {
    id: 370,
    question: "Which Jane Austen novel is a satire of the gothic novel genre?",
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
    category: "Arts & Culture",
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
    category: "Arts & Culture",
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
    difficulty: "easy"
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
    category: "Arts & Culture",
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
    question: "When 7 UP was first introduced in 1929 it was marketed as an antidepressant, which additive did it contain?",
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
    question: "In which country was \"homo floresiensis\" found?",
    options: ["Italy", "Ethiopia", "Indonesia", "China"],
    correctAnswer: 2,
    category: "Geography & Nature",
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
    question: "What is a word denoting an exhausting event and the Ancient Greek name for fennel?",
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
    {
    id: 483,
    question: "Which kind of juice does one mix with vodka, triple sec and lime to make the cocktail Cosmopolitan?",
    options: ["Cranberry", "Orange", "Pineapple", "Pomegranate"],
    correctAnswer: 0,
    category: "Arts & Culture",
    difficulty: "easy"
  },
  {
    id: 484,
    question: "Who is Sweden's 2nd biggest selling music artist after ABBA?",
    options: ["Ace of Base", "Robyn", "Roxette", "Avicii"],
    correctAnswer: 2,
    category: "Music",
    difficulty: "medium"
  },
  {
    id: 485,
    question: "What are the two largest beer companies in the world today?",
    options: ["Anheuser Busch and Heineken", "Molson Coors and Carlsberg", "Asahi and Tsingtao", "Guinness and SABMiller"],
    correctAnswer: 0,
    category: "Arts & Culture",
    difficulty: "medium"
  },
  {
    id: 486,
    question: "Before Adi Dassler broke away to form Adidas, Adi and his brother Rudolf were the owners of which shoe and sportswear company?",
    options: ["Puma", "Reebok", "New Balance", "Fila"],
    correctAnswer: 0,
    category: "History & Politics",
    difficulty: "medium"
  },
  {
    id: 487,
    question: "Which US city was once almost completely destroyed in an act of war and therefore uses the phoenix as its symbol?",
    options: ["Philadelphia", "New Orleans", "Atlanta", "Richmond"],
    correctAnswer: 2,
    category: "History & Politics",
    difficulty: "medium"
  },
  {
    id: 488,
    question: "Thule is the United States of America's most remote military outpost. Where is it located?",
    options: ["Greenland", "Alaska", "Iceland", "Hawaii"],
    correctAnswer: 0,
    category: "Geography & Nature",
    difficulty: "hard"
  },
  {
     id: 489,
    question: "Established in 1642, the oldest figure skating club in the world is found in which capital city?",
    options: ["Stockholm", "Edinburgh", "Vienna", "Copenhagen"],
    correctAnswer: 1,
    category: "Sports",
    difficulty: "hard"
  },
  {
    id: 490,
    question: "What is the only song on the Beatles album Rubber Soul with an animal in the song title?",
    options: ["Drive My Car", "Norwegian Wood (This Bird Has Flown)", "Girl", "In My Life"],
    correctAnswer: 1,
    category: "Music",
    difficulty: "medium"
  },
  {
    id: 491,
    question: "Who was the first tennis player to earn 1 million dollars?",
    options: ["Rod Laver", "John McEnroe", "Jimmy Connors", "Björn Borg"],
    correctAnswer: 0,
    category: "Sports",
    difficulty: "medium"
  },
  {
    id: 492,
    question: "Which automobile is nicknamed 'The Beast'?",
    options: ["Hummer H1", "Bugatti Chiron", "US presidential state car", "Rolls-Royce Phantom"],
    correctAnswer: 2,
    category: "History & Politics",
    difficulty: "easy"
  },
  {
    id: 493,
    question: "Which popular cocktail is named after an Italian Renaissance painter?",
    options: ["Negroni", "Rossini", "Americano", "Bellini"],
    correctAnswer: 3,
    category: "Arts & Culture",
    difficulty: "easy"
  },
  {
    id: 494,
    question: "Barajas International Airport serves which capital city?",
    options: ["Lisbon", "Rome", "Buenos Aires", "Madrid"],
    correctAnswer: 3,
    category: "Geography & Nature",
    difficulty: "easy"
  },
  {
    id: 495,
    question: "Which common everyday article of clothing was not worn in the Russian military until 2007?",
    options: ["Undershirts", "Belts", "Socks", "Boxer shorts"],
    correctAnswer: 2,
    category: "History & Politics",
    difficulty: "medium"
  },
  {
    id: 496,
    question: "The first war fought by the United States of America was against which Mediterranean city?",
    options: ["Tunis", "Alexandria", "Algiers", "Tripoli"],
    correctAnswer: 3,
    category: "History & Politics",
    difficulty: "hard"
  },
  {
    id: 497,
    question: "Which famous beer is named after the river that flows through the capital city in which it was originally brewed?",
    options: ["Amstel", "Elbe", "Tiber", "Seine"],
    correctAnswer: 0,
    category: "Arts & Culture",
    difficulty: "medium"
  },
  {
    id: 498,
    question: "Gustav Graves, Kamal Khan and Renard all met their demise at the hands of which man?",
    options: ["Jason Bourne", "Jack Reacher", "Ethan Hunt", "James Bond"],
    correctAnswer: 3,
    category: "TV & Cinema",
    difficulty: "easy"
  },
  {
    id: 499,
    question: "The worst disaster in association football history is known as the Estadio Nacional disaster. In which country did this tragedy take place?",
    options: ["Peru", "Colombia", "Chile", "Brazil"],
    correctAnswer: 0,
    category: "Sports",
    difficulty: "hard"
  },
  {
    id: 500,
    question: "Saaz, Hallertau, Spalt and Tettnanger are known as the four 'Noble' what?",
    options: ["Hops", "Barleys", "Cheeses", "Grapes"],
    correctAnswer: 0,
    category: "Science & Technology",
    difficulty: "hard"
  },
  {
    id: 501,
    question: "Donald Sutherland, Sissy Spacek, Walter Matthau and others had minor roles in which famous Oscar-nominated film?",
    options: ["All the President's Men", "JFK", "The Godfather Part II", "Platoon"],
    correctAnswer: 1,
    category: "TV & Cinema",
    difficulty: "medium"
  },
  {
    id: 502,
    question: "Which mega city was once the capital of Portugal between 1808 and 1815?",
    options: ["Luanda", "Macau", "São Paulo", "Rio de Janeiro"],
    correctAnswer: 3,
    category: "History & Politics",
    difficulty: "hard"
  },
  {
    id: 503,
    question: "Leda, a Spartan Queen in Greek mythology, is often depicted with which kind of bird in Renaissance paintings?",
    options: ["Peacock", "Swan", "Eagle", "Dove"],
    correctAnswer: 1,
    category: "Arts & Culture",
    difficulty: "medium"
  },
  {
    id: 504,
    question: "Which iconic landmark was the longest suspension bridge in the world from 1883 until 1903?",
    options: ["Tower Bridge", "Brooklyn Bridge", "Golden Gate Bridge", "London Bridge"],
    correctAnswer: 1,
    category: "Geography & Nature",
    difficulty: "medium"
  },
  {
    id: 505,
    question: "\"On every street in every city there's a nobody who dreams of being a somebody\" was a movie poster tag line for which disturbing 1976 film set in New York City?",
    options: ["Taxi Driver", "Dog Day Afternoon", "Midnight Cowboy", "Raging Bull"],
    correctAnswer: 0,
    category: "TV & Cinema",
    difficulty: "medium"
  },
  {
    id: 506,
    question: "The 75 stone steps at the end of M Street, Georgetown play a deadly role in which film?",
    options: ["The Exorcist", "The Omen", "The Shining", "The Silence of the Lambs"],
    correctAnswer: 0,
    category: "TV & Cinema",
    difficulty: "medium"
  },
  {
    id: 507,
    question: "Cryobiology is the study of life under what kind of conditions?",
    options: ["High pressure", "Low temperatures", "High radiation", "Low oxygen"],
    correctAnswer: 1,
    category: "Science & Technology",
    difficulty: "medium"
  },
  {
    id: 508,
    question: "What was the first animated series to have a prime time slot on US television?",
    options: ["The Jetsons", "The Flintstones", "Looney Tunes", "Scooby-Doo"],
    correctAnswer: 1,
    category: "TV & Cinema",
    difficulty: "easy"
  },
  {
    id: 509,
    question: "Aldebaran, Rigel, Altair and Antares draw which film hero to victory?",
    options: ["Ben Hur", "Alexander", "Spartacus", "Hercules"],
    correctAnswer: 0,
    category: "TV & Cinema",
    difficulty: "hard"
  },
  {
    id: 510,
    question: "What kind of celestial body was a chart topping album for Deep Purple?",
    options: ["Fireball", "Supernova", "Black Hole", "Meteorite"],
    correctAnswer: 0,
    category: "Music",
    difficulty: "medium"
  },
  {
    id: 511,
    question: "Which carbonated beverage takes its name from the medical word for indigestion?",
    options: ["Pepsi", "Sprite", "Dr Pepper", "7 Up"],
    correctAnswer: 0,
    category: "Science & Technology",
    difficulty: "easy"
  },
  {
    id: 512,
    question: "In which controversial film is the aversion therapy known as the Ludovico technique used on the central character?",
    options: ["A Clockwork Orange", "Brazil", "Requiem for a Dream", "Trainspotting"],
    correctAnswer: 0,
    category: "TV & Cinema",
    difficulty: "medium"
  },
  {
    id: 513,
    question: "Which man, the only winner of both an Academy Award and a Nobel Prize for Literature, once said of Shakespeare: \"it would be a relief to dig him up and throw stones at him\"?",
    options: ["George Bernard Shaw", "Bob Dylan", "Harold Pinter", "Winston Churchill"],
    correctAnswer: 0,
    category: "Literature",
    difficulty: "hard"
  },
  {
    id: 514,
    question: "Which popular 'ball' game was banned in New York City from 1942 until 1976?",
    options: ["Pinball", "Handball", "Paintball", "Kickball"],
    correctAnswer: 0,
    category: "History & Politics",
    difficulty: "medium"
  },
  {
    id: 515,
    question: "Which T.P. was 20th Century Fox's biggest movie star in the late 1930s?",
    options: ["Tyrone Power", "Tony Perkins", "Trevor Paglen", "Timothy Price"],
    correctAnswer: 0,
    category: "TV & Cinema",
    difficulty: "hard"
  },
  {
    id: 516,
    question: "Which tint of blue is named after a famous beach and tourist attraction in the southern hemisphere?",
    options: ["Bondi Blue", "Byron Blue", "Copacabana Blue", "Surfers Blue"],
    correctAnswer: 0,
    category: "Arts & Culture",
    difficulty: "medium"
  },
  {
    id: 517,
    question: "Which southpaw was nicknamed 'the Rockhampton Rocket'?",
    options: ["Rod Laver", "Ken Rosewall", "Rafael Nadal", "John Newcombe"],
    correctAnswer: 0,
    category: "Sports",
    difficulty: "medium"
  },
  {
    id: 518,
    question: "Mount Olympus is the highest point in which two EU countries?",
    options: ["Greece and Cyprus", "Greece and Bulgaria", "Cyprus and Malta", "Greece and Romania"],
    correctAnswer: 0,
    category: "Geography & Nature",
    difficulty: "hard"
  },
  {
    id: 519,
    question: "Who painted the Virgin of the Rocks, also known as Madonna of the Rocks?",
    options: ["Leonardo da Vinci", "Caravaggio", "Botticelli", "Raphael"],
    correctAnswer: 0,
    category: "Arts & Culture",
    difficulty: "medium"
  },
    {
    id: 520,
    question: "TOR is a software that enables anonymous communication. What does the acronym T O R stand for?",
    options: ["Trusted Online Relay", "The Onion Router", "Tactical Obfuscation Router", "Transfer Over Relay"],
    correctAnswer: 1,
    category: "Science & Technology",
    difficulty: "medium"
  },
  {
    id: 521,
    question: "Marcelo Rios was the only tennis player from which country to reach number one in the ATP rankings?",
    options: ["Argentina", "Colombia", "Chile", "Uruguay"],
    correctAnswer: 2,
    category: "Sports",
    difficulty: "medium"
  },
  {
    id: 522,
    question: "\"With Wings on their heels and Hope in their hearts\" was a movie poster tag line for which critically acclaimed film?",
    options: ["Chariots of Fire", "The English Patient", "The Remains of the Day", "Gandhi"],
    correctAnswer: 0,
    category: "TV & Cinema",
    difficulty: "medium"
  },
  {
    id: 523,
    question: "Which haunting instrumental was played by the Apollo 10 astronauts as they circled the moon in 1969 and was the first single by a British musician to reach number one in the US?",
    options: ["Stranger On The Shore", "Albatross", "Apache", "Telstar"],
    correctAnswer: 0,
    category: "Music",
    difficulty: "hard"
  },
  {
    id: 524,
    question: "Which writer, with a maritime expression for a pen name, once said: \"There is no distinctly American criminal class except Congress\"?",
    options: ["Mark Twain", "Nathaniel Hawthorne", "O. Henry", "Ambrose Bierce"],
    correctAnswer: 0,
    category: "Literature",
    difficulty: "medium"
  },
  {
    id: 525,
    question: "Which American soul singer and former girlfriend of Marc Bolan had a hit with the song Tainted Love in 1964?",
    options: ["Etta James", "Gloria Jones", "Aretha Franklin", "Martha Reeves"],
    correctAnswer: 1,
    category: "Music",
    difficulty: "hard"
  },
  {
    id: 526,
    question: "Canadian Dr James Naismith is credited with the creation of which popular sport?",
    options: ["Basketball", "Lacrosse", "Ice Hockey", "Baseball"],
    correctAnswer: 0,
    category: "Sports",
    difficulty: "easy"
  },
  {
    id: 527,
    question: "The name of which famous diamond translated means 'mountain of light'?",
    options: ["Koh-I-Nor", "Hope Diamond", "Cullinan", "Orlov"],
    correctAnswer: 0,
    category: "Arts & Culture",
    difficulty: "medium"
  },
  {
    id: 528,
    question: "Which film character has been portrayed by both Keanu Reeves and Michael Rennie?",
    options: ["Klaatu", "Neo", "John Constantine", "Julian"],
    correctAnswer: 0,
    category: "TV & Cinema",
    difficulty: "medium"
  },
  {
    id: 529,
    question: "Which evil character was born near the Caspian Sea in 1005 BC and died in New York City in 1985 AD?",
    options: ["Kurgan", "Ra's al Ghul", "Sauron", "Dracula"],
    correctAnswer: 0,
    category: "TV & Cinema",
    difficulty: "hard"
  },
  {
    id: 530,
    question: "Which 1982 John Carpenter film has an all male cast?",
    options: ["The Thing", "Escape from New York", "They Live", "Prince of Darkness"],
    correctAnswer: 0,
    category: "TV & Cinema",
    difficulty: "medium"
  },
  {
    id: 531,
    question: "What was the Hoover Dam called from 1933 until April 30, 1947?",
    options: ["Roosevelt Dam", "Boulder Dam", "Colorado Dam", "Nevada Dam"],
    correctAnswer: 1,
    category: "History & Politics",
    difficulty: "medium"
  },
  {
    id: 532,
    question: "Irenology takes its name from the Greek goddess Eirene. What is irenology the study of?",
    options: ["Peace", "Justice", "War", "Compassion"],
    correctAnswer: 0,
    category: "Language",
    difficulty: "hard"
  },
  {
    id: 533,
    question: "Which European capital was bombed by the Luftwaffe in April 1941, the RAF and USAF in April 1944, and NATO in May 1999?",
    options: ["Belgrade", "Sarajevo", "Berlin", "Skopje"],
    correctAnswer: 0,
    category: "History & Politics",
    difficulty: "hard"
  },
  {
    id: 534,
    question: "The term Grand Poohbah stems from which 1885 comic opera?",
    options: ["The Mikado", "H.M.S. Pinafore", "The Pirates of Penzance", "Iolanthe"],
    correctAnswer: 0,
    category: "Arts & Culture",
    difficulty: "medium"
  },
  {
    id: 535,
    question: "Soju is the most popular alcoholic beverage in which country?",
    options: ["South Korea", "Japan", "China", "Vietnam"],
    correctAnswer: 0,
    category: "Arts & Culture",
    difficulty: "easy"
  },
  {
    id: 536,
    question: "With eight words, what is the longest James Bond theme song title?",
    options: ["We Have All The Time In The World", "Tomorrow Never Dies", "The World Is Not Enough", "You Know My Name"],
    correctAnswer: 0,
    category: "Music",
    difficulty: "medium"
  },
  {
    id: 537,
    question: "The Millennium Prize, worth one million US dollars, is awarded to anyone who can solve specific problems in which field?",
    options: ["Mathematics", "Economics", "Astronomy", "Engineering"],
    correctAnswer: 0,
    category: "Science & Technology",
    difficulty: "easy"
  },
  {
    id: 538,
    question: "Queen Scheherazade is the story teller and narrator of what?",
    options: ["One Thousand And One Nights", "The Arabian Nights", "The Epic of Gilgamesh", "The Book of Kings"],
    correctAnswer: 0,
    category: "Literature",
    difficulty: "medium"
  },
   {
    id: 539,
    question: "What is the largest species of dolphin?",
    options: ["Orca Whale", "Bottlenose Dolphin", "Risso's Dolphin", "Spinner Dolphin"],
    correctAnswer: 0,
    category: "Science & Technology",
    difficulty: "easy"
  },
  {
    id: 540,
    question: "The capital of a British Dominion until 1949, which city is considered by many to be the oldest English-founded city in North America?",
    options: ["St John's", "Halifax", "Charlottetown", "Boston"],
    correctAnswer: 0,
    category: "History & Politics",
    difficulty: "medium"
  },
  {
    id: 541,
    question: "What kind of 'drive' does one associate with Zefram Cochrane?",
    options: ["Impulse Drive", "Hyperdrive", "Warp Drive", "Quantum Slipstream"],
    correctAnswer: 2,
    category: "TV & Cinema",
    difficulty: "medium"
  },
  {
    id: 542,
    question: "Which British musician had a guest role playing a deranged FBI agent in Twin Peaks?",
    options: ["David Bowie", "Mick Jagger", "Peter Gabriel", "Elton John"],
    correctAnswer: 0,
    category: "TV & Cinema",
    difficulty: "medium"
  },
  {
    id: 543,
    question: "American pathologist Thomas Harvey stole which man's brain on April 18, 1955?",
    options: ["Albert Einstein", "Nikola Tesla", "Sigmund Freud", "Thomas Edison"],
    correctAnswer: 0,
    category: "History & Politics",
    difficulty: "medium"
  },
  {
    id: 544,
    question: "The movie poster tag line for which controversial 1979 film was 'So funny it was banned in Norway'?",
    options: ["Monty Python's Life Of Brian", "A Clockwork Orange", "Caligula", "The Last Temptation of Christ"],
    correctAnswer: 0,
    category: "TV & Cinema",
    difficulty: "easy"
  },
  {
    id: 545,
    question: "Which very fragrant and colourful spring flower is named after a beautiful young man in Greek mythology who was murdered by the jealous west wind god Zephyrus?",
    options: ["Hyacinth", "Narcissus", "Crocus", "Anemone"],
    correctAnswer: 0,
    category: "Arts & Culture",
    difficulty: "medium"
  },
  {
    id: 546,
    question: "Which two capital cities are found either side of the River Plate (Rio de la Plata)?",
    options: ["Buenos Aires and Montevideo", "Asunción and Brasília", "Santiago and Montevideo", "Buenos Aires and Lima"],
    correctAnswer: 0,
    category: "Geography & Nature",
    difficulty: "medium"
  },
  {
    id: 547,
    question: "Which year was a hit song for Paul McCartney and Wings in 1974?",
    options: ["Nineteen Hundred and Eighty Five", "Nineteen Hundred and Eighty Four", "Nineteen Seventy Five", "Nineteen Hundred and Eighty"],
    correctAnswer: 0,
    category: "Music",
    difficulty: "medium"
  },
  {
    id: 548,
    question: "The name of which national airline is derived from the Arabic word for 'union'?",
    options: ["Etihad", "Qatar Airways", "Emirates", "Saudia"],
    correctAnswer: 0,
    category: "Language",
    difficulty: "medium"
  },
  {
    id: 549,
    question: "Plus or minus 25, how many Popes have there been?",
    options: ["266", "198", "301", "325"],
    correctAnswer: 0,
    category: "History & Politics",
    difficulty: "medium"
  },
  {
    id: 550,
    question: "Which book and film ends with the words 'The old man was dreaming about the lions.'?",
    options: ["The Old Man And The Sea", "The Road", "The Great Gatsby", "Of Mice and Men"],
    correctAnswer: 0,
    category: "Literature",
    difficulty: "medium"
  },
  {
    id: 551,
    question: "Which world record did Bob Beamon break at the 1968 Summer Olympic Games and continue to hold for the next 23 years?",
    options: ["Long jump", "High jump", "Triple jump", "Pole vault"],
    correctAnswer: 0,
    category: "Sports",
    difficulty: "medium"
  },
  {
    id: 552,
    question: "In which city was Mahatma Gandhi murdered?",
    options: ["New Delhi", "Mumbai", "Amritsar", "Ahmedabad"],
    correctAnswer: 0,
    category: "History & Politics",
    difficulty: "easy"
  },
  {
    id: 553,
    question: "In which city was Martin Luther King murdered?",
    options: ["Memphis", "Atlanta", "Washington D.C.", "Birmingham"],
    correctAnswer: 0,
    category: "History & Politics",
    difficulty: "easy"
  },
  {
    id: 554,
    question: "In which city was Leon Trotsky murdered?",
    options: ["Mexico City", "St. Petersburg", "Paris", "Havana"],
    correctAnswer: 0,
    category: "History & Politics",
    difficulty: "medium"
  },
  {
    id: 555,
    question: "In which city was Archduke Franz Ferdinand murdered?",
    options: ["Sarajevo", "Vienna", "Berlin", "Prague"],
    correctAnswer: 0,
    category: "History & Politics",
    difficulty: "easy"
  },
   {
    id: 556,
    question: "Who was the first female American astronaut?",
    options: ["Mae Jemison", "Sally Ride", "Valentina Tereshkova", "Judith Resnik"],
    correctAnswer: 1,
    category: "Science & Technology",
    difficulty: "medium"
  },
  {
    id: 557,
    question: "Which shipwreck did Robert Ballard find in 1989, four years after discovering the Titanic?",
    options: ["Bismarck", "Andrea Doria", "Lusitania", "Britannic"],
    correctAnswer: 0,
    category: "History & Politics",
    difficulty: "medium"
  },
  {
    id: 558,
    question: "The 'Wiki' in Wikipedia stems from the Hawaiian 'wikiwiki'. What does it mean?",
    options: ["Fast", "Free", "Together", "Knowledge"],
    correctAnswer: 0,
    category: "Language",
    difficulty: "easy"
  },
  {
    id: 559,
    question: "Which large intimidating man was a number 1 hit song in the US (number 2 in the UK) for Jimmy Dean?",
    options: ["Big Bad John", "Johnny B. Goode", "Bad Leroy Brown", "The Gambler"],
    correctAnswer: 0,
    category: "Music",
    difficulty: "medium"
  },
  {
    id: 560,
    question: "Which hit song by The Searchers begins with the words 'I took my troubles down to Madame Rue'?",
    options: ["Needles and Pins", "Love Potion Number 9", "When You Walk in the Room", "Don't Throw Your Love Away"],
    correctAnswer: 1,
    category: "Music",
    difficulty: "medium"
  },
  {
    id: 561,
    question: "In which controversial film does the narrator speak in a slang called Nadsat?",
    options: ["A Clockwork Orange", "Trainspotting", "Requiem for a Dream", "Fight Club"],
    correctAnswer: 0,
    category: "TV & Cinema",
    difficulty: "medium"
  },
  {
    id: 562,
    question: "In which film does Acheron surprise Surprise?",
    options: ["Master and Commander", "Pirates of the Caribbean", "Das Boot", "The Hunt for Red October"],
    correctAnswer: 0,
    category: "TV & Cinema",
    difficulty: "hard"
  },
  {
    id: 563,
    question: "What is the name of the Kingston ghetto in which Bob Marley was raised?",
    options: ["Trenchtown", "Riverton", "Jungle", "Tivoli"],
    correctAnswer: 0,
    category: "Geography & Nature",
    difficulty: "easy"
  },
  {
    id: 564,
    question: "Which English band, sometimes referred to as the 'godfathers of goth rock', shares its name with a 20th century architectural style?",
    options: ["Brutalist", "Art Deco", "Bauhaus", "Gothic"],
    correctAnswer: 2,
    category: "Music",
    difficulty: "medium"
  },
  {
    id: 565,
    question: "The Drake Passage is a body of water between which two continents?",
    options: ["South America and Antarctica", "Africa and South America", "Australia and Asia", "North America and Europe"],
    correctAnswer: 0,
    category: "Geography & Nature",
    difficulty: "easy"
  },
   {
    id: 566,
    question: "Which spice is needed to create a Risotto alla Milanese?",
    options: ["Saffron", "Cinnamon", "Paprika", "Nutmeg"],
    correctAnswer: 0,
    category: "Arts & Culture",
    difficulty: "medium"
  },
  {
    id: 567,
    question: "What are Trent 900's?",
    options: ["Turbofan aircraft engines", "Naval sonar systems", "Bullet train models", "Automobile tyres"],
    correctAnswer: 0,
    category: "Science & Technology",
    difficulty: "hard"
  },
  {
    id: 568,
    question: "What is Abyssinia called today?",
    options: ["Ethiopia", "Somalia", "Libya", "Eritrea"],
    correctAnswer: 0,
    category: "History & Politics",
    difficulty: "easy"
  },
  {
    id: 569,
    question: "Charles Conrad Jr. was the third to do what?",
    options: ["Walk on the moon", "Summit Mount Everest", "Win a Nobel Prize in Physics", "Orbit Earth solo"],
    correctAnswer: 0,
    category: "Science & Technology",
    difficulty: "medium"
  },
  {
    id: 570,
    question: "The name of which prized flower stems from the Greek word for 'testicle'?",
    options: ["Orchid", "Lily", "Rose", "Tulip"],
    correctAnswer: 0,
    category: "Language",
    difficulty: "medium"
  },
  {
    id: 571,
    question: "Which 2010 film ends with the words 'You're not an asshole Mark. You're just trying so hard to be.'?",
    options: ["The Social Network", "The Big Short", "Moneyball", "Steve Jobs"],
    correctAnswer: 0,
    category: "TV & Cinema",
    difficulty: "medium"
  },
  {
    id: 572,
    question: "The three-letter name for which music genre invokes the sound made by the guitar?",
    options: ["Ska", "Rap", "Emo", "Pop"],
    correctAnswer: 0,
    category: "Music",
    difficulty: "easy"
  },
  {
    id: 573,
    question: "Which two ingredients are used to make the tasty rich mixture known as 'Ganache'?",
    options: ["Cream and chocolate", "Eggs and butter", "Milk and sugar", "Flour and cocoa"],
    correctAnswer: 0,
    category: "Arts & Culture",
    difficulty: "easy"
  },
  {
    id: 574,
    question: "Plus or minus 1.77 billion years, how old is the universe?",
    options: ["13.77 billion years", "9.77 billion years", "15.77 billion years", "11.77 billion years"],
    correctAnswer: 0,
    category: "Science & Technology",
    difficulty: "hard"
  },
  {
    id: 575,
    question: "Which 1980 black and white film was nominated for eight Academy Awards?",
    options: ["Raging Bull", "The Elephant Man", "Manhattan", "Paper Moon"],
    correctAnswer: 0,
    category: "TV & Cinema",
    difficulty: "medium"
  },
  {
    id: 576,
    question: "The singing group I Three (or I Threes) were backing vocalists for which band?",
    options: ["Bob Marley and The Wailers", "Toots and the Maytals", "The Specials", "Steel Pulse"],
    correctAnswer: 0,
    category: "Music",
    difficulty: "medium"
  },
  {
    id: 577,
    question: "In which country is the 3,000 km long Kunlun mountain chain?",
    options: ["China", "India", "Pakistan", "Nepal"],
    correctAnswer: 0,
    category: "Geography & Nature",
    difficulty: "medium"
  },
  {
    id: 578,
    question: "Measured in total length, which country has the longest system of canals?",
    options: ["China", "Netherlands", "India", "USA"],
    correctAnswer: 0,
    category: "Geography & Nature",
    difficulty: "medium"
  },
  {
    id: 579,
    question: "The flag of Monaco is identical to the flag of which large Asian country?",
    options: ["Indonesia", "Malaysia", "Vietnam", "Thailand"],
    correctAnswer: 0,
    category: "Geography & Nature",
    difficulty: "medium"
  },
  {
    id: 580,
    question: "Gherman S Titov was the second person to do what?",
    options: ["Orbit the Earth", "Walk in space", "Land on the moon", "Travel beyond Earth's orbit"],
    correctAnswer: 0,
    category: "Science & Technology",
    difficulty: "medium"
  },
  {
    id: 581,
    question: "Which music icon played the alien in the 1976 film 'The Man Who Fell To Earth'?",
    options: ["David Bowie", "Iggy Pop", "Lou Reed", "Mick Jagger"],
    correctAnswer: 0,
    category: "TV & Cinema",
    difficulty: "easy"
  },
  {
    id: 582,
    question: "Capt. John Yossarian is the protagonist in which cult novel?",
    options: ["Catch-22", "Slaughterhouse-Five", "Infinite Jest", "The Naked and the Dead"],
    correctAnswer: 0,
    category: "Literature",
    difficulty: "medium"
  },
  {
    id: 583,
    question: "The name of which art movement stems from a French word that evokes the ornamental use of rock and shell?",
    options: ["Rococo", "Baroque", "Impressionism", "Art Nouveau"],
    correctAnswer: 0,
    category: "Arts & Culture",
    difficulty: "medium"
  },
  {
    id: 584,
    question: "The name for which particle stems from a Greek word meaning 'indivisible'?",
    options: ["Atom", "Proton", "Electron", "Quark"],
    correctAnswer: 0,
    category: "Language",
    difficulty: "easy"
  },
  {
    id: 585,
    question: "Which capital is the most densely populated city in all of the Americas?",
    options: ["Port au Prince", "Mexico City", "São Paulo", "Lima"],
    correctAnswer: 0,
    category: "Geography & Nature",
    difficulty: "hard"
  },
  {
    id: 586,
    question: "Which country hosted the first official FIFA Women's World Cup in 1991?",
    options: ["China", "USA", "Germany", "Sweden"],
    correctAnswer: 0,
    category: "Sports",
    difficulty: "medium"
  },
  {
    id: 587,
    question: "The villain Max Eisenhardt is better known as what?",
    options: ["Magneto", "Doctor Doom", "Red Skull", "Professor X"],
    correctAnswer: 0,
    category: "TV & Cinema",
    difficulty: "easy"
  },
  {
    id: 588,
    question: "Which female tennis icon won a record seven French Open singles titles?",
    options: ["Chris Evert", "Martina Navratilova", "Steffi Graf", "Serena Williams"],
    correctAnswer: 0,
    category: "Sports",
    difficulty: "medium"
  },
  {
    id: 589,
    question: "Clare Quilty is an unsavoury character in which controversial novel and film?",
    options: ["Lolita", "American Psycho", "A Clockwork Orange", "The Reader"],
    correctAnswer: 0,
    category: "Literature",
    difficulty: "medium"
  },
  {
    id: 590,
    question: "The gigantic tentacular cosmic entity known as Cthulhu is a product of which horror fiction writer's imagination?",
    options: ["H.P. Lovecraft", "Stephen King", "Edgar Allan Poe", "Clive Barker"],
    correctAnswer: 0,
    category: "Literature",
    difficulty: "medium"
  },
  {
    id: 591,
    question: "The Falabella is one of the smallest examples of what in the world?",
    options: ["Breed of horse", "Type of cat", "Species of deer", "Dog breed"],
    correctAnswer: 0,
    category: "Geography & Nature",
    difficulty: "medium"
  },
  {
    id: 592,
    question: "What are lighting technicians called in the movie industry?",
    options: ["Gaffers", "Best boys", "Grips", "Sparks"],
    correctAnswer: 0,
    category: "TV & Cinema",
    difficulty: "easy"
  },
  {
    id: 593,
    question: "Which World Champion was teenage supermodel Naomi Campbell dating in 1987?",
    options: ["Mike Tyson", "Evander Holyfield", "Sugar Ray Leonard", "Lennox Lewis"],
    correctAnswer: 0,
    category: "History & Politics",
    difficulty: "medium"
  },
  {
    id: 594,
    question: "Meaning 'Old Peak' when translated, what is the name of the 'lost city of the Inca's' discovered by Hiram Bingham in 1911?",
    options: ["Machu Picchu", "Cusco", "Choquequirao", "Sacsayhuamán"],
    correctAnswer: 0,
    category: "Geography & Nature",
    difficulty: "medium"
  },
  {
    id: 595,
    question: "Which European country had a peaceful end to their dictatorship in 1974 with the 'Carnation Revolution'?",
    options: ["Portugal", "Spain", "Greece", "Hungary"],
    correctAnswer: 0,
    category: "History & Politics",
    difficulty: "medium"
  },
  {
    id: 596,
    question: "Which 1993 film, nominated for eight Academy Awards, begins with the words: 'The voice you hear is not my speaking voice, but my mind's voice. I have not spoken since I was six years old.'?",
    options: ["The Piano", "The Remains of the Day", "Philadelphia", "The Age of Innocence"],
    correctAnswer: 0,
    category: "TV & Cinema",
    difficulty: "medium"
  },
  {
    id: 597,
    question: "Which rare sperm whale byproduct is prized by perfume makers and is sometimes called 'floating gold'?",
    options: ["Ambergris", "Copal", "Musk", "Civet"],
    correctAnswer: 0,
    category: "Science & Technology",
    difficulty: "medium"
  },
  {
    id: 598,
    question: "The name of which sensual Brazilian dance style probably stems from the Portuguese word for 'a beating' or 'a lashing'?",
    options: ["Lambada", "Samba", "Forró", "Bossa Nova"],
    correctAnswer: 0,
    category: "Arts & Culture",
    difficulty: "medium"
  },
  {
  id: 599,
  question: "Who is the owner of a pet cat by the name of Crookshanks?",
  options: ["Luna Lovegood", "Minerva McGonagall", "Ginny Weasley", "Hermione Granger"],
  correctAnswer: 3,
  category: "TV & Cinema",
  difficulty: "medium"
},
{
  id: 600,
  question: "Who is the owner of a pet cat by the name of Mr Bigglesworth?",
  options: ["Austin Powers", "Gru", "Dr. Evil", "Lex Luthor"],
  correctAnswer: 2,
  category: "TV & Cinema",
  difficulty: "medium"
},
{
  id: 601,
  question: "Which 1975 film was the first to earn 100 million at the box office?",
  options: ["The Godfather", "Star Wars", "Rocky", "Jaws"],
  correctAnswer: 3,
  category: "TV & Cinema",
  difficulty: "medium"
},
{
  id: 602,
  question: "Which actor did Melanie Griffith marry two times?",
  options: ["Antonio Banderas", "Don Johnson", "Alec Baldwin", "Kurt Russell"],
  correctAnswer: 1,
  category: "TV & Cinema",
  difficulty: "medium"
},
{
  id: 603,
  question: "The original Wailers were a trio consisting of Bob Marley, Bunny Livingstone and which man?",
  options: ["Peter Tosh", "Toots Hibbert", "Lee Perry", "Jimmy Cliff"],
  correctAnswer: 0,
  category: "Music",
  difficulty: "medium"
},
{
  id: 604,
  question: "Laurent Blanc made history on 28 June 1998 when he became the first ever player to do what during a FIFA World Cup match?",
  options: ["Score an own goal", "Miss a penalty", "Score a 'Golden Goal'", "Receive a red card"],
  correctAnswer: 2,
  category: "Sports",
  difficulty: "medium"
},
{
  id: 605,
  question: "Buddha's footprint is said to be found near the summit of Adam's Peak. In which country is this mountain located?",
  options: ["Thailand", "Sri Lanka", "India", "Nepal"],
  correctAnswer: 1,
  category: "Geography & Nature",
  difficulty: "medium"
},
{
  id: 606,
  question: "In terms of consumption, what is the name of the most popular banana variety in the world?",
  options: ["Red banana", "Cavendish", "Lady Finger", "Plantain"],
  correctAnswer: 1,
  category: "Science & Technology",
  difficulty: "medium"
},
{
  id: 607,
  question: "A novel from Joseph Conrad and the name of the doomed spaceship in the 1979 film Alien. One word.",
  options: ["Aurora", "Sulaco", "Prometheus", "Nostromo"],
  correctAnswer: 3,
  category: "TV & Cinema",
  difficulty: "medium"
},
{
  id: 608,
  question: "Which government agency is the largest electricity consumer in the US state of Maryland?",
  options: ["Department of Defense", "CIA", "National Security Agency (NSA)", "NASA"],
  correctAnswer: 2,
  category: "History & Politics",
  difficulty: "medium"
},
{
  id: 609,
  question: "Although it has been mistaken for 'I bury Paul', at the end of which Beatles song does John say 'cranberry sauce'?",
  options: ["Glass Onion", "Tomorrow Never Knows", "Strawberry Fields Forever", "I Am the Walrus"],
  correctAnswer: 2,
  category: "Music",
  difficulty: "medium"
},
{
  id: 610,
  question: "What is the subtitle to JRR Tolkien's novel 'The Hobbit'?",
  options: ["There and Back Again", "The Battle of Five Armies", "Into the Wild", "A Journey Begins"],
  correctAnswer: 0,
  category: "Literature",
  difficulty: "medium"
},
{
  id: 611,
  question: "What are the three largest islands in the world with names beginning with the letter 'N'?",
  options: ["New Guinea, North Island, Newfoundland", "Newfoundland, New Britain, New Ireland", "New Guinea, New Zealand, New Caledonia", "North Island, New Caledonia, New Britain"],
  correctAnswer: 0,
  category: "Geography & Nature",
  difficulty: "hard"
},
{
  id: 612,
  question: "Victor Emmanuel III was the king of which country between 1900–1946?",
  options: ["Austria", "Greece", "Italy", "Spain"],
  correctAnswer: 2,
  category: "History & Politics",
  difficulty: "medium"
},
{
  id: 613,
  question: "Until September 11, 2001, the largest single loss of American civilian life in a deliberate act occurred on November 18th, 1978. In which country did this tragedy take place and what was the name of the settlement?",
  options: ["Guyana, Jonestown", "Panama, Noriega", "Honduras, Colon", "Venezuela, Ciudad Bolivar"],
  correctAnswer: 0,
  category: "History & Politics",
  difficulty: "hard"
},
{
  id: 614,
  question: "What was the name of the controversial artist responsible for 'The Wrapped Reichstag', 'The Gates' and 'The Pont Neuf Wrapped'?",
  options: ["Christo", "Ai Weiwei", "Banksy", "Damien Hirst"],
  correctAnswer: 0,
  category: "Arts & Culture",
  difficulty: "medium"
},
{
  id: 615,
  question: "Which two men with the initials S. P. have won the Academy Award for Best Actor?",
  options: ["Sean Penn and Sidney Poitier", "Simon Pegg and Sean Penn", "Sean Parker and Sidney Poitier", "Spencer Pratt and Sean Penn"],
  correctAnswer: 0,
  category: "TV & Cinema",
  difficulty: "medium"
},
{
  id: 616,
  question: "Which South American country is home to the largest Japanese population outside of Japan?",
  options: ["Brazil", "Peru", "Chile", "Argentina"],
  correctAnswer: 0,
  category: "Geography & Nature",
  difficulty: "medium"
},
{
  id: 617,
  question: "Which 1965 film comedy is dedicated to Elias Howe, the inventor of the sewing machine?",
  options: ["Help!", "Dr. Strangelove", "The Knack", "A Hard Day's Night"],
  correctAnswer: 0,
  category: "TV & Cinema",
  difficulty: "medium"
},
{
  id: 618,
  question: "The final scene in the film 2010: The Year We Make Contact depicts a single Monolith standing on which Jupiter moon?",
  options: ["Callisto", "Europa", "Ganymede", "Io"],
  correctAnswer: 1,
  category: "TV & Cinema",
  difficulty: "medium"
},
{
  id: 619,
  question: "At which FIFA World Cup was a match decided with a penalty shootout for the first time?",
  options: ["Germany 1974", "France 1998", "Spain 1982", "Mexico 1986"],
  correctAnswer: 2,
  category: "Sports",
  difficulty: "medium"
},
{
  id: 620,
  question: "The name of which popular cocktail with plenty of ice translated means 'little country girl'?",
  options: ["Mojito", "Paloma", "Margarita", "Caipirinha"],
  correctAnswer: 3,
  category: "Arts & Culture",
  difficulty: "medium"
},
{
  id: 621,
  question: "What are the oldest texts in Sanskrit literature called?",
  options: ["Vedas", "Bhagavad Gita", "Upanishads", "Puranas"],
  correctAnswer: 0,
  category: "Literature",
  difficulty: "medium"
},
{
  id: 622,
  question: "Who was the only person or band to have held the top five positions in the US Billboard Hot 100 singles charts?",
  options: ["The Beatles", "Michael Jackson", "Taylor Swift", "Elvis Presley"],
  correctAnswer: 0,
  category: "Music",
  difficulty: "medium"
},
{
  id: 623,
  question: "The following is the movie poster tag line for which film? 'Her life was in their hands. Now her toe is in the mail.'",
  options: ["The Big Lebowski", "Burn After Reading", "The Nice Guys", "Fargo"],
  correctAnswer: 0,
  category: "TV & Cinema",
  difficulty: "medium"
},
{
  id: 624,
  question: "The following is the last line to which novel? 'He drew a deep breath. \"Well, I'm back,\" he said.'",
  options: ["The Lord of the Rings", "The Silmarillion", "Harry Potter and the Deathly Hallows", "The Hobbit"],
  correctAnswer: 0,
  category: "Literature",
  difficulty: "medium"
},
{
  id: 625,
  question: "Carfax Abbey was which fictional character's home away from home?",
  options: ["Frankenstein", "Dorian Gray", "Van Helsing", "Dracula"],
  correctAnswer: 3,
  category: "Literature",
  difficulty: "medium"
},
{
  id: 626,
  question: "Which band leader was the first German to top the US music charts?",
  options: ["Klaus Meine", "Bert Kaempfert", "Hans Zimmer", "Herbert Grönemeyer"],
  correctAnswer: 1,
  category: "Music",
  difficulty: "hard"
},
{
  id: 627,
  question: "The name of which famous champion thoroughbred racehorse in the late 1920s and early 1930s stems from the Thai word for 'lightning'?",
  options: ["Secretariat", "Seabiscuit", "Man o' War", "Phar Lap"],
  correctAnswer: 3,
  category: "Sports",
  difficulty: "medium"
},
{
  id: 628,
  question: "Which highly toxic chemical compound is sometimes described as smelling like bitter almond?",
  options: ["Cyanide", "Mercury", "Ammonia", "Arsenic"],
  correctAnswer: 0,
  category: "Science & Technology",
  difficulty: "medium"
},
{
  id: 629,
  question: "'The mission is a man.' was the movie poster tag line to which epic war film?",
  options: ["Saving Private Ryan", "1917", "Platoon", "Black Hawk Down"],
  correctAnswer: 0,
  category: "TV & Cinema",
  difficulty: "medium"
},
{
  id: 630,
  question: "What is the name of the largest and longest nerve in the human body?",
  options: ["Sciatic", "Vagus", "Femoral", "Optic"],
  correctAnswer: 0,
  category: "Science & Technology",
  difficulty: "medium"
},
{
  id: 631,
  question: "Which comic book superhero who resides in Malibu is ranked number 5 on Forbes list of the richest 15 fictional characters?",
  options: ["Doctor Strange", "Mr. Fantastic", "Batman", "Iron Man (Tony Stark)"],
  correctAnswer: 3,
  category: "TV & Cinema",
  difficulty: "medium"
},
{
  id: 632,
  question: "The popular name given to which very well known 1877 piece of music is also something to eat with?",
  options: ["Chopsticks", "Spoonful", "Baguette", "Cupcake"],
  correctAnswer: 0,
  category: "Arts & Culture",
  difficulty: "easy"
},
 {
    id: 633,
    question: "The name 'Nike', of shoe company and Greek god fame, means what?",
    options: ["Glory", "Speed", "Victory", "Power"],
    correctAnswer: 2,
    category: "Language",
    difficulty: "easy"
  },
  {
    id: 634,
    question: "Built between 4,100 and 2,500 BC; quite possibly the oldest free standing structures in the world are found in which European country?",
    options: ["Italy", "Cyprus", "Greece", "Malta"],
    correctAnswer: 3,
    category: "Geography & Nature",
    difficulty: "hard"
  },
  {
    id: 635,
    question: "In a famous match race, who did War Admiral lose to on November 1, 1938?",
    options: ["Man o' War", "Seabiscuit", "Secretariat", "Phar Lap"],
    correctAnswer: 1,
    category: "Sports",
    difficulty: "medium"
  },
  {
    id: 636,
    question: "Rob Pilatus and Fab Morvan were better known as what?",
    options: ["Snap!", "Ace of Base", "Wham!", "Milli Vanilli"],
    correctAnswer: 3,
    category: "Music",
    difficulty: "medium"
  },
  {
    id: 637,
    question: "In and around which river delta did up to 500,000 people lose their lives due to a storm surge in November 1970?",
    options: ["Ganges", "Yangtze", "Amazon", "Mississippi"],
    correctAnswer: 0,
    category: "Geography & Nature",
    difficulty: "hard"
  },
  {
    id: 638,
    question: "Built in 1897, Nelson Rd. Stadium is home to which fictional London football club?",
    options: ["Crystal Palace", "West Ham United", "AFC Richmond", "Chelsea FC"],
    correctAnswer: 2,
    category: "TV & Cinema",
    difficulty: "medium"
  },
  {
    id: 639,
    question: "Who had a cameo appearance as the Corsair pirate captain in 'The Return of the King'?",
    options: ["Andy Serkis", "Elijah Wood", "Director Peter Jackson", "Ian McKellen"],
    correctAnswer: 2,
    category: "TV & Cinema",
    difficulty: "medium"
  },
  {
    id: 640,
    question: "Which group of islands were known as the Danish West Indies until they were sold in 1916?",
    options: ["Guam", "US Virgin Islands", "Bahamas", "Puerto Rico"],
    correctAnswer: 1,
    category: "Geography & Nature",
    difficulty: "medium"
  },
  {
    id: 641,
    question: "All Boys, Racing Club, Arsenal and Newell's Old Boys are all top flight football (soccer) clubs in which country?",
    options: ["Spain", "Mexico", "Brazil", "Argentina"],
    correctAnswer: 3,
    category: "Sports",
    difficulty: "medium"
  },
  {
    id: 642,
    question: "The original album cover art work from which David Bowie album was taken off the market because it depicted genitalia?",
    options: ["Heroes", "Ziggy Stardust", "Diamond Dogs", "Scary Monsters"],
    correctAnswer: 2,
    category: "Music",
    difficulty: "medium"
  },
  {
    id: 643,
    question: "What was the name of the chess playing computer that defeated reigning world champion Garry Kasparov in 1997?",
    options: ["Deep Blue", "Watson", "AlphaZero", "HAL 9000"],
    correctAnswer: 0,
    category: "Science & Technology",
    difficulty: "medium"
  },
  {
    id: 644,
    question: "Which 1985 Hollywood blockbuster and winner of seven Academy Awards was loosely based on the female central character's 1937 autobiography? 3 words",
    options: ["The African Queen", "Memoirs of a Geisha", "Out of Africa", "Born Free"],
    correctAnswer: 2,
    category: "TV & Cinema",
    difficulty: "medium"
  },
  {
    id: 645,
    question: "Which famous historical leader met his end in the Largo Argentina square?",
    options: ["Brutus", "Augustus", "Julius Caesar", "Nero"],
    correctAnswer: 2,
    category: "History & Politics",
    difficulty: "medium"
  },
  {
    id: 646,
    question: "Apollo 11 astronaut Neil Armstrong took two small pieces of which 1903 invention with him to the moon?",
    options: ["Enola Gay", "Spirit of St. Louis", "Apollo Lander", "The Wright Flyer"],
    correctAnswer: 3,
    category: "Science & Technology",
    difficulty: "medium"
  },
    {
    id: 647,
    question: "A European capital and Wellington's horse at Waterloo.",
    options: ["Oslo", "Vienna", "Brussels", "Copenhagen"],
    correctAnswer: 3,
    category: "History & Politics",
    difficulty: "medium"
  },
  {
    id: 648,
    question: "The sequence of events in which famous 1952 Hollywood western take place in so called 'real time'?",
    options: ["Stagecoach", "Shane", "High Noon", "The Searchers"],
    correctAnswer: 2,
    category: "TV & Cinema",
    difficulty: "medium"
  },
  {
    id: 649,
    question: "The Common chimpanzee is the name given to one of the two species of chimps. What is the other species of chimpanzee called?",
    options: ["Bonobo", "Orangutan", "Mandrill", "Gorilla"],
    correctAnswer: 0,
    category: "Science & Technology",
    difficulty: "medium"
  },
  {
    id: 650,
    question: "Lambic beer is a traditional brew from which country?",
    options: ["France", "Germany", "Netherlands", "Belgium"],
    correctAnswer: 3,
    category: "Geography & Nature",
    difficulty: "easy"
  },
  {
    id: 651,
    question: "Who was the lead guitarist for The Spiders From Mars?",
    options: ["Brian May", "Mick Ronson", "Keith Richards", "Ronnie Wood"],
    correctAnswer: 1,
    category: "Music",
    difficulty: "medium"
  },
  {
    id: 652,
    question: "Which cocktail combining Scotch whisky and Amaretto is named after an Oscar winning film for Best Picture?",
    options: ["Amadeus", "Godfather", "Titanic", "Casablanca"],
    correctAnswer: 1,
    category: "TV & Cinema",
    difficulty: "medium"
  },
  {
    id: 653,
    question: "Which of the modern man made wonders of the world did French painter Paul Gauguin help build?",
    options: ["Golden Gate Bridge", "Eiffel Tower", "Suez Canal", "Panama Canal"],
    correctAnswer: 3,
    category: "History & Politics",
    difficulty: "medium"
  },
  {
    id: 654,
    question: "\"A lot can happen in the middle of nowhere\" was one of the movie poster tag lines to which 1996 black comedy?",
    options: ["The Big Lebowski", "Burn After Reading", "Fargo", "No Country for Old Men"],
    correctAnswer: 2,
    category: "TV & Cinema",
    difficulty: "medium"
  },
  {
    id: 655,
    question: "What was the name of the ferry that sank in the Baltic Sea on September 28, 1994 with the loss of 852 passengers and crew?",
    options: ["MS Nordica", "MS Baltic Queen", "MS Estonia", "MS Vasa"],
    correctAnswer: 2,
    category: "History & Politics",
    difficulty: "medium"
  },
  {
    id: 656,
    question: "Which media baron who lives in an unfinished mansion named Xanadu is found in Forbes list of the 15 richest fictional characters?",
    options: ["Charles Foster Kane", "Scrooge McDuck", "Lex Luthor", "Bruce Wayne"],
    correctAnswer: 0,
    category: "TV & Cinema",
    difficulty: "medium"
  },
  {
    id: 657,
    question: "Which is Boeing's the best selling commercial jet airliner in the world?",
    options: ["777", "747", "A320", "737"],
    correctAnswer: 3,
    category: "Science & Technology",
    difficulty: "medium"
  },
  {
  id: 658,
  question: "The motto of which company is 'Because I'm Worth It'?",
  options: ["L'Oreal", "Maybelline", "Nivea", "Chanel"],
  correctAnswer: 0,
  category: "Language",
  difficulty: "easy"
},
{
  id: 659,
  question: "In which city is the Hagia Sophia located?",
  options: ["Rome", "Istanbul", "Athens", "Cairo"],
  correctAnswer: 1,
  category: "Geography & Nature",
  difficulty: "easy"
},
{
  id: 660,
  question: "In which city is La Sagrada Familia located?",
  options: ["Madrid", "Valencia", "Seville", "Barcelona"],
  correctAnswer: 3,
  category: "Geography & Nature",
  difficulty: "easy"
},
{
  id: 661,
  question: "In which city is the Taj Mahal located?",
  options: ["Varanasi", "Jaipur", "Agra", "Delhi"],
  correctAnswer: 2,
  category: "Geography & Nature",
  difficulty: "easy"
},
{
  id: 662,
  question: "In which city is the Potala Palace located?",
  options: ["Ulaanbaatar", "Beijing", "Lhasa", "Kathmandu"],
  correctAnswer: 2,
  category: "Geography & Nature",
  difficulty: "medium"
},
{
  id: 663,
  question: "Which fictional land is located in the Sea of One Thousand Islands?",
  options: ["Oz", "Wonderland", "Narnia", "Never Never Land"],
  correctAnswer: 3,
  category: "Literature",
  difficulty: "medium"
},
{
  id: 664,
  question: "The name of which Islamist group loosely translated means 'western education is a sin'?",
  options: ["Taliban", "ISIS", "Al-Shabaab", "Boko Harum"],
  correctAnswer: 3,
  category: "History & Politics",
  difficulty: "medium"
},
{
  id: 665,
  question: "Since 1985, Greenland has its own flag. Which two colours are found on the flag?",
  options: ["Green and white", "Red and white", "Red and blue", "Blue and yellow"],
  correctAnswer: 1,
  category: "Geography & Nature",
  difficulty: "medium"
},
{
  id: 666,
  question: "What do the French call a slow cooked white bean stew with meat?",
  options: ["Coq au vin", "Bouillabaisse", "Cassoulet", "Ratatouille"],
  correctAnswer: 2,
  category: "Arts & Culture",
  difficulty: "medium"
},
{
  id: 667,
  question: "Name the four Pevensie siblings in 'The Lion, the Witch and the Wardrobe'.",
  options: ["Frodo, Sam, Merry and Pippin", "Lucy, Edmund, Susan and Peter", "James, Lily, Sirius and Remus", "Jane, Michael, Wendy and John"],
  correctAnswer: 1,
  category: "Literature",
  difficulty: "easy"
},
{
  id: 668,
  question: "Theoretically, spaghettification takes place near a what?",
  options: ["Neutron star", "Black hole", "Wormhole", "Supernova"],
  correctAnswer: 1,
  category: "Science & Technology",
  difficulty: "medium"
},
{
  id: 669,
  question: "In many Slavic languages, voda is the word for what?",
  options: ["Water", "Earth", "Fire", "Air"],
  correctAnswer: 0,
  category: "Language",
  difficulty: "easy"
},
{
  id: 670,
  question: "Which sporting trophy was originally called the 'Hundred Guinea Cup'?",
  options: ["Davis Cup", "The Stanley Cup", "The Ashes", "The America's Cup"],
  correctAnswer: 3,
  category: "Sports",
  difficulty: "medium"
},
{
  id: 671,
  question: "What was the first song played on MTV?",
  options: ["Thriller", "Bohemian Rhapsody", "Video Killed The Radio Star", "Sweet Dreams"],
  correctAnswer: 2,
  category: "Music",
  difficulty: "medium"
},
{
  id: 672,
  question: "The name for which kind of friend stems from the Latin words for 'together' and 'bread'?",
  options: ["Ally", "Peer", "Companion", "Comrade"],
  correctAnswer: 2,
  category: "Language",
  difficulty: "medium"
},
{
  id: 673,
  question: "In which city is fashion house Prada headquartered?",
  options: ["Rome", "Florence", "Milan", "Paris"],
  correctAnswer: 2,
  category: "Arts & Culture",
  difficulty: "easy"
},
{
  id: 674,
  question: "In which city is fashion house Hermès headquartered?",
  options: ["Paris", "Brussels", "Lyon", "Milan"],
  correctAnswer: 0,
  category: "Arts & Culture",
  difficulty: "easy"
},
{
  id: 675,
  question: "Stu Unger, Johnny Chan, Phil Ivey, Doyle Brunson and Chip Reese all excel at which game?",
  options: ["Poker", "Bridge", "Blackjack", "Craps"],
  correctAnswer: 0,
  category: "Sports",
  difficulty: "medium"
},
{
  id: 676,
  question: "In which year were yellow tennis balls first introduced?",
  options: ["1975", "1969", "1980", "1972"],
  correctAnswer: 3,
  category: "Sports",
  difficulty: "medium"
},
{
  id: 677,
  question: "Which former world champion's autobiography is titled 'The Soul of a Butterfly'?",
  options: ["George Foreman", "Mike Tyson", "Muhammed Ali", "Joe Frazier"],
  correctAnswer: 2,
  category: "Literature",
  difficulty: "medium"
},
{
  id: 678,
  question: "Radiohead named themselves after a song from which band?",
  options: ["Talking Heads", "The Smiths", "R.E.M.", "Pixies"],
  correctAnswer: 0,
  category: "Music",
  difficulty: "medium"
},
{
  id: 679,
  question: "Which Red Sea port city is also the name of something you can drink?",
  options: ["Jaffa", "Mocha", "Suez", "Latte"],
  correctAnswer: 1,
  category: "Geography & Nature",
  difficulty: "medium"
},
{
  id: 680,
  question: "What are the names of the two flightless birds beginning with the letter 'K' found in New Zealand?",
  options: ["Kakapo and Kākā", "Kiwi and Kapapo", "Kea and Kiwi", "Kea and Kakapo"],
  correctAnswer: 1,
  category: "Geography & Nature",
  difficulty: "medium"
},
{
  id: 681,
  question: "Which diminutive singer made a cameo appearance as the 'Green Fairy' in the film Moulin Rouge?",
  options: ["Kylie Minogue", "Lady Gaga", "Cher", "Madonna"],
  correctAnswer: 0,
  category: "TV & Cinema",
  difficulty: "easy"
},
{
  id: 682,
  question: "Covered by various artists including Jeff Buckley, Willie Nelson, Bob Dylan, Bono and John Cale; who wrote the song 'Hallelujah'?",
  options: ["Bob Dylan", "Leonard Cohen", "Jeff Buckley", "Paul Simon"],
  correctAnswer: 1,
  category: "Music",
  difficulty: "easy"
},
{
  id: 683,
  question: "Which London street and neighbourhood takes its name from a type of lace collar?",
  options: ["Carnaby", "Piccadilly", "Savile Row", "Soho"],
  correctAnswer: 1,
  category: "Geography & Nature",
  difficulty: "medium"
},
{
  id: 684,
  question: "The movie poster tag line to which 2002 film was 'The True Story Of A Real Fake'?",
  options: ["Catch Me If You Can", "The Terminal", "The Aviator", "Ocean's Eleven"],
  correctAnswer: 0,
  category: "TV & Cinema",
  difficulty: "medium"
},
{
  id: 685,
  question: "Which European alphabet is named after a 9th century missionary and saint?",
  options: ["Cyrillic", "Latin", "Greek", "Runic"],
  correctAnswer: 0,
  category: "Language",
  difficulty: "medium"
},
{
  id: 686,
  question: "Who, other than the four Beatles, is pictured on the Beatles album cover Revolver?",
  options: ["Brian Epstein", "Eric Clapton", "George Martin", "Klaus Voormann"],
  correctAnswer: 3,
  category: "Music",
  difficulty: "medium"
},
{
  id: 687,
  question: "What was the estimated population of the world in 1900?",
  options: ["3 billion", "1.7 billion", "2.5 billion", "1 billion"],
  correctAnswer: 1,
  category: "History & Politics",
  difficulty: "medium"
},
{
  id: 688,
  question: "Which country has won a record 7 FIFA Beach Soccer World Cups?",
  options: ["Brazil", "Russia", "Spain", "Portugal"],
  correctAnswer: 0,
  category: "Sports",
  difficulty: "easy"
},
{
  id: 689,
  question: "Famous for his children's books, which British novelist and World War II flying ace coined the word 'Gremlin'?",
  options: ["Roald Dahl", "CS Lewis", "Enid Blyton", "JRR Tolkien"],
  correctAnswer: 0,
  category: "Literature",
  difficulty: "easy"
},
{
  id: 690,
  question: "In which year was Pac-Man first released?",
  options: ["1990", "1983", "1975", "1980"],
  correctAnswer: 3,
  category: "Science & Technology",
  difficulty: "medium"
},
{
  id: 691,
  question: "The movie poster tag line to which 2006 dystopian thriller was 'People should not be afraid of their governments. Governments should be afraid of their people'?",
  options: ["The Hunger Games", "Equilibrium", "Children of Men", "V for Vendetta"],
  correctAnswer: 3,
  category: "TV & Cinema",
  difficulty: "medium"
},
{
  id: 692,
  question: "Englishman Nigel Short excelled at which game?",
  options: ["Chess", "Cricket", "Bridge", "Snooker"],
  correctAnswer: 0,
  category: "Sports",
  difficulty: "medium"
},
{
  id: 693,
  question: "Eidetic imagery is better known as what?",
  options: ["Déjà vu", "Selective memory", "Photographic memory", "Short-term memory"],
  correctAnswer: 2,
  category: "Science & Technology",
  difficulty: "medium"
},
{
  id: 694,
  question: "Although it caused controversy in some circles, what did the World Health Organisation remove from its list of diseases in 1990?",
  options: ["Autism", "Left-handedness", "Bipolar disorder", "Homosexuality"],
  correctAnswer: 3,
  category: "History & Politics",
  difficulty: "medium"
},
{
  id: 695,
  question: "What are the two official languages in the Philippines?",
  options: ["Tagalog and Spanish", "Tagalog and Cebuano", "Spanish and English", "English and Tagalog"],
  correctAnswer: 3,
  category: "Language",
  difficulty: "easy"
},
{
  id: 696,
  question: "In which country was the so called 'Gang of Four' trial?",
  options: ["North Korea", "Vietnam", "China", "Cambodia"],
  correctAnswer: 2,
  category: "History & Politics",
  difficulty: "medium"
},
{
  id: 697,
  question: "What is the official currency in Ecuador and East Timor ?",
  options: ["Euro", "US Dollar", "Timorese Real", "Ecuadorian Peso"],
  correctAnswer: 1,
  category: "Geography & Nature",
  difficulty: "medium"
},
{
  id: 698,
  question: "In 1927 the US Post Office broke with tradition for the first time and issued a stamp in honour of a living American. Who was the world famous American man?",
  options: ["Amelia Earhart", "Thomas Edison", "Charles Lindbergh", "Henry Ford"],
  correctAnswer: 2,
  category: "History & Politics",
  difficulty: "medium"
},
{
  id: 699,
  question: "Which song on the Beatles White Album is about Mia Farrow's sister?",
  options: ["Blackbird", "Sexy Sadie", "Julia", "Dear Prudence"],
  correctAnswer: 3,
  category: "Music",
  difficulty: "medium"
},
{
  id: 700,
  question: "In which year was YouTube founded?",
  options: ["2003", "2005", "2007", "2001"],
  correctAnswer: 1,
  category: "Science & Technology",
  difficulty: "easy"
},
{
  id: 701,
  question: "The name for which controversial science stems from the Greek for 'good race'?",
  options: ["Phrenology", "Anthropology", "Eugenics", "Social Darwinism"],
  correctAnswer: 2,
  category: "Science & Technology",
  difficulty: "medium"
},
{
  id: 702,
  question: "What was the Morse code signal for victory?",
  options: ["3 dots and a dash", "3 dashes and a dot", "2 dots and 2 dashes", "4 dots"],
  correctAnswer: 0,
  category: "History & Politics",
  difficulty: "medium"
},
{
  id: 703,
  question: "Which band had a group of die-hard fans nicknamed 'Apple Scruffs'?",
  options: ["The Rolling Stones", "The Beatles", "Pink Floyd", "The Kinks"],
  correctAnswer: 1,
  category: "Music",
  difficulty: "easy"
},
{
  id: 704,
  question: "What is the name of the fictional metal alloy bonded to the skeleton of superhero Wolverine?",
  options: ["Vibranium", "Kryptonite", "Titanium X", "Adamantium"],
  correctAnswer: 3,
  category: "TV & Cinema",
  difficulty: "easy"
},
{
  id: 705,
  question: "What is the largest island in Canada?",
  options: ["Baffin Island", "Victoria Island", "Ellesmere Island", "Newfoundland"],
  correctAnswer: 0,
  category: "Geography & Nature",
  difficulty: "easy"
},
{
  id: 706,
  question: "What is the largest island in Russia?",
  options: ["Sakhalin Island", "Novaya Zemlya", "Wrangel Island", "Kuril Islands"],
  correctAnswer: 0,
  category: "Geography & Nature",
  difficulty: "medium"
},
{
  id: 707,
  question: "What colour is vermilion?",
  options: ["Red", "Purple", "Blue", "Green"],
  correctAnswer: 0,
  category: "Arts & Culture",
  difficulty: "easy"
},
{
  id: 708,
  question: "'No 5, 1948' sold for a record 140 million dollars in 2006. What is 'No 5, 1948'?",
  options: ["Sculpture", "Oil painting", "Manuscript", "Photograph"],
  correctAnswer: 1,
  category: "Arts & Culture",
  difficulty: "medium"
},
{
  id: 709,
  question: "With an estimated 1-5 vipers per sq. metre, 'Snake Island' has the highest concentration of venomous snakes in the world. Off the coast of which country is it located?",
  options: ["Brazil", "Indonesia", "Australia", "India"],
  correctAnswer: 0,
  category: "Geography & Nature",
  difficulty: "medium"
},
{
  id: 710,
  question: "Which book sold a record 11 million copies in the first 24 hours after its release on July 21, 2007?",
  options: ["Harry Potter and the Deathly Hallows", "The Da Vinci Code", "Fifty Shades of Grey", "Twilight"],
  correctAnswer: 0,
  category: "Literature",
  difficulty: "easy"
},
{
  id: 711,
  question: "The NKVD was the predecessor of what?",
  options: ["MI6", "CIA", "GRU", "KGB"],
  correctAnswer: 3,
  category: "History & Politics",
  difficulty: "medium"
},
{
  id: 712,
  question: "What did the golden apples found in the Garden of Hesperides give to those who ate them?",
  options: ["Immortality", "Wisdom", "Strength", "Wealth"],
  correctAnswer: 0,
  category: "Literature",
  difficulty: "medium"
},
{
  id: 713,
  question: "What variety of baked potato takes its name from a restaurant in Stockholm?",
  options: ["Hasselback", "Rösti", "Frittata", "Pommes Anna"],
  correctAnswer: 0,
  category: "Arts & Culture",
  difficulty: "medium"
},
{
  id: 714,
  question: "Which number one hit from Boyzone was written by Andrew Lloyd Webber?",
  options: ["No Matter What", "Words", "Love Me for a Reason", "Father and Son"],
  correctAnswer: 0,
  category: "Music",
  difficulty: "medium"
},
{
  id: 715,
  question: "In film, what is the preferred fuel or energy source used by the Transformer race?",
  options: ["Energon", "Kryptonite", "Unobtainium", "Tiberium"],
  correctAnswer: 0,
  category: "TV & Cinema",
  difficulty: "medium"
},
{
  id: 716,
  question: "Where would a North American be if he or she was spelunking?",
  options: ["In a cave", "In a forest", "Underwater", "In a mine"],
  correctAnswer: 0,
  category: "Geography & Nature",
  difficulty: "easy"
},
{
  id: 717,
  question: "In which novel and 1998 film is there an alien intelligence named Jerry?",
  options: ["Sphere", "Contact", "The Abyss", "Arrival"],
  correctAnswer: 0,
  category: "TV & Cinema",
  difficulty: "medium"
},
{
  id: 718,
  question: "Which 1971 hit song spent the first four weeks of January 1981 at the top of the UK singles charts?",
  options: ["Bohemian Rhapsody", "Let It Be", "Imagine", "Woman"],
  correctAnswer: 2,
  category: "Music",
  difficulty: "medium"
},
{
  id: 719,
  question: "'The Third Rome' is a nickname for which capital city?",
  options: ["Constantinople", "Athens", "Moscow", "Rome"],
  correctAnswer: 2,
  category: "History & Politics",
  difficulty: "medium"
},
{
  id: 720,
  question: "Which fictional character, born on the battlefield, wields the Atlantean sword?",
  options: ["Conan the Barbarian", "Thorin Oakenshield", "Red Sonja", "Elric of Melniboné"],
  correctAnswer: 0,
  category: "TV & Cinema",
  difficulty: "medium"
},
{
  id: 721,
  question: "Plus or minus 5, how many steps did Usain Bolt need to complete the 100 metres in his record time of 9.63 seconds?",
  options: ["38", "41", "46", "36"],
  correctAnswer: 1,
  category: "Sports",
  difficulty: "hard"
},
{
  id: 722,
  question: "What is a Nick and Nora?",
  options: ["A type of cocktail shaker", "A style of garnish", "A cocktail glass", "A type of bitters"],
  correctAnswer: 2,
  category: "Arts & Culture",
  difficulty: "medium"
},
{
  id: 723,
  question: "How many times did Scarlett O'Hara marry?",
  options: ["Three", "Twice", "Once", "Four"],
  correctAnswer: 0,
  category: "Literature",
  difficulty: "medium"
},
{
  id: 724,
  question: "\"He saw the world in a way no one could have imagined\" was the movie poster tagline for which biopic that won 4 Academy Awards including Best Picture?",
  options: ["A Beautiful Mind", "The Imitation Game", "Good Will Hunting", "The Theory of Everything"],
  correctAnswer: 0,
  category: "TV & Cinema",
  difficulty: "easy"
},
{
  id: 725,
  question: "Translated, which Islamic religious term means 'struggle' or 'resistance'?",
  options: ["Jihad", "Sharia", "Sunnah", "Ummah"],
  correctAnswer: 0,
  category: "Language",
  difficulty: "medium"
},
{
  id: 726,
  question: "In Kipling's 'The Jungle Book', what kind of animal is Hathi?",
  options: ["Panther", "Tiger", "Elephant", "Monkey"],
  correctAnswer: 2,
  category: "Literature",
  difficulty: "easy"
},
{
  id: 727,
  question: "Which three countries in the world have the most active volcanoes?",
  options: ["USA, Indonesia, Japan", "Indonesia, Italy, Chile", "Philippines, Japan, USA", "Japan, USA, Papua New Guinea"],
  correctAnswer: 0,
  category: "Geography & Nature",
  difficulty: "hard"
},
{
  id: 728,
  question: "Which English actor was Uma Thurman's first husband?",
  options: ["Daniel Day-Lewis", "Ralph Fiennes", "Gary Oldman", "Kenneth Branagh"],
  correctAnswer: 2,
  category: "TV & Cinema",
  difficulty: "medium"
},
{
  id: 729,
  question: "Plus or minus 2, how many bones are there in an adult human skull?",
  options: ["24", "18", "22", "26"],
  correctAnswer: 2,
  category: "Science & Technology",
  difficulty: "medium"
},
{
  id: 730,
  question: "What name was given to a liberated woman in the roaring 20's who, amongst other things, smoked, drank, wore short skirts and drove automobiles?",
  options: ["Flapper", "Bopper", "Dame", "Floozy"],
  correctAnswer: 0,
  category: "History & Politics",
  difficulty: "medium"
},
{
  id: 731,
  question: "Which Greek god responsible for causing earthquakes fathered both the Cyclops and the horse Pegasus?",
  options: ["Poseidon", "Zeus", "Ares", "Apollo"],
  correctAnswer: 0,
  category: "Arts & Culture",
  difficulty: "medium"
},
{
  id: 732,
  question: "In which country was Freddie Mercury born?",
  options: ["Zanzibar", "Kenya", "Tanzania", "India"],
  correctAnswer: 0,
  category: "Music",
  difficulty: "easy"
},
{
  id: 733,
  question: "In which country was Joe Strummer born?",
  options: ["Turkey", "USA", "Ireland", "Morocco"],
  correctAnswer: 0,
  category: "Music",
  difficulty: "medium"
},
{
  id: 734,
  question: "In which country was Engelbert Humperdinck born?",
  options: ["India", "UK", "Sri Lanka", "South Africa"],
  correctAnswer: 0,
  category: "Music",
  difficulty: "medium"
},
{
  id: 735,
  question: "In which country was Manfred Mann born?",
  options: ["South Africa", "Germany", "USA", "Netherlands"],
  correctAnswer: 0,
  category: "Music",
  difficulty: "medium"
},
{
  id: 736,
  question: "In which country was Eddie Van Halen born?",
  options: ["Netherlands", "Belgium", "USA", "Austria"],
  correctAnswer: 0,
  category: "Music",
  difficulty: "medium"
},
{
  id: 737,
  question: "Which girl is also known as Kara Zor-El?",
  options: ["Wonder Woman", "Supergirl", "Batgirl", "Captain Marvel"],
  correctAnswer: 1,
  category: "TV & Cinema",
  difficulty: "easy"
},
{
  id: 738,
  question: "Robert Haillet was the original name for which Adidas shoes?",
  options: ["Superstar", "Stan Smith", "Gazelle", "Samba"],
  correctAnswer: 1,
  category: "Arts & Culture",
  difficulty: "medium"
},
{
  id: 739,
  question: "It is said that 'Here thou art, then' were which alluring woman's last words?",
  options: ["Cleopatra", "Helen of Troy", "Marie Antoinette", "Lucrezia Borgia"],
  correctAnswer: 0,
  category: "History & Politics",
  difficulty: "medium"
},
{
  id: 740,
  question: "A large city and the name given to the flu pandemic that killed an estimated 1 million people in 1968-69.",
  options: ["Seoul", "Hong Kong", "Bangkok", "Shanghai"],
  correctAnswer: 1,
  category: "Geography & Nature",
  difficulty: "medium"
},
{
  id: 741,
  question: "Bobby Rydell High School is a focal point in which popular film?",
  options: ["Grease", "Hairspray", "Footloose", "Dirty Dancing"],
  correctAnswer: 0,
  category: "TV & Cinema",
  difficulty: "easy"
},
{
  id: 742,
  question: "What kind of 'Band' was a number one UK hit single (No. 3 in the US) in 1970?",
  options: ["Band On The Run", "Band Of Brothers", "Band Of Gold", "Wedding Band"],
  correctAnswer: 2,
  category: "Music",
  difficulty: "medium"
},
{
  id: 743,
  question: "Until recently, which company built the Mirja, the largest airplane in the world?",
  options: ["Antonov", "Airbus", "Lockheed Martin", "Boeing"],
  correctAnswer: 0,
  category: "Science & Technology",
  difficulty: "medium"
},
{
  id: 744,
  question: "In which best selling novel, first published in 2001, is there a floating carnivorous island?",
  options: ["Life Of Pi", "The Road", "Shantaram", "The Life Before Us"],
  correctAnswer: 0,
  category: "Literature",
  difficulty: "medium"
},
{
  id: 745,
  question: "Many merchant navies in the world use so called flags of convenience. Which two countries' flags are the most common?",
  options: ["Panama and Liberia", "Malta and Bahamas", "Cyprus and Belize", "Marshall Islands and Honduras"],
  correctAnswer: 0,
  category: "History & Politics",
  difficulty: "medium"
},
{
  id: 746,
  question: "What are the four countries in the world with the most Christians by total number?",
  options: ["USA, Brazil, Mexico and Russia", "Italy, Brazil, Nigeria and Spain", "USA, Nigeria, Brazil and Kenya", "Russia, Germany, Brazil and France"],
  correctAnswer: 0,
  category: "Geography & Nature",
  difficulty: "hard"
},
{
  id: 747,
  question: "The longest professional tennis match in history was an 11 hour and 5 min marathon between John Isner and Nicolas Mahut during the 2010 Wimbledon Championship. Plus or minus 10, how many games did Isner win in the 5th set to emerge victorious?",
  options: ["70", "55", "68", "62"],
  correctAnswer: 0,
  category: "Sports",
  difficulty: "hard"
},
{
  id: 748,
  question: "Gourde is the standard monetary unit in which Caribbean country?",
  options: ["Haiti", "Dominican Republic", "Jamaica", "Barbados"],
  correctAnswer: 0,
  category: "Geography & Nature",
  difficulty: "medium"
},
{
  id: 749,
  question: "What colour is the semi-precious stone Lapis Lazuli?",
  options: ["Deep blue", "Emerald green", "Golden yellow", "Violet"],
  correctAnswer: 0,
  category: "Science & Technology",
  difficulty: "easy"
},
{
  id: 750,
  question: "\"You don't get 500 million friends without making a few enemies\" was the movie poster tagline to which film?",
  options: ["The Social Network", "Wall Street", "The Big Short", "Moneyball"],
  correctAnswer: 0,
  category: "TV & Cinema",
  difficulty: "easy"
},
{
  id: 751,
  question: "Which part of the human body is also known as the cilium?",
  options: ["Eyelash", "Nail", "Tear duct", "Eyebrow"],
  correctAnswer: 0,
  category: "Science & Technology",
  difficulty: "medium"
},
{
  id: 752,
  question: "Now that the UK has left, which EU country has the longest coastline?",
  options: ["Greece", "Italy", "France", "Sweden"],
  correctAnswer: 0,
  category: "Geography & Nature",
  difficulty: "medium"
},
  {
    id: 753,
    question: "What is the official language in Andorra?",
    options: ["Spanish", "Catalan", "French", "Occitan"],
    correctAnswer: 1,
    category: "Language",
    difficulty: "easy"
  },
  {
    id: 754,
    question: 'The following lyrics are from which song with the word "Song" somewhere in the title? "We come from the land of the ice and snow, from the midnight sun where the hot springs flow"',
    options: ["Immigrant Song", "The Viking Song", "Song of the North", "Warrior's Song"],
    correctAnswer: 0,
    category: "Music",
    difficulty: "medium"
  },
  {
    id: 755,
    question: 'The following lyrics are from which song with the word "Song" somewhere in the title? "Or a man who makes potions in a travelling show"',
    options: ["Song for Guy", "Your Song", "Tiny Song", "My Funny Song"],
    correctAnswer: 1,
    category: "Music",
    difficulty: "medium"
  },
  {
    id: 756,
    question: "Meaning 'prop' or 'support', what is the NATO codename for the Russian MiG 29, 33, and 35 jet fighter?",
    options: ["Spindle", "Fulcrum", "Supporter", "Pylon"],
    correctAnswer: 1,
    category: "History & Politics",
    difficulty: "medium"
  },
  {
    id: 757,
    question: 'Name the four capital cities in the world that begin with the word "San".',
    options: [
      "San Francisco, San Pedro, San Rafael, San Benito",
      "San Jose, San Juan, San Marino, San Salvador",
      "San Antonio, San Miguel, San Mateo, San Lucas",
      "San Luis, San Sebastian, San Andres, San Felipe"
    ],
    correctAnswer: 1,
    category: "Geography & Nature",
    difficulty: "hard"
  },
  {
    id: 758,
    question: "A tight fitting form of headgear and a Crimean Peninsula town. One word.",
    options: ["Cossack", "Balaklava", "Karakul", "Beret"],
    correctAnswer: 1,
    category: "Arts & Culture",
    difficulty: "medium"
  },
  {
    id: 759,
    question: "Who were the last three Russian men to win a Grand Slam singles title in tennis?",
    options: [
      "Daniil Medvedev, Marat Safin, Yevgeny Kafelnikov",
      "Andrey Rublev, Daniil Medvedev, Nikolay Davydenko",
      "Marat Safin, Karen Khachanov, Daniil Medvedev",
      "Evgeny Kafelnikov, Daniil Medvedev, Nikolay Davydenko"
    ],
    correctAnswer: 0,
    category: "Sports",
    difficulty: "hard"
  },
  {
    id: 760,
    question: '"Same Planet. New Scum." was the movie poster tag line for which 2002 film?',
    options: ["Starship Troopers", "Galaxy Quest", "Men In Black II", "The Fifth Element"],
    correctAnswer: 2,
    category: "TV & Cinema",
    difficulty: "easy"
  },
  {
    id: 761,
    question: "Pink Floyd's 'Shine On You Crazy Diamond' was a tribute to which reclusive musician?",
    options: ["Syd Barrett", "Brian Wilson", "Jim Morrison", "David Gilmour"],
    correctAnswer: 0,
    category: "Music",
    difficulty: "medium"
  },
  {
    id: 762,
    question: "What was the longest running West End musical before it was overtaken in 1989 by Cats?",
    options: ["Fiddler on the Roof", "Jesus Christ Superstar", "My Fair Lady", "The King and I"],
    correctAnswer: 1,
    category: "Arts & Culture",
    difficulty: "easy"
  },
{
  id: 763,
  question: "Who was met by an estimated 150,000 ecstatic admirers at Le Bourget Field on Saturday, May 21, 1927?",
  options: ["Amelia Earhart", "Charles Lindbergh", "Howard Hughes", "Wiley Post"],
  correctAnswer: 1,
  category: "History & Politics",
  difficulty: "medium"
},
{
  id: 764,
  question: "Mondoshawan is an alien race and language sometimes spoken in which popular 1997 film?",
  options: ["Starship Troopers", "The Fifth Element", "Contact", "Galaxy Quest"],
  correctAnswer: 1,
  category: "TV & Cinema",
  difficulty: "medium"
},
{
  id: 765,
  question: "Rounded to the nearest 1,000 km, how long is the border between the US and Canada?",
  options: ["3,000 km", "6,000 km", "9,000 km", "12,000 km"],
  correctAnswer: 2,
  category: "Geography & Nature",
  difficulty: "easy"
},
{
  id: 766,
  question: "In which 1959 post-apocalyptic film does the nuclear submarine USS Sawfish play a role?",
  options: ["On The Beach", "The Day the Earth Stood Still", "Fail-Safe", "Dr. Strangelove"],
  correctAnswer: 0,
  category: "TV & Cinema",
  difficulty: "hard"
},
{
  id: 767,
  question: "The word \"One\" excluded, which two film titles that begin with a number have won an Academy Award for Best Film?",
  options: ["300 and 127 Hours", "Million Dollar Baby and 12 Years A Slave", "10 Things I Hate About You and 21 Grams", "13 Going on 30 and 28 Days Later"],
  correctAnswer: 1,
  category: "TV & Cinema",
  difficulty: "hard"
},
{
  id: 768,
  question: "The Adidas Gazelle was first introduced in 1966 and then redesigned for use in which sport?",
  options: ["Handball", "Volleyball", "Wrestling", "Basketball"],
  correctAnswer: 0,
  category: "Sports",
  difficulty: "medium"
},
{
  id: 769,
  question: "Although he never received the award, which man was nominated for the Nobel Peace Prize in 1937, 38, 39, 47 and 48?",
  options: ["Mahatma Gandhi", "Albert Einstein", "Winston Churchill", "Franklin D. Roosevelt"],
  correctAnswer: 0,
  category: "History & Politics",
  difficulty: "medium"
},
{
  id: 770,
  question: "In which year did the Concorde make its last commercial flight?",
  options: ["2003", "2000", "1999", "1989"],
  correctAnswer: 0,
  category: "Science & Technology",
  difficulty: "easy"
},
{
  id: 771,
  question: "What is the American television idiom, based on a Happy Days episode, used to describe a tv program that \"was once good but has now peaked and taken a severe downturn in quality\"?",
  options: ["Jumped the shark", "Lost the plot", "Gone off the rails", "Hit the wall"],
  correctAnswer: 0,
  category: "TV & Cinema",
  difficulty: "easy"
},
{
  id: 772,
  question: "Which football player holds the English Premier League record with 5 hat tricks in a single season?",
  options: ["Harry Kane", "Alan Shearer", "Wayne Rooney", "Sergio Agüero"],
  correctAnswer: 1,
  category: "Sports",
  difficulty: "hard"
},
{
  id: 773,
  question: "The name for which butterfly stage stems from the Latin word for \"ghost\"?",
  options: ["larva", "pupa", "nymph", "caterpillar"],
  correctAnswer: 0,
  category: "Language",
  difficulty: "hard"
},
{
  id: 774,
  question: "\"Don't let go!\" was the movie poster tag line to which 2013 sci-fi film?",
  options: ["Gravity", "Interstellar", "The Martian", "Passengers"],
  correctAnswer: 0,
  category: "TV & Cinema",
  difficulty: "medium"
},
{
  id: 775,
  question: "Rhinotillexomania is the medical term for which obsessive disorder?",
  options: ["Compulsive nose picking", "Hair pulling", "Obsessive hand washing", "Nail biting"],
  correctAnswer: 0,
  category: "Science & Technology",
  difficulty: "hard"
},
{
  id: 776,
  question: "Which circuit has hosted the most Formula One Grand Prix races?",
  options: ["Silverstone", "Monaco", "Monza", "Spa-Francorchamps"],
  correctAnswer: 2,
  category: "Sports",
  difficulty: "medium"
},
{
  id: 777,
  question: "Which powerful empire was abolished in 1922 after more than 600 years of rule?",
  options: ["Ottoman", "Roman", "Austro-Hungarian", "Mongol"],
  correctAnswer: 0,
  category: "History & Politics",
  difficulty: "medium"
},
{
  id: 778,
  question: "Which animated film begins with the words \"Long ago the great Frith made the world.\"?",
  options: ["Watership Down", "The Last Unicorn", "The Secret of NIMH", "The Black Cauldron"],
  correctAnswer: 0,
  category: "TV & Cinema",
  difficulty: "medium"
},
{
  id: 779,
  question: "The impact crater from the asteroid that was apparently responsible for the extinction of the dinosaurs 65 million years ago is found on which peninsula?",
  options: ["Iberian", "Baja California", "Kamchatka", "Yucatan"],
  correctAnswer: 3,
  category: "Geography & Nature",
  difficulty: "medium"
},
{
  id: 780,
  question: "With 68 km, which country has the shortest land border with Germany?",
  options: ["Switzerland", "Denmark", "Belgium", "Luxembourg"],
  correctAnswer: 1,
  category: "Geography & Nature",
  difficulty: "medium"
},
{
  id: 781,
  question: "The best selling album of 1976 was a double live album from which ex-Humble Pie member?",
  options: ["Peter Frampton", "Steve Marriott", "Greg Ridley", "Jerry Shirley"],
  correctAnswer: 0,
  category: "Music",
  difficulty: "hard"
},
{
  id: 782,
  question: "Cox's Bazar is, with 120 km of unbroken sandy shore, the longest beach in the world. In which country is it located?",
  options: ["Sri Lanka", "India", "Bangladesh", "Indonesia"],
  correctAnswer: 2,
  category: "Geography & Nature",
  difficulty: "medium"
},
{
  id: 783,
  question: "Which two songs with titles beginning with the word \"Dancing\" were top 10 hits in 1985?",
  options: ["Dancing in the Dark and Dancing in the Moonlight", "Dancing with Myself and Dancing in the Dark", "Dancing Queen and Dancing All Night", "Dancing in the Street and Dancing in the Dark"],
  correctAnswer: 3,
  category: "Music",
  difficulty: "medium"
},
{
  id: 784,
  question: "Which 104-year-old woman with the initials L. R., a two-time winner of the Academy Award for Best Actress, was the oldest living Oscar winner?",
  options: ["Luise Rainer", "Olivia de Havilland", "Katharine Hepburn", "Gloria Stuart"],
  correctAnswer: 0,
  category: "TV & Cinema",
  difficulty: "hard"
},
{
  id: 785,
  question: "Which composer with the initials M.H. is one of only two people to have won an Oscar, a Grammy, an Emmy, a Tony and a Pulitzer Prize?",
  options: ["Marvin Hamlisch", "Leonard Bernstein", "Stephen Sondheim", "Andrew Lloyd Webber"],
  correctAnswer: 0,
  category: "Music",
  difficulty: "hard"
},
{
  id: 786,
  question: "Which European capital located along the Rhine river has less than 6,000 residents?",
  options: ["Vaduz", "San Marino", "Reykjavik", "Andorra la Vella"],
  correctAnswer: 0,
  category: "Geography & Nature",
  difficulty: "hard"
},
{
  id: 787,
  question: "Which World Chess Champion, a grandmaster at the age of 13, is known as the 'Mozart of Chess'?",
  options: ["Magnus Carlsen", "Garry Kasparov", "Bobby Fischer", "Anatoly Karpov"],
  correctAnswer: 0,
  category: "Sports",
  difficulty: "medium"
},
{
  id: 788,
  question: "Which English rock musician and former member of Humble Pie had the best selling album of 1976 and played lead guitar on the hit song 'Grease'?",
  options: ["Peter Frampton", "Mick Ronson", "Jeff Beck", "Steve Marriott"],
  correctAnswer: 0,
  category: "Music",
  difficulty: "medium"
},
{
  id: 789,
  question: "Which 1994 movie is the highest grossing hand drawn animated feature film of all time?",
  options: ["The Lion King", "Beauty and the Beast", "Aladdin", "Snow White and the Seven Dwarfs"],
  correctAnswer: 0,
  category: "TV & Cinema",
  difficulty: "easy"
},
{
  id: 790,
  question: "What symbol is depicted on the national flag of North Macedonia?",
  options: ["Sun", "Star", "Eagle", "Lion"],
  correctAnswer: 0,
  category: "Geography & Nature",
  difficulty: "medium"
},
{
  id: 791,
  question: "Based on worshipper capacity, in which two cities are the largest mosques in the world located?",
  options: ["Mecca and Medina", "Istanbul and Cairo", "Tehran and Jakarta", "Riyadh and Lahore"],
  correctAnswer: 0,
  category: "Geography & Nature",
  difficulty: "medium"
},
{
  id: 792,
  question: "A magic charm or spell and a sauce. One word, four letters.",
  options: ["Mojo", "Jinx", "Hex", "Ouzo"],
  correctAnswer: 0,
  category: "Language",
  difficulty: "medium"
},
{
  id: 793,
  question: "On 18 March 1965, Alexey Leonov became the first human to do what?",
  options: ["Walk in space", "Dock a spacecraft", "Orbit the Moon", "Perform a moon landing"],
  correctAnswer: 0,
  category: "Science & Technology",
  difficulty: "medium"
},
{
  id: 794,
  question: "What is the most populated country in the world with French as the official language?",
  options: ["Democratic Republic of Congo", "France", "Cameroon", "Ivory Coast"],
  correctAnswer: 0,
  category: "Geography & Nature",
  difficulty: "medium"
},
{
  id: 795,
  question: "Which French footballer is a joint all-time record holder for the most red cards in English Premier League history?",
  options: ["Patrick Vieira", "Eric Cantona", "Didier Deschamps", "Laurent Blanc"],
  correctAnswer: 0,
  category: "Sports",
  difficulty: "medium"
},
{
  id: 796,
  question: "Who did Kenney Jones replace in November 1978?",
  options: ["Keith Moon", "Roger Taylor", "John Bonham", "Charlie Watts"],
  correctAnswer: 0,
  category: "Music",
  difficulty: "medium"
},
{
  id: 797,
  question: "The uranium concentrate powder Urania is better known under which edible sounding name?",
  options: ["Yellowcake", "Greenpea", "Redflour", "Whitebread"],
  correctAnswer: 0,
  category: "Science & Technology",
  difficulty: "hard"
},
{
  id: 798,
  question: "What is the oldest religious order in the Latin Church?",
  options: ["Benedictines", "Jesuits", "Franciscans", "Dominicans"],
  correctAnswer: 0,
  category: "History & Politics",
  difficulty: "hard"
},
{
  id: 799,
  question: "According to the historian Stuart Laycock, how many countries in the world has Britain never invaded?",
  options: ["22", "7", "45", "100"],
  correctAnswer: 0,
  category: "History & Politics",
  difficulty: "medium"
},
{
  id: 800,
  question: "What name did Scarlett O'Hara and Rhett Butler give to their only daughter?",
  options: ["Bonnie Blue", "Melanie", "Katie Scarlett", "Ellie May"],
  correctAnswer: 0,
  category: "Literature",
  difficulty: "medium"
},
{
  id: 801,
  question: "What is the oldest existing capital city in the world?",
  options: ["Damascus", "Athens", "Jerusalem", "Beirut"],
  correctAnswer: 0,
  category: "Geography & Nature",
  difficulty: "hard"
},
{
  id: 802,
  question: "On which 1969 album would one find the song with the unusual title 'Several species of small furry animals gathered together in a cave and grooving with a Pict'?",
  options: ["Ummagumma (Pink Floyd)", "The White Album (The Beatles)", "Electric Ladyland (Jimi Hendrix)", "Atom Heart Mother (Pink Floyd)"],
  correctAnswer: 0,
  category: "Music",
  difficulty: "hard"
},
{
  id: 803,
  question: "What does the Greek root 'porn' mean?",
  options: ["Prostitute", "Lust", "Love", "Naked"],
  correctAnswer: 0,
  category: "Language",
  difficulty: "medium"
},
{
  id: 804,
  question: "Although it only reached number 62 in the US music charts in 1967, which inebriant topped the charts on both sides of the Atlantic in the 1980s?",
  options: ["Red Red Wine", "Tequila Sunrise", "Champagne Supernova", "White Lightning"],
  correctAnswer: 0,
  category: "Music",
  difficulty: "medium"
},
{
  id: 805,
  question: "With 1,600,000–2,200,000 SHUs, which superlative does the 'Carolina Reaper' hold?",
  options: ["World's hottest chili pepper", "Most expensive spice", "Largest edible pepper", "First GMO pepper"],
  correctAnswer: 0,
  category: "Science & Technology",
  difficulty: "medium"
},
{
  id: 806,
  question: "Which 1994 black comedy with an original screenplay written by Quentin Tarantino used the movie poster tag line: 'A bold new film that takes a look at a country seduced by fame, obsessed by crime and consumed by the media'?",
  options: ["Natural Born Killers", "Pulp Fiction", "Jackie Brown", "Reservoir Dogs"],
  correctAnswer: 0,
  category: "TV & Cinema",
  difficulty: "hard"
},
{
  id: 807,
  question: "Which UN Secretary General has a first name that means 'Friday'?",
  options: ["Kofi Annan", "Ban Ki-moon", "Boutros Boutros-Ghali", "Antonio Guterres"],
  correctAnswer: 0,
  category: "History & Politics",
  difficulty: "medium"
},
{
  id: 808,
  question: "Who was the first commoner to appear on a British postage stamp?",
  options: ["William Shakespeare", "Winston Churchill", "Isaac Newton", "Charles Dickens"],
  correctAnswer: 0,
  category: "History & Politics",
  difficulty: "hard"
},
{
  id: 809,
  question: "Which singer's fictional male alter ego is called Jo Calderone?",
  options: ["Lady Gaga", "Miley Cyrus", "Beyoncé", "Madonna"],
  correctAnswer: 0,
  category: "Music",
  difficulty: "medium"
},
{
  id: 810,
  question: "What do Scarlett Johansson, Elvis Presley, Cameron Winklevoss, Vin Diesel, Robin Gibb and Ashton Kutcher all have in common?",
  options: ["Twin brother", "Born on a Monday", "Won Grammys", "Vegetarian"],
  correctAnswer: 0,
  category: "Arts & Culture",
  difficulty: "medium"
},
{
  id: 811,
  question: "Which Danish company is the world's largest producer of tyres?",
  options: ["Lego", "Michelin", "Bridgestone", "Pirelli"],
  correctAnswer: 0,
  category: "Science & Technology",
  difficulty: "easy"
},
{
  id: 812,
  question: "Who turned down an offer of one billion US dollars to reunite in the year 2000?",
  options: ["ABBA", "The Beatles", "Led Zeppelin", "Pink Floyd"],
  correctAnswer: 0,
  category: "Music",
  difficulty: "medium"
},
{
  id: 813,
  question: "Which popular sci-fi action film takes place in the year 2199?",
  options: ["The Matrix", "Blade Runner", "Minority Report", "Interstellar"],
  correctAnswer: 0,
  category: "TV & Cinema",
  difficulty: "medium"
},
{
  id: 814,
  question: "According to the UN, a world record 31% of the population of which country are vegetarian?",
  options: ["India", "Nepal", "Ethiopia", "Italy"],
  correctAnswer: 0,
  category: "Geography & Nature",
  difficulty: "easy"
},
{
  id: 815,
  question: "'Arabian wine' was a term used by 17th century Europeans for what?",
  options: ["Coffee", "Tea", "Shiraz", "Fig wine"],
  correctAnswer: 0,
  category: "History & Politics",
  difficulty: "medium"
},
{
  id: 816,
  question: "The ravens Huginn and Muninn are often depicted sitting on which man's shoulders?",
  options: ["Odin", "Zeus", "Ra", "Merlin"],
  correctAnswer: 0,
  category: "Literature",
  difficulty: "medium"
},
{
  id: 817,
  question: "The German theoretical physicist Arnold Sommerfeld holds the record for the most Nobel Prize nominations without a win. Plus or minus 25, how many times was he nominated?",
  options: ["84", "56", "99", "108"],
  correctAnswer: 0,
  category: "Science & Technology",
  difficulty: "hard"
},
{
  id: 818,
  question: "What is the only thing that the Emperor of Japan is forbidden to consume?",
  options: ["Fugu (puffer fish)", "Horse meat", "Sake", "Sea urchin"],
  correctAnswer: 0,
  category: "Geography & Nature",
  difficulty: "medium"
},
{
  id: 819,
  question: "A European city and an unusually strong steel traditionally used to make swords. Six letters.",
  options: ["Toledo", "Vienna", "Berlin", "Naples"],
  correctAnswer: 0,
  category: "Language",
  difficulty: "medium"
},
{
  id: 820,
  question: "Kisspeptin is a protein which plays an important role in which stage of human development?",
  options: ["Puberty", "Embryogenesis", "Menopause", "Fertilisation"],
  correctAnswer: 0,
  category: "Science & Technology",
  difficulty: "hard"
},
{
  id: 821,
  question: "Bands like Motörhead, Mötley Crüe and Blue Öyster Cult all have 'Metal Umlauts' or so-called 'Rock Dots' over one or more letters in their name. Over which letter did the fictional band Spinal Tap have 'rock dots'?",
  options: ["n", "a", "e", "o"],
  correctAnswer: 0,
  category: "Music",
  difficulty: "medium"
},
{
  id: 822,
  question: "The 5 youngest Olympic gold medalists are all which age?",
  options: ["13 years old", "14 years old", "15 years old", "12 years old"],
  correctAnswer: 0,
  category: "Sports",
  difficulty: "medium"
},
{
  id: 823,
  question: "Which New York City landmark was razed to make way for the construction of the Empire State Building?",
  options: ["The Waldorf Astoria Hotel(s)", "The Chrysler Building", "Penn Station", "Grand Central Depot"],
  correctAnswer: 0,
  category: "Geography & Nature",
  difficulty: "medium"
},
{
  id: 824,
  question: "Both Harry Nilsson and Mariah Carey had a hit with the song 'Without You'. The song was written and first recorded by which Welsh rock band?",
  options: ["Badfinger", "Manic Street Preachers", "The Alarm", "Stereophonics"],
  correctAnswer: 0,
  category: "Music",
  difficulty: "medium"
},
{
  id: 825,
  question: '"Beautiful view. Magnificent desolation" were which man\'s first words on the moon?',
  options: ["Buzz Aldrin", "Neil Armstrong", "Michael Collins", "Yuri Gagarin"],
  correctAnswer: 0,
  category: "History & Politics",
  difficulty: "medium"
},
{
  id: 826,
  question: 'Which popular 1994 film ends with the following words? "I hope I can make it across the border. I hope to see my friend and shake his hand. I hope the Pacific is as blue as it has been in my dreams. I hope."',
  options: ["The Shawshank Redemption", "Forrest Gump", "Pulp Fiction", "The Lion King"],
  correctAnswer: 0,
  category: "TV & Cinema",
  difficulty: "medium"
},
{
  id: 827,
  question: 'Surgical foot narrowing (in order that women can fit into designer heels) is named after which fairy tale character?',
  options: ["Cinderella", "Sleeping Beauty", "Rapunzel", "Snow White"],
  correctAnswer: 0,
  category: "Arts & Culture",
  difficulty: "hard"
},
{
  id: 828,
  question: 'Who penned the fairy tale titled "The Princess and the Pea"?',
  options: ["Hans Christian Andersen", "Brothers Grimm", "Charles Perrault", "J.M. Barrie"],
  correctAnswer: 0,
  category: "Literature",
  difficulty: "easy"
},
{
  id: 829,
  question: 'Which five countries have produced the most Nobel Prize Laureates?',
  options: [
    "USA, UK, Germany, France, Sweden",
    "USA, UK, Russia, Japan, Italy",
    "Germany, UK, USA, Canada, Australia",
    "France, Germany, USA, Italy, Switzerland"
  ],
  correctAnswer: 0,
  category: "History & Politics",
  difficulty: "hard"
},
{
  id: 830,
  question: 'According to the Wall Street Journal, the average NFL Football game lasts 3 hours and 12 minutes. How many minutes is the ball actually in play?',
  options: ["11 min", "37 min", "19 min", "25 min"],
  correctAnswer: 0,
  category: "Sports",
  difficulty: "hard"
},
{
  id: 831,
  question: 'In Billy Joel\'s "Piano Man", who is the real estate novelist?',
  options: ["Paul", "John", "Tony", "Brian"],
  correctAnswer: 0,
  category: "Music",
  difficulty: "medium"
},
{
  id: 832,
  question: 'Which novel and film revolves around the murder of the unpopular American businessman Samuel Ratchett?',
  options: [
    "Murder on the Orient Express",
    "Death on the Nile",
    "The Girl with the Dragon Tattoo",
    "Gone Girl"
  ],
  correctAnswer: 0,
  category: "Literature",
  difficulty: "medium"
},
{
  id: 833,
  question: 'What was the only James Bond theme song to have reached number 1 in the US Billboard Hot 100?',
  options: [
    "A View To A Kill",
    "Live and Let Die",
    "Skyfall",
    "Nobody Does It Better"
  ],
  correctAnswer: 0,
  category: "Music",
  difficulty: "medium"
},
{
  id: 834,
  question: 'A tournament played at the 1900 Paris Summer Olympics marked the first appearance of women in the modern games. In which leisurely sport, played on grass, did the women compete against men?',
  options: ["Croquet", "Tennis", "Golf", "Archery"],
  correctAnswer: 0,
  category: "Sports",
  difficulty: "hard"
},
{
  id: 835,
  question: 'The "wiki" in Wikipedia stems from the Hawaiian language. What does "wiki wiki" mean in Hawaiian?',
  options: ["Quick", "Knowledge", "Group", "Friend"],
  correctAnswer: 0,
  category: "Language",
  difficulty: "easy"
},
{
  id: 836,
  question: 'What is the unlucky number in China?',
  options: ["4", "13", "7", "17"],
  correctAnswer: 0,
  category: "Geography & Nature",
  difficulty: "easy"
},
{
  id: 837,
  question: 'What is the unlucky number in Italy?',
  options: ["17", "13", "7", "4"],
  correctAnswer: 0,
  category: "Geography & Nature",
  difficulty: "easy"
},
{
  id: 838,
  question: 'The name of which Islamist organisation translates to "The Base" or "The Foundation"?',
  options: ["al-Qaeda", "Hamas", "Hezbollah", "Taliban"],
  correctAnswer: 0,
  category: "History & Politics",
  difficulty: "medium"
},
{
  id: 839,
  question: 'The following was a movie poster tag line for which 1977 film? "Out of the sky comes the screen\'s most incredible spectacle of men and war!"',
  options: ["A Bridge Too Far", "The Longest Day", "Platoon", "Midway"],
  correctAnswer: 0,
  category: "TV & Cinema",
  difficulty: "medium"
},
{
  id: 840,
  question: 'With 5,614 km, in which country is the world\'s longest fence located?',
  options: ["Australia", "USA", "Russia", "India"],
  correctAnswer: 0,
  category: "Geography & Nature",
  difficulty: "hard"
},
{
  id: 841,
  question: 'Name the film based on a Stephen King story in which Christopher Walken played a role.',
  options: ["The Dead Zone", "Misery", "It", "Pet Sematary"],
  correctAnswer: 0,
  category: "TV & Cinema",
  difficulty: "medium"
},
{
  id: 842,
  question: 'Name the film based on a Stephen King story in which James Caan played a role.',
  options: ["Misery", "The Shining", "Carrie", "Thinner"],
  correctAnswer: 0,
  category: "TV & Cinema",
  difficulty: "medium"
},
{
  id: 843,
  question: 'Name the film based on a Stephen King story in which Max von Sydow played a role.',
  options: ["Needful Things", "The Green Mile", "The Mist", "Dreamcatcher"],
  correctAnswer: 0,
  category: "TV & Cinema",
  difficulty: "medium"
},
{
  id: 844,
  question: 'Name the film based on a Stephen King story in which Damien Lewis played a role.',
  options: ["Dreamcatcher", "Stand By Me", "1408", "It"],
  correctAnswer: 0,
  category: "TV & Cinema",
  difficulty: "medium"
},
{
  id: 845,
  question: 'What are the three wealthiest NHL clubs?',
  options: [
    "Toronto Maple Leafs, New York Rangers and Montreal Canadiens",
    "New York Rangers, LA Kings and Chicago Blackhawks",
    "Boston Bruins, Toronto Maple Leafs and Detroit Red Wings",
    "Montreal Canadiens, Pittsburgh Penguins and Vancouver Canucks"
  ],
  correctAnswer: 0,
  category: "Sports",
  difficulty: "hard"
},
{
  id: 846,
  question: 'Vesper Lynd is a Bond girl in Casino Royale. What does the Latin root "vesper" mean?',
  options: ["Evening", "Danger", "Wind", "Flower"],
  correctAnswer: 0,
  category: "Language",
  difficulty: "medium"
},
{
  id: 847,
  question: '“Don’t Be Evil” was the former motto of which company?',
  options: ["Google", "Facebook", "Tesla", "Apple"],
  correctAnswer: 0,
  category: "Science & Technology",
  difficulty: "easy"
},
{
  id: 848,
  question: 'Which Lennon and McCartney composition was a number one hit song on both sides of the Atlantic for Peter and Gordon?',
  options: ["A World Without Love", "Eight Days a Week", "She Loves You", "Michelle"],
  correctAnswer: 0,
  category: "Music",
  difficulty: "medium"
},
{
  id: 849,
  question: 'Georges Braque was a French painter most famously associated with which two artistic movements?',
  options: ["Fauvism and Cubism", "Cubism and Surrealism", "Impressionism and Fauvism", "Futurism and Dada"],
  correctAnswer: 0,
  category: "Arts & Culture",
  difficulty: "medium"
},
{
  id: 850,
  question: 'The House of Bernadotte is the name given to the royal dynasty of which European country?',
  options: ["Sweden", "Norway", "Denmark", "Netherlands"],
  correctAnswer: 0,
  category: "History & Politics",
  difficulty: "medium"
},
{
  id: 851,
  question: 'What is known as "Country’s most famous stage" and the "Home of American music"?',
  options: ["Grand Ole Opry", "Carnegie Hall", "Ryman Auditorium", "Bluebird Cafe"],
  correctAnswer: 0,
  category: "Music",
  difficulty: "medium"
},
{
  id: 852,
  question: 'The target in which team sport is called "the tee"?',
  options: ["Curling", "Lawn Bowls", "Shuffleboard", "Bocce"],
  correctAnswer: 0,
  category: "Sports",
  difficulty: "easy"
},
{
  id: 853,
  question: 'Which country’s alphabet is known as Hangul?',
  options: ["South Korea", "Japan", "Vietnam", "Thailand"],
  correctAnswer: 0,
  category: "Language",
  difficulty: "easy"
},
{
  id: 854,
  question: 'Name the book by author Carlo Collodi that has been translated into more than 200 different languages.',
  options: ["Pinocchio", "Heidi", "The Little Prince", "Treasure Island"],
  correctAnswer: 0,
  category: "Literature",
  difficulty: "medium"
},
{
  id: 855,
  question: 'Name the book by author Antoine de Saint Exupery that has been translated into more than 200 different languages.',
  options: ["The Little Prince", "Night Flight", "Wind, Sand and Stars", "Southern Mail"],
  correctAnswer: 0,
  category: "Literature",
  difficulty: "easy"
},
{
  id: 856,
  question: 'Name the book by author John Bunyan that has been translated into more than 200 different languages.',
  options: ["Pilgrim's Progress", "The Holy War", "Grace Abounding", "The Life and Death of Mr. Badman"],
  correctAnswer: 0,
  category: "Literature",
  difficulty: "medium"
},
{
  id: 857,
  question: 'In which country is the recently discovered 6,000 km long Hamza River?',
  options: ["Brazil", "Peru", "Argentina", "Colombia"],
  correctAnswer: 0,
  category: "Geography & Nature",
  difficulty: "hard"
},
{
  id: 858,
  question: 'King Charles VI ruled France from 1380–1422. During the last 30 years of his reign he suffered bouts of insanity and often believed he was made of what?',
  options: ["Glass", "Stone", "Ice", "Smoke"],
  correctAnswer: 0,
  category: "History & Politics",
  difficulty: "hard"
},
{
  id: 859,
  question: 'The following was a movie poster tag line for which Oscar winning film? "The funny, touching and totally irresistible story of a working relationship that became a 25 year friendship"',
  options: ["Driving Miss Daisy", "Forrest Gump", "The King’s Speech", "The Help"],
  correctAnswer: 0,
  category: "TV & Cinema",
  difficulty: "medium"
},
{
  id: 860,
  question: 'What was the last European country to relinquish its overseas territory in India?',
  options: ["Portugal", "France", "Netherlands", "Britain"],
  correctAnswer: 0,
  category: "History & Politics",
  difficulty: "medium"
},
{
  id: 861,
  question: 'In song, where did Betty meet "The Leader of the Pack"?',
  options: ["At the candy store", "At the roller rink", "By the school gates", "At the drive-in"],
  correctAnswer: 0,
  category: "Music",
  difficulty: "medium"
},
{
  id: 862,
  question: 'Hallux is the medical term for which body part?',
  options: ["Big toe", "Thumb", "Heel", "Elbow"],
  correctAnswer: 0,
  category: "Science & Technology",
  difficulty: "hard"
},
{
  id: 863,
  question: 'Starbuck is a doomed character in which famous novel?',
  options: ["Moby Dick", "The Old Man and the Sea", "Treasure Island", "The Sea-Wolf"],
  correctAnswer: 0,
  category: "Literature",
  difficulty: "medium"
},
{
  id: 864,
  question: 'Fennel pollen excluded, what are the two most expensive spices?',
  options: ["Saffron and vanilla", "Cardamom and saffron", "Clove and nutmeg", "Cinnamon and vanilla"],
  correctAnswer: 0,
  category: "Geography & Nature",
  difficulty: "medium"
},
{
  id: 865,
  question: 'Which European city has a record 2,500 bridges?',
  options: ['Hamburg', 'Venice', 'Amsterdam', 'St. Petersburg'],
  correctAnswer: 0,
  category: 'Geography & Nature',
  difficulty: 'medium'
},
{
  id: 866,
  question: 'The following line is from which 1994 film? "Forty years I been asking permission to piss. I can\'t squeeze a drop without say so."',
  options: ['The Shawshank Redemption', 'Forrest Gump', 'Pulp Fiction', 'Natural Born Killers'],
  correctAnswer: 0,
  category: 'TV & Cinema',
  difficulty: 'medium'
},
{
  id: 867,
  question: 'The all-star band consisting of John Lennon, Eric Clapton, Keith Richards and Mitch Mitchell called themselves "The Dirty" what?',
  options: ['The Dirty Mac', 'The Dirty Jacks', 'The Dirty Tones', 'The Dirty Strings'],
  correctAnswer: 0,
  category: 'Music',
  difficulty: 'hard'
},
{
  id: 868,
  question: 'In which country is French President Emmanuel Macron a prince?',
  options: ['Andorra', 'Luxembourg', 'Monaco', 'Liechtenstein'],
  correctAnswer: 0,
  category: 'History & Politics',
  difficulty: 'hard'
},
{
  id: 869,
  question: 'A tapestry reproduction of which famous anti-war painting hangs outside the Security Council Chamber at the UN headquarters in New York City?',
  options: ['Picasso\'s "Guernica"', 'Goya\'s "The Third of May 1808"', 'Monet\'s "Impression, Sunrise"', 'Dalí\'s "The Face of War"'],
  correctAnswer: 0,
  category: 'Arts & Culture',
  difficulty: 'medium'
},
{
  id: 870,
  question: 'What were Severus Snape\'s last words in film?',
  options: ['"You have your mother\'s eyes"', '"It\'s over"', '"Always"', '"Look at me"'],
  correctAnswer: 0,
  category: 'TV & Cinema',
  difficulty: 'easy'
},
{
  id: 871,
  question: 'Which famous 19th century dance style translated can mean "a duck" or "uproar"?',
  options: ['Cancan', 'Polka', 'Mazurka', 'Quadrille'],
  correctAnswer: 0,
  category: 'Arts & Culture',
  difficulty: 'medium'
},
{
  id: 872,
  question: 'The Canadian harpooner Ned Land is a central character in which novel?',
  options: ['Twenty Thousand Leagues Under The Sea', 'Moby Dick', 'The Sea-Wolf', 'Treasure Island'],
  correctAnswer: 0,
  category: 'Literature',
  difficulty: 'medium'
},
{
  id: 873,
  question: 'The name of which luxury train is advertised as "A window to the soul of South Africa"?',
  options: ['The Blue Train', 'The Golden Chariot', 'Rovos Rail', 'The African Express'],
  correctAnswer: 0,
  category: 'Geography & Nature',
  difficulty: 'medium'
},
{
  id: 874,
  question: 'What was the title of the James Bond film that was released in the same year as "Octopussy"?',
  options: ['Never Say Never Again', 'For Your Eyes Only', 'A View to a Kill', 'The Living Daylights'],
  correctAnswer: 0,
  category: 'TV & Cinema',
  difficulty: 'hard'
},
{
  id: 875,
  question: 'What is the northernmost city in the world with a population of 1 million or more inhabitants?',
  options: ['Saint Petersburg', 'Oslo', 'Helsinki', 'Reykjavik'],
  correctAnswer: 0,
  category: 'Geography & Nature',
  difficulty: 'medium'
},
{
  id: 876,
  question: 'The name for which herbivorous marine mammal stems from an old Caribbean word meaning "breast"?',
  options: ['Manatee', 'Dugong', 'Sea lion', 'Walrus'],
  correctAnswer: 0,
  category: 'Science & Technology',
  difficulty: 'hard'
},
{
  id: 877,
  question: 'What name was given to the first Franco-Mexican War of 1838–39?',
  options: ['Pastry War', 'The Mole War', 'Sugar Conflict', 'Café War'],
  correctAnswer: 0,
  category: 'History & Politics',
  difficulty: 'hard'
},
{
  id: 878,
  question: 'What is Michelangelo\'s "David" holding in his right hand?',
  options: ['A stone', 'A staff', 'A sword', 'A slingshot'],
  correctAnswer: 0,
  category: 'Arts & Culture',
  difficulty: 'medium'
},
{
  id: 879,
  question: 'In which year did Paul McCartney first meet John Lennon?',
  options: ['1957', '1958', '1956', '1959'],
  correctAnswer: 0,
  category: 'Music',
  difficulty: 'hard'
},
{
  id: 880,
  question: 'Which current Premier League club has won all 4 divisions in English football?',
  options: ['Wolves', 'Leeds United', 'Aston Villa', 'Sheffield United'],
  correctAnswer: 0,
  category: 'Sports',
  difficulty: 'medium'
},
{
  id: 881,
  question: 'Which film starring Anthony Hopkins ends with the following words? "The pain now is part of the happiness then. That\'s the deal."',
  options: ['Shadowlands', 'Legends of the Fall', 'The Remains of the Day', 'The Elephant Man'],
  correctAnswer: 0,
  category: 'TV & Cinema',
  difficulty: 'medium'
},
{
  id: 882,
  question: 'Which tennis player spent the most weeks ranked No. 1 in the ATP rankings during the 1970s?',
  options: ['Jimmy Connors', 'Björn Borg', 'John McEnroe', 'Ilie Năstase'],
  correctAnswer: 0,
  category: 'Sports',
  difficulty: 'hard'
},
{
  id: 883,
  question: 'Plus or minus 25, in which year did Dr Zefram Cochrane invent the warp drive engine?',
  options: ['2063', '2090', '2040', '2125'],
  correctAnswer: 0,
  category: 'TV & Cinema',
  difficulty: 'medium'
},
{
  id: 884,
  question: 'Which "Taste" won the Grammy for Record of the Year in 1966?',
  options: ['A Taste Of Honey', 'Sweet Taste of Freedom', 'Taste the Feeling', 'A Taste for Jazz'],
  correctAnswer: 0,
  category: 'Music',
  difficulty: 'hard'
},
{
  id: 885,
  question: 'Measured in both area and population, what is the second biggest Portuguese speaking country in the world?',
  options: ['Angola', 'Mozambique', 'Portugal', 'Guinea-Bissau'],
  correctAnswer: 0,
  category: 'Geography & Nature',
  difficulty: 'medium'
},
{
  id: 886,
  question: 'The British-Canadian scientist Geoffrey Hinton is known as "The Godfather" of what?',
  options: ['Artificial Intelligence', 'Quantum Computing', 'Genetic Engineering', 'Cryptography'],
  correctAnswer: 0,
  category: 'Science & Technology',
  difficulty: 'easy'
},
{
  id: 887,
  question: 'In which country do the most tetraphobics live?',
  options: ['China', 'South Korea', 'Japan', 'Vietnam'],
  correctAnswer: 0,
  category: 'Culture & Language',
  difficulty: 'medium'
},
{
  id: 888,
  question: 'In which two films does a character played by Ben Affleck witness a nuclear detonation?',
  options: ['Armageddon and The Sum Of All Fears', 'Pearl Harbor and Armageddon', 'The Sum Of All Fears and Argo', 'Armageddon and Gone Girl'],
  correctAnswer: 0,
  category: 'TV & Cinema',
  difficulty: 'hard'
},
{
  id: 889,
  question: 'Since 1983, which flag carrier has been the official airline of Santa Claus?',
  options: ['Finnair', 'Scandinavian Airlines', 'Lufthansa', 'Air Canada'],
  correctAnswer: 0,
  category: 'Arts & Culture',
  difficulty: 'easy'
},
{
  id: 890,
  question: 'From the 10th century BC until the last emperor was deposed in 1974, the Solomonic dynasty ruled in which modern day country?',
  options: ['Ethiopia', 'Egypt', 'Israel', 'Sudan'],
  correctAnswer: 0,
  category: 'History & Politics',
  difficulty: 'hard'
},
{
  id: 891,
  question: 'Which four songs on The Beatles studio albums are under 1 minute in length?',
  options: ['Wild Honey Pie, Dig It, Maggie May, Her Majesty', 'Dig It, Her Majesty, Glass Onion, Honey Pie', 'Her Majesty, Blackbird, Wild Honey Pie, Let It Be', 'Maggie May, Honey Pie, Because, Revolution 9'],
  correctAnswer: 0,
  category: 'Music',
  difficulty: 'hard'
},
{
  id: 892,
  question: 'The last FIFA World Cup in which the Golden Boot winner scored 10 or more goals was Mexico 1970. Which player was the top scorer with 10 goals?',
  options: ['Gerd Müller', 'Pelé', 'Jairzinho', 'Just Fontaine'],
  correctAnswer: 0,
  category: 'Sports',
  difficulty: 'hard'
},
{
  id: 893,
  question: 'Which is the fastest growing tree in the Northern Hemisphere?',
  options: ['Poplar', 'Maple', 'Birch', 'Elm'],
  correctAnswer: 0,
  category: 'Science & Technology',
  difficulty: 'medium'
},
{
  id: 894,
  question: '"If it\'s just us, it seems like an awful waste of space" was a movie poster tag line for which 1997 film?',
  options: ['Contact', 'Deep Impact', 'Interstellar', 'Event Horizon'],
  correctAnswer: 0,
  category: 'TV & Cinema',
  difficulty: 'medium'
},
{
  id: 895,
  question: 'The metropolitan area of Santa Cruz de la Sierra has 2,000,000 plus inhabitants and is one of the fastest growing cities in the world. In which country is it located?',
  options: ['Bolivia', 'Paraguay', 'Colombia', 'Ecuador'],
  correctAnswer: 0,
  category: 'Geography & Nature',
  difficulty: 'medium'
},
{
  id: 896,
  question: 'Luthiery (also spelled "Lutherie") is the craft or art of making what?',
  options: ['String instruments', 'Furniture', 'Clocks', 'Shoes'],
  correctAnswer: 0,
  category: 'Arts & Culture',
  difficulty: 'medium'
},
{
  id: 897,
  question: 'Which airline was the first to introduce passenger jet service in 1952?',
  options: ['BOAC', 'Pan Am', 'Lufthansa', 'Air France'],
  correctAnswer: 0,
  category: 'History & Politics',
  difficulty: 'hard'
},
{
  id: 898,
  question: 'The incurable neurological disorder Kuru, also known as the "laughing sickness", is endemic to the tribal regions of which country?',
  options: ['Papua New Guinea', 'Indonesia', 'Peru', 'India'],
  correctAnswer: 0,
  category: 'Science & Technology',
  difficulty: 'hard'
},
{
  id: 899,
  question: 'Valeri Polyakov holds the record for the longest single space flight. Plus or minus 30, how many complete days did he spend on board the Mir space station?',
  options: ['437', '402', '455', '398'],
  correctAnswer: 0,
  category: 'Science & Technology',
  difficulty: 'hard'
},
{
  id: 900,
  question: 'Which 1989 Hollywood fantasy-drama was based on the novel titled "Shoeless Joe"?',
  options: ['Field of Dreams', 'The Natural', 'Angels in the Outfield', 'The Sandlot'],
  correctAnswer: 0,
  category: 'TV & Cinema',
  difficulty: 'medium'
},
{
  id: 901,
  question: 'Which J.S. was for much of the 1960s the highest paid model in the world?',
  options: ['Jean Shrimpton', 'Jerry Hall', 'Jane Seymour', 'Janice Dickinson'],
  correctAnswer: 0,
  category: 'Arts & Culture',
  difficulty: 'medium'
},
{
  id: 902,
  question: 'Which airport in Canada was known as the "Cross-roads of the world" in the 1950s and early 1960s?',
  options: ['Gander', 'Toronto Pearson', 'Vancouver', 'Montréal-Trudeau'],
  correctAnswer: 0,
  category: 'History & Politics',
  difficulty: 'medium'
},
{
  id: 903,
  question: 'What is the name of the spider in Home Alone?',
  options: ['Axl', 'Rocky', 'Buzz', 'Spike'],
  correctAnswer: 0,
  category: 'TV & Cinema',
  difficulty: 'easy'
},
{
  id: 904,
  question: 'The national drink of Bermuda is a highball cocktail made with dark rum, ginger beer and a slice of lime. What is it called?',
  options: ['Dark \'n\' Stormy', 'Mai Tai', 'Zombie', 'Planter\'s Punch'],
  correctAnswer: 0,
  category: 'Arts & Culture',
  difficulty: 'medium'
},
{
  id: 905,
  question: "What were the names of the two Pink Floyd studio albums released between The Dark Side Of The Moon in 1973 and The Wall in 1979?",
  options: ["Animals and Wish You Were Here", "Meddle and Ummagumma", "Wish You Were Here and Animals", "Atom Heart Mother and The Final Cut"],
  correctAnswer: 2,
  category: "Music",
  difficulty: "medium"
},
{
  id: 906,
  question: "Amati, Stradivari and Guarneri violins were all once made in which Italian town?",
  options: ["Cremona", "Florence", "Naples", "Verona"],
  correctAnswer: 0,
  category: "Arts & Culture",
  difficulty: "medium"
},
{
  id: 907,
  question: "Which soundtrack album was the best selling album of the year in the US charts in both 1962 and 1963?",
  options: ["The Sound of Music", "My Fair Lady", "West Side Story", "South Pacific"],
  correctAnswer: 2,
  category: "Music",
  difficulty: "medium"
},
{
  id: 908,
  question: "Which currency is named after Christopher Columbus?",
  options: ["Peso", "Escudo", "Colon", "Real"],
  correctAnswer: 2,
  category: "History & Politics",
  difficulty: "medium"
},
{
  id: 909,
  question: "Which singer is sometimes called 'The First Lady of the British Invasion'?",
  options: ["Cilla Black", "Dusty Springfield", "Sandie Shaw", "Petula Clark"],
  correctAnswer: 3,
  category: "Music",
  difficulty: "medium"
},
{
  id: 910,
  question: "What was the maximum speed of the legendary German airship Hindenburg?",
  options: ["135 km/hr", "105 km/hr", "155 km/hr", "165 km/hr"],
  correctAnswer: 0,
  category: "Science & Technology",
  difficulty: "hard"
},
{
  id: 911,
  question: "Which two countries that do not exist today topped the medals table at the 1988 Summer Olympics in Seoul?",
  options: ["Soviet Union and East Germany", "Czechoslovakia and Yugoslavia", "East Germany and USSR", "USSR and Czechoslovakia"],
  correctAnswer: 0,
  category: "Sports",
  difficulty: "medium"
},
{
  id: 912,
  question: "An old name for the Inca sun god and the name given to a world famous ocean going vessel. Two words.",
  options: ["Pacha Kamaq", "Inti Ra", "Kon-Tiki", "Viracocha"],
  correctAnswer: 2,
  category: "Geography & Nature",
  difficulty: "hard"
},
{
  id: 913,
  question: "What was the name of the stadium in which The Beatles played their last official live concert on 29 August, 1966?",
  options: ["Wembley Stadium", "Candlestick Park", "Shea Stadium", "Madison Square Garden"],
  correctAnswer: 1,
  category: "Music",
  difficulty: "medium"
},
{
  id: 914,
  question: "Cantharis is better known as the Spanish what?",
  options: ["Spanish beetle", "Spanish fly", "Spanish wasp", "Spanish flea"],
  correctAnswer: 1,
  category: "Science & Technology",
  difficulty: "medium"
},
{
  id: 915,
  question: "Which oceanographer discovered the wrecks of the Titanic, the Bismarck, the USS Yorktown and JFK's PT-109?",
  options: ["Robert Ballard", "Jacques Cousteau", "Sylvia Earle", "James Cameron"],
  correctAnswer: 0,
  category: "Science & Technology",
  difficulty: "medium"
},
{
  id: 916,
  question: "Which two EU countries have blue and white national flags?",
  options: ["Sweden and Estonia", "France and Croatia", "Slovakia and Slovenia", "Finland and Greece"],
  correctAnswer: 3,
  category: "Geography & Nature",
  difficulty: "easy"
},
{
  id: 917,
  question: "Which word beginning with the letter 'F' is the industry term for the small particles of tea leaves used almost exclusively in tea bags?",
  options: ["Fannings", "Filaments", "Feathers", "Fragments"],
  correctAnswer: 0,
  category: "Science & Technology",
  difficulty: "medium"
},
{
  id: 918,
  question: "Which English model was apparently the inspiration for The Beatles songs 'Something' and 'I Need You', as well as Eric Clapton's 'Layla' and 'Wonderful Tonight'?",
  options: ["Twiggy", "Jane Asher", "Pattie Boyd", "Marianne Faithfull"],
  correctAnswer: 2,
  category: "Music",
  difficulty: "medium"
},
{
  id: 919,
  question: "In which film did Jürgen Prochnow play a Captain or Commander on board a submarine?",
  options: ["The Hunt for Red October", "K-19: The Widowmaker", "U-571", "Das Boot"],
  correctAnswer: 3,
  category: "TV & Cinema",
  difficulty: "medium"
},
{
  id: 920,
  question: "In which film did Scott Glenn play a Captain or Commander on board a submarine?",
  options: ["Crimson Tide", "The Hunt for Red October", "K-19: The Widowmaker", "U-571"],
  correctAnswer: 1,
  category: "TV & Cinema",
  difficulty: "medium"
},
{
  id: 921,
  question: "In which film did Liam Neeson play a Captain or Commander on board a submarine?",
  options: ["K-19: The Widowmaker", "The Hunt for Red October", "Crimson Tide", "Below"],
  correctAnswer: 0,
  category: "TV & Cinema",
  difficulty: "medium"
},
{
  id: 922,
  question: "An additional non-religious emblem for use by the International Red Cross and Red Crescent is called what?",
  options: ["Red Star", "Red Shield", "Red Crystal", "Red Heart"],
  correctAnswer: 2,
  category: "History & Politics",
  difficulty: "medium"
},
{
  id: 923,
  question: "Which Olympic champion, later a Hollywood film star, was the first female figure skater to wear skirts above the knee?",
  options: ["Dorothy Hamill", "Kristi Yamaguchi", "Sonja Henie", "Peggy Fleming"],
  correctAnswer: 2,
  category: "Sports",
  difficulty: "medium"
},
{
  id: 924,
  question: "Most of the US Mars Missions are conducted by NASA in conjunction with the JPL. What does the acronym JPL stand for?",
  options: ["Jet Propulsion Lab", "Joint Planetary Laboratory", "Jet Propulsion Laboratory", "Junction Physics Lab"],
  correctAnswer: 2,
  category: "Science & Technology",
  difficulty: "medium"
},
{
  id: 925,
  question: "The following was a movie poster tag line for which classic 1982 science fiction film? 'Man has made his match... now it's his problem'",
  options: ["Blade Runner", "Tron", "The Thing", "E.T. the Extra-Terrestrial"],
  correctAnswer: 0,
  category: "TV & Cinema",
  difficulty: "easy"
},
{
  id: 926,
  question: "What does the Enhanced Fujita Scale measure?",
  options: ["The strength of hurricanes", "The intensity of earthquakes", "The strength of tornadoes", "The size of tsunamis"],
  correctAnswer: 2,
  category: "Science & Technology",
  difficulty: "medium"
},
{
  id: 927,
  question: "Who was the only astronaut to have flown to the moon twice without setting foot on it?",
  options: ["Fred Haise", "Jim Lovell", "Michael Collins", "Ken Mattingly"],
  correctAnswer: 1,
  category: "Science & Technology",
  difficulty: "medium"
},
{
  id: 928,
  question: "What does SHU stand for in the context of spiciness?",
  options: ["Scoville Hotness Unit", "Spice Heat Unit", "Spicy Heat Understanding", "Scoville Heat Units"],
  correctAnswer: 3,
  category: "Science & Technology",
  difficulty: "easy"
},
{
  id: 929,
  question: "A woman screaming 'My jewels, I've been robbed' are the first words to which 1955 romantic thriller?",
  options: ["Dial M for Murder", "Notorious", "Vertigo", "To Catch A Thief"],
  correctAnswer: 3,
  category: "TV & Cinema",
  difficulty: "medium"
},
{
  id: 930,
  question: "Which duo, formerly with 10cc, made a name for themselves in the early 1980s directing music videos?",
  options: ["Godley and Creme", "Simon and Garfunkel", "Chas & Dave", "Tears for Fears"],
  correctAnswer: 0,
  category: "Music",
  difficulty: "medium"
},
{
  id: 931,
  question: "The name of which chemical element translated means 'hidden'?",
  options: ["Xenon", "Krypton", "Neon", "Radon"],
  correctAnswer: 1,
  category: "Science & Technology",
  difficulty: "medium"
},
{
  id: 932,
  question: "Named after the famous ship, the Beagle Channel separates which two countries?",
  options: ["Argentina and Brazil", "Peru and Chile", "Chile and Argentina", "Colombia and Ecuador"],
  correctAnswer: 2,
  category: "Geography & Nature",
  difficulty: "medium"
},
{
  id: 933,
  question: "Which best selling novelist directed the 1973 film Westworld?",
  options: ["Stephen King", "Dean Koontz", "Michael Crichton", "James Patterson"],
  correctAnswer: 2,
  category: "TV & Cinema",
  difficulty: "medium"
},
{
  id: 934,
  question: "Pluto was the name given to an Allied D Day operation. Pluto was an acronym for what? (five words)",
  options: [
    "Pipe lines under the ocean",
    "Prepare landings under tactical operations",
    "Protect logistics using transport operations",
    "Petroleum logistics under threat ordinance"
  ],
  correctAnswer: 0,
  category: "History & Politics",
  difficulty: "hard"
},
{
  id: 935,
  question: "Malossol, which means 'little salt', is associated with which high quality food product?",
  options: ["Caviar", "Prosciutto", "Foie Gras", "Parmesan"],
  correctAnswer: 0,
  category: "Arts & Culture",
  difficulty: "medium"
},
{
  id: 936,
  question: "In Greek mythology, Jason's ship was named the Argo. What does the Greek word argo mean?",
  options: ["Wooden", "Swift", "Silent", "Noble"],
  correctAnswer: 1,
  category: "Arts & Culture",
  difficulty: "medium"
},
{
  id: 937,
  question: "A type of footwear and the first name of the gangster played by George Raft in the film 'Some Like It Hot'.",
  options: ["Boots", "Spats", "Loafers", "Chuck"],
  correctAnswer: 1,
  category: "TV & Cinema",
  difficulty: "medium"
},
{
  id: 938,
  question: "Which Melody was the best selling song in the UK in both 1990 and 1995?",
  options: [
    "Bohemian Rhapsody",
    "Unchained Melody",
    "Candle in the Wind",
    "Angels"
  ],
  correctAnswer: 1,
  category: "Music",
  difficulty: "medium"
},
{
  id: 939,
  question: "Which actor has played both Adolf Hitler and John Lennon on screen?",
  options: ["Michael Fassbender", "David Thewlis", "Robert Carlyle", "Gary Oldman"],
  correctAnswer: 2,
  category: "TV & Cinema",
  difficulty: "medium"
},
{
  id: 940,
  question: "What was the nickname given to the first atom bomb detonated at the Trinity site in New Mexico?",
  options: ["Little Boy", "Fat Man", "Gadget", "Fireball"],
  correctAnswer: 2,
  category: "History & Politics",
  difficulty: "medium"
},
{
  id: 941,
  question: "Which 1937 film was the first full length animated movie?",
  options: ["Fantasia", "Snow White and the Seven Dwarfs", "Pinocchio", "Steamboat Willie"],
  correctAnswer: 1,
  category: "TV & Cinema",
  difficulty: "easy"
},
{
  id: 942,
  question: "What is the name of the comprehensive check a commercial jet undergoes approximately every 6–10 years?",
  options: ["Z check", "C check", "D check", "X inspection"],
  correctAnswer: 2,
  category: "Science & Technology",
  difficulty: "medium"
},
{
  id: 943,
  question: "Which famous singer and Oscar winner for Best Supporting Actor once said 'Cock your hat, angles are attitudes'?",
  options: ["Frank Sinatra", "Dean Martin", "Sammy Davis Jr.", "Bing Crosby"],
  correctAnswer: 0,
  category: "Arts & Culture",
  difficulty: "medium"
},
{
  id: 944,
  question: "How much was Al Pacino paid for his role in The Godfather?",
  options: ["10,000 dollars", "500,000 dollars", "35,000 dollars", "100,000 dollars"],
  correctAnswer: 2,
  category: "TV & Cinema",
  difficulty: "medium"
},
{
  id: 945,
  question: "What was the name given to the class of cargo ship built in the US during World War II that, at one point, took an average of only 42 days to construct?",
  options: ["Freedom ships", "Victory ships", "Liberty ships", "Patriot ships"],
  correctAnswer: 2,
  category: "History & Politics",
  difficulty: "medium"
},
{
  id: 946,
  question: "In which country is the so-called 'Suicide Forest'?",
  options: ["South Korea", "China", "Japan", "Thailand"],
  correctAnswer: 2,
  category: "Geography & Nature",
  difficulty: "easy"
},
{
  id: 947,
  question: "The name of which horn instrument translated may mean 'making noise'?",
  options: ["Bugle", "Alphorn", "Trombone", "Vuvuzela"],
  correctAnswer: 3,
  category: "Music",
  difficulty: "hard"
},
{
  id: 948,
  question: "Which female solo artist had the most No.1 hits in the UK charts during the 1990s?",
  options: ["Madonna", "Cher", "Whitney Houston", "Kylie Minogue"],
  correctAnswer: 1,
  category: "Music",
  difficulty: "medium"
},
{
  id: 949,
  question: "What is the smallest country in continental Africa?",
  options: ["Djibouti", "Equatorial Guinea", "Burundi", "The Gambia"],
  correctAnswer: 3,
  category: "Geography & Nature",
  difficulty: "medium"
},
{
  id: 950,
  question: "The name for which ancient form of brain surgery stems from the Greek word for 'borer' or 'auger'?",
  options: ["Trepanation", "Craniectomy", "Lobotomy", "Neurotomy"],
  correctAnswer: 0,
  category: "Science & Technology",
  difficulty: "hard"
},
{
  id: 951,
  question: "Which isolated location was the best selling song of the year in the UK in 1977?",
  options: ["Isle of Skye", "Wuthering Heights", "Mull of Kintyre", "Loch Lomond"],
  correctAnswer: 2,
  category: "Music",
  difficulty: "medium"
},
{
  id: 952,
  question: "The title of which 2015 Hollywood blockbuster translated means the 'returning one'?",
  options: ["The Revenant", "The Martian", "Arrival", "Gravity"],
  correctAnswer: 0,
  category: "TV & Cinema",
  difficulty: "easy"
},
{
  id: 953,
  question: 'In song, which titular character was "like a leper messiah"?',
  options: ["Major Tom", "Ziggy Stardust", "Jean Genie", "Aladdin Sane"],
  correctAnswer: 1,
  category: "Music",
  difficulty: "medium"
},
{
  id: 954,
  question: "According to legend, droplets of blood from which Roman goddess turned roses red?",
  options: ["Juno", "Minerva", "Diana", "Venus"],
  correctAnswer: 3,
  category: "Arts & Culture",
  difficulty: "medium"
},
{
  id: 955,
  question: "In the October of which year did Bobby 'Boris' Pickett release his hit song The Monster Mash?",
  options: ["1959", "1962", "1965", "1968"],
  correctAnswer: 1,
  category: "Music",
  difficulty: "medium"
},
{
  id: 956,
  question: "Which actor played both Adolf Hitler and John Lennon on screen?",
  options: ["Daniel Day-Lewis", "Gary Oldman", "Robert Carlyle", "Christian Bale"],
  correctAnswer: 0,
  category: "TV & Cinema",
  difficulty: "medium"
},
{
  id: 957,
  question: "Which Beatle does not wear a moustache in the film Yellow Submarine?",
  options: ["Ringo", "George", "Paul", "John"],
  correctAnswer: 2,
  category: "Music",
  difficulty: "easy"
},
{
  id: 958,
  question: "Clinomania is an excessive desire to stay where?",
  options: ["In bed", "At home", "At work", "Outdoors"],
  correctAnswer: 0,
  category: "Science & Technology",
  difficulty: "medium"
},
{
  id: 959,
  question: "Which four digit number is the last year mentioned in the Zager and Evans song 'In The Year 2525'?",
  options: ["9595", "9999", "9090", "2525"],
  correctAnswer: 3,
  category: "Music",
  difficulty: "medium"
},
{
  id: 960,
  question: "Founded in 1585 and sometimes known as 'The Lost Colony', what was the name of the first English settlement in the New World?",
  options: ["Jamestown", "Roanoke", "Plymouth", "Charlestown"],
  correctAnswer: 1,
  category: "History & Politics",
  difficulty: "medium"
},
{
  id: 961,
  question: "Jeepney's are the most popular means of public transport in which country?",
  options: ["Philippines", "India", "Indonesia", "Thailand"],
  correctAnswer: 0,
  category: "Geography & Nature",
  difficulty: "easy"
},
{
  id: 962,
  question: "Which actor had a 1989 top ten hit in the US music charts with a cover of the song 'Save the Last Dance For Me'?",
  options: ["Patrick Swayze", "Bruce Willis", "Billy Crystal", "Kevin Costner"],
  correctAnswer: 1,
  category: "Music",
  difficulty: "medium"
},
{
  id: 963,
  question: "How many miles of rope were needed to rig the HMS Victory?",
  options: ["16 miles", "20 miles", "22 miles", "26 miles"],
  correctAnswer: 3,
  category: "History & Politics",
  difficulty: "hard"
},
{
  id: 964,
  question: "What do the national anthems of Bosnia and Herzegovina, Kosovo, Spain and San Marino all have in common?",
  options: ["Same composer", "Written in Latin", "No lyrics", "Include guitar solos"],
  correctAnswer: 2,
  category: "Geography & Nature",
  difficulty: "medium"
},
{
  id: 965,
  question: "In which famous painting is God depicted in a horizontal position for the first time in the history of art?",
  options: ["The Last Supper", "The Creation of Adam", "The Birth of Venus", "The School of Athens"],
  correctAnswer: 1,
  category: "Arts & Culture",
  difficulty: "medium"
},
{
  id: 966,
  question: "Which film director was married to, amongst others, Brigitte Bardot and Jane Fonda; and lived with Catherine Deneuve?",
  options: ["Roger Vadim", "François Truffaut", "Jean-Luc Godard", "Roman Polanski"],
  correctAnswer: 0,
  category: "TV & Cinema",
  difficulty: "medium"
},
{
  id: 967,
  question: "In the Indonesian and Malay cuisine what does 'goreng' mean?",
  options: ["Spicy", "Fried", "Sweet", "Pickled"],
  correctAnswer: 1,
  category: "Language",
  difficulty: "easy"
},
{
  id: 968,
  question: "What is the southern and eastern French-speaking part of Belgium called?",
  options: ["Flanders", "Brabant", "Wallonia", "Namur"],
  correctAnswer: 2,
  category: "Geography & Nature",
  difficulty: "easy"
},
{
  id: 969,
  question: "What is, according to the UN, the most discarded waste item worldwide?",
  options: ["Plastic bottles", "Cigarette butts", "Food wrappers", "Paper"],
  correctAnswer: 1,
  category: "Science & Technology",
  difficulty: "medium"
},
{
  id: 970,
  question: "The name of which game translated means 'sparrow warfare'?",
  options: ["Mahjong", "Go", "Shogi", "Carrom"],
  correctAnswer: 0,
  category: "Arts & Culture",
  difficulty: "medium"
},
{
  id: 971,
  question: "THX 1138 was which director's feature film debut?",
  options: ["Steven Spielberg", "George Lucas", "Francis Ford Coppola", "Ridley Scott"],
  correctAnswer: 1,
  category: "TV & Cinema",
  difficulty: "medium"
},
{
  id: 972,
  question: "In which 2009 Hollywood movie is the language Na'vi spoken?",
  options: ["Star Trek", "John Carter", "Avatar", "Prometheus"],
  correctAnswer: 2,
  category: "TV & Cinema",
  difficulty: "easy"
},
{
  id: 973,
  question: "Which American was crowned the world's first billionaire in 1916?",
  options: ["Andrew Carnegie", "J.P. Morgan", "Cornelius Vanderbilt", "J.D. Rockefeller"],
  correctAnswer: 3,
  category: "History & Politics",
  difficulty: "medium"
},
{
  id: 974,
  question: "The 2004 marriage of which celebrity couple lasted 55 days?",
  options: ["Britney Spears and Jason Alexander", "Carmen Electra and Dennis Rodman", "Nicolas Cage and Lisa Marie Presley", "Kim Kardashian and Kris Humphries"],
  correctAnswer: 0,
  category: "TV & Cinema",
  difficulty: "easy"
},
{
  id: 975,
  question: "Which number was the best selling album on both sides of the Atlantic in the year 2000?",
  options: ["21 (Adele)", "1 (Beatles)", "2001 (Dr. Dre)", "1989 (Taylor Swift)"],
  correctAnswer: 1,
  category: "Music",
  difficulty: "medium"
},
{
  id: 976,
  question: "The following was the movie poster tag line to which 1966 film? 'For three men the Civil War wasn't hell. It was practice.'",
  options: ["The Good, the Bad and the Ugly", "A Fistful of Dollars", "The Magnificent Seven", "Once Upon a Time in the West"],
  correctAnswer: 0,
  category: "TV & Cinema",
  difficulty: "medium"
},
{
  id: 977,
  question: "Winston and Julia lead a doomed romance in which cult novel?",
  options: ["Brave New World", "1984", "Fahrenheit 451", "The Handmaid's Tale"],
  correctAnswer: 1,
  category: "Literature",
  difficulty: "easy"
},
{
  id: 978,
  question: "In which popular television series is the martial art Anbo-Jytsu practiced?",
  options: ["Battlestar Galactica", "Stargate SG-1", "Star Trek: The Next Generation", "The Expanse"],
  correctAnswer: 2,
  category: "TV & Cinema",
  difficulty: "hard"
},
{
  id: 979,
  question: "Who was the only 14 year old to have been ranked in the top 10 in women's tennis?",
  options: ["Martina Hingis", "Monica Seles", "Jennifer Capriati", "Steffi Graf"],
  correctAnswer: 2,
  category: "Sports",
  difficulty: "medium"
},
{
  id: 980,
  question: "Which three countries in the world have the highest prison populations?",
  options: ["Russia, China, India", "USA, China, Brazil", "Brazil, Mexico, Indonesia", "USA, Russia, Iran"],
  correctAnswer: 1,
  category: "Geography & Nature",
  difficulty: "medium"
},
{
  id: 981,
  question: "Which popular 1964 children's book did Ian Fleming write?",
  options: ["James and the Giant Peach", "Charlie and the Chocolate Factory", "Chitty-Chitty-Bang-Bang", "The Phantom Tollbooth"],
  correctAnswer: 2,
  category: "Literature",
  difficulty: "easy"
},
{
  id: 982,
  question: "Plus or minus 4, in which year did Mattel announce that Barbie and Ken were splitting?",
  options: ["1999", "2004", "2009", "2014"],
  correctAnswer: 1,
  category: "Arts & Culture",
  difficulty: "medium"
},
{
  id: 983,
  question: "Which ancient ethnic group and or tribe was a 1969 number one hit single in the UK charts (no. 9 in the US charts)?",
  options: ["The Moors", "The Israelites", "The Huns", "The Carthaginians"],
  correctAnswer: 1,
  category: "Music",
  difficulty: "medium"
},
{
  id: 984,
  question: "Which luxury car uses a modified lemniscate symbol as its logo?",
  options: ["Acura", "Infiniti", "Lexus", "Genesis"],
  correctAnswer: 1,
  category: "Science & Technology",
  difficulty: "hard"
},
{
  id: 985,
  question: "In the first half of the 18th century, people in London famously went “crazy” for which popular alcohol?",
  options: ["Vodka", "Gin", "Absinthe", "Whiskey"],
  correctAnswer: 1,
  category: "History & Politics",
  difficulty: "medium"
},
{
  id: 986,
  question: "Plus or minus 5, in which year did the WHO claim that smallpox was eradicated?",
  options: ["1975", "1985", "1980", "1990"],
  correctAnswer: 2,
  category: "Science & Technology",
  difficulty: "medium"
},
{
  id: 987,
  question: "What are the names of the two most populated cities in Russia that end with the letter 'g'?",
  options: ["Moscow and Yekaterinburg", "Saint Petersburg and Yekaterinburg", "Saint Petersburg and Novosibirsk", "Kazan and Volgograd"],
  correctAnswer: 1,
  category: "Geography & Nature",
  difficulty: "medium"
},
{
  id: 988,
  question: "According to the party in the novel 1984, 'Ignorance is' what?",
  options: ["Freedom", "Strength", "Truth", "Control"],
  correctAnswer: 1,
  category: "Literature",
  difficulty: "easy"
},
{
  id: 989,
  question: "Translated, orchid and avocado both stem from words that mean what?",
  options: ["Seed", "Fruit", "Testicle", "Egg"],
  correctAnswer: 2,
  category: "Language",
  difficulty: "medium"
},
{
  id: 990,
  question: "It is said that the last words of which famous 16th century Frenchman were 'Tomorrow, at sunrise, I shall no longer be here'?",
  options: ["Montaigne", "Voltaire", "Descartes", "Nostradamus"],
  correctAnswer: 3,
  category: "History & Politics",
  difficulty: "medium"
},
{
  id: 991,
  question: `"We must leave exactly on time – From now on, everything must function to perfection." Whose words were these, spoken to a station-master and quoted in 1939, part of the mythology that the trains always ran on time under Fascist dictatorships?`,
  options: ["Franco", "Stalin", "Mussolini", "Hitler"],
  correctAnswer: 2,
  category: "History & Politics",
  difficulty: "medium"
},
{
  id: 992,
  question: "Which village near Vienna is the site of the hunting lodge where the Habsburg crown prince Rudolf and his paramour Mary Vetsera committed suicide in mysterious circumstances in 1889?",
  options: ["Mayerling", "Schönbrunn", "Salzkammergut", "Grinzing"],
  correctAnswer: 0,
  category: "History & Politics",
  difficulty: "medium"
},
{
  id: 993,
  question: "What name is that of an Arian Christian Germanic people who maintained a North African kingdom in the 5th and 6th centuries and who, under their king Gaiseric, sacked Rome in 455?",
  options: ["Vandal", "Visigoth", "Ostrogoth", "Frank"],
  correctAnswer: 0,
  category: "History & Politics",
  difficulty: "medium"
},
{
  id: 994,
  question: "In cytogenetics, what term describes the entire chromosomal complement of a cell which may be observed during mitotic metaphase?",
  options: ["Genome", "Karyotype", "Phenotype", "Genotype"],
  correctAnswer: 1,
  category: "Science & Technology",
  difficulty: "hard"
},
{
  id: 995,
  question: "'In the darkening twilight I saw a lone star hover gem-like above the bay.' This was the last diary entry of which explorer, written on January 5th 1922 at Grytviken in South Georgia?",
  options: ["Robert Falcon Scott", "Ernest Shackleton", "Roald Amundsen", "Douglas Mawson"],
  correctAnswer: 1,
  category: "History & Politics",
  difficulty: "medium"
},
{
  id: 996,
  question: "Sao Vincente, Boa Vista and Santiago are among the islands of which republic? It gained its independence from Portugal in 1975, has a population of around half a million, and is situated around 600 kilometres from the coast of West Africa.",
  options: ["Cape Verde", "São Tomé and Príncipe", "Comoros", "Equatorial Guinea"],
  correctAnswer: 0,
  category: "Geography & Nature",
  difficulty: "medium"
},
{
  id: 997,
  question: "'The Strangest Man' by Graham Farmelo is a 2009 biography of which scientist, who applied Einstein's Theory of Relativity to quantum mechanics in order to describe the spin of an electron? In 1933 he shared the Nobel Prize for physics with Erwin Schrödinger.",
  options: ["Paul Dirac", "Niels Bohr", "Wolfgang Pauli", "Werner Heisenberg"],
  correctAnswer: 0,
  category: "Science & Technology",
  difficulty: "hard"
},
{
  id: 998,
  question: "Often featuring in photographic illusions caused by forced perspective, which structure was begun in 1173 as the third and final structure of its city's cathedral complex? Designed to be 56 metres high, improvements to the foundations since 1990 have diminished its distinctive aberration.",
  options: ["Leaning Tower of Pisa", "Hagia Sophia", "Sagrada Família", "Cologne Cathedral"],
  correctAnswer: 0,
  category: "Arts & Culture",
  difficulty: "medium"
},
{
  id: 999,
  question: "What kind of pillow was a quintessential psychedelic rock album from Jefferson Airplane?",
  options: ["Surrealistic Pillow", "Electric Pillow", "Dreamy Pillow", "Psychedelic Pillow"],
  correctAnswer: 2,
  category: "Music",
  difficulty: "medium"
},
{
  id: 1000,
  question: "How many people have walked on the moon?",
  options: ["8", "10", "12", "14"],
  correctAnswer: 2,
  category: "Science & Technology",
  difficulty: "medium"
},
{
  id: 1001,
  question: "In the world of sport, which trophy has been nicknamed the 'Auld Mug'?",
  options: ["Ryder Cup", "Claret Jug", "The America's Cup", "Webb Ellis Cup"],
  correctAnswer: 2,
  category: "Sports",
  difficulty: "medium"
},
{
  id: 1002,
  question: "In the world of Marvel Comics, what is the name of the metal from which Thor's hammer is made?",
  options: ["Adamantium", "Uru", "Vibranium", "Titanium"],
  correctAnswer: 1,
  category: "TV & Cinema",
  difficulty: "hard"
},
{
  id: 1003,
  question: "In which film, an epic historical drama from the year 1984, do Laurence Olivier, Edward Fox, Liam Neeson, Daniel Day-Lewis and Bernard Hill all have minor roles?",
  options: ["Chariots of Fire", "The Bounty", "Gandhi", "A Passage to India"],
  correctAnswer: 1,
  category: "TV & Cinema",
  difficulty: "hard"
},
{
  id: 1004,
  question: "Which popular Bengali curry dish translated means 'hot-fry'?",
  options: ["Korma", "Jalfrezi", "Vindaloo", "Rogan Josh"],
  correctAnswer: 1,
  category: "Geography & Nature",
  difficulty: "medium"
},
{
  id: 1005,
  question: "Due to its extreme gravity, which object possesses an event horizon, a boundary beyond which events cannot affect an observer?",
  options: ["White dwarf", "Pulsar", "Black hole", "Neutron star"],
  correctAnswer: 2,
  category: "Science & Technology",
  difficulty: "hard"
},
{
  id: 1006,
  question: "What is the name of a luminous giant star of low or intermediate mass in the late phase of stellar evolution, possessing a large radius and a relatively cool surface temperature?",
  options: ["Red giant", "White dwarf", "Protostar", "Supergiant"],
  correctAnswer: 0,
  category: "Science & Technology",
  difficulty: "hard"
},
{
  id: 1007,
  question: "What is the name of a dense stellar core remnant that contains mostly electron-degenerate matter?",
  options: ["White dwarf", "Black hole", "Neutron star", "Red dwarf"],
  correctAnswer: 0,
  category: "Science & Technology",
  difficulty: "hard"
},
{
  id: 1008,
  question: "Which planet possesses an atmosphere approximately 90 times denser than that of the Earth, mostly made of carbon dioxide, and with an average temperature of 460°C, the hottest in the solar system?",
  options: ["Venus", "Mercury", "Mars", "Jupiter"],
  correctAnswer: 0,
  category: "Science & Technology",
  difficulty: "hard"
},
{
  id: 1009,
  question: "Which two elements comprise approximately 99% of the Earth’s atmosphere?",
  options: ["Nitrogen and Carbon Dioxide", "Oxygen and Argon", "Nitrogen and Oxygen", "Oxygen and Carbon Dioxide"],
  correctAnswer: 2,
  category: "Science & Technology",
  difficulty: "hard"
},
{
  id: 1010,
  question: "The Kármán line, where by one convention outer space begins, is at what altitude?",
  options: ["100 km", "50 km", "200 km", "150 km"],
  correctAnswer: 0,
  category: "Science & Technology",
  difficulty: "hard"
},
{
  id: 1011,
  question: "Developed and named by James Lovelock, what is the name of the theory that all living organisms interact with their inorganic surroundings to form a self-regulating system for life on Earth?",
  options: ["Gaia theory", "Anthropic principle", "Homeostasis hypothesis", "Earth systems model"],
  correctAnswer: 0,
  category: "Science & Technology",
  difficulty: "hard"
},
{
  id: 1012,
  question: "Andromeda, M63, and the Milky Way are all examples of what large astronomical structure, consisting of stars, stellar remnants, gas, dust, and dark matter all gravitationally interacting?",
  options: ["Quasar", "Galaxy", "Nebula", "Supernova remnant"],
  correctAnswer: 1,
  category: "Science & Technology",
  difficulty: "hard"
},
{
  id: 1013,
  question: "Crepuscular refers to animals that are predominantly active at which times?",
  options: ["Midday", "Midnight", "Dawn and dusk", "All day"],
  correctAnswer: 2,
  category: "Science & Technology",
  difficulty: "medium"
},
{
  id: 1014,
  question: "Bioluminescence refers to the emission of what by a living organism?",
  options: ["Heat", "Sound", "Light", "Electricity"],
  correctAnswer: 2,
  category: "Science & Technology",
  difficulty: "easy"
},
{
  id: 1015,
  question: "Which term refers to carnivores that primarily consume fish?",
  options: ["Insectivorous", "Piscivorous", "Omnivorous", "Herbivorous"],
  correctAnswer: 1,
  category: "Science & Technology",
  difficulty: "medium"
},
{
  id: 1016,
  question: "Protium, deuterium, and tritium are all isotopes of which element?",
  options: ["Hydrogen", "Oxygen", "Carbon", "Helium"],
  correctAnswer: 0,
  category: "Science & Technology",
  difficulty: "medium"
},
{
  id: 1017,
  question: "What is the term for a mixture of chemical elements of which at least one is a metal?",
  options: ["Compound", "Solution", "Alloy", "Colloid"],
  correctAnswer: 2,
  category: "Science & Technology",
  difficulty: "easy"
},
{
  id: 1018,
  question: "What is the term for a substance consisting of very large molecules called macromolecules, composed of many repeating subunits?",
  options: ["Colloid", "Crystal", "Polymer", "Gel"],
  correctAnswer: 2,
  category: "Science & Technology",
  difficulty: "medium"
},
{
  id: 1019,
  question: "What is the term for a molecule that is seemingly repelled from a mass of water due to its nonpolarity?",
  options: ["Hydrophile", "Solute", "Hydrophobe", "Micelle"],
  correctAnswer: 2,
  category: "Science & Technology",
  difficulty: "medium"
},
{
  id: 1020,
  question: "Which is the most southerly capital city in the world?",
  options: ["Buenos Aires", "Canberra", "Wellington", "Cape Town"],
  correctAnswer: 2,
  category: "Geography & Nature",
  difficulty: "medium"
},
{
  id: 1021,
  question: "Situated in South America, which capital is at the highest altitude?",
  options: ["Bogotá", "La Paz", "Quito", "Caracas"],
  correctAnswer: 1,
  category: "Geography & Nature",
  difficulty: "medium"
},
{
  id: 1022,
  question: "Situated in central Asia, which is the coldest capital city in the world?",
  options: ["Astana", "Ulaanbaatar", "Moscow", "Helsinki"],
  correctAnswer: 1,
  category: "Geography & Nature",
  difficulty: "medium"
},
{
  id: 1023,
  question: "Bill Murray, Jim Carrey, Patrick Stewart, and Michael Caine have all played which un-festive character, the protagonist of an 1843 novel by Charles Dickens, in various screen adaptations?",
  options: ["Jacob Marley", "Bob Cratchit", "Tiny Tim", "Ebenezer Scrooge"],
  correctAnswer: 3,
  category: "Literature",
  difficulty: "medium"
},
{
  id: 1024,
  question: "Originally known as Queens Street, which famous street in Bristol is home to The Scrandit, Rova, and Chance & Counters?",
  options: ["Christmas Steps", "Angel Lane", "Tinsel Row", "Mistletoe Crescent"],
  correctAnswer: 0,
  category: "Geography & Nature",
  difficulty: "medium"
},
{
  id: 1025,
  question: "Christmas Cross is an area in which English county? Its residents are known as Salopians.",
  options: ["Somerset", "Gloucestershire", "Shropshire", "Cornwall"],
  correctAnswer: 2,
  category: "Geography & Nature",
  difficulty: "medium"
},
{
  id: 1026,
  question: "Turkey Island is an area in the City of Winchester, in which English county? According to the musical My Fair Lady, hurricanes hardly happen there.",
  options: ["Hertfordshire", "Hampshire", "Cambridgeshire", "Essex"],
  correctAnswer: 1,
  category: "Geography & Nature",
  difficulty: "medium"
},
{
  id: 1027,
  question: "Lexical root of the words Kaiser and Tsar, which Imperial title comes from the name of a Roman dictator born in 100BC and dying in 44BC to multiple stab wounds?",
  options: ["Caesar", "Imperator", "Dictator", "Augustus"],
  correctAnswer: 0,
  category: "History & Politics",
  difficulty: "medium"
},
{
  id: 1028,
  question: "In the biblical narrative, which Roman emperor ordered the census that Joseph and Mary were returning to Bethlehem for?",
  options: ["Tiberius", "Caesar Augustus", "Nero", "Caligula"],
  correctAnswer: 1,
  category: "History & Politics",
  difficulty: "medium"
},
{
  id: 1029,
  question: "Bethlehem was in the Roman province of Judea, conquered in 63BC by which general, member of the first triumvirate with Julius Caesar and Marcus Crassus?",
  options: ["Pompey", "Brutus", "Cicero", "Mark Antony"],
  correctAnswer: 0,
  category: "History & Politics",
  difficulty: "hard"
},
{
  id: 1030,
  question: "What was the name of the Roman festival held in mid-winter, featuring feasting, candles, and gift-giving? It takes its name from a planet in our solar system.",
  options: ["Saturnalia", "Lupercalia", "Brumalia", "Equinoxia"],
  correctAnswer: 0,
  category: "History & Politics",
  difficulty: "medium"
},
{
  id: 1031,
  question: "The Kingdom of Lydia in modern Turkey was notable for being the first people to use what common form of currency, typically made from gold, silver, or copper?",
  options: ["coins", "paper notes", "barter tokens", "credit chits"],
  correctAnswer: 0,
  category: "History & Politics",
  difficulty: "medium"
},
{
  id: 1032,
  question: "“Hope is the thing with feathers”, “Because I could not stop for death”, and “Wild Nights - Wild Nights” are all poems by which American female poet, born in 1830?",
  options: ["Maya Angelou", "Sylvia Plath", "Emily Dickinson", "Elizabeth Barrett Browning"],
  correctAnswer: 2,
  category: "Literature",
  difficulty: "medium"
},
{
  id: 1033,
  question: "“Cannon to the right of them, cannon to the left of them, cannon in front of them, volleyed and thundered”. So begins which poem written by Lord Tennyson, describing a disastrous battle in the Crimean War?",
  options: ["The Charge of the Light Brigade", "Dulce et Decorum Est", "The Battle of Balaclava", "Ode to the West Wind"],
  correctAnswer: 0,
  category: "Literature",
  difficulty: "medium"
},
{
  id: 1034,
  question: "\"Once upon a midnight dreary, while I pondered, weak and weary, Over many a quaint and curious volume of forgotten lore—” is the beginning of The Raven by which American poet?",
  options: ["Walt Whitman", "Robert Frost", "Edgar Allan Poe", "Langston Hughes"],
  correctAnswer: 2,
  category: "Literature",
  difficulty: "medium"
},
{
  id: 1035,
  question: "“Out of the night that covers me, Black as the pit from pole to pole, I thank whatever gods may be For my unconquerable soul.” is the beginning of Invictus, a poem regularly recited by which 20th-century African leader during his imprisonment?",
  options: ["Desmond Tutu", "Kwame Nkrumah", "Nelson Mandela", "Patrice Lumumba"],
  correctAnswer: 2,
  category: "History & Politics",
  difficulty: "medium"
},
{
  id: 1036,
  question: "The best-selling book in the UK in 2021 was The Thursday Murder Club, written by which British author, best known as a host on the quiz show Pointless?",
  options: ["Richard Osman", "Stephen Fry", "Lee Child", "Ian Rankin"],
  correctAnswer: 0,
  category: "Literature",
  difficulty: "easy"
},
{
  id: 1037,
  question: "Down, Cork, Antrim, and Dublin are all counties in which European nation?",
  options: ["Ireland", "United Kingdom", "France", "Belgium"],
  correctAnswer: 0,
  category: "Geography & Nature",
  difficulty: "easy"
},
{
  id: 1038,
  question: "When did the Republic of Ireland gain independence from Great Britain?",
  options: ["1916", "1921", "1937", "1949"],
  correctAnswer: 1,
  category: "History & Politics",
  difficulty: "medium"
},
{
  id: 1039,
  question: "Name the decade: George the IV ascends to the throne, the first dinosaur bones are identified, and London Zoo opens.",
  options: ["1840s", "1830s", "1820s", "1810s"],
  correctAnswer: 2,
  category: "History & Politics",
  difficulty: "medium"
},
{
  id: 1040,
  question: "Name the decade: The Great Exhibition is held, the great famine of Ireland ends, and Lord Palmerston becomes Prime Minister.",
  options: ["1860s", "1840s", "1850s", "1830s"],
  correctAnswer: 2,
  category: "History & Politics",
  difficulty: "medium"
},
{
  id: 1041,
  question: "Name the decade: The world’s first traffic lights are installed, Clapham Junction Railway station opens, and the last cholera epidemic in London occurs.",
  options: ["1860s", "1880s", "1870s", "1850s"],
  correctAnswer: 0,
  category: "History & Politics",
  difficulty: "medium"
},
{
  id: 1042,
  question: "The Christmas tree in Trafalgar Square in London is a gift from which country every year in recognition of British support of that country in WW2?",
  options: ["Denmark", "Sweden", "Finland", "Norway"],
  correctAnswer: 3,
  category: "History & Politics",
  difficulty: "easy"
},
{
  id: 1043,
  question: "The Limpopo, the Zambezi, and the Congo are all rivers in which continent?",
  options: ["Asia", "Africa", "South America", "Australia"],
  correctAnswer: 1,
  category: "Geography & Nature",
  difficulty: "easy"
},
{
  id: 1044,
  question: "Name the decade: Nigeria, Ghana, and Kenya declared independence from Britain, the first Olympic gold medal was won by an African, and the first heart transplant was performed.",
  options: ["1970s", "1950s", "1980s", "1960s"],
  correctAnswer: 3,
  category: "History & Politics",
  difficulty: "medium"
},
{
  id: 1045,
  question: "Name the decade: The Wadai war between the French colonial empire and the Wadai empire, the end of Moroccan independence, and the German-British Battle for Lake Tanganyika.",
  options: ["1920s", "1900s", "1910s", "1930s"],
  correctAnswer: 2,
  category: "History & Politics",
  difficulty: "hard"
},
{
  id: 1046,
  question: "Name the decade: Nelson Mandela is elected president of South Africa, the Rwandan genocide starts, and the first African is elected to be secretary general of the United Nations.",
  options: ["1980s", "1990s", "2000s", "1970s"],
  correctAnswer: 1,
  category: "History & Politics",
  difficulty: "medium"
},
{
  id: 1047,
  question: "Memphis, Thebes, and Akhenaten have all been capitals of which African country?",
  options: ["Libya", "Egypt", "Ethiopia", "Morocco"],
  correctAnswer: 1,
  category: "Geography & Nature",
  difficulty: "easy"
},
{
  id: 1048,
  question: "Name the Egyptian god: Depicted as a falcon-headed man wearing a white and red crown, the god of kingship and the sky.",
  options: ["Anubis", "Ra", "Horus", "Osiris"],
  correctAnswer: 2,
  category: "Arts & Culture",
  difficulty: "medium"
},
{
  id: 1049,
  question: "Name the Egyptian god: The god of death, mummification, and the afterlife, depicted as a man with a jackal’s head.",
  options: ["Anubis", "Set", "Thoth", "Sobek"],
  correctAnswer: 0,
  category: "Arts & Culture",
  difficulty: "medium"
},
{
  id: 1050,
  question: "Name the Egyptian god: A creator god, patron of craftsmen and architects. Regarded as the father of the sage Imhotep.",
  options: ["Ptah", "Ra", "Khnum", "Amun"],
  correctAnswer: 0,
  category: "Arts & Culture",
  difficulty: "medium"
},
{
  id: 1051,
  question: "What was the name of the Imperial dynasty that ruled China from 1368 to 1644, renowned for its flourishing of culture, especially ceramics?",
  options: ["Qing", "Song", "Tang", "Ming"],
  correctAnswer: 3,
  category: "History & Politics",
  difficulty: "medium"
},
{
  id: 1052,
  question: "Cao Wei, Shu Han, and Eastern Wu were the initial dynastic states during which period of Chinese history, featuring individuals such as Zhang Heng and Cao Cao lasting from 220 to 280AD?",
  options: ["Spring and Autumn", "Three Kingdoms", "Han Dynasty", "Warring States"],
  correctAnswer: 1,
  category: "History & Politics",
  difficulty: "hard"
},
{
  id: 1053,
  question: "What was the name of the final dynasty in Chinese history, ending in 1912 with the Xinhai revolution?",
  options: ["Ming", "Yuan", "Qing", "Tang"],
  correctAnswer: 2,
  category: "History & Politics",
  difficulty: "medium"
},
{
  id: 1054,
  question: "On the Origin of Species, Frankenstein, War and Peace, and Beethoven’s 9th symphony were all published in which century?",
  options: ["18th century", "20th century", "17th century", "19th century"],
  correctAnswer: 3,
  category: "Arts & Culture",
  difficulty: "medium"
},
{
  id: 1055,
  question: "Strength, Dexterity, Constitution, Intelligence, Wisdom, and which other characteristic are the six ability scores in Dungeons and Dragons?",
  options: ["Agility", "Fortitude", "Luck", "Charisma"],
  correctAnswer: 3,
  category: "TV & Cinema",
  difficulty: "easy"
},
{
  id: 1056,
  question: "Maryam Mirzakhani, Cedric Villani, and Terence Tao are all winners of the Fields Medal, the highest award in which academic discipline?",
  options: ["Physics", "Computer Science", "Mathematics", "Engineering"],
  correctAnswer: 2,
  category: "Science & Technology",
  difficulty: "medium"
},
{
  id: 1057,
  question: "With a value of approximately 3, which constant is irrational and transcendental, and has been calculated to trillions of digits?",
  options: ["e", "phi", "tau", "pi"],
  correctAnswer: 3,
  category: "Science & Technology",
  difficulty: "easy"
},
{
  id: 1058,
  question: "With a value of approximately 2.71, which constant is the base of the natural logarithm, sometimes known as Euler’s number?",
  options: ["phi", "e", "i", "pi"],
  correctAnswer: 1,
  category: "Science & Technology",
  difficulty: "medium"
},
{
  id: 1059,
  question: "With a value of approximately 1.62, which constant is the ratio of a regular pentagon’s diagonal to its side, and is said to appear in patterns in art and nature?",
  options: ["pi", "tau", "e", "golden ratio"],
  correctAnswer: 3,
  category: "Science & Technology",
  difficulty: "medium"
},
{
  id: 1060,
  question: "Orbited by moons including Titan, Enceladus, and Mimas, which planet is famous for its impressive system of rings, comprised almost entirely of water ice?",
  options: ["Uranus", "Saturn", "Neptune", "Jupiter"],
  correctAnswer: 1,
  category: "Science & Technology",
  difficulty: "easy"
},
{
  id: 1061,
  question: "Name the planet: A rocky planet about half the size of Earth with a tenuous atmosphere mostly comprised of carbon dioxide",
  options: ["Venus", "Mercury", "Mars", "Earth"],
  correctAnswer: 2,
  category: "Science & Technology",
  difficulty: "easy"
},
{
  id: 1062,
  question: "Name the planet: A gas giant with 80 known satellites and a great red spot",
  options: ["Uranus", "Saturn", "Neptune", "Jupiter"],
  correctAnswer: 3,
  category: "Science & Technology",
  difficulty: "easy"
},
{
  id: 1063,
  question: "Name the planet: The seventh planet from the sun, notable for an axial tilt of nearly 98 degrees",
  options: ["Uranus", "Saturn", "Neptune", "Venus"],
  correctAnswer: 0,
  category: "Science & Technology",
  difficulty: "medium"
},
  {
    id: 1064,
    question: "If Earth has a value of 1, the Moon is 0.17, Mars is 0.38, and Jupiter is 2.4, what am I measuring?",
    options: ["Orbital radius", "Surface gravity in g", "Mass relative to Earth", "Atmospheric pressure"],
    correctAnswer: 1,
    category: "Science & Technology",
    difficulty: "hard"
  },
  {
    id: 1065,
    question: "A sleigh is travelling at 15 m/s. How long does it take to travel 90 metres?",
    options: ["4 seconds", "6 seconds", "9 seconds", "12 seconds"],
    correctAnswer: 1,
    category: "Science & Technology",
    difficulty: "hard"
  },
  {
    id: 1066,
    question: "A Christmas present of mass 2kg has a force of 4 Newtons applied to it. What is the resulting acceleration?",
    options: ["0.5 m/s²", "1 m/s²", "2 m/s²", "4 m/s²"],
    correctAnswer: 2,
    category: "Science & Technology",
    difficulty: "hard"
  },
  {
    id: 1067,
    question: "A reindeer is initially travelling at 5 m/s but is accelerated by 2 m/s² for 5 seconds. What is its final velocity?",
    options: ["10 m/s", "12 m/s", "15 m/s", "20 m/s"],
    correctAnswer: 2,
    category: "Science & Technology",
    difficulty: "hard"
  },
{
  id: 1068,
  question: "What element should follow in atomic weight sequence? Hydrogen, Helium, Lithium",
  options: ["Boron", "Carbon", "Beryllium", "Oxygen"],
  correctAnswer: 2,
  category: "Science & Technology",
  difficulty: "easy"
},
{
  id: 1069,
  question: "What element should follow in noble gas sequence? Helium, Neon, Argon",
  options: ["Xenon", "Radon", "Krypton", "Oganesson"],
  correctAnswer: 2,
  category: "Science & Technology",
  difficulty: "easy"
},
{
  id: 1070,
  question: "What element should follow in alkali metals sequence? Lithium, Sodium, Potassium",
  options: ["Rubidium", "Calcium", "Cesium", "Strontium"],
  correctAnswer: 0,
  category: "Science & Technology",
  difficulty: "easy"
},
{
  id: 1071,
  question: "Krakatoa, St Helens, Tambora, and Vesuvius are all examples of what type of terrain feature?",
  options: ["Mountain", "Geyser", "Volcano", "Cave"],
  correctAnswer: 2,
  category: "Geography & Nature",
  difficulty: "medium"
},
{
  id: 1072,
  question: "Who is the Roman god of fire?",
  options: ["Mars", "Jupiter", "Vulcan", "Saturn"],
  correctAnswer: 2,
  category: "Arts & Culture",
  difficulty: "medium"
},
{
  id: 1073,
  question: "Who is the Roman god of war?",
  options: ["Apollo", "Mars", "Mercury", "Vulcan"],
  correctAnswer: 1,
  category: "Arts & Culture",
  difficulty: "easy"
},
{
  id: 1074,
  question: "Cupid is the Roman god of love. What is Cupid's Greek name?",
  options: ["Eros", "Hermes", "Ares", "Apollo"],
  correctAnswer: 0,
  category: "Arts & Culture",
  difficulty: "easy"
},
{
  id: 1075,
  question: "Who is known as the king of the Greek gods?",
  options: ["Hades", "Apollo", "Zeus", "Poseidon"],
  correctAnswer: 2,
  category: "Arts & Culture",
  difficulty: "easy"
},
{
  id: 1076,
  question: "Which Greek goddess was born from sea foam and is associated with love and beauty?",
  options: ["Athena", "Aphrodite", "Hera", "Demeter"],
  correctAnswer: 1,
  category: "Arts & Culture",
  difficulty: "easy"
},
{
  id: 1077,
  question: "Who is the Greek god of the sea, often depicted with a trident?",
  options: ["Hades", "Apollo", "Hermes", "Poseidon"],
  correctAnswer: 3,
  category: "Arts & Culture",
  difficulty: "easy"
},
{
  id: 1078,
  question: "Which goddess is celebrated for her wisdom, warfare strategy, and craftsmanship?",
  options: ["Athena", "Artemis", "Demeter", "Hera"],
  correctAnswer: 0,
  category: "Arts & Culture",
  difficulty: "easy"
},
{
  id: 1079,
  question: "Who represents the brutal aspects of battle as the Greek god of war?",
  options: ["Hermes", "Zeus", "Ares", "Hephaestus"],
  correctAnswer: 2,
  category: "Arts & Culture",
  difficulty: "medium"
},
{
  id: 1080,
  question: "Who serves as the messenger god in Greek mythology?",
  options: ["Hermes", "Apollo", "Ares", "Hades"],
  correctAnswer: 0,
  category: "Arts & Culture",
  difficulty: "easy"
},
{
  id: 1081,
  question: "Which goddess is revered as the deity of harvest and agriculture?",
  options: ["Artemis", "Demeter", "Athena", "Hestia"],
  correctAnswer: 1,
  category: "Arts & Culture",
  difficulty: "medium"
},
{
  id: 1082,
  question: "Who is the Greek goddess of the hunt, wilderness, and the moon?",
  options: ["Hera", "Artemis", "Persephone", "Aphrodite"],
  correctAnswer: 1,
  category: "Arts & Culture",
  difficulty: "medium"
},
{
  id: 1083,
  question: "Which hero is famous for completing the Twelve Labors?",
  options: ["Theseus", "Achilles", "Heracles", "Odysseus"],
  correctAnswer: 2,
  category: "Arts & Culture",
  difficulty: "medium"
},
{
  id: 1084,
  question: "Who is the greatest warrior of the Trojan War, known for his one vulnerable heel?",
  options: ["Ajax", "Hector", "Achilles", "Paris"],
  correctAnswer: 2,
  category: "Arts & Culture",
  difficulty: "medium"
},
{
  id: 1085,
  question: "Who rules the Underworld as the Greek god of the dead?",
  options: ["Hades", "Poseidon", "Ares", "Hephaestus"],
  correctAnswer: 0,
  category: "Arts & Culture",
  difficulty: "medium"
},
{
  id: 1086,
  question: "Who is the king of the Titans and father of Zeus, later overthrown by his son?",
  options: ["Uranus", "Cronus", "Hyperion", "Atlas"],
  correctAnswer: 1,
  category: "Arts & Culture",
  difficulty: "medium"
},
{
  id: 1087,
  question: "Who is the mother of Zeus and the other Olympian gods?",
  options: ["Hera", "Rhea", "Gaia", "Demeter"],
  correctAnswer: 1,
  category: "Arts & Culture",
  difficulty: "medium"
},
{
  id: 1088,
  question: "Who led the Argonauts on their quest for the Golden Fleece?",
  options: ["Odysseus", "Jason", "Perseus", "Theseus"],
  correctAnswer: 1,
  category: "Arts & Culture",
  difficulty: "medium"
},
{
  id: 1089,
  question: "Which cunning hero is best known for his long, adventurous journey home in the “Odyssey”?",
  options: ["Achilles", "Odysseus", "Hercules", "Aeneas"],
  correctAnswer: 1,
  category: "Arts & Culture",
  difficulty: "medium"
},
{
  id: 1090,
  question: "Who personifies retribution and is known as the goddess of vengeance in Greek mythology?",
  options: ["Nike", "Nemesis", "Eris", "Themis"],
  correctAnswer: 1,
  category: "Arts & Culture",
  difficulty: "medium"
},
{
  id: 1091,
  question: "Who is the Titaness of memory and the mother of the Muses?",
  options: ["Mnemosyne", "Rhea", "Metis", "Gaia"],
  correctAnswer: 0,
  category: "Arts & Culture",
  difficulty: "medium"
},
{
  id: 1092,
  question: "Which goddess is associated with witchcraft, magic, and crossroads?",
  options: ["Artemis", "Selene", "Hecate", "Hera"],
  correctAnswer: 2,
  category: "Arts & Culture",
  difficulty: "medium"
},
{
  id: 1093,
  question: "Which tragic king solved the Sphinx’s riddle, setting the stage for his ill-fated destiny?",
  options: ["Orestes", "Oedipus", "Agamemnon", "Cadmus"],
  correctAnswer: 1,
  category: "Arts & Culture",
  difficulty: "medium"
},
{
  id: 1094,
  question: "Who is the goddess of discord whose golden apple sparked the events leading to the Trojan War?",
  options: ["Nike", "Athena", "Eris", "Hera"],
  correctAnswer: 2,
  category: "Arts & Culture",
  difficulty: "medium"
},
{
  id: 1095,
  question: "Which god of healing and medicine is often depicted with a staff entwined by a serpent?",
  options: ["Pan", "Asclepius", "Hermes", "Apollo"],
  correctAnswer: 1,
  category: "Arts & Culture",
  difficulty: "medium"
},
{
  id: 1096,
  question: "Which fearsome creature in Greek mythology has the body of a lion, the head of a goat, and the tail of a serpent?",
  options: ["Chimera", "Minotaur", "Hydra", "Cerberus"],
  correctAnswer: 0,
  category: "Arts & Culture",
  difficulty: "medium"
},
{
  id: 1097,
  question: "Which god is credited with inventing the lyre using a tortoise shell in his infancy?",
  options: ["Hermes", "Apollo", "Dionysus", "Orpheus"],
  correctAnswer: 0,
  category: "Arts & Culture",
  difficulty: "medium"
},
{
  id: 1098,
  question: "Which deity is known as the god of dreams, influencing sleep and visions?",
  options: ["Phobos", "Thanatos", "Morpheus", "Hypnos"],
  correctAnswer: 2,
  category: "Arts & Culture",
  difficulty: "medium"
},
{
  id: 1099,
  question: "Who is the goddess of the dawn, often depicted rising from the horizon?",
  options: ["Hecate", "Eos", "Selene", "Iris"],
  correctAnswer: 1,
  category: "Arts & Culture",
  difficulty: "medium"
},
{
  id: 1100,
  question: "Which goddess symbolizes victory and is frequently portrayed with wings?",
  options: ["Athena", "Demeter", "Nike", "Rhea"],
  correctAnswer: 2,
  category: "Arts & Culture",
  difficulty: "easy"
},
{
  id: 1101,
  question: "Who journeyed into the Underworld with his music to try to reclaim his lost love?",
  options: ["Orpheus", "Achilles", "Theseus", "Perseus"],
  correctAnswer: 0,
  category: "Arts & Culture",
  difficulty: "medium"
},
{
  id: 1102,
  question: "Which god of the forge and blacksmithing is renowned for his craftsmanship among the Olympians?",
  options: ["Hephaestus", "Ares", "Hermes", "Poseidon"],
  correctAnswer: 0,
  category: "Arts & Culture",
  difficulty: "easy"
},
{
  id: 1103,
  question: "Who is the primordial god representing the sky and heavens in Greek mythology?",
  options: ["Uranus", "Chronos", "Chaos", "Aether"],
  correctAnswer: 0,
  category: "Arts & Culture",
  difficulty: "hard"
},
{
  id: 1104,
  question: "Which incorporeal figure personifies time in Greek mythology?",
  options: ["Aion", "Kairos", "Chronos", "Hypnos"],
  correctAnswer: 2,
  category: "Arts & Culture",
  difficulty: "hard"
},
{
  id: 1105,
  question: "Which Moira is charged with cutting the thread, thus ending life?",
  options: ["Clotho", "Lachesis", "Atropos", "Hecate"],
  correctAnswer: 2,
  category: "Arts & Culture",
  difficulty: "medium"
},
{
  id: 1106,
  question: "Which nymph was transformed into a laurel tree to escape Apollo’s relentless pursuit?",
  options: ["Daphne", "Callisto", "Echo", "Eurydice"],
  correctAnswer: 0,
  category: "Arts & Culture",
  difficulty: "medium"
},
{
  id: 1107,
  question: "Which Trojan princess was cursed with prophetic visions that were never believed?",
  options: ["Helen", "Cassandra", "Andromache", "Iphigenia"],
  correctAnswer: 1,
  category: "Arts & Culture",
  difficulty: "medium"
},
{
  id: 1108,
  question: "Who is the monstrous serpentine giant that challenged Zeus and threatened divine order?",
  options: ["Typhon", "Cerberus", "Hydra", "Chimera"],
  correctAnswer: 0,
  category: "Arts & Culture",
  difficulty: "hard"
},
{
  id: 1109,
  question: "Which three‐headed creature guarded the entrance to the Underworld?",
  options: ["Minotaur", "Cerberus", "Orthrus", "Charybdis"],
  correctAnswer: 1,
  category: "Arts & Culture",
  difficulty: "easy"
},
{
  id: 1110,
  question: "Who is the personification of the moon, often shown driving a chariot across the night sky?",
  options: ["Selene", "Artemis", "Eos", "Hecate"],
  correctAnswer: 0,
  category: "Arts & Culture",
  difficulty: "medium"
},
{
  id: 1111,
  question: "Which figure is considered the first mortal woman, created by the gods as both a gift and a curse to humanity?",
  options: ["Eve", "Pandora", "Psyche", "Helen"],
  correctAnswer: 1,
  category: "Arts & Culture",
  difficulty: "medium"
},
{
  id: 1112,
  question: "Which mythological event had Paris choose between Hera, Athena, and Aphrodite, sparking the Trojan War?",
  options: ["The Wedding of Peleus", "The Judgement of Paris", "The Abduction of Helen", "The Apple of Discord"],
  correctAnswer: 1,
  category: "Arts & Culture",
  difficulty: "medium"
},
{
  id: 1113,
  question: "Which goddess, as Zeus’s wife, played a significant role in supporting the Greeks during the Trojan War?",
  options: ["Aphrodite", "Athena", "Hera", "Artemis"],
  correctAnswer: 2,
  category: "Arts & Culture",
  difficulty: "medium"
},
{
  id: 1114,
  question: "Which mortal youth, beloved by Apollo, was transformed into a flower after his tragic death?",
  options: ["Adonis", "Hyacinthus", "Narcissus", "Orpheus"],
  correctAnswer: 1,
  category: "Arts & Culture",
  difficulty: "hard"
},
{
  id: 1115,
  question: "Who is the Greek god of winds, overseeing the various breezes and storms?",
  options: ["Boreas", "Aeolus", "Zephyrus", "Notus"],
  correctAnswer: 1,
  category: "Arts & Culture",
  difficulty: "medium"
},
{
  id: 1116,
  question: "Molten rock is referred to as lava when above ground, and by what name when below ground, such as inside a volcano?",
  options: ["Basalt", "Obsidian", "Magma", "Granite"],
  correctAnswer: 2,
  category: "Science & Technology",
  difficulty: "medium"
},
{
  id: 1117,
  question: "What is the name of the fast-moving current of hot gas and volcanic matter that can occur during volcanic eruptions, such as happened at Pompeii in 79AD?",
  options: ["Pyroclastic flow", "Lahar", "Tsunami", "Ashfall"],
  correctAnswer: 0,
  category: "Geography & Nature",
  difficulty: "hard"
},
{
  id: 1118,
  question: "The largest volcano in the solar system is Olympus Mons, located on which planet?",
  options: ["Earth", "Venus", "Mars", "Jupiter"],
  correctAnswer: 2,
  category: "Science & Technology",
  difficulty: "medium"
},
{
  id: 1119,
  question: "First awarded in 1901, which prestigious award is given in recognition of work in Physics, Chemistry, Physiology or Medicine, Literature, and Peace?",
  options: ["Pulitzer Prize", "Fields Medal", "Nobel Prize", "Turing Award"],
  correctAnswer: 2,
  category: "History & Politics",
  difficulty: "easy"
},
{
  id: 1120,
  question: "Gerty Cori was the first female recipient of the Nobel Prize in Medicine for her work on how the body converts glycogen into which form of sugar?",
  options: ["Fructose", "Lactose", "Glucose", "Sucrose"],
  correctAnswer: 2,
  category: "Science & Technology",
  difficulty: "medium"
},
{
  id: 1121,
  question: "Linda B Buck received the Nobel Prize in Medicine in 2004 for her work on olfactory receptors. Where primarily in the body are these receptors found?",
  options: ["Brain", "Skin", "Tongue", "Nose"],
  correctAnswer: 3,
  category: "Science & Technology",
  difficulty: "medium"
},
{
  id: 1122,
  question: "May Britt Moser received the Nobel Prize in Medicine in 2014 for her work on grid cells in the entorhinal cortex. What function do these cells serve?",
  options: ["Regulate sleep", "Control emotions", "Monitor breathing", "Brain’s positioning system"],
  correctAnswer: 3,
  category: "Science & Technology",
  difficulty: "hard"
},
{
  id: 1123,
  question: "The Seine, the Loire, the Rhône, and the Dordogne are all rivers that flow through which European country?",
  options: ["Germany", "France", "Italy", "Spain"],
  correctAnswer: 1,
  category: "Geography & Nature",
  difficulty: "easy"
},
{
  id: 1124,
  question: "Which river flows through these capital cities: Cairo, Juba, and Khartoum?",
  options: ["Zambezi", "Congo", "Nile", "Limpopo"],
  correctAnswer: 2,
  category: "Geography & Nature",
  difficulty: "medium"
},
{
  id: 1125,
  question: "Which river flows through these capital cities: Vienna, Budapest, and Belgrade?",
  options: ["Danube", "Rhine", "Volga", "Seine"],
  correctAnswer: 0,
  category: "Geography & Nature",
  difficulty: "medium"
},
{
  id: 1126,
  question: "Which river flows through these capital cities: Vientiane and Phnom Penh?",
  options: ["Irrawaddy", "Mekong", "Ganges", "Yangtze"],
  correctAnswer: 1,
  category: "Geography & Nature",
  difficulty: "hard"
},
{
  id: 1127,
  question: "Which mythical creature is comprised of the body, tail, and back legs of a lion and the head and wings of an eagle?",
  options: ["Chimera", "Griffin", "Basilisk", "Hippogriff"],
  correctAnswer: 1,
  category: "Arts & Culture",
  difficulty: "easy"
},
{
  id: 1128,
  question: "In which year did the islands of Hawaii became a state of the United States?",
  options: ["1899", "1930", "1959", "1972"],
  correctAnswer: 2,
  category: "History & Politics",
  difficulty: "medium"
},
{
  id: 1129,
  question: "Which two creatures form the body of a hippogriff?",
  options: ["lion and eagle", "horse and eagle", "horse and lion", "eagle and goat"],
  correctAnswer: 1,
  category: "Arts & Culture",
  difficulty: "medium"
},
{
  id: 1130,
  question: "What is the name of the creature that possesses the head of a human, the body of a lion, and a tail of venomous spines or a scorpion stinger?",
  options: ["manticore", "chimera", "gryphon", "hydra"],
  correctAnswer: 0,
  category: "Arts & Culture",
  difficulty: "medium"
},
{
  id: 1131,
  question: "“In my younger and more vulnerable years my father gave me some advice that I’ve been turning over in my mind ever since.” is the opening line of which novel of 1925 by F. Scott Fitzgerald?",
  options: ["The Great Gatsby", "This Side of Paradise", "Tender Is the Night", "The Beautiful and Damned"],
  correctAnswer: 0,
  category: "Literature",
  difficulty: "medium"
},
{
  id: 1132,
  question: "Which novel of 1851 opens with “Call me Ishmael”?",
  options: ["Moby Dick", "The Scarlet Letter", "David Copperfield", "Frankenstein"],
  correctAnswer: 0,
  category: "Literature",
  difficulty: "easy"
},
{
  id: 1133,
  question: "“It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife” is the opening of which novel of 1813?",
  options: ["Sense and Sensibility", "Emma", "Pride and Prejudice", "Mansfield Park"],
  correctAnswer: 2,
  category: "Literature",
  difficulty: "easy"
},
{
  id: 1134,
  question: "Which novel of 1948 opens “It was a bright cold day in April, and the clocks were striking thirteen.”?",
  options: ["Brave New World", "We", "1984", "Fahrenheit 451"],
  correctAnswer: 2,
  category: "Literature",
  difficulty: "medium"
},
{
  id: 1135,
  question: "Who is famous for the quote: “God is dead. God remains dead. And we have killed him.”?",
  options: ["Søren Kierkegaard", "Karl Marx", "Friedrich Nietzsche", "Jean-Paul Sartre"],
  correctAnswer: 2,
  category: "Arts & Culture",
  difficulty: "medium"
},
{
  id: 1136,
  question: "Which school of philosophy states that all and only pleasure is intrinsically valuable and all and only pain is intrinsically not valuable?",
  options: ["hedonism", "nihilism", "stoicism", "existentialism"],
  correctAnswer: 0,
  category: "Arts & Culture",
  difficulty: "medium"
},
{
  id: 1137,
  question: "Which school of philosophy asserts that the practice of virtue is both necessary and sufficient to achieve happiness?",
  options: ["hedonism", "stoicism", "existentialism", "utilitarianism"],
  correctAnswer: 1,
  category: "Arts & Culture",
  difficulty: "medium"
},
{
  id: 1138,
  question: "Which empire existed from approximately 300 to 1100AD, had the capital city of Koumbi Saleh, and gives its name to a modern country with capital Accra?",
  options: ["Ghana Empire", "Mali Empire", "Benin Empire", "Songhai Empire"],
  correctAnswer: 0,
  category: "History & Politics",
  difficulty: "medium"
},
{
  id: 1139,
  question: "Mansa Musa has been described as the wealthiest man in history, and was the most famous leader of which empire that conquered the Ghanaian Empire?",
  options: ["Benin Empire", "Ghana Empire", "Songhai Empire", "Mali Empire"],
  correctAnswer: 3,
  category: "History & Politics",
  difficulty: "medium"
},
{
  id: 1140,
  question: "Which empire dominated western Africa in the 15th and 16th centuries with capital city Gao? Their most famous leader was Askia Mohammad I",
  options: ["Songhai Empire", "Ghana Empire", "Mali Empire", "Kanem-Bornu Empire"],
  correctAnswer: 0,
  category: "History & Politics",
  difficulty: "medium"
},
{
  id: 1141,
  question: "Which ruler united the islands of Hawaii for the first time? Their name was the inspiration for an attack in the Dragon Ball Z series.",
  options: ["Kamehameha (I)", "Kalaniʻōpuʻu", "Kaʻahumanu", "Liliʻuokalani"],
  correctAnswer: 0,
  category: "History & Politics",
  difficulty: "medium"
},
{
  id: 1142,
  question: "Which international sport was initially developed in Hawaii and surrounding islands, referred as “he’e nalu”?",
  options: ["canoeing", "surfing", "volleyball", "windsurfing"],
  correctAnswer: 1,
  category: "Sports",
  difficulty: "easy"
},
{
  id: 1143,
  question: "An Italian term meaning “counterpoise” what term describes a stance in which a human’s weight is balanced more on one leg than the other, most famously used in sculpture such as Michelangelo’s David?",
  options: ["sfumato", "chiaroscuro", "contrapposto", "tenebrism"],
  correctAnswer: 2,
  category: "Arts & Culture",
  difficulty: "medium"
},
{
  id: 1144,
  question: "The Adoration of the Shepherds is a work by which Italian Baroque painter, famous for his dramatic use of light in paintings such as “The Calling of Saint Matthew”, “Doubting Thomas”, and “Judith Beheading Holofernes”?",
  options: ["Titian", "Caravaggio", "Raphael", "Tintoretto"],
  correctAnswer: 1,
  category: "Arts & Culture",
  difficulty: "medium"
},
{
  id: 1145,
  question: "The Census At Bethlehem is a painting by which 16th century Flemish painter, also known for The Hunters in the Snow, the Peasant Wedding, and The Tower of Babel?",
  options: ["Pieter Bruegel the Elder", "Jan van Eyck", "Hieronymus Bosch", "Peter Paul Rubens"],
  correctAnswer: 0,
  category: "Arts & Culture",
  difficulty: "medium"
},
{
  id: 1146,
  question: "The Virgin and Child with Saint Anne and Saint John the Baptist is a large drawing by which 15th century polymath, also known for The Vitruvian Man, Lady with an Ermine, and Virgin of the Rocks?",
  options: ["Leonardo da Vinci", "Michelangelo", "Donatello", "Raphael"],
  correctAnswer: 0,
  category: "Arts & Culture",
  difficulty: "easy"
},
{
  id: 1147,
  question: "The historic city of Petra, famous for buildings carved out of red sandstone, is in which modern day nation?",
  options: ["Jordan", "Egypt", "Iran", "Saudi Arabia"],
  correctAnswer: 0,
  category: "Geography & Nature",
  difficulty: "easy"
},
{
  id: 1148,
  question: "Beijing is home to which wonder, constructed in 1408 and hosting the emperors of the Ming and Qing dynasties?",
  options: ["Great Wall", "Terracotta Army", "Forbidden City", "Summer Palace"],
  correctAnswer: 2,
  category: "Geography & Nature",
  difficulty: "medium"
},
{
  id: 1149,
  question: "The figures Theodore Adorno and Max Horkheimer are associated with which school?",
  options: ["The Hamburg School", "The Bonn School", "The Berlin School", "The Frankfurt School"],
  correctAnswer: 3,
  category: "Arts & Culture",
  difficulty: "medium"
},
{
  id: 1150,
  question: "What is the name of the category of cloud that is thin, white, and made of ice crystals, forming between 4 and 20 km in altitude?",
  options: ["cumulus", "stratus", "cirrus", "nimbus"],
  correctAnswer: 2,
  category: "Science & Technology",
  difficulty: "medium"
},
{
  id: 1151,
  question: "Ice crystals as snow and sea ice raise the Earth’s average albedo. What is albedo a measurement of?",
  options: ["air pressure", "surface temperature", "reflectivity", "humidity"],
  correctAnswer: 2,
  category: "Science & Technology",
  difficulty: "medium"
},
{
  id: 1152,
  question: "What is the name of the category of cloud that is thin, white, and made of ice crystals, forming between 4 and 20 km in altitude?",
  options: ["cumulus", "nimbus", "stratus", "cirrus"],
  correctAnswer: 3,
  category: "Geography & Nature",
  difficulty: "medium"
},
{
  id: 1153,
  question: "Ice crystals as snow and sea ice raise the Earth’s average albedo. What is albedo a measurement of?",
  options: ["temperature", "reflectivity", "humidity", "opacity"],
  correctAnswer: 1,
  category: "Science & Technology",
  difficulty: "medium"
},
{
  id: 1154,
  question: "Which element is a key component of: photosynthesis, respiration, and oxidation?",
  options: ["carbon", "oxygen", "hydrogen", "nitrogen"],
  correctAnswer: 1,
  category: "Science & Technology",
  difficulty: "easy"
},
{
  id: 1155,
  question: "Chemical reactions can be exothermic, meaning they give off heat, or which other term, meaning to absorb heat?",
  options: ["endothermic", "thermodynamic", "cryogenic", "isotonic"],
  correctAnswer: 0,
  category: "Science & Technology",
  difficulty: "medium"
},
{
  id: 1156,
  question: "Atmospheric ozone was destroyed by the chemical unbalancing of the Chapman cycle by which collection of gases? Three letter acronym.",
  options: ["CO2", "CFCs", "NOx", "O3"],
  correctAnswer: 1,
  category: "Science & Technology",
  difficulty: "hard"
}

];

export const categories = [
  "Arts & Culture",
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