import { useContext } from "react";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

const About = () =>{

    const {loggedInUser} = useContext(UserContext);
    return (
        <div>
            <div className="flex">
            <h1 className="px-3 py-3">About</h1>
            <h1 className="font-bold px-3 py-3">{loggedInUser}</h1>
            </div>
            <h2 className="px-3 py-3 font-extrabold">Hello Everyone</h2>
            
            <UserClass name={"Thithiksha (Class)"} Location={"Banglore(Class)"} Contact={"Thithiksha03(Class)"}/>
        </div>
    );
};

export default About;