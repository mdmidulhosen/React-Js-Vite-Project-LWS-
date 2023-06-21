import useScreenWidth from "./useScreenWidth"

function LayoutComponentTwo() {
    
    const onSmallScreen = useScreenWidth(730)

    return (
        <div>
            <h1>this is another Component {onSmallScreen ? 'small' : 'large'} </h1>
        </div>
    )
}

export default LayoutComponentTwo
