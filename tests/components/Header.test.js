import React from "react"
import toJson from "enzyme-to-json"
import Header from "../../src/scripts/js/Router/HeaderRouter"
import { shallow, configure } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
configure({ adapter: new Adapter() })

describe("Components", () => {
    describe("the Header component", () => {
        it("should render Header component correctly", () => {
            const wrapper = shallow(<Header />)
            expect(toJson(wrapper)).toMatchSnapshot()
        })
    })
})
