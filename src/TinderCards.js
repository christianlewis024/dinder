import React, {useState} from 'react'
import "./TinderCards.css"
import TinderCard from "react-tinder-card"

function TinderCards() {
    const [people, setPeople] = useState([
        {
            name: 'mark zuckerberg',
            url: 'https://images.axios.com/TrgcfEDxI_FLZtY9SmpmC66tJDI=/0x59:3600x2084/1920x1080/2020/10/20/1603199382777.jpg'
        },
        {
            name: 'mark zuckerberg',
            url: 'https://images.axios.com/TrgcfEDxI_FLZtY9SmpmC66tJDI=/0x59:3600x2084/1920x1080/2020/10/20/1603199382777.jpg'
        },
        {
            name: 'mark zuckerberg',
            url: 'https://images.axios.com/TrgcfEDxI_FLZtY9SmpmC66tJDI=/0x59:3600x2084/1920x1080/2020/10/20/1603199382777.jpg'
        },
        {
            name: 'mark zuckerberg',
            url: 'https://images.axios.com/TrgcfEDxI_FLZtY9SmpmC66tJDI=/0x59:3600x2084/1920x1080/2020/10/20/1603199382777.jpg'
        },
        {
            name: 'Mr Morton',
            url: 'https://s3.amazonaws.com/dynamic.wizer.me/uploads%2F264703357-1547205221527-Mr.+Morton+was+very+shy.png'
        }
        
    ])
    return (
        <div className="tinderCards">
            <h3>I am the tinder cards</h3>
            <div className="tinderCards__cardContainer">

                 {people.map(person => (
                <TinderCard
                className="swipe" 
                key={person.name}
                preventSwipe={['up', 'down']}
                >
                    <div style={{ backgroundImage: `url(${person.url})`}} className="card">
                    <h3>{person.name}</h3>
                    </div>
                </TinderCard>
            ))}
            </div>
           
        </div>
    )
}

export default TinderCards
