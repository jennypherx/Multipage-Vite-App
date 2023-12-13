import './App.css'
import Message from './components/Message.jsx'
import {useState} from 'react'
import Nav from './components/Nav';

function App() {
  const [messageData, setMessageData] = 
  useState("Choose a page!");

  //This is our click event handler function
  let handleButtonClick = (event) => {
    //console.log(event.target.value);
    let buttonIndex = event.target.value
    if(buttonIndex == 1) {
      //turn message to X
      setMessageData("You chose option 1!")
    } else if(buttonIndex == 2) {
      //turn our message to Y
      setMessageData("You chose option 2!")
    } else {
      // show message Z
      setMessageData("You chose something else!")
    }
  }

  return (
    <div>
      {/* Choose an option for your message! */}
      
      <Nav />
      <Message data={messageData} />
    </div>
 
  )
}

export default App
