import InformationLayout from "./InformationLayout"

export default function Information({ isDraw, isGameEnded, currentPlayer }) {
  return (
    <InformationLayout
      currentPlayer={currentPlayer}
      isDraw={isDraw}
      isGameEnded={isGameEnded}
    />
  )
}
