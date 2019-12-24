// A reducer for handling the expenses state
const expensesReducerDefaultState = [];
export default (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    // Implements the add_expense type
    case "ADD_EXPENSE":
      return [...state, action.expense];

    // Implements the remove_expense type
    case "REMOVE_EXPENSE":
      return state.filter(expense => expense.id !== action.id);

    case "EDIT_EXPENSE":
      return state.map(expense => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          };
        }

        return expense;
      });

    default:
      return state;
  }
};
