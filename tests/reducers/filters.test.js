import filterReducerDefaultState from "../../src/scripts/js/redux/reducers/filters"
import moment from "moment"

describe("Reducers", () => {
    describe("the filterReducerDefaultState reducer", () => {
        it("should setup default filter values", () => {
            const state = filterReducerDefaultState(undefined, {
                type: "@@INIT"
            })
            expect(state).toEqual({
                text: "",
                sortBy: "date",
                startDate: moment().startOf("month"),
                endDate: moment().endOf("month")
            })
        })

        it("should filer by sortByAmount", () => {
            const state = filterReducerDefaultState(undefined, {
                type: "SORT_BY_AMOUNT"
            })
            expect(state.sortBy).toEqual("amount")
        })

        it("should filer by sortByDate", () => {
            const currentState = {
                text: "",
                startDate: undefined,
                endDate: undefined,
                sortBy: "amount"
            }
            const action = { type: "SORT_BY_DATE" }

            const state = filterReducerDefaultState(currentState, action)
            expect(state.sortBy).toBe("date")
        })

        it("should set text filter", () => {
            const text = "This is a filter"
            const action = { type: "SET_TEXT_FILTER", text }

            const state = filterReducerDefaultState(undefined, action)
            expect(state.text).toBe(text)
        })

        it("should set startDate filter", () => {
            const startDate = moment()
            const action = { type: "SET_START_DATE", startDate }

            const state = filterReducerDefaultState(undefined, action)
            expect(state.startDate).toEqual(startDate)
        })

        it("should set endDate filter", () => {
            const endDate = moment()
            const action = { type: "SET_END_DATE", endDate }

            const state = filterReducerDefaultState(undefined, action)
            expect(state.endDate).toEqual(endDate)
        })
    })
})
