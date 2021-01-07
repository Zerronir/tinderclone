import React, { useState, useEffect } from 'react';
import TinderCard from "react-tinder-card";
import instance from "./axios";
import "./tindercards.css";

const TinderCards = () => {
    const loggedId = 1;

    const [people, setPeople] = useState([]);

    const swiped = (dir, userId) => {
        
        if(dir === "right") {
            console.log("removing: " + userId + " " + dir);
            addLike(loggedId.valueOf(), userId);
        }
    }

    const outOfFrame = (userId, dir) => {
                
    }

    const addLike = async (fromUser, toUser) => {
        console.log(fromUser, toUser);
        const data = {
            fromUser: fromUser,
            toUser: toUser
        };
        console.log(JSON.stringify(data));
        const send = await fetch("http://localhost:8001/api/addLike", {
            method: 'POST',
            body: JSON.stringify({
                fromUser: fromUser,
                toUser: toUser
            })
        });
        const res = await send.json();
    }

    const getCards = async () => {
        const res = await fetch("http://localhost:8001/api/getUsers/" + loggedId);
        const data = await res.json();
        setPeople(data);
    }

    useEffect(() => {
        getCards();
    }, []);

    if(loggedId !== 1) {
        return (
            <div className="tinderCards">
                <div className="tinderCards__cardContainer">
                    <h3>You need to log in first</h3>
                </div>
                
            </div>
        )
    } else {
        let status = "";
        let statusDot = "";
        people.map((person) => {
            status = person.status;
        });

        if(status === "Offline") {
            statusDot = "Desconectado/a"
        } else {
            statusDot = "Activo/a recientemente";
        }

        return (
            <div className="tinderCards">
                <div className="tinderCards__cardContainer">
                    {people.map((person) => (
                        <TinderCard
                            className="swipe"
                            key={person.userId}
                            preventSwipe={["up", "down"]}
                            onSwipe={(dir) => swiped(dir, person.userId)}
                            onCardLeftScreen={() => outOfFrame(person.userId)}
                        >
                            <div
                                style={{backgroundImage: `url(${person.avatar || 'https://st.depositphotos.com/1779253/5140/v/600/depositphotos_51405259-stock-illustration-male-avatar-profile-picture-use.jpg' })`}}
                                className="card"
                            >
                                <h3>{ person.userName }, { person.age || "" }</h3>
                                <p>{ statusDot }</p>
                            </div>
    
                        </TinderCard>
                    ))}
                </div>
                
            </div>
        )
    }
}

export default TinderCards;
