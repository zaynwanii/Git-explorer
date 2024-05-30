import { Link } from "react-router-dom";

const NotFound=()=>{
    return (
        <div>
            <h1>Oops!Page Not Found</h1>
            <Link to="/">Got back to Home Page</Link>
        </div>
    )
};
export default NotFound;