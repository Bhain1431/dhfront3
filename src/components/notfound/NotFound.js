/**
 * Created by bradhain on 4/1/17.
 */
import React, {Component} from "react";
import "./nfound.css";
import die from "../../../public/Pics/IMG_DieNow.jpg";

class NotFound extends Component  {
    render(){
        return(
         <div>PAGE NOT FOUND <br />
         <img className="pic" src={die} />
         </div>
        )
    }
};
export default NotFound;