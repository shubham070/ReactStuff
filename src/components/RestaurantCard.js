import { CDN_URL } from "../Utils/Constants";

const RestaurantCard = (props) => {
  const restaurantData = props.restaurantData;
  return (
    <div className="res-card">
      <img
        alt="res-logo"
        src={CDN_URL + restaurantData.cloudinaryImageId}
        className="res-logo"
      ></img>
      <h3>{restaurantData.name}</h3>
      <h4>{restaurantData.cuisines.join(",")}</h4>
      <h4>{restaurantData.avgRating} stars</h4>
      <h4>{restaurantData.costForTwo}</h4>
      <h4>Delivery in {restaurantData.sla.deliveryTime} mins</h4>
    </div>
  );
};

export default RestaurantCard;
