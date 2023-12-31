import useScreenWidth from "./useScreenWidth"

function LayoutComponent() {
    
    const onSmallScreen = useScreenWidth(600)

    return (
        <div>
            <h1>You are browsing on {onSmallScreen ? 'small' : 'large'} device</h1>
        </div>
    )
}

export default LayoutComponent
