import React from "react"
import {Link} from "react-router-dom"
export default class Hot extends React.Component {
    constructor() {
        super();
        this.state = {
            list: [{ song: "稻香", songId: 123 },
            { song: "一生所爱", songId: 456 },
             {
                song: "突然的自我", songId: 500
            }]
        }
    }
    render() {
        return (
            <div>Hot 页
                <ul>
                    {this.state.list.map(item=>{
                        return(
                        // <li key={item.songId}><Link to={"/play/"+item.songId}>{item.song}</Link></li>
                        // <li key={item.songId}><Link to={`/play/${item.songId}`}>{item.song}</Link></li>

                        <li key={item.songId}><button onClick={()=>{
                            // 编程式导航
                            this.props.history.push(`/play/${item.songId}`);
                            // this.props.history.replace(`/play/${item.songId}`);
                        }}>{item.song}</button></li>
                        
                        
                        )
                    })}
                </ul>
           </div>
        )
    }
}