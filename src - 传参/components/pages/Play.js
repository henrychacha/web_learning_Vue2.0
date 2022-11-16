import React from "react"
export default class Play extends React.Component{
    render(){
        //  
        if(this.props.location.state){
            console.log(this.props.location.state.playId)
        }
        return (
            <div>play</div>
        )
    }
}