import "./Card.css";

export interface CardData {
  id: number;
  title: string;
  description: string;
}

export const fetchCardById = async (cardId: number): Promise<CardData> => {
  const response = await fetch(`http://localhost:8000/card`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id: cardId }),
  });
  const responseData = await response.json();
  return responseData;
};

function Card({ cardData }: { cardData: CardData }) {
  return (
    <div className="card">
      <h3>Card {cardData.id}</h3>
      <h4>Title: {cardData.title}</h4>
      <p>Description: {cardData.description}</p>
    </div>
  );
}

export default Card;
