import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "../Components/ExpenseForm";
import { EDIT_EXPENSE, REMOVE_EXPENSE } from "../redux/actions/expenses";
const Edit = props => {
  return (
    <div>
      <ExpenseForm
        expense={props.expense}
        onSubmit={expense => {
          props.dispatch(EDIT_EXPENSE(props.expense.id, expense));
          props.history.push("/dashboard");
        }}
      />
      <button
        onClick={() => {
          props.dispatch(REMOVE_EXPENSE({ id: props.expense.id }));
          props.history.push("/dashboard");
        }}
      >
        Remove Item
      </button>
    </div>
  );
};

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find(expense => expense.id === props.match.params.id)
});

export default connect(mapStateToProps)(Edit);
