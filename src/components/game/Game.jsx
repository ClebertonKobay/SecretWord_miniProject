import { useState, useRef } from 'react';
import './Game.css';

// eslint-disable-next-line react/prop-types
export const Game = ({
  verifyLetter,
  pickedWord,
  pickedCategory,
  letters,
  score,
  guesses,
  wrongLetters,
  guessedLetters,
}) => {
  const [letter, setLetter] = useState('');
  const letterInputRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    verifyLetter(letter);
    setLetter('');
    letterInputRef.current.focus();
  };

  return (
    <div className="game">
      <p className="points">
        <span>Pontuação: {score}</span>
      </p>
      <h1>Adivinhe a palavra</h1>
      <h3>
        Dica da palavra: <span>{pickedCategory}</span>
      </h3>
      <p>Você ainda tem {guesses} tentativa(s):</p>
      <div className="wordContainer">
        {letters.map((letter, index) => {
          return guessedLetters.includes(letter) ? (
            <span className="letter" key={index}>
              {letter}
            </span>
          ) : (
            <span className="blankSquare" key={index}></span>
          );
        })}
        <span> </span>
        <span></span>
      </div>
      <div className="letterContainer">
        <p>Tente adivinha a letra da palavra</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="letter"
            maxLength="1"
            required
            ref={letterInputRef}
            onChange={(e) => {
              setLetter(e.target.value);
            }}
            value={letter}
          />
          <button>Jogar!</button>
        </form>
      </div>
      <div className="wrongLettersContainer">
        <p>Letras já utilizadas:</p>
        <span>
          {wrongLetters.map((letter, index) => {
            return <span key={index}>{letter}, </span>;
          })}
        </span>
      </div>
    </div>
  );
};
