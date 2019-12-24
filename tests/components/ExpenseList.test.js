import React from "react"
import { shallow } from "enzyme"
import { ExpenseList } from "../../src/scripts/js/Components/ExpenseList"
import expenses from "../Fixtures/expenses"

test("should render expenseList with expenses", () => {
    const wrapper = shallow(<ExpenseList expenses={expenses} />)
    console.log(wrapper)
    expect(wrapper).toMatchSnapshot()
})

test("should render expenseList with no expenses", () => {
    const wrapper = shallow(<ExpenseList expenses={[]} />)
    console.log(wrapper)
    expect(wrapper).toMatchSnapshot()
})
