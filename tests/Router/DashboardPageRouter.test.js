import React from "react"
import { shallow } from "enzyme"
import DashboardPageRouter from "../../src/scripts/js/Router/DashboardPageRouter"

test("should render DashboardPageRouter correctyly", () => {
    const wrapper = shallow(<DashboardPageRouter />)
    expect(wrapper).toMatchSnapshot()
})
