import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";
function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: "husky",
      url:
        "https://www.insidedogsworld.com/wp-content/uploads/2016/12/husky10.jpg",
    },
    {
      name: "zakurberg",
      url:
        "https://media4.s-nbcnews.com/i/newscms/2018_45/2456801/180606-mark-zuckerberg-se-3221p_bb99e5f9cd63bddb4392bf22625a2998.JPG",
    },
  ]);
  return (
    <div>
      <h1>Tinder Cards</h1>
      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
