import React, { Component } from 'react'
import Moment from 'moment'
class Clock extends Component {
    constructor(props) {
        super(props)
        this.state = {
            time: "",
            date: "",
            isHidden: true
        }
    }
    componentWillMount() {
        this.getCurrentTime();
    }
    getCurrentTime = () => {

        let hour = new Date().getHours();
        let min = new Date().getMinutes();
        let sec = new Date().getSeconds();

        this.setState({ time: hour + ':' + min + ':' + sec });
    }
    toggleHidden() {

        let day = new Date()
        this.setState({
            date: day.toDateString(),
            isHidden: !this.state.isHidden

        })
    }
    componentWillUnmount() {
        clearInterval(this.timer);
    }
    componentDidMount() {
        this.timer = setInterval(() => {
            this.getCurrentTime();
        }, 1000);
    }
    render() {
        return (
            <div>
                <label className="switch">
                    <input type="checkbox" onClick={this.toggleHidden.bind(this)}/>
                        <span className="slider round"></span>
                    </label>

                    <div className="design">
                        <h1>{this.state.time}</h1>
                        {!this.state.isHidden && this.state.date}</div>
            </div>
        )
    }

}
export default Clock
