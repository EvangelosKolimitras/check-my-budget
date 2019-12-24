import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { Header, Home, Dashboard, Add, Edit, Help, NotFound } from "../Router/Router"

import { Provider } from "react-redux"
import Store from "../redux/Store/Store"

import "react-dates/lib/css/_datepicker.css"
import { ADD_EXPENSE } from "../redux/actions/expenses"

class Application extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Header />
                    <Switch>
                        <Route path='/' exact component={Home} />
                        <Route path='/dashboard' component={Dashboard} />
                        <Route path='/add' component={Add} />
                        <Route path='/edit/:id' component={Edit} />
                        <Route path='/help' component={Help} />
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </Router>
        )
    }
}

const store = Store()

// const exp1 = store.dispatch(
//   ADD_EXPENSE({ description: "Water Bill", amount: 234, createdAt: 23 })
// );
// const exp2 = store.dispatch(
//   ADD_EXPENSE({ description: "Gas Bill", amount: 22, createdAt: 231 })
// );
// const exp3 = store.dispatch(
//   ADD_EXPENSE({ description: "Clothes", amount: 422, createdAt: 5599 })
// );
// const exp4 = store.dispatch(
//   ADD_EXPENSE({ description: "Rent", amount: 6800, createdAt: 1000 })
// );

const App = () => (
    <Provider store={store}>
        <Application />
    </Provider>
)

export default App
