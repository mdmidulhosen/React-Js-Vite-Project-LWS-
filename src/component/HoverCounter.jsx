import WithCounter from "./HOC/WithCounter";

const ClickCounter = (props) => {
    const {count, increamentCount} = props
    // const { count } = this.state;

    return (
        <div>
            <h1 onMouseOver={increamentCount}>
                Hover {count} Times
            </h1>
        </div>
    )


}

export default WithCounter(ClickCounter)