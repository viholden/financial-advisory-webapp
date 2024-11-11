import React, { useEffect, useState } from 'react';
import { doc, setDoc, getDoc } from "firebase/firestore";
import { auth, firestore } from '../firebase';

const BudgetPlanner = () => {
  const [budgetData, setBudgetData] = useState({
    totalBudget: 1000,
    expenses: [],
    income: []
  });
  const [user, setUser] = useState(null);

  const [newExpense, setNewExpense] = useState({ name: '', amount: '', date: '' });
  const [newIncome, setNewIncome] = useState({ source: '', amount: '' });

  // Listen for authentication state changes
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        fetchBudgetData(user.uid);
      } else {
        setUser(null);
        setBudgetData({
          totalBudget: 1000,
          expenses: [],
          income: []
        });
      }
    });

    return () => unsubscribe();
  }, []);

  // Fetch budget data from Firestore
  const fetchBudgetData = async (userId) => {
    try {
      const userDoc = doc(firestore, "budgets", userId);
      const docSnap = await getDoc(userDoc);
      if (docSnap.exists()) {
        setBudgetData(docSnap.data());
      } else {
        console.log("No budget data found for this user!");
      }
    } catch (error) {
      console.error("Error fetching budget data:", error);
    }
  };

  // Save budget data to Firestore
  const saveBudgetData = async () => {
    if (!user) {
      console.log("User not logged in, data won't be saved.");
      return;
    }
    try {
      const userDoc = doc(firestore, "budgets", user.uid);
      await setDoc(userDoc, budgetData, { merge: true });
      console.log("Budget data saved successfully!");
    } catch (error) {
      console.error("Error saving budget data:", error);
    }
  };

  // Handle changes for total budget
  const handleBudgetChange = (e) => {
    setBudgetData((prevData) => ({
      ...prevData,
      totalBudget: e.target.value
    }));
  };

  // Add new expense
  const addExpense = () => {
    setBudgetData((prevData) => ({
      ...prevData,
      expenses: [...prevData.expenses, newExpense]
    }));
    setNewExpense({ name: '', amount: '', date: '' });
  };

  // Add new income
  const addIncome = () => {
    setBudgetData((prevData) => ({
      ...prevData,
      income: [...prevData.income, newIncome]
    }));
    setNewIncome({ source: '', amount: '' });
  };

  // Handle input change for new expense or income fields
  const handleNewExpenseChange = (e) => {
    const { name, value } = e.target;
    setNewExpense((prevExpense) => ({
      ...prevExpense,
      [name]: value
    }));
  };

  const handleNewIncomeChange = (e) => {
    const { name, value } = e.target;
    setNewIncome((prevIncome) => ({
      ...prevIncome,
      [name]: value
    }));
  };

  // Edit existing income or expense
  const handleEdit = (type, index, field, value) => {
    const updatedData = [...budgetData[type]];
    updatedData[index][field] = value;
    setBudgetData((prevData) => ({
      ...prevData,
      [type]: updatedData
    }));
  };

  // Delete income or expense
  const deleteItem = (type, index) => {
    const updatedData = budgetData[type].filter((_, i) => i !== index);
    setBudgetData((prevData) => ({
      ...prevData,
      [type]: updatedData
    }));
  };

  return (
    <div>
      <h2>Budget Planner</h2>

      {/* Display login state */}
      {user ? <p>Logged in as: {user.email}</p> : <p>Please log in to save your data.</p>}

      {/* Editable total budget */}
      <div>
        <h3>
          Total Budget: $
          <input
            type="number"
            value={budgetData.totalBudget}
            onChange={handleBudgetChange}
          />
        </h3>
      </div>

      {/* Income Table */}
      <h4>Income:</h4>
      <table border="1" style={{ width: '100%', textAlign: 'center' }}>
        <thead>
          <tr>
            <th>Source</th>
            <th>Amount</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {budgetData.income.map((income, index) => (
            <tr key={index}>
              <td>
                <input
                  type="text"
                  value={income.source}
                  onChange={(e) => handleEdit('income', index, 'source', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="number"
                  value={income.amount}
                  onChange={(e) => handleEdit('income', index, 'amount', e.target.value)}
                />
              </td>
              <td>
                <button onClick={() => deleteItem('income', index)}>Delete</button>
              </td>
            </tr>
          ))}
          <tr>
            <td>
              <input
                type="text"
                name="source"
                placeholder="Source"
                value={newIncome.source}
                onChange={handleNewIncomeChange}
              />
            </td>
            <td>
              <input
                type="number"
                name="amount"
                placeholder="Amount"
                value={newIncome.amount}
                onChange={handleNewIncomeChange}
              />
            </td>
            <td>
              <button onClick={addIncome}>Add Income</button>
            </td>
          </tr>
        </tbody>
      </table>

      {/* Expenses Table */}
      <h4>Expenses:</h4>
      <table border="1" style={{ width: '100%', textAlign: 'center' }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {budgetData.expenses.map((expense, index) => (
            <tr key={index}>
              <td>
                <input
                  type="text"
                  value={expense.name}
                  onChange={(e) => handleEdit('expenses', index, 'name', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="number"
                  value={expense.amount}
                  onChange={(e) => handleEdit('expenses', index, 'amount', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="date"
                  value={expense.date}
                  onChange={(e) => handleEdit('expenses', index, 'date', e.target.value)}
                />
              </td>
              <td>
                <button onClick={() => deleteItem('expenses', index)}>Delete</button>
              </td>
            </tr>
          ))}
          <tr>
            <td>
              <input
                type="text"
                name="name"
                placeholder="Expense Name"
                value={newExpense.name}
                onChange={handleNewExpenseChange}
              />
            </td>
            <td>
              <input
                type="number"
                name="amount"
                placeholder="Amount"
                value={newExpense.amount}
                onChange={handleNewExpenseChange}
              />
            </td>
            <td>
              <input
                type="date"
                name="date"
                value={newExpense.date}
                onChange={handleNewExpenseChange}
              />
            </td>
            <td>
              <button onClick={addExpense}>Add Expense</button>
            </td>
          </tr>
        </tbody>
      </table>

      {/* Save button for logged-in users */}
      <button onClick={saveBudgetData}>Save Budget Data</button>
    </div>
  );
};

export default BudgetPlanner;
