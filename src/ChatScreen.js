import React, {useState} from 'react'
import "./ChatScreen.css"
import {Avatar} from "@material-ui/core"


function ChatScreen() {
    const [input, setInput] = useState ('')
    const [messages, setMessages] = useState([
       { name: 'Ellen',
        image: 'https://static01.nyt.com/images/2020/07/30/business/30ELLEN-PRODUCER-01/30ELLEN-PRODUCER-01-superJumbo.jpg',
        message: 'Whats up?'
    },
       { 
        image: 'https://static01.nyt.com/images/2020/07/30/business/30ELLEN-PRODUCER-01/30ELLEN-PRODUCER-01-superJumbo.jpg',
        message: 'Hey!'
    },
       { name: 'Ellen',
        image: 'https://static01.nyt.com/images/2020/07/30/business/30ELLEN-PRODUCER-01/30ELLEN-PRODUCER-01-superJumbo.jpg',
        message: 'Dont ignore me!'
    }
    ])

    const handleSend = e => {
        e.preventDefault();
        setMessages([...messages, {message: input}]);
        setInput("")
    }
    return (
        <div className="chatScreen">
          
           <p className="chatScreen__timestamp">You matched with {messages[0].name} on 2/22/20</p>
           
           {messages.map(message => (
               message.name ? (
                <div className="chatScreen__message">
                <Avatar className="chatScreen__avatar"
                         alt={message.name}
                         src={message.image}
                         />
                <p className="chatScreen__text">{message.message}</p>

            </div>
               ) : (
                   <div className="chatScreen__message">
                       <p className="chatScreen__textUser">{message.message}</p>
                   </div>
               )
              
           ))}
            
                <form  className="chatScreen__input">
                    <input
                    value={input}
                    onChange={e => setInput(e.target.value)}
                     className="chatScreen__inputField"
                     placeholder="Type a message" 
                     type="text"/>
                    <button onClick={handleSend} className="chatScreen__inputButton">Send</button>
                </form>
            
        </div>
    )
}

export default ChatScreen
