import { useEffect, useState } from "react";
import RestaurantCard from "../components/RestaurantCard";

const Body = (res) => {
  const [cards, setCards] = useState(res.res.data.data.cards);
  const [filteredCards, setFilteredCards] = useState(cards);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5205397&lng=73.8573802&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(
      json.data.cards[5].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  return (
    <div className="body">
      <div className="filter">
        <input
          className="search-box"
          type="text"
          onChange={(e) => {
            console.log(e);
            setSearchText(e.target.value);
          }}
          value={searchText}
        />
        <button
          onClick={() => {
            console.log("search clicked");
            var filteredCards = cards.filter((x) =>
              x.data.name.toLowerCase().includes(searchText)
            );
            setFilteredCards(filteredCards);
          }}
        >
          Search
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            var filteredCards = cards.filter((x) => {
              return Number(x.data.avgRating) > 4.2;
            });
            setFilteredCards(filteredCards);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="res-container">
        {filteredCards.map((x) => {
          return (
            <RestaurantCard key={x.data.id} restaurantData={x}></RestaurantCard>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
