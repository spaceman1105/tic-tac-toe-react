import PropTypes from "prop-types"
import styles from "./InformationLayout.module.css"
import showStatus from "../../helpers/showStatus"

export default function InformationLayout({
  currentPlayer,
  isDraw,
  isGameEnded,
}) {
  return (
    <div className={styles.info}>
      {showStatus(currentPlayer, isDraw, isGameEnded)}
    </div>
  )
}

InformationLayout.PropTypes = {
  currentPlayer: PropTypes.string.isRequired,
  isGameEnded: PropTypes.bool.isRequired,
  isDraw: PropTypes.bool.isRequired,
}
