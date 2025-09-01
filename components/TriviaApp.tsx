import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Input } from './ui/input';
import { triviaQuestions, type TriviaQuestion } from '@/data/triviaQuestions';
import { Brain, Play, RotateCcw, Trophy, Home, ArrowLeft } from 'lucide-react';
import React, { useState } from 'react';
import TeamSetup from './TeamSetup';

type GameState = 'menu' | 'mode-select' | 'question-count' | 'playing' | 'results' | 'team-select' | 'categorySelect' | 'question' | 'flip-answer' | 'team-select';
// Explicit GamePhase type for clarity and reusability
type GamePhase = 'menu' | 'select-mode' | 'question-count' | 'team-setup' | 'quiz' | 'results' | 'end' | 'start';
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
  const [gamePhase, setGamePhase] = useState<'menu' | 'select-mode' | 'question-count' | 'team-setup' | 'quiz' | 'results' | 'end' | 'start'>('menu');
  // New gameState state for unified navigation
  const [gameState, setGameState] = useState<'menu' | 'team-select' | 'mode-select' | 'question-count' | 'quiz' | 'results'>('menu');
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
    'Arts & Culture', 'Literature', 'Music', 'History & Politics', 'Science & Technology',
    'Geography & Nature', 'TV & Cinema', 'Language', 'Sports'
  ]);
  // Question count selection
const [selectedQuestionCount, setSelectedQuestionCount] = useState<10 | 20 | 50 | 100 | 'all'>(20);
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
      // If single-player in flip-answer mode, init team scores
      if (selectedMode === 'flip-answer' && numberOfTeams === 1) {
        setTeamScores({ [teamNames[0]]: 0 });
        setTeamCorrectCounts({ [teamNames[0]]: 0 });
      }
      // Initialize scores for flip-answer single player
      if (selectedMode === 'flip-answer' && numberOfTeams === 1) {
        setTeamScores({ [teamNames[0]]: 0 });
        setTeamCorrectCounts({ [teamNames[0]]: 0 });
      }
      setGamePhase('question-count');
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
    // Ensure team scores and correct counts are initialized in single-player flip-answer mode
    if (selectedMode === 'flip-answer' && numberOfTeams === 1) {
      setTeamScores({ [teamNames[0]]: 0 });
      setTeamCorrectCounts({ [teamNames[0]]: 0 });
    }
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
      setNumberOfTeams(1); // Default to single player
      setTeamNames(['You']); // Set default single player name
      setGamePhase('team-setup');
    } else {
      setGamePhase('question-count');
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
            <h2 className="text-lg font-semibold mb-4 text-black dark:text-[#E7E6E0]">
              Are you sure you want to implement these changes?
            </h2>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-6">
              You will lose any quiz progress made.
            </p>
            <div className="flex justify-end space-x-4">
              <button
                className="bg-[#e17575] text-white rounded px-4 py-2 hover:bg-[#c85555]"
                onClick={() => setShowConfirmReset(false)}
              >
                Cancel
              </button>
              <button
                className="bg-[#0C0C0C] text-[#E7E6E0] rounded px-4 py-2 hover:bg-[#1a1a1a]"
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
    // Reshuffle questions and respect selectedQuestionCount
    const filtered = triviaQuestions.filter(q =>
      (selectedDifficulty === 'mix' || q.difficulty === selectedDifficulty) &&
      selectedSubjects.includes(q.category)
    );
    const shuffled = [...filtered].sort(() => Math.random() - 0.5);
    const limitedQuestions =
      selectedQuestionCount === 'all'
        ? shuffled
        : shuffled.slice(0, selectedQuestionCount);
    setQuestions(limitedQuestions);
    // Reset scores and stats
    setTeamStats({});
    setGameStats({ score: 0, totalQuestions: 0, correctAnswers: 0 });
    setTeamScores({});
    setTeamCorrectCounts({});
    if (selectedMode === 'flip-answer' && numberOfTeams === 1) {
      setTeamScores({ [teamNames[0]]: 0 });
      setTeamCorrectCounts({ [teamNames[0]]: 0 });
    } else if (selectedMode === 'flip-answer') {
      // Initialize multi-team scores
      const initialScores: { [key: string]: number } = {};
      const initialCounts: { [key: string]: number } = {};
      teamNames.forEach(name => {
        initialScores[name] = 0;
        initialCounts[name] = 0;
      });
      setTeamScores(initialScores);
      setTeamCorrectCounts(initialCounts);
    }
    setCurrentQuestion(0);
    setShowAnswer(false);
    // Go back into the quiz phase
    setGamePhase('quiz');
  };

