import React, { useState } from "react";
import './ExpenseForm.css'

const ExpenseForm = (props) => {
    // const [entered,setEntered] = useState({
    //         enteredTitle: '',
    //         enteredAmount: '',
    //         enteredDate: ''
    //     })
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        // setEntered({
        //     ...entered,
        //     enteredTitle: event.targe.value
        // })
        // setEntered((prevState) => {
        //     return { ...prevState, enteredTitle: event.target.value };
        // });
    }
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        // setEntered({
        //     ...entered,
        //     enteredAmount: event.targe.value
        // })
    }
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        // setEntered({
        //     ...entered,
        //     enteredDate: event.targe.value
        // })
    }
    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData =
        {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };
        // console.log(expenseData);
        props.onSaveData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };
    
    return (
        <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type='text' onInput={titleChangeHandler} value={enteredTitle} />
            </div>
            <div className='new-expense__control'onInput={dateChangeHandler} >
                <label>Date</label>
                <input type='date' min='2019-01-01' max='2022-12-31' value={enteredDate}/>
            </div>
            <div className='new-expense__control'onInput={amountChangeHandler}>
                <label>Amount</label>
                <input type='number' min='0.01' step='0.01' value={enteredAmount} />
            </div>
            <div className='new-expense__control'>
                <button type='submit'>Add Expense</button>
            </div>
        </div> 
        </form>)
};
export default ExpenseForm;