// src/pages/BudgetPlanner.js
import React from 'react';

const BudgetPlanner = () => {
  return (
    <div>
      <h2>Budget Planner</h2>
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Planned Amount</th>
            <th>Actual Amount</th>
            <th>Difference</th>
          </tr>
        </thead>
        <tbody>
          {/* Add rows as needed */}
        </tbody>
      </table>
    </div>
  );
};

export default BudgetPlanner;
