import React from "react"
import toJson from "enzyme-to-json"
import { Add } from "../../src/scripts/js/Router/CreateExpenseRouter"
import { shallow, configure } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
configure({ adapter: new Adapter() })

describe("Routers:", () => {
    describe("the CreateExpenseRouter router,", () => {
        it("should render CreateExpenseRouter correctly", () => {
            const onSubmit = jest.fn()
            const history = {
                push: jest.fn()
            }
            const wrapper = shallow(<Add onSubmit={onSubmit} history={history} />)
            expect(toJson(wrapper)).toMatchSnapshot()
        })
    })
})
