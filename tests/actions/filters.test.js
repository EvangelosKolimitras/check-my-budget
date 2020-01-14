import moment from "moment"
import { SET_START_DATE, SET_END_DATE, SET_TEXT_FILTER, SORT_BY_AMOUNT, SORT_BY_DATE } from "../../src/scripts/js/redux/actions/filters"

describe("Actions", () => {
    describe("the Actions <=> Filters component", () => {
        it("should generate set start date action object", () => {
            const action = SET_START_DATE(moment(0))
            expect(action).toEqual({
                type: "SET_START_DATE",
                startDate: moment(0)
            })
        })

        it("should generate set end date action object", () => {
            const action = SET_END_DATE(moment(0))
            expect(action).toEqual({
                type: "SET_END_DATE",
                endDate: moment(0)
            })
        })

        it("should generate a text filter", () => {
            const action = SET_TEXT_FILTER("")
            const text = ""
            expect(action).toEqual({
                type: "SET_TEXT_FILTER",
                text
            })
        })

        it("should generate a sort by amount object", () => {
            const action = SORT_BY_AMOUNT()
            expect(action).toEqual({
                type: "SORT_BY_AMOUNT"
            })
        })

        it("should generate a sort by date object", () => {
            const action = SORT_BY_DATE()
            expect(action).toEqual({
                type: "SORT_BY_DATE"
            })
        })
    })
})
