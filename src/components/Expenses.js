import React , {useState} from 'react'

import ExpenseFilter from './ExpenseFilter'
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpensesChart'
import './Expenses.css';
import Card from './Card' ;

function Expenses(props) {

  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(expense=>{
    return expense.date.getFullYear().toString() ===filteredYear ;
  })

  
  return (
    <li>
    <Card className="expenses">
       <ExpenseFilter  selected={filteredYear} onChangeFilter={filterChangeHandler} />
       <ExpensesChart expenses ={filteredExpenses}/>
       <ExpensesList items={filteredExpenses}/>
       
       
       
      
    </Card>
    </li>
  );
}

export default Expenses;