import React from "react"
import { shallow } from "enzyme"
import expenses from "../Fixtures/expenses"
import ExpenseListItem from "../../src/scripts/js/Components/ExpenseListItem"

test("should render ExpenseListItem correctly ", () => {
    const wrapper = shallow(<ExpenseListItem {...expenses[0]} />)
    expect(wrapper).toMatchSnapshot()
})
