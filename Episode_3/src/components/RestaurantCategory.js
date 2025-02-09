import ItemList from "./itemList";
import {useState} from "react"
const RestaurantCategory=({data,showItems,setShowIndex}) =>{
    
    console.log(data);
    const handleClick=()=>{
        
        setShowIndex();
    }
    return (
        <div>
            <div >
                <div onClick={handleClick}>
                <span>{data.title}({data.itemCards.length})</span>
                <span>⬇️</span>
                <div>
                    
                    { showItems && <ItemList items={data.itemCards}/>}
                    
                </div>

                </div>
            </div>
        </div>
    )

};
export default RestaurantCategory;
