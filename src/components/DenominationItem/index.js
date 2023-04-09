// Write your code here
import './index.css'

const DenominationItem = props => {
  const {denomination, withdrawAmount} = props
  const {value} = denomination

  const onClickWithdraw = () => {
    withdrawAmount(value)
  }
  return (
    <li>
      <button type="button" className="denomination" onClick={onClickWithdraw}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
