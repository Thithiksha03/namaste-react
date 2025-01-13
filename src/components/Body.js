import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
const [ListOfRestaurants, setListOfRestaurants] = useState([]);
const [filteredRestaurant, setFilteredRestaurant] = useState([]);

const [searchText, setSearchText] = useState("");

const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

//console.log(ListOfRestaurants);

useEffect(() => { 
   fetchData();
}, []);


const fetchData = async () => {
    const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

    const json = await data.json();

    // optional chaining
    setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
};

const OnlineStatus = useOnlineStatus();

if(OnlineStatus === false) 
    return (<h1>
                Look like you're offline!!! Please check you're Internet Connection
            </h1>);

        const {loggedInUser, setUserName} = useContext(UserContext);

    return ListOfRestaurants.length === 0 ? <Shimmer/> : (<div className="body">
        <div className="filter flex">
            <div className="search m-5 p-5">
                <input type="text" className="border border-solid border-black "
                value={searchText} onChange={(e) => {
                    setSearchText(e.target.value);
                }} />
                <button className="px-3 py-2 bg-green-200 m-3 rounded-3xl hover:bg-green-500"  onClick={() =>{
                    

                    const filteredRestaurant = ListOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                    setFilteredRestaurant(filteredRestaurant);
                }}>search</button>
            </div>
            <div className="flex items-center">
            <button className="px-3 py-2 bg-purple-300 rounded-lg hover:bg-purple-500" onClick={() => {
                const filteredList = ListOfRestaurants.filter((res) => res.info.avgRating > 4 );
                setListOfRestaurants(filteredList);
                
            }}>Top Rated Restaurant</button>
           
            </div>
            <div className="p-5 flex items-center">
                <label>UserName : </label>
                <input data-testid = "searchInput" className="border border-black p-2" 
                value={loggedInUser} 
                onChange={(e) => {setUserName(e.target.value)}}/>
            </div>
        </div>
        <div className="restro-container flex flex-wrap">
        {
            filteredRestaurant.map((restaurant) =>(
                <Link className="link" key={restaurant.info.id} 
                to={"/restaurants/" + restaurant.info.id}>
                        {restaurant.info.prompted ? (<RestaurantCardPromoted resData={restaurant}/>): 
                    (<RestaurantCard  resData={restaurant}/>)}
                </Link>
            ))
        };
        </div>
    </div> 
    );
};

export default Body;
