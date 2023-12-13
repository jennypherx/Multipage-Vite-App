import Message from "../components/Message"
import Nav from "../components/Nav"

function About() {

    return(
        <div>
            <Nav />
            <Message data={"Welcome to our About Page"}/>
        </div>
    )
}

export default About