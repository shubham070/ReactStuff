import { useEffect, useState } from "react";
import RestaurantCard from "../components/RestaurantCard";

const Body = () => {
  const [cards, setCards] = useState([]);//res.res.data.data.cards
  const [filteredCards, setFilteredCards] = useState(cards);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5205397&lng=73.8573802&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setCards(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredCards(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);    
  };

  return (
    <div className="body">
      <div className="filter">
        <input
          className="search-box"
          type="text"
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          value={searchText}
        />
        <button
          onClick={() => {
            var filteredCards = cards.filter((x) =>
              x.info.name.toLowerCase().includes(searchText.toLowerCase())
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
              return Number(x.info.avgRating) > 4.2;
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
            <RestaurantCard key={x.info.id} restaurantData={x.info}></RestaurantCard>
          );
        })}
      </div>
    </div>
  );
};

export default Body;