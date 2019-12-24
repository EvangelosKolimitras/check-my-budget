import React from "react";
import ExpenseList from "../Components/ExpenseList";
import ExpenseListFilters from "../Components/ExpenseListFilters";

const Dashboard = () => (
  <div>
    <h1>Dashboard</h1>
    <ExpenseListFilters></ExpenseListFilters>
    <ExpenseList />
  </div>
);

export default Dashboard;
