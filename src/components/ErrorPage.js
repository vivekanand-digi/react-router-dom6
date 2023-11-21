import { useRouteError } from "react-router-dom";

export default function ErrorPage(){
    const error = useRouteError();

    return(
        <div>
            <h1>unexpected error</h1>
            <h3>{error.message}</h3>
        </div>
    )
}