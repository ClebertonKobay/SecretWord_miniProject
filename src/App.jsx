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
  const [words, setWords] = useState(wordsList);

  const startgame = () => {
    setGameStage(stages[1].name);
  };

  const verifyLetter = () => {
    setGameStage(stages[2].name);
    console.log('sa');
  };
  const retry = () => {
    setGameStage(stages[0].name);
    console.log('sa');
  };

  return (
    <div className="App">
      {gameStage === stages[0].name && <StartScreen startgame={startgame} />}
      {gameStage === stages[1].name && <Game verifyLetter={verifyLetter} />}
      {gameStage === stages[2].name && <GameOver retry={retry} />}
    </div>
  );
}
