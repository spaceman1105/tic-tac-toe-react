import { useState } from "react"
import AppLayout from "./AppLayout"
import { handleCellClick } from "../../helpers/handleCellClick"

export default function App() {
  const [currentPlayer, setCurrentPlayer] = useState("X")
  const [isGameEnded, setIsGameEnded] = useState(false)
  const [isDraw, setIsDraw] = useState(false)
  const [field, setField] = useState(Array(9).fill(""))

  const onCellClick = (index) =>
    handleCellClick({
      index,
      field,
      currentPlayer,
      isGameEnded,
      setField,
      setCurrentPlayer,
      setIsGameEnded,
      setIsDraw,
    })

  function resetGame() {
    setField(Array(9).fill(""))
    setCurrentPlayer("X")
    setIsGameEnded(false)
    setIsDraw(false)
  }

  return (
    <>
      <div>
        <AppLayout
          currentPlayer={currentPlayer}
          isGameEnded={isGameEnded}
          isDraw={isDraw}
          field={field}
          onCellClick={onCellClick}
          resetGame={resetGame}
        />
      </div>
    </>
  )
}
