import React from "react"
export default class Play extends React.Component{
    render(){

        return (
        <div>play-{this.props.match.params.playId}</div>
        )
    }
}