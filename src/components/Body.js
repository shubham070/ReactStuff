import { useEffect, useState } from "react";
import RestaurantCard from "../components/RestaurantCard";
import { Link } from "react-router-dom";
import { FOOD_API } from "../Utils/Constants";

const Body = () => {
  const [cards, setCards] = useState([]);
  const [filteredCards, setFilteredCards] = useState(cards);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(FOOD_API);
    const json = await data.json();
    setCards(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredCards(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
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
            <Link key={x.info.id} to={"/restaurantMenu/" + x.info.id}>
              <RestaurantCard restaurantData={x.info}></RestaurantCard>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
