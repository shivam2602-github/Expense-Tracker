import React from 'react' ;
import './NewExpense.css' ;
import ExpenseForm from './ExpenseForm'

const NewExpense =(props) => {
    const saveExpenseDataHandler =(enteredExpenseData)=>{
        const expenseData={
            ...enteredExpenseData,
            id:Math.random()
        }
       // console.log(expenseData)
       props.onSubmit(expenseData)
    }

    return(
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}></ExpenseForm>
        </div>
    );
};

export default NewExpense;