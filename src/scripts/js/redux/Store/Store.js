import { createStore, combineReducers } from "redux";
import expensesReducer from "../reducers/expenses";
import filtersReducer from "../reducers/filters";
import getFilteredItems from "../selectors/expenses";

// Load all the reducers to the store
const REDUCERS = combineReducers({
  expenses: expensesReducer,
  filters: filtersReducer
});

export default () => {
  // Create and subscribe store
  const store = createStore(
    REDUCERS,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  store.subscribe(() => {
    const state = store.getState();
    const filteredExpenses = getFilteredItems(state.expenses, state.filters);
  });

  return store;
};
