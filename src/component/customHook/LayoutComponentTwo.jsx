import { useNavigate } from "react-router-dom"
import useScreenWidth from "./useScreenWidth"

function LayoutComponentTwo() {

    const navigate = useNavigate()
    
    const onSmallScreen = useScreenWidth(730)

    return (
        <div>
            <h1>this is another Component {onSmallScreen ? 'small' : 'large'} </h1>
            <button onClick={()=>{navigate("/")}}>Go To Home</button>
        </div>
    )
}

export default LayoutComponentTwo
