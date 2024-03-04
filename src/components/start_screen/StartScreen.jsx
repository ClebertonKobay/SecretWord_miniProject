import './StartScreen.css';

// eslint-disable-next-line react/prop-types
export const StartScreen = ({ startgame }) => {
  return (
    <div className="StartScreen">
      <h1>Secret Word</h1>
      <p>Clique no botão abaixo para começar a jogar</p>
      <button onClick={startgame}>Começar o jogo</button>
    </div>
  );
};
