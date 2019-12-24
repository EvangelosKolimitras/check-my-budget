import React from "react"
import { shallow } from "enzyme"
import Add from "../../src/scripts/js/Router/CreateExpenseRouter"

test("should render CreateExpenseRouter correctly ", () => {
    const onSubmit = jest.fn()
    const history = {
        push: jest.fn()
    }
    const wrapper = shallow(<Add onSubmit={onSubmit} history={history} />)
    expect(wrapper).toMatchSnapshot()
})
