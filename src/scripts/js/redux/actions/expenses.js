import { uuid } from "uuidv4";

export const ADD_EXPENSE = ({
  description = "No description",
  amount = 0,
  createdAt = 0,
  note = "No note specified"
} = {}) => ({
  type: "ADD_EXPENSE",
  expense: {
    amount,
    description,
    id: uuid(),
    createdAt,
    note
  }
});

export const REMOVE_EXPENSE = ({ id } = {}) => ({
  id,
  type: "REMOVE_EXPENSE"
});

export const EDIT_EXPENSE = (id, updates) => ({
  id,
  type: "EDIT_EXPENSE",
  updates
});
