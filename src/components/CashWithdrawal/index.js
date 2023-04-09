// Write your code here
import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {
    amount: 2000,
  }

  withdrawAmount = value => {
    this.setState(prevState => ({
      amount: prevState.amount - value,
    }))
  }

  render() {
    const {amount} = this.state
    const {denominationsList} = this.props

    return (
      <div className="main-container">
        <div className="withdraw-container">
          <div className="name-container">
            <button type="button" className="icon">
              S
            </button>
            <h1 className="name">Sarah Williams</h1>
          </div>
          <div className="balance-container">
            <p className="balance">Your Balance</p>
            <p className="amount">{amount}</p>
          </div>
          <p className="text">In Rupees</p>

          <p className="withdraw">Withdraw</p>
          <p className="choose-option">CHOOSE SUM (IN RUPEES)</p>
          <ul className="denomination-container">
            {denominationsList.map(eachItem => (
              <DenominationItem
                key={eachItem.id}
                denomination={eachItem}
                withdrawAmount={this.withdrawAmount}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
