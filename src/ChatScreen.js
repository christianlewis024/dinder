import React, {useState} from 'react'
import "./ChatScreen.css"


function ChatScreen() {
    const [messages, setMessages] = useState([
       { name: 'Ellen',
        image: '...',
        message: 'Whats up?'
    },
       { name: 'Ellen',
        image: '...',
        message: 'Hey!'
    },
       { name: 'Ellen',
        image: '...',
        message: 'Dont ignore me!'
    }
    ])
    return (
        <div className="chatScreen">
          
           <p>You matched with {messages[0].name} on 2/22/20</p>
           <p>{messages[0].name}</p>
           {messages.map(message => (
               <div className="chatScreen__message">
                   <p>{message.message}</p>

               </div>
           ))}
            
        </div>
    )
}

export default ChatScreen
