import { useState } from "react";


const User = (props) => {
const[count] = useState(0);
const[count1] = useState(1);

    const{name, Location, Contact } = props;

    return (<div className="user-card">
        <h1>Count:{count}</h1>
        <h1>Count:{count1}</h1>
        <h2>Name:{name}</h2>
        <h3>Location:{Location}</h3>
        <h3>Contact:{Contact}</h3>
    </div>);
};

export default User;