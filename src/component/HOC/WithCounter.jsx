import react, { Component } from "react";

const WithCounter = (OriginialComponent) => {
    class NewComponent extends Component{

        state = {
            count: 0,
        }
        increamentCount = () => {
            this.setState((pervState) => ({
                count: pervState.count + 1
            }))
        }

        render(){
            const {count} = this.state; 
            return(
                <OriginialComponent count={count} increamentCount={this.increamentCount}/>
            )
        }
    }
    return NewComponent
}

export default WithCounter;