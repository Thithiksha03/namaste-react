import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body =() =>{
const [ListOfRestaurant, setListOfRestaurant] = useState(resList);
    return (<div className="body">
        <div className="filter">
            <button className="filter-btn" onClick={() => {
                const filteredList = ListOfRestaurant.filter((res) => res.card.card.info.avgRating > 4 );
                setListOfRestaurant(filteredList);
                
            }}>Top Rated Restaurant</button>
        </div>
        <div className="restro-container">
        
        
        {ListOfRestaurant.map(restaurant => <RestaurantCard key={restaurant.card.card.info.id} resData={restaurant}/>)}
        
    
       
   
        </div>
    </div> )
}

export default Body;
