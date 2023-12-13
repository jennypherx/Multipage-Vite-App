import { Link } from "react-router-dom"
function Nav(){

    return(
        <div>
            <Link to={"/"}>
            <button value="1">Home</button>
            </Link>
      
            <Link to={"/about"}>
            <button value="2">About Us</button>
            </Link>

            <Link to={"/dashboard"}>
            <button value="3">Dashboard</button>
            </Link>
            </div> 
    )
}

export default Nav