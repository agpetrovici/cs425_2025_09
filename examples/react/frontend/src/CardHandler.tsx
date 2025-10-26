import "./CardHandler.css";
import { useState } from "react";
import Card, { type CardData, fetchCardById } from "./Card";

function CardHandler() {
  const [cardId, setCardId] = useState<number>(0);
  const [cards, setCards] = useState<CardData[]>([]);

  const getCard = () => {
    fetchCardById(cardId).then((data) => {
      setCards((prevCards) => [...prevCards, data]);
    });
  };

  return (
    <div className="card-handler">
      <div className="controls">
        <input
          type="number"
          placeholder="ID"
          value={cardId}
          onChange={(e) => {
            setCardId(Number(e.target.value));
          }}
        />
        <button onClick={getCard}>Get Card</button>
      </div>

      <div className="card-container">
        {cards.map((card) => (
          <Card key={card.id} cardData={card} />
        ))}
      </div>
    </div>
  );
}

export default CardHandler;
