function SummaryPanel({ expenses }) {
  const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);

  const breakdown = {};

  expenses.forEach((expense) => {
    if (breakdown[expense.category]) {
      breakdown[expense.category] += expense.amount;
    } else {
      breakdown[expense.category] = expense.amount;
    }
  });

  return (
    <div className="card">
      <h2>Summary</h2>

      <h3 className="summary-total">₹{total.toFixed(2)}</h3>

      <h3>Category Breakdown</h3>

      {Object.entries(breakdown).map(([category, amount]) => (
        <div key={category} className="breakdown-item">
          {category}: ₹{amount.toFixed(2)}
        </div>
      ))}
    </div>
  );
}

export default SummaryPanel;
