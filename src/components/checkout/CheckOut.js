import React, {Component} from "react";
import pluralize from "pluralize";
import RaisedButton from "material-ui/RaisedButton";
import {Link} from "react-router";
import "./CheckOut";

const style = {
    margin: 12
};

class CheckOut extends Component{


    render(){

        const quantity= this.props.quantity + "" + pluralize("1", this.props.quantity);
        const subtotal= this.props.quantity * this.prop.price;
        const tax= Math.floor((subtotal / 100)) * this.props.tax;
        const total= subtotal + tax;

        return(
            <div className="CheckOut">
                <div className="Title">Check Out</div>
                <table>
                    <tbody>
                    <tr>
                        <td>{this.props.price} x {quantity}</td>
                    </tr>
                    <tr>
                        <td>Subtotal</td>
                        <td>{subtotal} $</td>
                    </tr>
                    <tr>
                        <td>Tax</td>
                        <td>{tax} $</td>
                    </tr>
                    </tbody>
                </table>
                <div className="Total">
                    <div className="TotalLabel">Total</div>
                    <div className="Amount">
                        {total} <small>$</small>
                    </div>
                    <Link to="home"> <RaisedButton label="Home" style={style}></RaisedButton></Link>
                </div>
            </div>
        )
    }
};

export default CheckOut;


