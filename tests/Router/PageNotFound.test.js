import React from "react"
import { shallow } from "enzyme"
import PageNotFound from "../../src/scripts/js/Router/PageNotFound"

test("should render PageNotFound correctly", () => {
    const wrapper = shallow(<PageNotFound />)
    expect(wrapper).toMatchSnapshot()
})
