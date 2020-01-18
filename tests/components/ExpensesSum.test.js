import React from "react"
import { ExpenseSum } from "../../src/scripts/js/Components/ExpensesSum"
import { shallow, configure } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
configure({ adapter: new Adapter() })

test("should render sum of expenses for 1 input", () => {
    const wrapper = shallow(<ExpenseSum expensesCount={1} total={243} />)
    expect(wrapper).toMatchSnapshot()
})

test("should render sum of expenses for many inputs", () => {
    const wrapper = shallow(<ExpenseSum expensesCount={3} total={253243} />)
    expect(wrapper).toMatchSnapshot()
})
