import PropTypes from "prop-types"
import styles from "./FieldLayout.module.css"

export default function FieldLayout({ field, onCellClick }) {
  return (
    <div className={styles.grid}>
      {field.map((cell, i) => (
        <button key={i} className={styles.cell} onClick={() => onCellClick(i)}>
          {cell}
        </button>
      ))}
    </div>
  )
}

FieldLayout.PropTypes = {
  field: PropTypes.arrayOf(PropTypes.string).isRequired,
  onCellClick: PropTypes.func.isRequired,
}
