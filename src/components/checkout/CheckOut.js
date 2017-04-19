 import React, {Component} from "react";
import RaisedButton from "material-ui/RaisedButton";
import {Link} from "react-router";
import "./CheckOut";
import Storage from "../localStorage.js";

const
  style = {
     margin: 12
 };


 class CheckOut extends Component {

     constructor() {
         super()
         this.state = {cart: Storage.get("CART")};
         console.log(this.state);
     }

     render() {
         console.log(this.state);
         return (
             <div>
                 <div>Check Out Page</div>
                 <table>
                     <thead>
                     <tr>
                         <th>Name</th>
                         <th>Price</th>
                         <th>Quantity</th>
                         <th>Subtotal</th>
                     </tr>
                     </thead>
                     {
                         this.state.cart.map(item => (
                             <tr key={item._id}>
                                 <td>{item.pottype}</td>
                                 <td>{item.price}</td>
                                 <td>{item.quantity}</td>
                                 <td>{item.price * item.quantity}</td>
                             </tr>
                         ))
                     }
                     <tfoot>
                     <tr>
                         <td>Total</td>
                         <td colSpan="2" style={{ textAlign: 'right'}}>
                             {parseInt(this.state.cart.map(item => (item.price * item.quantity)).reduce((a, b) => {
                                 return a + b;
                             }, 0)).toFixed(2)}
                         </td>
                     </tr>
                     </tfoot>

                 </table>

                 <Link to="home"> <RaisedButton label="Home" style={style}></RaisedButton></Link>
             </div>
         )

     }
 }
 ;

 export default CheckOut;
































