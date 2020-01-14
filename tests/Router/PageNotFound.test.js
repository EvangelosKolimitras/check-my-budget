import React from "react"
import toJson from "enzyme-to-json"
import PageNotFound from "../../src/scripts/js/Router/PageNotFound"
import { shallow, configure } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
configure({ adapter: new Adapter() })

describe("Routers", () => {
    describe("the PageNotFound router", () => {
        it("should render PageNotFound correctly", () => {
            const wrapper = shallow(<PageNotFound />)
            expect(toJson(wrapper)).toMatchSnapshot()
        })
    })
})
