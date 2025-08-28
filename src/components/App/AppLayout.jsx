import PropTypes from "prop-types"
import Information from "../Information/Information"
import Field from "../Field/Field"
import styles from "./AppLayout.module.css"

export default function AppLayout({
  currentPlayer,
  isGameEnded,
  isDraw,
  field,
  onCellClick,
  resetGame,
}) {
  return (
    <div className={styles.game}>
      <Information
        isDraw={isDraw}
        isGameEnded={isGameEnded}
        currentPlayer={currentPlayer}
      />
      <Field field={field} onCellClick={onCellClick} />
      <button onClick={resetGame}>Начать заново</button>
    </div>
  )
}

AppLayout.PropTypes = {
  currentPlayer: PropTypes.string.isRequired,
  isGameEnded: PropTypes.bool.isRequired,
  isDraw: PropTypes.bool.isRequired,
  field: PropTypes.arrayOf(PropTypes.string).isRequired,
  onCellClick: PropTypes.func.isRequired,
  resetGame: PropTypes.func.isRequired,
}
