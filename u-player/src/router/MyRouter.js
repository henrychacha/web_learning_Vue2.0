import React from "react"

import { Switch, Route, Redirect } from "react-router-dom"

// 路由组件，接受 props routes ，routes 一个路由配置数组
class MyRouter extends React.Component {
    render() {
        return (
            <Switch>
                {
                    this.props.routes.map((item, index) => {
                        if (item.path === "*") {
                            return (
                                <Redirect key={index} path={item.path} to={item.redirect}></Redirect>
                            )
                        } else {
                            return (
                                <Route key={index} path={item.path} component={item.component}></Route>
                            )
                        }

                    })
                }
            </Switch>
        )
    }
}

export default MyRouter