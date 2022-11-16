import React from "react"

export default class Child1 extends React.Component {

    changeMsg(e){
        this.props.changeMsg(e);
    }
    render() {
        return(
            <div>
                <h2>Child1</h2>
                {/* event 对象隐性传入 */}
                <input type="text"  value={this.props.msg} onChange={this.props.changeMsg}/>

                <input type="text"  value={this.props.msg} onChange={this.changeMsg.bind(this)}/>

                <input type="text"  value={this.props.msg} onChange={(e)=>{
                    this.props.changeMsg(e);
                }}/>
            </div>
        )
    }
}