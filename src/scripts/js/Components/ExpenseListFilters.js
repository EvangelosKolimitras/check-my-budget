import React from "react";
import { connect } from "react-redux";
import {
  SET_TEXT_FILTER,
  SORT_BY_AMOUNT,
  SORT_BY_DATE
} from "../redux/actions/filters";

const ExpenseListFilters = props => (
  <div>
    <select
      value={props.filters.sortBy}
      onChange={e => {
        if (e.target.value === "date") {
          props.dispatch(SORT_BY_DATE());
          console.log(props.filters.sortBy);
        } else if (e.target.value === "amount") {
          props.dispatch(SORT_BY_AMOUNT());
          console.log(props.filters.sortBy);
        }
      }}
    >
      <option value="date">Date</option>
      <option value="amount">Amount</option>
    </select>
    <input
      type="text"
      value={props.filters.text}
      placeholder="Search your expense"
      onChange={e => {
        props.dispatch(SET_TEXT_FILTER(e.target.value));
        console.log(e.target.value);
      }}
    ></input>
  </div>
);

const mapStateToProps = state => ({
  filters: state.filters
});

export default connect(mapStateToProps)(ExpenseListFilters);
