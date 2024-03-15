import './App.css';
import { useCallback, useEffect, useState } from 'react';
import { wordsList } from './data/words';
import { StartScreen } from './components/start_screen/StartScreen';
import { Game } from './components/game/Game';
import { GameOver } from './components/game_over/GameOver';

const stages = [
  { id: 1, name: 'start' },
  { id: 2, name: 'game' },
  { id: 3, name: 'end' },
];
export function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words,] = useState(wordsList);
  const [pickedWord, setPickedWord] = useState('');
  const [pickedCategory, setPickedCategory] = useState('');
  const [letters, setLetters] = useState([]);
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(3);
  const [score, setScore] = useState(0);

  const pickWordAndCategory = useCallback(() => {
    const cartegories = Object.keys(words);
    const category =
      cartegories[Math.floor(Math.random() * cartegories.length)];

    const wordsPicked = words[category];
    const word = wordsPicked[Math.floor(Math.random() * wordsPicked.length)];
    return [word.toLowerCase(), category.toLowerCase()];
  },[words]);

  const startgame = useCallback(() => {
    const [word, category] = pickWordAndCategory();

    let wordLetters = word.split('');
    setPickedCategory(category);
    setPickedWord(word);
    setLetters(wordLetters);

    setGameStage(stages[1].name);
  },[pickWordAndCategory]);

  const verifyLetter = (letter) => {
    const normalizedLetter = letter.toLowerCase();
    if (
      guessedLetters.includes(normalizedLetter) ||
      wrongLetters.includes(normalizedLetter)
    ) {
      return;
    }
    if (letters.includes(normalizedLetter)) {
      setGuessedLetters((prevState) => {
        return [...prevState, normalizedLetter];
      });
    } else {
      setWrongLetters((prevState) => {
        return [...prevState, normalizedLetter];
      });

      setGuesses((prevState) => prevState - 1);
    }
  };

  const clearGame = () => {
    setGuessedLetters([]);
    setWrongLetters([]);
  };

  useEffect(() => {
    if (guesses <= 0) {
      setGameStage(stages[2].name);
      clearGame();
    }
  }, [guesses]);

  useEffect(() => {
    const uniqueLetters = [...new Set(letters)];

    if (guessedLetters.length === uniqueLetters.length) {
      setScore((prevScore) => (prevScore += 100));
      clearGame();
      startgame();
    }
  }, [guessedLetters, letters, startgame]);

  const retry = () => {
    setGuesses(3);
    setScore(0);
    setGameStage(stages[0].name);
  };

  return (
    <div className="App">
      {gameStage === stages[0].name && <StartScreen startgame={startgame} />}
      {gameStage === stages[1].name && (
        <Game
          verifyLetter={verifyLetter}
          pickedWord={pickedWord}
          pickedCategory={pickedCategory}
          letters={letters}
          guessedLetters={guessedLetters}
          wrongLetters={wrongLetters}
          guesses={guesses}
          score={score}
        />
      )}
      {gameStage === stages[2].name && <GameOver retry={retry} score={score} />}
    </div>
  );
}