const getButtonVariant = (optionIndex: number) => {
  if (!showAnswer) return 'choice';
  if (optionIndex === questions[currentQuestion].correctAnswer && optionIndex === selectedAnswer) return 'correct';
  if (optionIndex === questions[currentQuestion].correctAnswer && optionIndex !== selectedAnswer) return 'correct-unselected';
  if (optionIndex === selectedAnswer && selectedAnswer !== questions[currentQuestion].correctAnswer) return 'incorrect';
  return 'choice';
};
const renderQuestionCountScreen = () => (
  <div className="h-screen overflow-hidden bg-[#0C0C0C] flex items-center justify-center p-4 relative">
    <Card className="w-full max-w-md bg-[#242424] shadow-xl border border-[#333] rounded-[20px] p-8 text-center">
      <div className="mb-8">
        <Brain className="w-16 h-16 text-[#E7E6E0] mx-auto mb-4" />
        <h1 className="font-libertinus text-4xl mb-2">Choose Number of Questions</h1>
        <p className="font-work-sans text-muted-foreground">Select how many questions you want</p>
      </div>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          {[10, 20, 50, 100].map((count) => (
            <Button
              key={count}
              variant="quiz"
              size="xl"
              onClick={() => {
                setSelectedQuestionCount(count as any);
                // Filter and shuffle questions based on selections
                const filtered = triviaQuestions.filter(q =>
                  (selectedDifficulty === 'mix' || q.difficulty === selectedDifficulty) &&
                  selectedSubjects.includes(q.category)
                );
                const shuffled = [...filtered].sort(() => Math.random() - 0.5);
                const limitedQuestions = shuffled.slice(0, count);
                setQuestions(limitedQuestions);
                // Initialize single-player flip-answer scores
                if (gameMode === 'flip-answer' && numberOfTeams === 1) {
                  setTeamScores({ [teamNames[0]]: 0 });
                  setTeamCorrectCounts({ [teamNames[0]]: 0 });
                }
                setGamePhase('quiz');
              }}
              className="w-full font-work-sans"
            >
              {count}
            </Button>
          ))}
        </div>
        <Button
          variant="quiz"
          size="xl"
          onClick={() => {
            setSelectedQuestionCount('all');
            // Filter and shuffle questions based on selections
            const filtered = triviaQuestions.filter(q =>
              (selectedDifficulty === 'mix' || q.difficulty === selectedDifficulty) &&
              selectedSubjects.includes(q.category)
            );
            const shuffled = [...filtered].sort(() => Math.random() - 0.5);
            setQuestions(shuffled);
            setGamePhase('quiz');
          }}
          className="w-full font-work-sans"
        >
          All of them
        </Button>
      </div>
    </Card>
  </div>
);
const renderMenuScreen = () => (
  <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-[#0C0C0C] relative overflow-hidden">
    {/* Dynamic animated radial gradient background (starfield-like) */}
    <div
      className="absolute inset-0 z-0 pointer-events-none"
      style={{
        background: 'none',
        opacity: 0.93,
      }}
    />
    {/* Animated decorative stars */}

    <div className="flex-1 flex items-center justify-center w-full z-10">
      <Card className="w-full max-w-md bg-[#242424] shadow-xl border border-[#333] rounded-[20px] p-6 sm:p-8 text-center backdrop-blur-md"
        style={{
          boxShadow: 'none',
          borderRadius: 14,
        }}
      >
        <div className="mb-4">
          <h1 className="font-libertinus text-5xl text-[#5ba5c1] font-bold">Paul's Quiz</h1>
        </div>
        <div className="font-inter space-y-4 mb-6">
          <div className="bg-[#353536] rounded-[12px] p-4">
            <h3 className="text-[#E7E6E0] text-xl font-semibold mb-2 tracking-wide font-libertinus">Difficulty Level</h3>
            <div className="flex flex-wrap gap-2 justify-center">
              {['mix', 'easy', 'medium', 'hard'].map(level => (
                <Button
                  key={level}
                  variant={selectedDifficulty === level ? 'quiz' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedDifficulty(level as any)}
                  className={`h-9 px-4 text-sm font-medium rounded-[12px] transition-all duration-200 ${
                    selectedDifficulty === level
                      ? 'bg-[#E7E6E0] text-[#0C0C0C]'
                      : 'bg-[#242424] border-[#333] text-[#E7E6E0] hover:bg-[#333d5b] hover:text-[#0C0C0C]'
                  }`}
                  style={{
                    fontFamily: "'Work Sans', sans-serif",
                    borderRadius: 12,
                  }}
                >
                  {level.charAt(0).toUpperCase() + level.slice(1)}
                </Button>
              ))}
            </div>
          </div>
          <div className="bg-[#353536] rounded-[12px] p-4">
            <h3 className={`text-[#E7E6E0] text-xl font-semibold mb-1 tracking-wide font-libertinus ${selectedSubjects.length === 0 ? 'text-[#FF4C4C]' : ''}`}>
              Preferred Subject/s
            </h3>
            <p className={`text-xs mb-3 ${selectedSubjects.length === 0 && gameState === 'menu' ? 'text-[#FF4C4C]' : 'text-[#898675]'}`}>
              {`All are selected by default. `} 
              <br />
              {`Tap to deselect unwanted subjects. `}
              <br />
              <span className="font-semibold text-[#898675]">{selectedSubjects.length} of 9 selected</span>
              {showCategoryError && <span className="font-bold text-[#FF4C4C]"> (please select at least one)</span>}
            </p>
            <div className="flex flex-wrap gap-2 justify-center mt-1">
              {['Arts & Culture', 'Literature', 'Music', 'History & Politics', 'Science & Technology', 'Geography & Nature', 'TV & Cinema', 'Language', 'Sports'].map(subject => (
                <Button
                  key={subject}
                  variant={selectedSubjects.includes(subject) ? 'quiz' : 'outline'}
                  size="sm"
                  onClick={() =>
                    setSelectedSubjects(prev =>
                      prev.includes(subject)
                        ? prev.filter(s => s !== subject)
                        : [...prev, subject]
                    )
                  }
                  className={`h-9 px-4 text-sm font-medium rounded-[12px] transition-all duration-200 ${
                    selectedSubjects.includes(subject)
                      ? 'bg-[#E7E6E0] text-[#0C0C0C]'
                      : 'bg-[#242424] border-[#333] text-[#E7E6E0] hover:bg-[#333d5b] hover:text-[#0C0C0C]'
                  }`}
                  style={{
                    fontFamily: "'Work Sans', sans-serif",
                    borderRadius: 12,
                  }}
                >
                  {subject}
                </Button>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-1">
          <button
            onClick={startGame}
            className="py-3 px-8 rounded-[12px] bg-[#91a945] hover:bg-[#7a8f3a] text-[#546b09] font-inter text-xl font-bold inline-flex items-center gap-3  transition-all duration-200"            style={{
              fontFamily: "'Work Sans', sans-serif",
              letterSpacing: '0.01em',
              borderRadius: 12,
              boxShadow: 'none',
              transition: 'all 0.2s ease-in-out',
            }}
          >
            <Play className="w-6 h-6" />
          </button>
        </div>
      </Card>
    </div>
    {/* Copyright Footer */}
    <div className="absolute bottom-0 left-0 right-0 text-center pb-2 z-20">
      <p className="font-inter text-[#E7E6E0] text-[11px] opacity-80 tracking-wide">All trivia content: © paulsquiz.com</p>
    </div>
    {/* Starfield animation (optional, simple JS for effect) */}

  </div>
);

  const renderModeSelectScreen = () => (
    <div className="h-screen overflow-hidden bg-[#0C0C0C] flex items-center justify-center p-4 pb-16 relative">
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
                className="w-full font-work-sans"

                onClick={() => {
                  setShowExitPrompt(false);
                  resetGame();
                }}
              >
                Yes, take me Home
              </Button>
              <Button
                variant="outline"
                className="w-full font-work-sans"

                onClick={() => setShowExitPrompt(false)}
              >
                No, take me back to the quiz
              </Button>
            </div>
          </div>
        </div>
      )}
      <Card className="w-full max-w-md bg-[#242424] shadow-xl border border-[#333] rounded-[20px] p-8 text-center">
        <div className="mb-8">
          <Brain className="w-16 h-16 text-[#E7E6E0] mx-auto mb-4" />
          <h1 className="font-libertinus text-4xl mb-2">Choose Game Mode</h1>
          <p className="font-work-sans text-muted-foreground">Select how you want to play</p>
        </div>

        <div className="space-y-4">
          <Button 
            variant="quiz" 
            size="xl" 
            onClick={() => handleModeSelection('multiple-choice')}
            className="w-full font-work-sans"
          >
            Multiple Choice
          </Button>
          
          <Button 
            variant="quiz" 
            size="xl" 
            onClick={() => handleModeSelection('flip-answer')}
            className="w-full font-work-sans"
          >
            Flip-for-Answer
          </Button>
        </div>
      </Card>
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
        <>
          {showExitPrompt && (
            <div className="fixed inset-0 z-30 bg-black/40 flex items-center justify-center">
              <div className="bg-white dark:bg-background p-6 rounded-lg shadow-lg max-w-xs w-full text-center border border-border">
                <div className="mb-4">
                  <h2 className="text-lg font-semibold mb-2 text-black dark:text-foreground">
                    Are you sure you want to Exit Game?
                  </h2>
                </div>
                <div className="flex flex-col gap-2">
                  <Button variant="destructive" className="w-full font-work-sans !border-0" onClick={() => { setShowExitPrompt(false); resetGame(); }}>
                    Yes, take me Home
                  </Button>
                  <Button variant="outline" className="w-full font-work-sans !border-0" onClick={() => setShowExitPrompt(false)}>
                    No, take me back to the quiz
                  </Button>
                </div>
              </div>
            </div>
          )}
          <div className="overflow-hidden bg-[#0C0C0C] p-4 relative" style={{ height: '100dvh' }}>
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
            <span className="font-libertinus text-[#E7E6E0] text-base">Paul's Quiz</span>
          </div>
          {/* Divider Line */}
          <div className="absolute top-[50px] left-4 right-4 z-10">
            <div className="h-0.5 bg-gradient-to-r from-[#242424] to-[#353536]"></div>
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
                    className="w-full font-work-sans"

                    onClick={() => {
                      setShowExitPrompt(false);
                      resetGame();
                    }}
                  >
                    Yes, take me Home
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full font-work-sans"

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
              <Progress value={progress} className="h-1 bg-[#3b3b3b] [&>div]:bg-yellow-400" />
            </div>
            {/* Question Card */}
            <Card
              className={`bg-[#242424] shadow-xl border border-[#333] rounded-[20px] p-6 mb-6 ${!showAnswer ? 'cursor-pointer hover:scale-105 transition-transform' : ''}`}
              onClick={revealAnswer}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="bg-[#5da8c6]/30 text-[#a3e4ff] px-3 py-1 rounded-full text-xs font-medium">
                  {question.category}
                </span>
                <span className="bg-[#adadad]/30 text-[#E7E6E0] px-3 py-1 rounded-full text-xs font-medium capitalize">
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
              (numberOfTeams <= 1 || teamNames.length <= 1) ? (
                <div className="space-y-3">
                  <Button
                    variant="outline"
                    size="lg"
                    disabled={isTeamAnswered}
                    onClick={(e) => {
                      const button = e.currentTarget;
                      button.style.backgroundColor = '#91a945';
                      button.style.color = '#0C0C0C';
                      button.style.borderColor = '#91a945';
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
                      // Update game stats for proper results display
                      setGameStats(prev => ({
                        ...prev,
                        totalQuestions: prev.totalQuestions + 1,
                        correctAnswers: prev.correctAnswers + 1
                      }));
                      setTimeout(() => nextQuestion(), 1000);
                    }}
                    className="w-full font-work-sans bg-[#242424] text-[#E7E6E0] border-[#333]"
                  >
                    I got it right
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    disabled={isTeamAnswered}
                    onClick={(e) => {
                      const button = e.currentTarget;
                      button.style.backgroundColor = '#0C0C0C';
                      button.style.color = '#E7E6E0';
                      button.style.borderColor = '#0C0C0C';
                      setIsTeamAnswered(true);
                      // Update game stats for proper results display
                      setGameStats(prev => ({
                        ...prev,
                        totalQuestions: prev.totalQuestions + 1
                      }));
                      setTimeout(() => nextQuestion(), 1000);
                    }}
                    className="w-full font-work-sans bg-[#242424] text-[#E7E6E0] border-[#333]"
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
                        className="w-full font-work-sans"
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
              className="w-full mt-3 relative z-10"
            >
              End Game & View Scores
            </Button>
          </div>
          </div>
        </>
      );
    } else {
      // Multiple Choice Mode
      if (currentQuestion >= questions.length) return null;
      const question = questions[currentQuestion];
      const progress = ((currentQuestion + 1) / questions.length) * 100;
      const getTextSize = (text: string) => {
        if (text.length > 120) return 'text-sm';
        if (text.length > 80) return 'text-base';
        return 'text-xl';
      };

      const getOptionTextSize = (text: string) => {
        if (text.length > 60) return 'text-sm';
        return 'text-base';
      };
      return (
        <div className="overflow-hidden bg-[#0C0C0C] p-4 relative" style={{ height: '100dvh' }}>
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
            <span className="font-libertinus text-[#E7E6E0] text-base">Paul's Quiz</span>
          </div>
          {/* Divider Line */}
          <div className="absolute top-[50px] left-4 right-4 z-10">
            <div className="h-0.5 bg-gradient-to-r from-[#242424] to-[#353536]"></div>
          </div>
           {/* Exit Prompt Modal */}
          {showExitPrompt && (
            <div className="fixed inset-0 z-30 bg-black/40 flex items-center justify-center">
              <div className="bg-white dark:bg-background p-6 rounded-lg shadow-lg max-w-xs w-full text-center border border-border">
                <div className="mb-4">
                  <h2 className="text-lg font-semibold mb-2 text-black dark:text-foreground">
                    Are you sure you want to Exit Game?
                  </h2>
                </div>
                <div className="flex flex-col gap-2">
                  <Button
                    variant="destructive"
                    className="w-full font-work-sans"
                    onClick={() => {
                      setShowExitPrompt(false);
                      resetGame();
                    }}
                  >
                    Yes, take me Home
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full font-work-sans"
                    onClick={() => setShowExitPrompt(false)}
                  >
                    No, take me back to the quiz
                  </Button>
                </div>
              </div>
            </div>
          )}
          {/* Main content container - adjusted padding and spacing */}
          <div className="h-full flex flex-col pt-14">
            <div className="max-w-md mx-auto w-full flex flex-col flex-1">
              {/* Header - reduced margin */}
              <div className="mb-3">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-primary-foreground/70 text-sm">
                    Question {currentQuestion + 1} of {questions.length}
                  </span>
                  <span className="text-primary-foreground font-semibold">
                    Score: {gameStats.score}
                  </span>
                </div>
                <Progress value={progress} className="h-2 bg-[#3b3b3b] [&>div]:bg-yellow-400" />
              </div>
              
              {/* Question Card - reduced margin */}
              <Card className="bg-[#242424] shadow-xl border border-[#333] rounded-[20px] p-4 sm:p-6 mb-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-[#5da8c6]/30 text-[#a3e4ff] px-3 py-1 rounded-full text-xs font-medium">
                    {question.category}
                  </span>
                  <span className="bg-[#adadad]/30 text-[#E7E6E0] px-3 py-1 rounded-full text-xs font-medium capitalize">
                    {question.difficulty}
                  </span>
                </div>
                <h2 className={`${getTextSize(question.question)} font-semibold text-foreground leading-relaxed`}>
                  {question.question}
                </h2>
              </Card>
              
              {/* Answer Options - in scrollable container if needed */}
              <div className="flex-1 overflow-y-auto pb-2">
                <div key={currentQuestion} className="space-y-2">
                  {question.options.map((option, index) => (
                    <Button
                      key={`${currentQuestion}-${index}`}
                      variant={getButtonVariant(index)}
                      size={option.length > 60 ? "default" : "choice"}
                      onClick={(e) => {
                        selectAnswer(index);
                        (e.currentTarget as HTMLElement).blur();
                      }}
                      onTouchEnd={e => (e.currentTarget as HTMLElement).blur()}
                      disabled={showAnswer}
                      className={`w-full text-left justify-start ${getOptionTextSize(option)} h-auto min-h-[3rem] py-3`}
                    >
                      <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold mr-3 flex-shrink-0 ${
  getButtonVariant(index) === 'incorrect' 
    ? 'bg-[#ffb2b2]/30 text-[#fc5353]'
    : getButtonVariant(index) === 'correct' || getButtonVariant(index) === 'correct-unselected'
    ? 'bg-[#e1efaa]/30 text-[#849b37]'
    : 'bg-[#5da8c6]/30 text-[#a3e4ff]'
}`}>
                        {String.fromCharCode(65 + index)}
                      </span>
                      <span className="text-left whitespace-normal break-words flex-1">
                        {option}
                      </span>
                    </Button>
                  ))}
                </div>
              </div>
              
              {/* End Game button - always visible at bottom */}
              <div className="pt-3 pb-4">
                <Button
                  variant="destructive"
                  size="lg"
                  onClick={() => { setIsExhausted(false); setGamePhase('results'); }}
                  className="w-full"
                >
                  End Game & View Scores
                </Button>
              </div>
            </div>
          </div>
        </div>
      );
    }
  };

  const renderResultsScreen = () => {
    const percentage = Math.round((gameStats.totalQuestions > 0 ? (gameStats.correctAnswers / gameStats.totalQuestions) : 0) * 100);
    return (
      <div className="h-screen overflow-hidden bg-[#0C0C0C] flex items-center justify-center p-4 pb-16 relative">
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
                  className="w-full font-work-sans"
                  onClick={() => {
                    setShowExitPrompt(false);
                    resetGame();
                  }}
                >
                  Yes, take me Home
                </Button>
                <Button
                  variant="outline"
                  className="w-full font-work-sans"
                  onClick={() => setShowExitPrompt(false)}
                >
                  No, take me back to the quiz
                </Button>
              </div>
            </div>
          </div>
        )}
        <Card className="w-full max-w-md bg-[#242424] shadow-xl border border-[#333] rounded-[20px] p-8 text-center">
          <p className="text-muted-foreground text-sm mb-2">
            {isExhausted && selectedQuestionCount === 'all'
              ? "You've reached the end of the available questions, nerd."
              : ""}
          </p>
          <Trophy className="w-16 h-16 text-[#E7E6E0] mx-auto mb-4" />
          <h1 className="font-libertinus text-[#E7E6E0] text-4xl mb-4">Quiz Complete!</h1>
          <div className="font-work-sans space-y-4 mb-8">
            {gameMode === 'multiple-choice' ? (
              <>
                <div className="bg-primary/10 rounded-lg p-4">
                  <div className="text-3xl text-[#E7E6E0] mb-1">
                    {gameStats.score}
                  </div>
                  <div className="text-sm text-muted-foreground">Total Points</div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-primary/10 rounded-lg p-3">
                    <div className="text-xl font-bold text-[#E7E6E0]">
                      {gameStats.correctAnswers}
                    </div>
                    <div className="text-xs text-muted-foreground"> of {gameStats.totalQuestions} Correct</div>
                  </div>
                  <div className="bg-accent/10 rounded-lg p-3">
                    <div className="text-xl font-bold text-[#E7E6E0]">
                      {percentage}%
                    </div>
                    <div className="text-xs text-muted-foreground">Accuracy</div>
                  </div>
                </div>
              </>
            ) : numberOfTeams === 1 ? (
              // Single player mode: show a centered single player score card
              <div className="flex flex-col items-center justify-center">
                <div className="text-2xl font-semibold mb-2">Your Score</div>
                <div className="bg-primary/10 rounded-lg p-6 mb-4 w-full flex flex-col items-center">
                  <div className="text-4xl text-[#E7E6E0] font-bold mb-1">
                    {teamScores[teamNames[0]] ?? 0}
                  </div>
                  <div className="text-sm text-muted-foreground">Total Points</div>
                </div>
                <div className="grid grid-cols-2 gap-4 w-full mb-2">
                  <div className="bg-primary/10 rounded-lg p-3 flex flex-col items-center">
                    <div className="text-xl font-bold text-[#E7E6E0]">
                      {teamCorrectCounts[teamNames[0]] ?? 0}
                    </div>
                    <div className="text-xs text-muted-foreground"> of {gameStats.totalQuestions > 0 ? gameStats.totalQuestions : currentQuestion} Correct</div>
                  </div>
                  <div className="bg-accent/10 rounded-lg p-3 flex flex-col items-center">
                    <div className="text-xl font-bold text-[#E7E6E0]">
                      {(() => {
                        const correct = teamCorrectCounts[teamNames[0]] ?? 0;
                        const total = gameStats.totalQuestions > 0 ? gameStats.totalQuestions : currentQuestion;
                        return total > 0 ? Math.round((correct / total) * 100) : 0;
                      })()}%
                    </div>
                    <div className="text-xs text-muted-foreground">Accuracy</div>
                  </div>
                </div>
              </div>
            ) : (
              // Team Scores (multi-team)
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-foreground mb-4">Team Scores</h3>
                <div className={`grid ${teamNames.length === 4 ? 'grid-cols-2' : teamNames.length === 3 ? 'grid-cols-3' : 'grid-cols-2'} gap-3`}>
                  {teamNames.map((name) => (
                    <div key={name} className="bg-primary/10 rounded-lg p-3">
                      <div className="text-xl font-bold text-[#E7E6E0]">
                        {teamScores[name] ?? 0}
                      </div>
                      <div className="text-sm text-muted-foreground">{name}</div>
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
              variant="default"
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
      </div>
    );
  };

  // --- Render block for new game phases ---
  return (
    <div className="font-inter min-h-screen h-full overflow-hidden bg-[#0C0C0C] text-[#E7E6E0]" style={{ fontFamily: "'Work Sans', sans-serif", background: '#0C0C0C', color: '#E7E6E0', minHeight: '100dvh', height: '100dvh' }}>
      {/* Confirmation Modal for Team Setup "Ready" */}
      {showConfirmModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-[90%] max-w-sm">
            <h2 className="text-lg font-semibold mb-4 text-black dark:text-[#E7E6E0]">
              Are you sure you want to implement these changes?
            </h2>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-6">
              You will lose any quiz progress made.
            </p>
            <div className="flex justify-end space-x-4">
              <button
                className="bg-[#242424] text-[#E7E6E0] rounded px-4 py-2 hover:bg-[#5da8c6] active:bg-[#333d5b] transition-colors"
                onClick={handleCancelChanges}
              >
                Cancel
              </button>
              <button
                className="bg-[#242424] text-[#E7E6E0] rounded px-4 py-2 hover:bg-[#5da8c6] active:bg-[#333d5b] transition-colors"
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
                <div className="bg-[#242424] text-[#E7E6E0] p-6 rounded-lg shadow-lg w-[90%] max-w-sm">
                  <h2 className="text-lg font-semibold mb-4">
                    Are you sure you want to implement these team changes?
                  </h2>
                  <p className="text-sm mb-6">
                    You will lose any quiz progress made.
                  </p>
                  <div className="flex justify-end space-x-4">
                    <button
                      className="bg-[#242424] text-[#E7E6E0] rounded px-4 py-2 hover:bg-[#5da8c6] active:bg-[#333d5b] transition-colors"
                      onClick={() => setShowConfirmReset(false)}
                    >
                      Cancel
                    </button>
                    <button
                      className="bg-[#242424] text-[#E7E6E0] rounded px-4 py-2 hover:bg-[#5da8c6] active:bg-[#333d5b] transition-colors"
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
            <div className="h-screen overflow-hidden bg-[#0C0C0C] flex items-center justify-center p-4 relative">
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
                        className="w-full font-work-sans"

                        onClick={() => {
                          setShowExitPrompt(false);
                          resetGame();
                        }}
                      >
                        Yes, take me Home
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full font-work-sans"

                        onClick={() => setShowExitPrompt(false)}
                      >
                        No, take me back to the quiz
                      </Button>
                    </div>
                  </div>
                </div>
              )}
              <Card className="w-full max-w-md bg-[#242424] shadow-xl border border-[#333] rounded-[20px] p-8 text-center">
                <div className="mb-8">
                  <Brain className="w-16 h-16 text-[#E7E6E0] mx-auto mb-4" />
                  <h1 className="font-libertinus text-4xl mb-2">Choose Game Mode</h1>
                  <p className="font-work-sans text-muted-foreground">Select how you want to play</p>
                </div>
                <div className="space-y-4">
                  <Button
                    variant="quiz"
                    size="xl"
                    onClick={() => handleModeSelection('multiple-choice')}
                    className="w-full font-work-sans"

                  >
                    Multiple Choice
                  </Button>
                  <Button
                    variant="quiz"
                    size="xl"
                    onClick={() => handleModeSelection('flip-answer')}
                    className="w-full font-work-sans"

                  >
                    Flip-for-Answer
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        )
        : gamePhase === 'question-count'
        ? renderQuestionCountScreen()
        : gamePhase === 'quiz'
        ? renderQuizScreen()
        : gamePhase === 'results'
        ? renderResultsScreen()
        : gamePhase === 'end'
        ? (
          <div className="h-screen overflow-hidden bg-[#0C0C0C] flex items-center justify-center p-4 relative z-10">
            <Card className="w-full max-w-md bg-[#242424] shadow-xl border border-[#333] rounded-[20px] p-8 text-center relative z-20">
              <p className="text-muted-foreground text-sm mb-2">Here are your scores:</p>
              <Trophy className="w-16 h-16 text-[#E7E6E0] mx-auto mb-4" />
              <h1 className="text-3xl font-bold text-foreground mb-2">Final Scores</h1>
              <div className="space-y-4 mb-8">
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Team Scores</h3>
                  <div className={`grid grid-cols-${Math.min(teamNames.length, 4)} gap-3`}>
                    {teamNames.map((name) => (
                      <div key={name} className="bg-primary/10 rounded-lg p-3">
                        <div className="text-xl font-bold text-[#E7E6E0]">
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
