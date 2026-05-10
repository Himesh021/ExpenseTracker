import { useState } from "react";
import { motion } from "framer-motion";
function ExpenseForm({ onAddExpense }) {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || amount <= 0) {
      return;
    }
    const newExpense = {
      id: Date.now(),
      name: name.trim(),
      amount: parseFloat(amount),
      category,
    };
    onAddExpense(newExpense);
    setName("");
    setAmount("");
    setCategory("Food");
  };
  return (
    <motion.div
      className="card"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2>Add Expense</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Expense Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <br />

        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <br />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="Food">Food</option>
          <option value="Utilities">Utilities</option>
          <option value="Shopping">Shopping</option>
          <option value="Health">Health</option>
          <option value="Transportation">Transportation</option>
          <option value="Entertainment">Entertainment</option>
        </select>
        <br />
        <button type="submit">Add Expense</button>
      </form>
    </motion.div>
  );
}

export default ExpenseForm;
