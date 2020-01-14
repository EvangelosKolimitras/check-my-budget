import expensesReducer from "../../src/scripts/js/redux/reducers/expenses"
import expenses from "../Fixtures/expenses"

describe("Reducers", () => {
    describe("the expensesReducer reducer", () => {
        it("should set default state", () => {
            const state = expensesReducer(undefined, {
                type: "@@INIT"
            })
            expect(state).toEqual([])
        })

        it("should remove epense by id", () => {
            const action = {
                type: "REMOVE_EXPENSE",
                id: expenses[1].id
            }
            const state = expensesReducer(expenses, action)
            expect(state).toEqual([expenses[0], expenses[2]])
        })

        it("should not remove expenses if id was not found", () => {
            const action = {
                type: "REMOVE_EXPENSE",
                id: -1
            }
            const state = expensesReducer(expenses, action)
            expect(state).toEqual(expenses)
        })

        it("should add an expense", () => {
            const expense = {
                id: 10,
                description: "Some description",
                amount: 50,
                createdAt: 1000,
                note: ""
            }
            const action = {
                type: "ADD_EXPENSE",
                expense
            }
            const state = expensesReducer(expenses, action)
            expect(state).toEqual([...expenses, expense])
        })

        it("should edit an expense", () => {
            const amount = 2000
            const action = {
                type: "EDIT_EXPENSE",
                id: expenses[1].id,
                updates: {
                    amount
                }
            }
            const state = expensesReducer(expenses, action)
            expect(state[1].amount).toBe(amount)
        })

        it("should not edit an expense if not found", () => {
            const amount = 22000
            const action = {
                type: "EDIT_EXPENSE",
                id: "-1",
                updates: {
                    amount
                }
            }
            const state = expensesReducer(expenses, action)
            expect(state).toEqual(expenses)
        })
    })
})
