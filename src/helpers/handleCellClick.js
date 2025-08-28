import { checkWinner } from "./checkWinner"

export function handleCellClick({
  index,
  field,
  currentPlayer,
  isGameEnded,
  setField,
  setCurrentPlayer,
  setIsGameEnded,
  setIsDraw,
}) {
  if (field[index] || isGameEnded) return

  const newField = [...field]
  newField[index] = currentPlayer

  if (checkWinner(newField)) {
    setField(newField)
    setIsGameEnded(true)
    return
  }

  if (!newField.includes("")) {
    setField(newField)
    setIsDraw(true)
    return
  }

  setField(newField)
  setCurrentPlayer(currentPlayer === "X" ? "O" : "X")
}
