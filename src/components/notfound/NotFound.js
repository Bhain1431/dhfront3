/**
 * Created by bradhain on 4/1/17.
 */
import React, {Component} from "react";
import "./nfound.css";
import die from "../../../public/Pics/IMG_DieNow.jpg";
import RaisedButton from "material-ui/RaisedButton";
import { Link } from "react-router";

 const style = {
     margin: 12,
 };

class NotFound extends Component  {
    render(){
        return(
         <div>PAGE NOT FOUND <br />
         <img className="pic" src={die} /><br />
             <Link to="home"> <RaisedButton label="Home" style={style}></RaisedButton></Link>
         </div>
        )
    }
};
export default NotFound;