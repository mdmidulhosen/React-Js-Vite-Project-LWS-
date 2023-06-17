import WithCounter from "./HOC/WithCounter";

const ClickCounter = (props) => {
    const {count, increamentCount} = props
    // const { count } = this.state;

    return (
        <div>
            <button type="button" onClick={increamentCount}>
                Clicked {count} Times
            </button>
        </div>
    )


}

export default WithCounter(ClickCounter)