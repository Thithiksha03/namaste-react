import RestaurantCard from "./RestaurantCard";
import restroLists from "../utils/mockData2";
import { useState, useEffect } from "react";

const Body = () => {
const [ListOfRestaurants, setListOfRestaurants] = useState(restroLists);

// useEffect(() => { 
//    fetchData();
// }, []);

// const fetchData = async () => {
//     const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null");

//     const json = await data.json();
//     console.log(json);
//     setListOfRestaurants(json.data.cards);
// };
    return (<div className="body">
        <div className="filter">
            <button className="filter-btn" onClick={() => {
                const filteredList = ListOfRestaurants.filter((res) => res.info.avgRating > 4 );
                setListOfRestaurants(filteredList);
                
            }}>Top Rated Restaurant</button>
        </div>
        <div className="restro-container">
        {
            ListOfRestaurants.map((restaurant) =>(
            <RestaurantCard key={restaurant.info.id}  resData={restaurant}/>))
        }
        </div>
    </div> 
    );
};

export default Body;
