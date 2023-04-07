import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'>
                <h1>{props.title}</h1>         
                <div className='expense-item__price expense-item__price--align-right'>Php {props.amount}</div>
            </div>
        </Card>
    );
}

export default ExpenseItem;