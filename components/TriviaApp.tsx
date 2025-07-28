import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Input } from './ui/input';
import { triviaQuestions, type TriviaQuestion } from '@/data/triviaQuestions';
import { Brain, Play, RotateCcw, Trophy, Home, ArrowLeft } from 'lucide-react';
import React, { useState } from 'react';
import TeamSetup from './TeamSetup';

type GameState = 'menu' | 'mode-select' | 'playing' | 'results' | 'team-select' | 'categorySelect' | 'question' | 'flip-answer' | 'team-select';
// Explicit GamePhase type for clarity and reusability
type GamePhase = 'menu' | 'select-mode' | 'team-setup' | 'quiz' | 'results' | 'end' | 'start';
type GameMode = 'multiple-choice' | 'flip-answer';

interface GameStats {
  score: number;
  totalQuestions: number;
  correctAnswers: number;
}

interface TeamStats {
  teamA: number;
  teamB: number;
  teamC: number;
  teamD: number;
}

type TeamType = { name: string; score: number };

export default function TriviaApp(props: any) {
  // Add teams state for team setup confirmation logic
  const [teams, setTeams] = useState<TeamType[]>([]);
  const { onReady } = props;

  // Default game stats object for reset
  const defaultGameStats: GameStats = { score: 0, totalQuestions: 0, correctAnswers: 0 };
  // PHASES: 'select-mode', 'team-setup', 'quiz', 'results', 'end', 'start', etc.
  const [gamePhase, setGamePhase] = useState<'menu' | 'select-mode' | 'team-setup' | 'quiz' | 'results' | 'end' | 'start'>('menu');
  // New gameState state for unified navigation
  const [gameState, setGameState] = useState<'menu' | 'team-select' | 'mode-select' | 'quiz' | 'results'>('menu');
  // New teamStats state for team scores
  const [teamStats, setTeamStats] = useState<{ [team: string]: number }>({});
  const [gameMode, setGameMode] = useState<GameMode | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);
  // Prevent multiple team clicks per question
  const [isTeamAnswered, setIsTeamAnswered] = useState(false);
  const [gameStats, setGameStats] = useState<GameStats>({
    score: 0,
    totalQuestions: 0,
    correctAnswers: 0
  });
  // Team scores for flip mode (keyed by team name)
  const [teamScores, setTeamScores] = useState<{ [key: string]: number }>({});
  // Track how many questions each team answered correctly
  const [teamCorrectCounts, setTeamCorrectCounts] = useState<{ [key: string]: number }>({});
  // Track if quiz was exhausted (all questions finished)
  const [isExhausted, setIsExhausted] = useState(false);
  // Team names and setup
  const [numberOfTeams, setNumberOfTeams] = useState(2);
  const [teamNames, setTeamNames] = useState<string[]>(['Team A', 'Team B']);
  // Temporary pending team changes for modal confirmation
  const [pendingTeamCount, setPendingTeamCount] = useState<number | null>(null);
  const [pendingTeamNames, setPendingTeamNames] = useState<string[] | null>(null);
  // Exit prompt state
  const [showExitPrompt, setShowExitPrompt] = useState(false);
  // New settings state
  const [selectedDifficulty, setSelectedDifficulty] = useState<'mix' | 'easy' | 'medium' | 'hard'>('mix');
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([
    'Art & Culture', 'Literature', 'Music', 'History & Politics', 'Science & Technology',
    'Geography & Nature', 'TV & Cinema', 'Language', 'Sports'
  ]);
  // Mode selection
  const [selectedMode, setSelectedMode] = useState<GameMode | null>(null);
  // Questions for this game
  const [questions, setQuestions] = useState<TriviaQuestion[]>(() => {
    const shuffled = [...triviaQuestions].sort(() => Math.random() - 0.5);
    return shuffled;
  });
  // Show error message if no subject is selected
  const [showCategoryError, setShowCategoryError] = useState(false);

  // Confirmation modal state for team setup "Ready" button
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  // Confirmation modal for resetting quiz progress
  const [showConfirmReset, setShowConfirmReset] = useState(false);

  // Get initial game stats function for team setup
  const getInitialGameStats = (teamCount: number) => ({
    score: 0,
    totalQuestions: 0,
    correctAnswers: 0,
  });

  // Handler for team count selection (with pending state)
  const handleTeamCountSelect = (count: number) => {
    setPendingTeamCount(count);
  };

  // Handler for team name change (with pending state)
  const handleTeamNameChange = (names: string[]) => {
    setPendingTeamNames(names);
  };

  // Commit team setup changes after confirmation
  const commitTeamChanges = () => {
    if (pendingTeamCount !== null) {
      setNumberOfTeams(pendingTeamCount);
    }
    if (pendingTeamNames !== null) {
      setTeamNames(pendingTeamNames);
    }
    setGameStats(getInitialGameStats(pendingTeamCount || numberOfTeams));
    setTeamStats({});
    setCurrentQuestion(0);
    setGamePhase('quiz');
    setPendingTeamCount(null);
    setPendingTeamNames(null);
  };

  // Handler for ready click: show confirmation if already in quiz, else start quiz
  // Includes logic for mid-game resets or progressing to the next game phase.
  const handleReadyClick = () => {
    setIsExhausted(false);
    if (gamePhase === 'quiz') {
      // Already in quiz – show confirmation modal
      setShowConfirmReset(true);
    } else {
      // Commit any pending team setup changes
      if (pendingTeamCount !== null) {
        setNumberOfTeams(pendingTeamCount);
        setPendingTeamCount(null);
      }
      if (pendingTeamNames !== null) {
        setTeamNames(pendingTeamNames);
        setPendingTeamNames(null);
      }
      // Filter and shuffle questions for flip-answer mode
      if (selectedMode === 'flip-answer') {
        const filtered = triviaQuestions.filter(q =>
          (selectedDifficulty === 'mix' || q.difficulty === selectedDifficulty) &&
          selectedSubjects.includes(q.category)
        );
        const shuffled = [...filtered].sort(() => Math.random() - 0.5);
        setQuestions(shuffled);
      }
      // First time entering quiz – proceed directly
      setTeamStats({});
      setGameStats({
        score: 0,
        totalQuestions: 0,
        correctAnswers: 0
      });
      // Reset per-team correct-answer counts
      setTeamCorrectCounts({});
      setCurrentQuestion(0);
      setGamePhase('quiz');
      // If onReady callback is provided, call it
      if (typeof onReady === 'function') {
        onReady();
      }
    }
  };

  // Modal confirm/cancel handlers
  const handleConfirmChanges = () => {
    setShowConfirmReset(false);
    setTeams &&
      setTeams(
        Array.from({ length: numberOfTeams }, (_, i) => ({
          name: teamNames[i] || `Team ${i + 1}`,
          score: 0,
        }))
      );
    setCurrentQuestion(0);
    setShowAnswer(false);
    setGamePhase('quiz');
    setShowTeamSetup(false);
  };

  const handleCancelChanges = () => {
    setPendingTeamCount(null);
    setPendingTeamNames(null);
    setShowConfirmModal(false);
  };


  // Handle mode selection
  const handleModeSelection = (mode: GameMode | string) => {
    setIsExhausted(false);
    setSelectedMode(mode as GameMode);
    setGameMode(mode as GameMode);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowAnswer(false);
    setGameStats({ score: 0, totalQuestions: 0, correctAnswers: 0 });
    if (mode === 'flip-answer') {
      setGamePhase('team-setup');
    } else {
      // Filter and shuffle questions based on selectedDifficulty and selectedSubjects
      const filtered = triviaQuestions.filter(q =>
        (selectedDifficulty === 'mix' || q.difficulty === selectedDifficulty) &&
        selectedSubjects.includes(q.category)
      );
      const shuffled = [...filtered].sort(() => Math.random() - 0.5);
      setQuestions(shuffled);
      setGamePhase('quiz');
    }
  };


  // --- TeamSetup screen state for panel logic ---
  const [showTeamSetup, setShowTeamSetup] = useState(false);
  // Temp team names for setup panel
  const [teamSetupNames, setTeamSetupNames] = useState<string[]>(teamNames);


  // TeamSetup panel render function
  const renderTeamSetupScreen = () => (
    <div className="screen-container">
      <TeamSetup
        numberOfTeams={pendingTeamCount !== null ? pendingTeamCount : numberOfTeams}
        setNumberOfTeams={handleTeamCountSelect}
        teamNames={pendingTeamNames || teamNames}
        setTeamNames={handleTeamNameChange}
        onBack={() => setShowTeamSetup(false)}
        onReady={handleReadyClick}
      />
      {/* Confirmation modal for resetting quiz progress */}
      {showConfirmReset && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-[90%] max-w-sm">
            <h2 className="text-lg font-semibold mb-4 text-black dark:text-white">
              Are you sure you want to implement these changes?
            </h2>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-6">
              You will lose any quiz progress made.
            </p>
            <div className="flex justify-end space-x-4">
              <button
                className="bg-gray-200 text-black rounded px-4 py-2"
                onClick={() => setShowConfirmReset(false)}
              >
                Cancel
              </button>
              <button
                className="bg-green-600 text-white rounded px-4 py-2"
                onClick={() => {
                  commitTeamChanges();
                  setShowConfirmReset(false);
                  setShowTeamSetup(false);
                }}
              >
                Yes, I'm sure
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  const startGame = () => {
    if (selectedSubjects.length === 0) {
      setShowCategoryError(true);
      return;
    }
    setShowCategoryError(false);
    setGamePhase('select-mode');
  };
  // --- TeamSetup logic for flip mode ---
  // Updated handleTeamReady to only trigger confirmation during mid-game update
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [pendingNumberOfTeams, setPendingNumberOfTeams] = useState<number>(numberOfTeams);
  const [confirmedTeamNames, setConfirmedTeamNames] = useState<string[]>(teamNames);
  const [pendingTeamNamesState, setPendingTeamNamesState] = useState<string[]>(teamNames);
  const [confirmedNumberOfTeams, setConfirmedNumberOfTeams] = useState<number>(numberOfTeams);
  const [scores, setScores] = useState<number[]>(Array(numberOfTeams).fill(0));
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentTeamIndex, setCurrentTeamIndex] = useState(0);

  // Helper for compatibility
  // Removed duplicate setPendingTeamNames declaration to avoid conflict.

  const handleTeamReady = () => {
    if (gamePhase === 'team-setup') {
      setConfirmedTeamNames(teamNames);
      setConfirmedNumberOfTeams(numberOfTeams);
      setScores(Array(numberOfTeams).fill(0));
      setCurrentQuestionIndex(0);
      setCurrentTeamIndex(0);
      setGamePhase('quiz');
    } else {
      setPendingTeamNames(teamNames);
      setPendingNumberOfTeams(numberOfTeams);
      setShowConfirmation(true);
    }
  };

  // Confirmation handler for updating teams and resetting game state
  const handleConfirmTeamChanges = () => {
    setShowConfirmation(false);
    setConfirmedTeamNames(pendingTeamNamesState);
    setConfirmedNumberOfTeams(pendingNumberOfTeams);
    setTeamNames(pendingTeamNamesState);
    setNumberOfTeams(pendingNumberOfTeams);
    setScores(Array(pendingNumberOfTeams).fill(0));
    setCurrentQuestionIndex(0);
    setCurrentTeamIndex(0);
    setGamePhase('quiz');
  };

  const handleBackToTeamSetup = () => {
    const confirmBack = window.confirm('Are you sure you want to go back to Team Setup? Your progress will be lost.');
    if (confirmBack) {
      setGamePhase('team-setup');
    }
  };

  const selectAnswer = (answerIndex: number) => {
    if (showAnswer) return;
    setSelectedAnswer(answerIndex);
    setShowAnswer(true);

    const isCorrect = answerIndex === questions[currentQuestion].correctAnswer;
    const points = isCorrect ? (questions[currentQuestion].difficulty === 'easy' ? 10 : 
                              questions[currentQuestion].difficulty === 'medium' ? 20 : 30) : 0;

    setGameStats(prev => ({
      score: prev.score + points,
      totalQuestions: prev.totalQuestions + 1,
      correctAnswers: prev.correctAnswers + (isCorrect ? 1 : 0)
    }));

    // Auto advance after 2 seconds
    setTimeout(() => {
      // Remove focus from any active button
      if (document.activeElement instanceof HTMLElement) {
        document.activeElement.blur();
      }
      nextQuestion();
    }, 2000);
  };

  const selectTeam = (team: 'teamA' | 'teamB' | 'teamC' | 'teamD' | 'noTeam') => {
    if (team !== 'noTeam') {
      const points = questions[currentQuestion].difficulty === 'easy' ? 10 : 
                    questions[currentQuestion].difficulty === 'medium' ? 20 : 30;
      setTeamStats(prev => ({
        ...prev,
        [team]: (prev[team] ?? 0) + points
      }));
    }
    
    setGameStats(prev => ({
      ...prev,
      totalQuestions: prev.totalQuestions + 1,
      correctAnswers: prev.correctAnswers + (team !== 'noTeam' ? 1 : 0)
    }));

    // Auto advance after 1 second
    setTimeout(() => {
      nextQuestion();
    }, 1000);
  };

  const revealAnswer = () => {
    if (gameMode === 'flip-answer' && !showAnswer) {
      setShowAnswer(true);
    }
  };

  const nextQuestion = () => {
    const nextIndex = currentQuestion + 1;
    if (nextIndex >= questions.length) {
      setIsExhausted(true);
      setGamePhase('results');
      return;
    }
    setCurrentQuestion(nextIndex);
    setSelectedAnswer(null);
    setShowAnswer(false);
    setIsTeamAnswered(false);
  };

  const resetGame = () => {
    setIsExhausted(false);
    setGamePhase('menu');
    setSelectedMode(null);
    setNumberOfTeams(0);
    setTeamNames([]);
    setTeamStats({});
    setGameStats({ score: 0, totalQuestions: 0, correctAnswers: 0 });
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowAnswer(false);
  };

  // Handler for "Play Again" in END phase
  const handlePlayAgain = () => {
    setGamePhase('menu');
    setSelectedMode(null);
    setNumberOfTeams(0);
    setTeamNames([]);
    setTeamStats({});
    setGameStats({ score: 0, totalQuestions: 0, correctAnswers: 0 });
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowAnswer(false);
  };

  // Restart the quiz in the current mode, preserving settings and teams
  const handleRestartQuiz = () => {
    setIsExhausted(false);
    // Reshuffle questions
    const filtered = triviaQuestions.filter(q =>
      (selectedDifficulty === 'mix' || q.difficulty === selectedDifficulty) &&
      selectedSubjects.includes(q.category)
    );
    const shuffled = [...filtered].sort(() => Math.random() - 0.5);
    setQuestions(shuffled);
    // Reset scores and stats
    setTeamStats({});
    setGameStats({ score: 0, totalQuestions: 0, correctAnswers: 0 });
    setTeamCorrectCounts({});
    setCurrentQuestion(0);
    setShowAnswer(false);
    // Go back into the quiz phase
    setGamePhase('quiz');
  };

  const getButtonVariant = (optionIndex: number) => {
    if (!showAnswer) return 'choice';
    if (optionIndex === questions[currentQuestion].correctAnswer) return 'correct';
    if (optionIndex === selectedAnswer && selectedAnswer !== questions[currentQuestion].correctAnswer) return 'incorrect';
    return 'choice';
  };

const renderMenuScreen = () => (
  <div className="h-screen overflow-hidden bg-gradient-primary flex items-center justify-center p-4">
    <Card className="w-full max-w-md bg-gradient-card shadow-card border-border/50 p-4 sm:p-6 text-center">
      <div className="mb-4">
        <img src="/PaulsQuizLogo.png" alt="Quiz Logo" className="w-[7.25rem] h-[7.25rem] mx-auto mb-2" />
      </div>
      
      <div className="font-arimo space-y-3 mb-4">
        <div className="bg-secondary/20 rounded-lg p-3">
          <h3 className="text-white text-lg mb-2">Difficulty Level</h3>
          <div className="flex flex-wrap gap-1.5 justify-center">
            {['mix', 'easy', 'medium', 'hard'].map(level => (
              <Button
                key={level}
                variant={selectedDifficulty === level ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedDifficulty(level as any)}
                className="h-8 px-3 text-sm"
              >
                {level.charAt(0).toUpperCase() + level.slice(1)}
              </Button>
            ))}
          </div>
        </div>
        <div className="bg-secondary/20 rounded-lg p-3">
          <h3 className={`text-white text-lg mb-2 ${selectedSubjects.length === 0 ? 'text-red-500' : 'text-foreground'}`}>
            Preferred Subject/s
          </h3>
          <p className={`text-xs mb-1 ${selectedSubjects.length === 0 && gameState === 'menu' ? 'text-red-500' : 'text-muted-foreground'}`}>
            {`${selectedSubjects.length} of 9 selected`}
            {showCategoryError && ' (please select at least one)'}
          </p>
          <div className="flex flex-wrap gap-1.5 justify-center">
            {['Art & Culture', 'Literature', 'Music', 'History & Politics', 'Science & Technology', 'Geography & Nature', 'TV & Cinema', 'Language', 'Sports'].map(subject => (
              <Button
                key={subject}
                variant={selectedSubjects.includes(subject) ? 'default' : 'outline'}
                size="sm"
                onClick={() =>
                  setSelectedSubjects(prev =>
                    prev.includes(subject)
                      ? prev.filter(s => s !== subject)
                      : [...prev, subject]
                  )
                }
                className="h-8 px-3 text-sm"
              >
                {subject}
              </Button>
            ))}
          </div>
        </div>
      </div>

        <div className="flex justify-center">
          <button
            onClick={startGame}
            className="py-2 px-6 rounded bg-[#41A300] hover:bg-[#2F7500] text-white text-lg font-arimo inline-flex items-center gap-2"
          >
            <Play className="w-5 h-5" />
            Begin!
          </button>
        </div>
      </Card>
      {/* Copyright Footer */}
      <div className="absolute bottom-2 left-0 right-0 text-center">
        <p className="font-arimo text-white text-xs">All trivia content: © paulsquiz.com</p>
      </div>
    </div>
  );

  const renderModeSelectScreen = () => (
    <div className="h-screen overflow-hidden bg-gradient-primary flex items-center justify-center p-4 pb-16 relative">
      {/* Home Button */}
      <div className="absolute top-4 left-4 z-20">
        <Button
          variant="ghost"
          size="icon"
          aria-label="Home"
          onClick={() => setShowExitPrompt(true)}
        >
          <Home className="w-6 h-6" />
        </Button>
      </div>
      {/* Exit Prompt Modal */}
      {showExitPrompt && (
        <div className="fixed inset-0 z-30 bg-black/40 flex items-center justify-center">
          <div className="bg-white dark:bg-background p-6 rounded-lg shadow-lg max-w-xs w-full text-center border border-border">
            <div className="mb-4">
              <h2 className="text-lg font-semibold mb-2 text-black dark:text-foreground">Are you sure you want to Exit Game?</h2>
            </div>
            <div className="flex flex-col gap-2">
              <Button
                variant="destructive"
                className="w-full font-arimo"

                onClick={() => {
                  setShowExitPrompt(false);
                  resetGame();
                }}
              >
                Yes, take me Home
              </Button>
              <Button
                variant="outline"
                className="w-full font-arimo"

                onClick={() => setShowExitPrompt(false)}
              >
                No, take me back to the quiz
              </Button>
            </div>
          </div>
        </div>
      )}
      <Card className="w-full max-w-md bg-gradient-card shadow-card border-border/50 p-8 text-center">
        <div className="mb-8">
          <Brain className="w-16 h-16 text-primary mx-auto mb-4" />
          <h1 className="font-barriecito text-4xl mb-2">Choose Game Mode</h1>
          <p className="font-arimo text-muted-foreground">Select how you want to play</p>
        </div>

        <div className="space-y-4">
          <Button 
            variant="quiz" 
            size="xl" 
            onClick={() => handleModeSelection('multiple-choice')}
            className="w-full font-arimo"
          >
            Multiple Choice
          </Button>
          
          <Button 
            variant="quiz" 
            size="xl" 
            onClick={() => handleModeSelection('flip-answer')}
            className="w-full font-arimo"
          >
            Flip-for-Answer
          </Button>
        </div>
      </Card>
      {/* Copyright Footer */}
      <div className="absolute bottom-2 left-0 right-0 text-center">
        <p className="font-arimo text-white text-xs">All trivia content: © paulsquiz.com</p>
      </div>
    </div>
  );

  // --- QUIZ UI ---
  const renderQuizScreen = () => {
    if (gameMode === 'flip-answer') {
      // Flip Answer Mode with dynamic teams
      if (currentQuestion >= questions.length) return null;
      const question = questions[currentQuestion];
      const progress = ((currentQuestion + 1) / questions.length) * 100;
      return (
        <div className="h-screen overflow-hidden bg-gradient-primary p-4 relative">
          {/* Navigation Buttons */}
          <div className="absolute top-2 left-4 z-20">
            <Button
              variant="ghost"
              size="icon"
              aria-label="Home"
              onClick={() => setShowExitPrompt(true)}
              className="h-10 w-10"
            >
              <Home className="w-6 h-6" />
            </Button>
          </div>
          <div className="absolute top-2 right-4 z-20">
            <Button
              variant="ghost"
              size="icon"
              aria-label="Team Setup"
              onClick={() => setShowTeamSetup(true)}
              className="h-10 w-10"
            >
              <ArrowLeft className="w-6 h-6" />
            </Button>
          </div>
          {/* Paul's Quiz Text */}
          <div className="absolute top-2 left-0 right-0 z-10 flex justify-center items-center h-10 pointer-events-none">
            <span className="font-barriecito text-white text-base">Paul's Quiz</span>
          </div>
          {/* Divider Line */}
          <div className="absolute top-[50px] left-4 right-4 z-10">
            <div className="h-0.5 bg-gradient-to-r from-[#a97fff] to-[#19b6ea]"></div>
          </div>
          {/* Exit Prompt Modal */}
          {showExitPrompt && (
            <div className="fixed inset-0 z-30 bg-black/40 flex items-center justify-center">
              <div className="bg-white dark:bg-background p-6 rounded-lg shadow-lg max-w-xs w-full text-center border border-border">
                <div className="mb-4">
                  <h2 className="text-lg font-semibold mb-2 text-black dark:text-foreground">Are you sure you want to Exit Game?</h2>
                </div>
                <div className="flex flex-col gap-2">
                  <Button
                    variant="destructive"
                    className="w-full font-arimo"

                    onClick={() => {
                      setShowExitPrompt(false);
                      resetGame();
                    }}
                  >
                    Yes, take me Home
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full font-arimo"

                    onClick={() => setShowExitPrompt(false)}
                  >
                    No, take me back to the quiz
                  </Button>
                </div>
              </div>
            </div>
          )}
          <div className="max-w-md mx-auto pt-10">
            {/* Header */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-4">
                <span className="text-primary-foreground/70 text-sm">
                  Question {currentQuestion + 1} of {questions.length}
                </span>
                  <div className="text-primary-foreground text-sm">
                    {numberOfTeams === 1 ? (
                      <span>Your score: {teamScores[teamNames[0]] ?? 0}</span>
                    ) : numberOfTeams <= 3 ? (
                      teamNames.map(name => (
                        <span key={name} className="mr-2">
                          {name}: {teamScores[name] ?? 0}
                        </span>
                      ))
                    ) : (
                      <div className="text-right">
                        <div>{teamNames[0]}: {teamScores[teamNames[0]] ?? 0} {teamNames[1]}: {teamScores[teamNames[1]] ?? 0}</div>
                        <div>{teamNames[2]}: {teamScores[teamNames[2]] ?? 0} {teamNames[3]}: {teamScores[teamNames[3]] ?? 0}</div>
                      </div>
                    )}
                  </div>
              </div>
              <Progress value={progress} className="h-2 bg-[#3b3b3b] [&>div]:bg-yellow-400" />
            </div>
            {/* Question Card */}
            <Card
              className={`bg-gradient-card shadow-card border-border/50 p-6 mb-6 ${!showAnswer ? 'cursor-pointer hover:scale-105 transition-transform' : ''}`}
              onClick={revealAnswer}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="bg-primary/30 text-[#BB51FC] px-3 py-1 rounded-full text-xs font-medium">
                  {question.category}
                </span>
                <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-xs font-medium capitalize">
                  {question.difficulty}
                </span>
              </div>
              <h2 className="text-xl font-semibold text-foreground leading-relaxed mb-4">
                {question.question}
              </h2>
              {!showAnswer && (
                <p className="text-muted-foreground text-sm text-center">
                  Tap to reveal answer
                </p>
              )}
              {showAnswer && (
                <div className="mt-6 p-4 bg-success/20 rounded-lg border border-success/30">
                  <p className="text-success font-semibold text-lg">
                    {question.options[question.correctAnswer]}
                  </p>
                </div>
              )}
            </Card>
            {/* Team Buttons - Only show when answer is revealed */}
            {showAnswer && (
              numberOfTeams === 1 ? (
                <div className="space-y-3">
                  <Button
                    variant="quiz"
                    size="lg"
                    disabled={isTeamAnswered}
                    onClick={() => {
                      setIsTeamAnswered(true);
                      const points = question.difficulty === 'easy' ? 10 :
                                     question.difficulty === 'medium' ? 20 : 30;
                      setTeamScores(prev => ({
                        ...prev,
                        [teamNames[0]]: (prev[teamNames[0]] ?? 0) + points
                      }));
                      // Increment correct-answer count for that team
                      setTeamCorrectCounts(prev => ({
                        ...prev,
                        [teamNames[0]]: (prev[teamNames[0]] ?? 0) + 1
                      }));
                      setTimeout(() => nextQuestion(), 1000);
                    }}
                    className="w-full font-arimo"

                  >
                    I got it right
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    disabled={isTeamAnswered}
                    onClick={() => {
                      setIsTeamAnswered(true);
                      setTimeout(() => nextQuestion(), 1000);
                    }}
                    className="w-full mt-3"
                  >
                    I didn't get it right
                  </Button>
                </div>
              ) : (
                <div className="space-y-3">
                  <p className="text-primary-foreground text-center mb-4">
                    Which team answered correctly first?
                  </p>
                  <div className={numberOfTeams === 4 ? 'grid grid-cols-2 gap-3' : `grid grid-cols-${Math.min(teamNames.length, 3)} gap-3`}>
                    {teamNames.map((name) => (
                      <Button
                        key={name}
                        variant="quiz"
                        size="lg"
                        disabled={isTeamAnswered}
                        onClick={() => {
                          setIsTeamAnswered(true);
                          const points = question.difficulty === 'easy' ? 10 :
                                        question.difficulty === 'medium' ? 20 : 30;
                          setTeamScores(prev => ({
                            ...prev,
                            [name]: (prev[name] ?? 0) + points
                          }));
                          setTeamCorrectCounts(prev => ({
                            ...prev,
                            [name]: (prev[name] ?? 0) + 1
                          }));
                          setTimeout(() => nextQuestion(), 1000);
                        }}
                        className="w-full font-arimo"
                      >
                        {name}
                      </Button>
                    ))}
                  </div>
                  <Button
                    variant="outline"
                    size="lg"
                    disabled={isTeamAnswered}
                    onClick={() => {
                      setIsTeamAnswered(true);
                      setTimeout(() => nextQuestion(), 1000);
                    }}
                    className="w-full mt-3"
                  >
                    No Team
                  </Button>
                </div>
              )
            )}
            {/* Always-visible End Game & View Scores button for flip-answer mode */}
            <Button
              variant="destructive"
              size="lg"
              onClick={() => { setIsExhausted(false); setGamePhase('results'); }}
              className="w-full mt-3"
            >
              End Game & View Scores
            </Button>
          </div>
          {/* Copyright Footer */}
          <div className="absolute bottom-2 left-0 right-0 text-center">
            <p className="font-arimo text-white text-xs">All trivia content: © paulsquiz.com</p>
          </div>
        </div>
      );
    } else {
      // Multiple Choice Mode
      if (currentQuestion >= questions.length) return null;
      const question = questions[currentQuestion];
      const progress = ((currentQuestion + 1) / questions.length) * 100;
      const getTextSize = (text: string) => {
        if (text.length > 150) return 'text-sm';
        if (text.length > 100) return 'text-base';
        return 'text-xl';
      };

      const getOptionTextSize = (text: string) => {
        if (text.length > 60) return 'text-sm';
        return 'text-base';
      };
      return (
        <div className="h-screen overflow-hidden bg-gradient-primary p-4 relative">
          {/* Home Button */}
          <div className="absolute top-2 left-4 z-20">
            <Button
              variant="ghost"
              size="icon"
              aria-label="Home"
              onClick={() => setShowExitPrompt(true)}
            >
              <Home className="w-6 h-6" />
            </Button>
          </div>
          {/* Paul's Quiz Text */}
          <div className="absolute top-2 left-0 right-0 z-10 flex justify-center items-center h-10 pointer-events-none">
            <span className="font-barriecito text-white text-base">Paul's Quiz</span>
          </div>
          {/* Divider Line */}
          <div className="absolute top-[50px] left-4 right-4 z-10">
            <div className="h-0.5 bg-gradient-to-r from-[#a97fff] to-[#2695e0]"></div>
          </div>
          {/* Exit Prompt Modal */}
          {showExitPrompt && (
            <div className="fixed inset-0 z-30 bg-black/40 flex items-center justify-center">
              <div className="bg-white dark:bg-background p-6 rounded-lg shadow-lg max-w-xs w-full text-center border border-border">
                <div className="mb-4">
                  <h2 className="text-lg font-semibold mb-2 text-black dark:text-foreground">Are you sure you want to Exit Game?</h2>
                </div>
                <div className="flex flex-col gap-2">
                  <Button
                    variant="destructive"
                    className="w-full font-arimo"

                    onClick={() => {
                      setShowExitPrompt(false);
                      resetGame();
                    }}
                  >
                    Yes, take me Home
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full font-arimo"

                    onClick={() => setShowExitPrompt(false)}
                  >
                    No, take me back to the quiz
                  </Button>
                </div>
              </div>
            </div>
          )}
          <div className="max-w-md mx-auto pt-10">
            {/* Header */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-4">
                <span className="text-primary-foreground/70 text-sm">
                  Question {currentQuestion + 1} of {questions.length}
                </span>
                <span className="text-primary-foreground font-semibold">
                  Score: {gameStats.score}
                </span>
              </div>
              <Progress value={progress} className="h-2 bg-[#3b3b3b] [&>div]:bg-yellow-400" />
            </div>
            {/* Question Card */}
            <Card className="bg-gradient-card shadow-card border-border/50 p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <span className="bg-primary/30 text-[#BB51FC] px-3 py-1 rounded-full text-xs font-medium">
                  {question.category}
                </span>
                <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-xs font-medium capitalize">
                  {question.difficulty}
                </span>
              </div>
              <h2 className={`${getTextSize(question.question)} font-semibold text-foreground leading-relaxed`}>
                {question.question}
              </h2>
            </Card>
            {/* Answer Options */}
            <div className="space-y-3">
              {question.options.map((option, index) => (
                <Button
                  key={`${currentQuestion}-${index}`}
                  variant={getButtonVariant(index)}
                  size={option.length > 60 ? "default" : "choice"}
                  onClick={(e) => {
                    selectAnswer(index);
                    // blur the button so it doesn’t stay highlighted when the next question loads
                    (e.currentTarget as HTMLElement).blur();
                  }}
                  disabled={showAnswer}
                  className={`w-full text-left justify-start ${getOptionTextSize(option)}`}
                >
                  <span className="w-8 h-8 rounded-full bg-primary/20 text-[#BB51FC] flex items-center justify-center text-sm font-semibold mr-3">
                    {String.fromCharCode(65 + index)}
                  </span>
                  {option}
                </Button>
              ))}
              <Button
                variant="destructive"
                size="lg"
                onClick={() => { setIsExhausted(false); setGamePhase('results'); }}
                className="w-full mt-6 mb-4"
              >
                End Game & View Scores
              </Button>
            </div>
          </div>
          {/* Copyright Footer */}
          <div className="absolute bottom-2 left-0 right-0 text-center">
            <p className="font-arimo text-white text-xs">All trivia content: © paulsquiz.com</p>
          </div>
        </div>
      );
    }
  };

  const renderResultsScreen = () => {
    const percentage = Math.round((gameStats.totalQuestions > 0 ? (gameStats.correctAnswers / gameStats.totalQuestions) : 0) * 100);
    return (
      <div className="h-screen overflow-hidden bg-gradient-primary flex items-center justify-center p-4 pb-16 relative">
        {/* Home Button */}
        <div className="absolute top-4 left-4 z-20">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Home"
            onClick={() => setShowExitPrompt(true)}
          >
            <Home className="w-6 h-6" />
          </Button>
        </div>
        {/* Exit Prompt Modal */}
        {showExitPrompt && (
          <div className="fixed inset-0 z-30 bg-black/40 flex items-center justify-center">
            <div className="bg-white dark:bg-background p-6 rounded-lg shadow-lg max-w-xs w-full text-center border border-border">
              <div className="mb-4">
                <h2 className="text-lg font-semibold mb-2 text-black dark:text-foreground">Are you sure you want to Exit Game?</h2>
              </div>
              <div className="flex flex-col gap-2">
                <Button
                  variant="destructive"
                  className="w-full font-arimo"

                  onClick={() => {
                    setShowExitPrompt(false);
                    resetGame();
                  }}
                >
                  Yes, take me Home
                </Button>
                <Button
                  variant="outline"
                  className="w-full font-arimo"

                  onClick={() => setShowExitPrompt(false)}
                >
                  No, take me back to the quiz
                </Button>
              </div>
            </div>
          </div>
        )}
        <Card className="w-full max-w-md bg-gradient-card shadow-card border-border/50 p-8 text-center">
          <p className="text-muted-foreground text-sm mb-2">
            {isExhausted
              ? "You've reached the end of the available questions, nerd."
              : ""}
          </p>
          <Trophy className="w-16 h-16 text-accent mx-auto mb-4" />
          <h1 className="font-barriecito text-white text-4xl mb-4">Quiz Complete!</h1>
          <div className="font-arimo space-y-4 mb-8">
            {gameMode === 'multiple-choice' ? (
              <>
                <div className="bg-primary/10 rounded-lg p-4">
                  <div className="text-3xl text-primary mb-1">
                    {gameStats.score}
                  </div>
                  <div className="text-sm text-muted-foreground">Total Points</div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-success/10 rounded-lg p-3">
                    <div className="text-xl font-bold text-success">
                      {gameStats.correctAnswers}
                    </div>
                    <div className="text-xs text-muted-foreground">Correct</div>
                  </div>
                  <div className="bg-accent/10 rounded-lg p-3">
                    <div className="text-xl font-bold text-accent">
                      {percentage}%
                    </div>
                    <div className="text-xs text-muted-foreground">Accuracy</div>
                  </div>
                </div>
              </>
            ) : (
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-foreground mb-4">
                    {numberOfTeams === 1 ? 'Your score' : 'Team Scores'}
                  </h3>
                  <div className={`grid grid-cols-${Math.min(teamNames.length, 4)} gap-3`}>
                    {teamNames.map((name) => (
                      <div key={name} className="bg-primary/10 rounded-lg p-3">
                        <div className="text-xl font-bold text-primary">
                          {teamScores[name] ?? 0}
                        </div>
                        {numberOfTeams > 1 && (
                          <div className="text-sm text-muted-foreground">{name}</div>
                        )}
                        {(() => {
                          const correct = teamCorrectCounts[name] ?? 0;
                          const total = gameStats.totalQuestions > 0 ? gameStats.totalQuestions : currentQuestion;
                          const percent = total > 0 ? Math.round((correct / total) * 100) : 0;
                          return (
                            <div className="text-sm text-muted-foreground">
                              Correct: {correct} of {total} ({percent}%)
                            </div>
                          );
                        })()}
                      </div>
                    ))}
                  </div>
                </div>
            )}
          </div>
          <div className="flex flex-row gap-3 w-full">
            <Button
              variant="outline"
              size="xl"
              onClick={resetGame}
              className="flex-1 min-w-0"
            >
              <Home className="w-5 h-5" /> Home
            </Button>
            <Button
              variant="quiz"
              size="xl"
              onClick={handleRestartQuiz}
              className="flex-1 min-w-0"
            >
              <RotateCcw className="w-5 h-5" />
              Play Again
            </Button>
          </div>
        </Card>
        {/* Copyright Footer */}
        <div className="absolute bottom-2 left-0 right-0 text-center">
          <p className="font-arimo text-white text-xs">All trivia content: © paulsquiz.com</p>
        </div>
      </div>
    );
  };

  // --- Render block for new game phases ---
  return (
    <div className="font-arimo h-screen overflow-hidden">
      {/* Confirmation Modal for Team Setup "Ready" */}
      {showConfirmModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-[90%] max-w-sm">
            <h2 className="text-lg font-semibold mb-4 text-black dark:text-white">
              Are you sure you want to implement these changes?
            </h2>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-6">
              You will lose any quiz progress made.
            </p>
            <div className="flex justify-end space-x-4">
              <button
                className="bg-gray-200 text-black rounded px-4 py-2"
                onClick={handleCancelChanges}
              >
                Cancel
              </button>
              <button
                className="bg-green-600 text-white rounded px-4 py-2"
                onClick={handleConfirmChanges}
              >
                Yes, I'm sure
              </button>
            </div>
          </div>
        </div>
      )}
      {showTeamSetup
        ? renderTeamSetupScreen()
        : gamePhase === 'team-setup'
        ? (
          <>
            <TeamSetup
              numberOfTeams={pendingTeamCount !== null ? pendingTeamCount : numberOfTeams}
              setNumberOfTeams={handleTeamCountSelect}
              teamNames={pendingTeamNames || teamNames}
              setTeamNames={handleTeamNameChange}
              onBack={() => {
                setGamePhase('menu');
              }}
              onReady={handleReadyClick}
            />
            {/* Confirmation modal for resetting quiz progress */}
            {showConfirmReset && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-[90%] max-w-sm">
                  <h2 className="text-lg font-semibold mb-4 text-black dark:text-white">
                    Are you sure you want to implement these team changes?
                  </h2>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-6">
                    You will lose any quiz progress made.
                  </p>
                  <div className="flex justify-end space-x-4">
                    <button
                      className="bg-gray-200 text-black rounded px-4 py-2"
                      onClick={() => setShowConfirmReset(false)}
                    >
                      Cancel
                    </button>
                    <button
                      className="bg-green-600 text-white rounded px-4 py-2"
                      onClick={() => {
                        // Apply pending team changes first
                        if (pendingTeamCount !== null) setNumberOfTeams(pendingTeamCount);
                        if (pendingTeamNames !== null) setTeamNames(pendingTeamNames);
                        setPendingTeamCount(null);
                        setPendingTeamNames(null);
                        // Then reset stats and start quiz
                        setTeamStats({});
                        setGameStats({
                          score: 0,
                          totalQuestions: 0,
                          correctAnswers: 0
                        });
                        // Reset per-team correct-answer counts
                        setTeamCorrectCounts({});
                        setCurrentQuestion(0);
                        setShowAnswer(false);
                        setGamePhase('quiz');
                        setShowConfirmReset(false);
                      }}
                    >
                      Yes, I'm sure
                    </button>
                  </div>
                </div>
              </div>
            )}
          </> 
        )
        : gamePhase === 'menu'
        ? renderMenuScreen()
        : gamePhase === 'select-mode'
        ? (
          <div className="mode-selection">
            <div className="h-screen overflow-hidden bg-gradient-primary flex items-center justify-center p-4 relative">
              {/* Home Button */}
              <div className="absolute top-4 left-4 z-20">
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Home"
                  onClick={() => setShowExitPrompt(true)}
                >
                  <Home className="w-6 h-6" />
                </Button>
              </div>
              {/* Exit Prompt Modal */}
              {showExitPrompt && (
                <div className="fixed inset-0 z-30 bg-black/40 flex items-center justify-center">
                  <div className="bg-white dark:bg-background p-6 rounded-lg shadow-lg max-w-xs w-full text-center border border-border">
                    <div className="mb-4">
                      <h2 className="text-lg font-semibold mb-2 text-black dark:text-foreground">Are you sure you want to Exit Game?</h2>
                    </div>
                    <div className="flex flex-col gap-2">
                      <Button
                        variant="destructive"
                        className="w-full font-arimo"

                        onClick={() => {
                          setShowExitPrompt(false);
                          resetGame();
                        }}
                      >
                        Yes, take me Home
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full font-arimo"

                        onClick={() => setShowExitPrompt(false)}
                      >
                        No, take me back to the quiz
                      </Button>
                    </div>
                  </div>
                </div>
              )}
              <Card className="w-full max-w-md bg-gradient-card shadow-card border-border/50 p-8 text-center">
                <div className="mb-8">
                  <Brain className="w-16 h-16 text-primary mx-auto mb-4" />
                  <h1 className="font-barriecito text-4xl mb-2">Choose Game Mode</h1>
                  <p className="font-arimo text-muted-foreground">Select how you want to play</p>
                </div>
                <div className="space-y-4">
                  <Button
                    variant="quiz"
                    size="xl"
                    onClick={() => handleModeSelection('multiple-choice')}
                    className="w-full font-arimo"

                  >
                    Multiple Choice
                  </Button>
                  <Button
                    variant="quiz"
                    size="xl"
                    onClick={() => handleModeSelection('flip-answer')}
                    className="w-full font-arimo"

                  >
                    Flip-for-Answer
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        )
        : gamePhase === 'quiz'
        ? renderQuizScreen()
        : gamePhase === 'results'
        ? renderResultsScreen()
        : gamePhase === 'end'
        ? (
          <div className="h-screen overflow-hidden bg-gradient-primary flex items-center justify-center p-4 relative z-10">
            <Card className="w-full max-w-md bg-gradient-card shadow-card border-border/50 p-8 text-center relative z-20">
              <p className="text-muted-foreground text-sm mb-2">Game Over! Here are your scores:</p>
              <Trophy className="w-16 h-16 text-accent mx-auto mb-4" />
              <h1 className="text-3xl font-bold text-foreground mb-2">Final Scores</h1>
              <div className="space-y-4 mb-8">
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Team Scores</h3>
                  <div className={`grid grid-cols-${Math.min(teamNames.length, 4)} gap-3`}>
                    {teamNames.map((name) => (
                      <div key={name} className="bg-primary/10 rounded-lg p-3">
                        <div className="text-xl font-bold text-primary">
                          {teamScores[name] ?? 0}
                        </div>
                        <div className="text-xs text-muted-foreground">{name}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <Button
                  variant="quiz"
                  size="xl"
                  onClick={handlePlayAgain}
                  className="w-full z-30"
                  style={{ pointerEvents: 'auto' }}
                >
                  <RotateCcw className="w-5 h-5" />
                  Play Again
                </Button>
                <Button
                  variant="outline"
                  size="xl"
                  onClick={() => {
                    setGamePhase('menu');
                    setSelectedMode(null);
                    setNumberOfTeams(0);
                    setTeamNames([]);
                    setTeamStats({});
                    setGameStats({ score: 0, totalQuestions: 0, correctAnswers: 0 });
                    setCurrentQuestion(0);
                    setSelectedAnswer(null);
                    setShowAnswer(false);
                  }}
                  className="w-full z-30"
                  style={{ pointerEvents: 'auto' }}
                >
                  <Home className="w-5 h-5" />
                  Home
                </Button>
              </div>
            </Card>
          </div>
        )
        : null}
    </div>
  );
}
