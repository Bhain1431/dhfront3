/**
 * Created by bradhain on 3/29/17.
 */
import React, { Component} from "react";
import { Link } from "react-router";
import RaisedButton from "material-ui/RaisedButton";


const style = {
    margin:12,
};

class HomePage extends Component {
    render() {
        return(
            <div>
                <Link to="create"> <RaisedButton label="Create" style={style}></RaisedButton></Link>
                <Link to="products"><RaisedButton label="Products" style={style}> </RaisedButton></Link>
            </div>
        )
    }

};

export default HomePage;

