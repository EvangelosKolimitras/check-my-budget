import { ADD_EXPENSE, REMOVE_EXPENSE, EDIT_EXPENSE } from "../../src/scripts/js/redux/actions/expenses"

describe("Actions", () => {
    describe("the Actions <=> Expenses component", () => {
        it("should setup remove expense action object", () => {
            const action = REMOVE_EXPENSE({ id: "123abc" })
            expect(action).toEqual({
                type: "REMOVE_EXPENSE",
                id: "123abc"
            })
        })
        it("should setup edit expense action object", () => {
            const action = EDIT_EXPENSE("123abc", { note: "some value" })
            expect(action).toEqual({
                type: "EDIT_EXPENSE",
                id: "123abc",
                updates: {
                    note: "some value"
                }
            })
        })

        it("should setup add expense action object with provided values", () => {
            const expensesData = {
                description: "No description",
                amount: 3423,
                createdAt: 234230,
                note: "Not note specified"
            }
            const action = ADD_EXPENSE(expensesData)
            expect(action).toEqual({
                type: "ADD_EXPENSE",
                expense: {
                    ...expensesData,
                    id: expect.any(String)
                }
            })
        })

        it("should setup add expense action object with default values", () => {
            const action = ADD_EXPENSE()
            expect(action).toEqual({
                type: "ADD_EXPENSE",
                expense: {
                    note: "No note specified",
                    amount: 0,
                    description: "No description",
                    id: expect.any(String),
                    createdAt: 0
                }
            })
        })
    })
})
