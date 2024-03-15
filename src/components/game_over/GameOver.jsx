import './GameOver.css'

// eslint-disable-next-line react/prop-types
export const GameOver = ({retry,score}) => {
  return (
    <div>
      <h1>Fim de jogo</h1>
      <h2>A sua pontuação foi: <span>{score}</span></h2>
      <button onClick={retry}>Resetar</button>
    </div>
  )
}
