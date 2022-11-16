import React from "react"
import { Switch, Route, Redirect } from "react-router-dom"
import Routes from "./index.js"

export default class AppRouter extends React.Component {
    render() {
        return (
            <Switch>
                {
                    Routes.map((item, index) => {
                        if (item.path=== "*") {
                            return <Redirect key={index} path={item.path} to={item.redirect}></Redirect>
                        } else {
                            return <Route key={index} path={item.path} component={item.component}></Route >
                        }
                    })
                }
            </Switch>
        )
    }
}