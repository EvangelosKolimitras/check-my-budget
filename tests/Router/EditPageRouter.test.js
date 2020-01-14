import React from "react"
import { shallow, configure } from "enzyme"
import expenses from "../Fixtures/expenses"
import toJson from "enzyme-to-json"
import { Edit } from "../../src/scripts/js/Router/EditPageRouter"
import Adapter from "enzyme-adapter-react-16"
configure({ adapter: new Adapter() })

describe("Routers", () => {
    describe("the EditPageRouter router,", () => {
        it("should render EditPageRouter correctly", () => {
            const wrapper = shallow(<Edit />)
            expect(toJson(wrapper)).toMatchSnapshot()
        })
    })
})
