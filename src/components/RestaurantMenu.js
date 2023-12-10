import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_API } from "../Utils/Constants";

const RestaurantMenu = () => {
  const { id } = useParams();
  const [resInfo, setResInfo] = useState([]);
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + id);
    var json = await data.json();

    setResInfo(json?.data?.cards[0]?.card?.card?.info);
    setMenu(
      json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        .card.itemCards
    );
  };

  return (
    <div className="menu">
      <h1> {resInfo.name} </h1>
      <p> {resInfo?.cuisines?.join(",")} </p>
      <>
        <h2> Menu </h2>
        <ul>
          {menu?.map((m) => {
            return (
              <li id={m?.card.info?.id}>
                {m?.card.info?.name} - Rs {m?.card.info?.price / 100}{" "}
              </li>
            );
          })}
        </ul>
      </>
    </div>
  );
};

export default RestaurantMenu;
