
import React, { Component } from 'react'

export class Form extends Component {

    state = {
        title: "Mridul",
        text: "This is my text",
        library: "vue"
    }

    handlerChange = (e) => {
        if(e.target.type === "text"){
            this.setState({
                title: e.target.value
            })
        }else if(e.target.type === "textarea"){
            this.setState({
                text: e.target.value
            })
        }else if(e.target.type === "select-one"){
            this.setState({
                library: e.target.value
            })
        }else{
            console.log("Nothing Is Here")
        }
    }

    render() {
        const { title, text, library } = this.state;
        return (
            <div>
                <input type="text" value={title} onChange={this.handlerChange} />
                <br></br>
                <br></br>
                <textarea  name="textarea" value={text} onChange={this.handlerChange}></textarea>
                <select value={library} onChange={this.handlerChange}>
                    <option value="react">React</option>
                    <option value="vue">Vue</option>
                </select>
            </div>
        )
    }
}

export default Form

