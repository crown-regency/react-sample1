import React, {useState} from "react";
import ExpensesChart from './ExpensesChart';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import Card from "../UI/Card";
import './Expenses.css';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2023');

    const filterChangeHandler = (selectedYear) => {
      setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
      });
    
    // let expensesContent = <p>No expenses found.</p>;

    // if (filteredExpenses.length > 0) {
    //     expensesContent = filteredExpenses.map((expense) => (
    //       <ExpenseItem
    //         key={expense.id}
    //         title={expense.title}   
    //         amount={expense.amount}
    //         date={expense.date}
    //       />
    //     ));
    // }

    return (
        <div>
          <Card className='expenses'>
            <ExpensesFilter
              selected={filteredYear}
              onChangeFilter={filterChangeHandler}
            />
            <ExpensesChart expenses={filteredExpenses} />
            <ExpensesList items={filteredExpenses} />
          </Card>
        </div>
    );    
    // return (
    //     <div>
    //       <Card className='expenses'>
    //         <ExpensesFilter
    //           selected={filteredYear}
    //           onChangeFilter={filterChangeHandler}
    //         />
    //         {expensesContent}
    //       </Card>
    //     </div>
    // );    
    // return (
    //     <Card className="expenses">
    //         <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
    //         {props.items.map(expense => (
    //             <ExpenseItem
    //                 key={expense.id}
    //                 title={expense.title}
    //                 amount={expense.amount}
    //                 date={expense.date}
    //             />                
    //         ))}            
    //     </Card>        
    // );  
}

export default Expenses;