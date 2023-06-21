import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div>
      <Link to={"/"}>Home</Link>
      <Link to={"/layout-component-two"}>Component</Link>
    </div>
  )
}

export default NavBar
