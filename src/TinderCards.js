import React, { useState } from 'react';
import TinderCard from "react-tinder-card";
import "./tindercards.css";

const TinderCards = () => {

    const [people, setPeople] = useState([
        {
            name: 'Elon Musk',
            url: 'https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f47d4de7637290765bce495%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D1398%26cropX2%3D3908%26cropY1%3D594%26cropY2%3D3102'
        },
        {
            name: 'Jeff Bezos',
            url: 'https://media.gq.com.mx/photos/5f23041351bcbdbc95b13466/master/pass/JEFF.jpg'
        },
        {
            name: 'Sandra Bullock',
            url: 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Sandra_Bullock_%289192365016%29_%28cropped%29.jpg'
        },
        {
            name: 'Elisabeth Lail',
            url: 'https://es.web.img3.acsta.net/r_1280_720/pictures/18/10/31/10/38/2640328.jpg'
        },
    ]);

    const swiped = (dir, nameToDelete) => {
        console.log("removing: " + nameToDelete);
        //setLastDirection(dir);
    }

    const outOfFrame = (name) => {
        console.log(name + " left the screen!");
    }

    return (
        <div className="tinderCards">
            <div className="tinderCards__cardContainer">
                {people.map((person) => (
                    <TinderCard
                        className="swipe"
                        key={person.name}
                        preventSwipe={["up", "down"]}
                        onSwipe={(dir) => swiped(dir, person.name)}
                        onCardLeftScreen={() => outOfFrame(person.name)}
                    >
                        <div
                            style={{backgroundImage: `url(${person.url})`}}
                            className="card"
                        >
                            <h3>{person.name}</h3>

                        </div>

                    </TinderCard>
                ))}
            </div>
            
        </div>
    )
}

export default TinderCards;
