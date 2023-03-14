import dogo from "../assets/img/images.jpeg"
import { useRouteError } from "react-router-dom";
const styleObj={
    marginLeft:"600px",
}
const Error=()=>{
    const err=useRouteError();
    console.log(err);
    return (
        <div>
            
            <p>{err.data}</p>
            <div style={styleObj}>
            <img src={dogo} alt="sorry"></img>
            <h1>Something went wrong ;(</h1>
            </div>

            
        </div>
    );
}

export default Error;