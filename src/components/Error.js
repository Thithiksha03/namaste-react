import { useRouteError } from "react-router";


const Error = () => {

    const err = useRouteError();
    console.log(err);
    return (
        <div>
            <h1>OOPssss...</h1>
            <h2>Something went wrong</h2>
        </div>
    )
}

export default Error;