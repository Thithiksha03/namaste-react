import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) =>{
    const {resData} = props;
    //console.log(resData);
    const {cloudinaryImageId, name, cuisines, avgRating, sla, costForTwo} = resData?.info;

    const {loggedInUser} = useContext(UserContext);
    return (<div data-testid="resCard" className=" rounded-xl m-5 p-3 w-[200px] bg-gray-200 hover:bg-gray-300">
        <img className="rounded-xl" 
        alt="res-logo" 
        src={CDN_URL
        + cloudinaryImageId}/>
        <h3 className="font-bold py-2 text-lg">{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating}</h4>
        <h4>{sla.slaString}</h4>
        <h4>{costForTwo}</h4>
        <h4> User : {loggedInUser}</h4>
    </div> );
};

export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label>Promoted</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}



export default RestaurantCard;