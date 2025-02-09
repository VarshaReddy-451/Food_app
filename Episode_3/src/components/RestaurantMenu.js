import { useEffect,useState} from "react";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utilis/constants";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu=()=>{
    const [showIndex,setShowIndex]=useState(0)
    const [resInfo,setResInfo]=useState();
    const [categories,setCategories]=useState();
    const {resid}=useParams();
    console.log(resid);
    useEffect(()=>{fetchingMenu()},[]);
    const fetchingMenu = async () => {
        try {
            const response = await fetch(MENU_API + resid); // Fetch data using the restaurant ID
            const json = await response.json(); // Parse JSON data
            console.log(json.data.cards.find(card=>card?.card?.card?.info))
            const data=json.data.cards.find(card=>card?.card?.card?.info); 
            const data2=json.data.cards.find(card=>card.groupedCard);
            setCategories(data2?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(card=>card?.card?.card?.['@type']==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
         ) ;
            
            console.log(data2?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(card=>card?.card?.card?.['@type']==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

            )
           
           
            setResInfo(data?.card?.card?.info); 
            
           
        } catch (error) {
            console.error("Error fetching menu:", error); // Log any errors
        }
    };
    console.log(resInfo)// Update state with fetched data
    if (!resInfo) {
        return <h2>Loading...</h2>;
    }
  
    
    return (
        <div>
            <h1>{resInfo.name}</h1>
            <h1>{resInfo.cuisines.join(",")}</h1>
            {categories.map((category,index)=><RestaurantCategory data={category?.card?.card}
            showItems={index===showIndex && true}
            setShowIndex={()=>setShowIndex(index)}/>
        )}
        </div>
    )























  /*  if(!resInfo){return <h2>Loading...</h2>}
    const {name,cuisines,costForTwoMessage}=resInfo?.data?.cards[2]?.card?.card.info;
   
   const {categories}=resInfo?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card
   console.log(resInfo?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card)
    return (
        <div className="menu">
            <h1>{name}</h1>
            <h2>{cuisines.join(",")}</h2>
            
            <ul>
                {categories.map((category, index) => (
                    <li key={index}>{category.title}</li>
                ))}
            </ul>
        </div>
    )*/
}
export default RestaurantMenu;