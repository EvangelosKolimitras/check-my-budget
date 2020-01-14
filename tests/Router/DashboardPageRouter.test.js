import React from "react"
import toJson from "enzyme-to-json"
import DashboardPageRouter from "../../src/scripts/js/Router/DashboardPageRouter"
import { shallow, configure } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
configure({ adapter: new Adapter() })

describe("Routers", () => {
    describe("the DashboardPageRouter router", () => {
        it("should render DashboardPageRouter correctyly", () => {
            const wrapper = shallow(<DashboardPageRouter />)
            expect(toJson(wrapper)).toMatchSnapshot()
        })
    })
})
