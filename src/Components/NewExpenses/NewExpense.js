import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const saveDataHandler = (data) =>{
            const expenseData = {
                ...data,
                id: Math.random().toString()
            };
        props.onAddExpense(expenseData);
    }
    
    return (
    <div className="new-expense">
        <ExpenseForm onSaveData={saveDataHandler} />
    </div>   
)};
export default NewExpense;