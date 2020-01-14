import React from "react"
import expenses from "../Fixtures/expenses"
import ExpenseListItem from "../../src/scripts/js/Components/ExpenseListItem"
import toJson from "enzyme-to-json"
import { shallow, configure } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
configure({ adapter: new Adapter() })

describe("Components", () => {
    describe("the ExpenseListItem", () => {
        it("should render ExpenseListItem correctly ", () => {
            const wrapper = shallow(<ExpenseListItem {...expenses[0]} />)
            expect(toJson(wrapper)).toMatchSnapshot()
        })
    })
})
