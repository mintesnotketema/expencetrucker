import './App.css';
import Header from './commponent/Header';
import Balance from './commponent/Balance.js';
import IncomeExpenses from './commponent/IncomeExpenses.js';
import TransactionList from './commponent/TransactionList.js';
import AddTransaction from './commponent/AddTransaction.js';

function App() {
  return (
    <div>
      < Header />
        <div className='container'>
           <Balance />
           <IncomeExpenses />
           <TransactionList />
           <AddTransaction />
        </div>
    </div>
  );
}

export default App;
