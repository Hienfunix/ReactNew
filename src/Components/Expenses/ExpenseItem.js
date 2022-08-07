import React, { useState} from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.title);
    const clickHandler = () => {
        setTitle('Click roi nha!');
        console.log({title});
    }
    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className='expense-item_description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>{props.amount}</div>'
            </div>
            <button onClick={clickHandler}> change here </button>
        </Card>
    )
}
export default ExpenseItem;