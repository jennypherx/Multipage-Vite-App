import Message from "../components/Message"
import Nav from "../components/Nav"

function Dashboard() {

    return(
        <div>
            <Nav />
            <Message data={"Welcome to our Dashboard Page"}/>
        </div>
    )
}

export default Dashboard