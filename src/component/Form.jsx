
import React, { Component } from 'react'

export class Form extends Component {
    state = {
        title: "Mridul"
    }

    handlerChange =(e)=>{
        this.setState({
            title:e.target.value
        })
    }

  render() {
    const {title} = this.state;
    return (
      <div>
        <input type="text" value={title} onChange={this.handlerChange}/>
      </div>
    )
  }
}

export default Form

