import { motion } from "framer-motion";
function ExpenseList({ expenses, onDelete }) {
  return (
    <motion.div
      className="card"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h2>Expense List</h2>

      {expenses.map((expense) => (
        <motion.div
          key={expense.id}
          className="expense-item"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <p>Name: {expense.name}</p>
          <p>Amount: ₹{expense.amount.toFixed(2)}</p>
          <p>Category: {expense.category}</p>

          <button onClick={() => onDelete(expense.id)}>Delete </button>
          <hr />
        </motion.div>
      ))}
    </motion.div>
  );
}

export default ExpenseList;
