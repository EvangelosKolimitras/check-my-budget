import React from "react"
import { ExpenseList } from "../../src/scripts/js/Components/ExpenseList"
import expenses from "../Fixtures/expenses"
import toJson from "enzyme-to-json"
import { shallow, configure } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
configure({ adapter: new Adapter() })

describe("Components", () => {
    describe("the ExpenseList component", () => {
        it("should render expenseList with expenses", () => {
            const wrapper = shallow(<ExpenseList expenses={expenses} />)
            console.log(wrapper)
            expect(toJson(wrapper)).toMatchSnapshot()
        })

        it("should render expenseList with no expenses", () => {
            const wrapper = shallow(<ExpenseList expenses={[]} />)
            console.log(wrapper)
            expect(toJson(wrapper)).toMatchSnapshot()
        })
    })
})
