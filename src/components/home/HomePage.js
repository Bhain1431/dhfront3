/**
 * Created by bradhain on 3/29/17.
 */
import React, { Component} from "react";
import { Link } from "react-router";
import RaisedButton from "material-ui/RaisedButton";
import "./HomePage.css"
import chipbowl from "../../../public/Pics/IMG_chipbowl.jpg";
import boxscups from "../../../public/Pics/IMG_boxscups.jpg";
import glassleaf from "../../../public/Pics/IMG_gleaf.jpg";


const style = {
    margin:12,
};

class HomePage extends Component {
    render() {
        return(
            <div>
                <Link to="create"> <RaisedButton label="Create" style={style}></RaisedButton></Link>
                <Link to="products"><RaisedButton label="Products" style={style}> </RaisedButton></Link>
                <div className="container">
                    <img className="pic1" src={chipbowl} />
                    <img className= "pic2" src={boxscups} />
                    <img className="pic3" src={glassleaf} />
                </div>
            </div>

        )
    }

}

export default HomePage;

