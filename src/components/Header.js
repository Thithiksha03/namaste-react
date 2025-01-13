import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () =>{

    const [btnNameReact, setBtnNameReact] = useState("Login");

    const OnlineStatus = useOnlineStatus();

    const {loggedInUser} = useContext(UserContext);

    // Subscribing the store using a selector
    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);


    return(<div className="flex justify-between bg-pink-100 shadow-lg">
            <div className="logo-container">
            <img className="w-32" src={LOGO_URL} />
            </div>
            <div className="flex items-center">
                <ul className="flex p-2 m-5 ">
                    <li className="p-5">
                        Online Status:{OnlineStatus ? "🟢" : "🔴"}
                    </li>
                    <li className="p-5 hover:font-bold">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="p-5 hover:font-bold">
                        <Link to="/about">About Us</Link>
                    </li>
                    <li className="p-5 hover:font-bold">
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li className="p-5 hover:font-bold">
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li className="p-5 hover:font-bold">
                        <Link to="/cart">Cart - ({cartItems.length})</Link> 
                    </li>

                    <button className="btn hover:bg-slate-300 py-5" onClick={() => {
                        btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login");
                    }}>{btnNameReact}</button>

                    <li className="p-5 hover:font-bold">{loggedInUser}</li>
                </ul>
            </div>
       </div>)
};


export default Header;