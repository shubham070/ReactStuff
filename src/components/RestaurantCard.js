import { CDN_URL } from "../Utils/Constants";

const RestaurantCard =(props)=>{
    // console.log(props);
    const restaurantData = props.restaurantData.data;
    return(
        <div className="res-card">          
            <img
                alt="res-logo" 
                src= {CDN_URL+restaurantData.cloudinaryImageId}
                //src="https://img.freepik.com/free-vector/watercolor-pilaf-illustration_23-2149444767.jpg?size=626&ext=jpg"
                className="res-logo">
            </img>
            <h3>{restaurantData.name}</h3>
            <h4>{restaurantData.cuisines.join(",")}</h4>
            <h4>{restaurantData.avgRating} stars</h4>
            <h4>Delivery in {restaurantData.deliveryTime} mins</h4>
        </div>
    )
};

export default RestaurantCard;