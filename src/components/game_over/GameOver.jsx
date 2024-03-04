import './GameOver.css'

// eslint-disable-next-line react/prop-types
export const GameOver = ({retry}) => {
  return (
    <div>
      <button onClick={retry}></button>
    </div>
  )
}
