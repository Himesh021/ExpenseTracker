function ExpenseChart({ expenses }) {
  if (expenses.length === 0) {
    return (
      <div className="card">
        <h2>Expense Analytics</h2>

        <p className="empty-state">No analytics available yet.</p>
      </div>
    );
  }

  const breakdown = {};

  expenses.forEach((expense) => {
    if (breakdown[expense.category]) {
      breakdown[expense.category] += expense.amount;
    } else {
      breakdown[expense.category] = expense.amount;
    }
  });

  const chartData = Object.entries(breakdown);

  const maxAmount = Math.max(...chartData.map(([_, amount]) => amount));

  return (
    <div className="card">
      <h2>Expense Analytics</h2>

      <div className="graph-container">
        {chartData.map(([category, amount]) => (
          <div key={category} className="bar-wrapper">
            <div
              className="bar-fill"
              style={{
                height: `${(amount / maxAmount) * 220}px`,
              }}
            ></div>

            <p className="bar-label">{category}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExpenseChart;
