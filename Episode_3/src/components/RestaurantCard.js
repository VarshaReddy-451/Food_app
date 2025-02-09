import { resList } from "../utilis/constants";
import {Link} from "react-router-dom";
import { useContext } from "react";
import UserContext from "../utilis/UserContext";

const RestaurantCard = ({ resdata }) => {
    const { name, avgRating, cuisines, costForTwo, slaString, areaName, cloudinaryImageId } = resdata;
    const {loggedUser}=useContext(UserContext) ;

    return (
    <div className="res-container">
        <div className="restaurant-card">
            <img className="res-img"
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${resdata.cloudinaryImageId}`}
                alt={`${name}`}
            />
           <div className="res-content">
            <h3>{name}</h3>
            <p>{cuisines.join(", ")}</p>
            <p>{costForTwo}</p>
            <p>{areaName}</p>
            <p>{slaString}</p>
            <p>Rating: {avgRating}</p>
            <p>{loggedUser}</p>
            </div>
        </div>
        </div>
    );
};

export default RestaurantCard;
