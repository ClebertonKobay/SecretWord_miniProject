import './GameOver.css'

// eslint-disable-next-line react/prop-types
export const GameOver = ({retry}) => {
  return (
    <div>
      <h1>Game Over</h1>
      <button onClick={retry}>Retry</button>
    </div>
  )
}
