import './Game.css';

// eslint-disable-next-line react/prop-types
export const Game = ({ verifyLetter }) => {
  return (
    <>
      <div>Game</div>
      <button onClick={verifyLetter}>Clique </button>
    </>
  );
};
