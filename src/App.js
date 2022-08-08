import React from 'react';
import './App.css';

function App() {
  let deposit = 0; // state of this transaction
  const [totalState, setTotalState] = React.useState(0);
  const [isDeposit, setIsDeposit] = React.useState(true);
  const [isShown, setIsShown] = React.useState(false);
    
  //transaction input
  const ATMDeposit = ({onChange}) => {
  
      return (
        <div className='input-field'>
          <input type="number" onChange={onChange}></input>
        
          <input type="submit" value="Confirm Transaction"></input>
        </div>
      );
    };

  //show current account balance
  let status = `Your Current Account Balance: $ ${totalState} `;
  
  //handleChange event
  const handleChange = event => {
    deposit = Number(event.target.value);
  };

  //handleSubmit event
  const handleSubmit = e => {
    let newTotal = isDeposit ? totalState + deposit : totalState - deposit;
    setTotalState(newTotal);
    e.preventDefault();
  };

  //set isDeposit value on button click
      const transactionType = (transaction) => {
      if (transaction === 'Deposit') {
          setIsDeposit(true);
          setIsShown(current => !current);
      }
      if (transaction === 'Withdraw') {
          setIsDeposit(false);
          setIsShown(current => !current);
      }
    }; 
  
    return (
      <div>
          <form onSubmit={handleSubmit}>
              <div className="current-balance">{status}</div>
              <button type="button" onClick={() => transactionType('Deposit')}>Deposit</button>
              <button type="button" onClick={() => transactionType('Withdraw')}>Withdraw</button>         
              <div style={{display: isShown ? 'block' : 'none'}}>
                  <ATMDeposit onChange={handleChange}></ATMDeposit>
              </div>
          </form>
    </div>      
  );
}

export default App;