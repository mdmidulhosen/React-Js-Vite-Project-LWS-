
import React, { Component } from 'react'

export class Form extends Component {

    state = {
        title: "Mridul",
        text: "This is my text",
        library: "vue",
        checkBox: true
    }

    handlerChange = (e) => {
        if (e.target.type === "text") {
            this.setState({
                title: e.target.value
            })
        } else if (e.target.type === "textarea") {
            this.setState({
                text: e.target.value
            })
        } else if (e.target.type === "select-one") {
            this.setState({
                library: e.target.value
            })
        } else if (e.target.type === "checkbox") {
            this.setState({
                checkBox: e.target.checked
            })
        } else {
            console.log("Nothing Is Here")
        }
    }

    submitHandler = (e) => {
        const { title, text, library, checkBox } = this.state;
        e.preventDefault();
    }

    render() {
        const { title, text, library, checkBox } = this.state;
        return (
            <form  onSubmit={this.submitHandler}>
                <input type="text" value={title} onChange={this.handlerChange} />
                <br></br>
                <br></br>
                <textarea name="textarea" value={text} onChange={this.handlerChange}></textarea>
                <br></br>
                <br></br>
                <select value={library} onChange={this.handlerChange}>
                    <option value="react">React</option>
                    <option value="vue">Vue</option>
                </select>
                <br></br>
                <br></br>
                <input type="checkbox" value={checkBox} onChange={this.handlerChange} />
                <br></br>
                <br></br>
                <input type="submit" value={"Submit"}/>
            </form>
        )
    }
}

export default Form

