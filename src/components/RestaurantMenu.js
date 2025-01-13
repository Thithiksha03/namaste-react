import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategories from "./RestaurantCategories";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import { useState } from "react";

const RestaurantMenu = () => {
const {resId} = useParams();
const resInfo = useRestaurantMenu(resId);
const [showIndex, setShowIndex] = useState(null);

if(resInfo === null) return <Shimmer/>;

const {name, cuisines, costForTwoMessage, avgRating} = resInfo?.cards[2]?.card?.card?.info;

const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

console.log(itemCards);

const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c?.card?.card?.["@type"] === 
    "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
console.log(categories);

return  (
    <div className="text-center">
        <h1 className="font-bold my-9 text-lg justify-center ">{name}</h1>
        <p className="font-semibold">{cuisines.join(", ")} - {costForTwoMessage}</p>
        <h3>{avgRating}</h3>
        {categories.map((category, index) => <RestaurantCategories 
        key={category?.card?.card?.title}
        data={category?.card?.card}
        showItems = {index === showIndex ? true : false}
        setShowIndex = {() => setShowIndex(index)}
        />)}
    </div>
    );
};

export default RestaurantMenu;