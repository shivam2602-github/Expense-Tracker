import React , { useState }from 'react'
import './ExpenseForm.css'
const ExpenseForm = (props) => {
    const[enteredtitle,setTitle]=useState('')
    const[enteredamount,setAmount]=useState('')
    const[entereddate,setDate]=useState('')
    const titleChangeHandler =(event)=>{
        setTitle(event.target.value)
    }
    const amountChangeHandler =(event)=>{
        setAmount(event.target.value)
    }
    const dateChangeHandler =(event)=>{
        setDate(event.target.value)
    }

    const submitHandler = event =>{
        event.preventDefault()
        const expensedata={
            
            title:enteredtitle,
            amount:enteredamount,
            date:new Date(entereddate)
        }
        //console.log(expensedata)
        props.onSaveExpenseData(expensedata)
        setTitle('')
        setAmount('')
        setDate('')
    }
    return(
        
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className = 'new-expense__control'>
                    <label>Title</label>
                    <input type='text' value={enteredtitle} onChange={titleChangeHandler}/>
                </div>
                <div className = 'new-expense__control'>
                    <label>Amount</label>
                    <input type='number' value ={enteredamount}onChange={amountChangeHandler} />
                </div>
                <div className = 'new-expense__control'>
                    <label>Date</label>
                    <input type='date' value={entereddate}/*min='1998-01-01' max='2000-12-31'*/ onChange={dateChangeHandler}/>
                </div>

            </div>
            <div className='new-expense__actions'>
                <button type='submit' >Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;