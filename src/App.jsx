import { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import SummaryPanel from "./components/SummaryPanel";
import CurrencyConverter from "./components/CurrencyConverter";
import ExpenseChart from "./components/ExpenseChart";

function App() {
  const [expenses, setExpenses] = useState([]);
  // console.log("Current expenses:", expenses);
  console.log(expenses);
  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const deleteExpense = (id) => {
    const updatedExpenses = expenses.filter((expense) => expense.id !== id);
    setExpenses(updatedExpenses);
  };

  const total = expenses.reduce(
    (sum, expense) => sum + parseFloat(expense.amount),
    0,
  );
  return (
    <div className="app-container">
      <h1>
        Expense <span>Tracker</span>
      </h1>

      <div className="dashboard-grid">
        <div>
          <ExpenseForm onAddExpense={addExpense} />

          <CurrencyConverter total={total} />
        </div>

        <div>
          <SummaryPanel expenses={expenses} />
          <ExpenseChart expenses={expenses} />
          <ExpenseList expenses={expenses} onDelete={deleteExpense} />
        </div>
      </div>

      <p className="footer">Built with React</p>
    </div>
  );
}

export default App;
