import expenses from "../Fixtures/expenses"
import Total from "../../src/scripts/js/Components/Totals"

describe("the totals component ", () => {
    it("should return 0 if expenses are 0", () => {
        const res = Total([])
        expect(res).toBe(0)
    })
    it("should correctly add up a single expense", () => {
        const res = Total([expenses[0]])
        expect(res).toBe(3)
    })
    it("should correctly add up multiple expenses", () => {
        const res = Total(expenses)
        expect(res).toBe(6)
    })
})
