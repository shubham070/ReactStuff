import { useEffect, useState } from "react";
import RestaurantCard from "../components/RestaurantCard";

const Body = (res) => {
  const [cards, setCards] = useState(res.res.data.data.cards);

  useEffect(fetchData(), []);

  const fetchData = async () => {
    const data = await fetch("");

    const json = await data.json();
  };

  return (
    <div className="body">
      <div className="Search">Search</div>
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            var filteredCards = cards.filter((x) => {
              return Number(x.data.avgRating) > 4.2;
            });
            setCards(filteredCards);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {cards.map((x) => {
          return (
            <RestaurantCard key={x.data.id} restaurantData={x}></RestaurantCard>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
