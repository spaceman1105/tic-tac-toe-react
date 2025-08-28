export default function showStatus(currentPlayer, isDraw, isGameEnded) {
  if (isDraw) {
    return <span>Ничья</span>
  } else if (!isDraw && isGameEnded) {
    return <span>{`Победа: ${currentPlayer}`}</span>
  } else if (!isDraw && !isGameEnded) {
    return <span>{`Ходит: ${currentPlayer}`}</span>
  }
}
