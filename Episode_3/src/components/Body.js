import { useState, useEffect } from "react";
import { resList } from "../utilis/constants";
import RestaurantCard from "./RestaurantCard";
import {Link} from "react-router-dom"
import useOnlineStatus from "../utilis/useOnlineStatus";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]); // Displayed restaurants
    const [filteredRestaurants, setFilteredRestaurants] = useState([]); // Filtered restaurants
    const [restaurantInfos, setRestaurantInfos] = useState([]); // Extracted restaurant info
    const [searchText,setsearchText]=useState([])
    console.log("body rendered")
    // Fetch data on component mount
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const response = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&collection=80451&tags=layout_CCS_Kebabs&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
        );

        let resJson = await response.json();
        console.log("Fetched Cards:", resJson.data.cards);

        let cards = resJson.data.cards;
        const restaurantInfos = cards.map((card) => card?.card?.card?.info).filter(Boolean);

        console.log("Extracted Restaurants Info:", restaurantInfos);

        setListOfRestaurants(restaurantInfos); // Set initial displayed restaurants
        setRestaurantInfos(restaurantInfos);
        setFilteredRestaurants(restaurantInfos) // Store extracted restaurant info
    };
    const onlineStatus=useOnlineStatus();
    if(onlineStatus===false)
    {
        return (<h1>Oops,Connection failed,check your internet connection</h1>);
    }
    const filterTopRated = () => {
        const filteredRestaurants = restaurantInfos.filter((res) => res.avgRating > 4);
        setFilteredRestaurants(filteredRestaurants);
        console.log("Filtered Restaurant List:", filteredRestaurants);
    };

    return (
        <div className="body">
            {/* Filter Button */}
            <div className="filter">
                <button className="filter-btn" onClick={filterTopRated}>
                    Top Rated Restaurants
                </button>
            <div className="search">
                <input type="text" className="search-box" value={searchText} onChange={(e)=>{setsearchText(e.target.value)}}/>
                <button onClick={()=>{
                   const filter= listOfRestaurants.filter((res)=>res.name.toLowerCase().includes(searchText.toLowerCase()))
                   console.log(filter);
                   setFilteredRestaurants(filter);
                }}>search</button>
            </div>
            </div>

            {/* Restaurant Cards */}
            <div className="res-container">
            {filteredRestaurants.map((restaurant) => (
                
                <Link key={restaurant.id} to={"/Restaurant/"+restaurant.id}>

                    <RestaurantCard
                         // Ensure unique key for React
                        resdata={restaurant}
                    /></Link>
                ))}
            </div>
        </div>
    );
};

export default Body;
