import React from "react"
import ExpenseList from "../Components/ExpenseList"
import ExpenseListFilters from "../Components/ExpenseListFilters"
import ExpensesSum from "../Components/ExpensesSum"
const Dashboard = () => (
    <div>
        <h1>Dashboard</h1>
        <ExpensesSum />
        <ExpenseListFilters></ExpenseListFilters>
        <ExpenseList />
    </div>
)

export default Dashboard
