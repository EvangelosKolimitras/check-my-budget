import React from "react"
import { shallow } from "enzyme"
import toJson from "enzyme-to-json"
import Header from "../../src/scripts/js/Router/HeaderRouter"

test("should render Header component correctly", () => {
    const wrapper = shallow(<Header />)
    expect(toJson(wrapper)).toMatchSnapshot()
})
