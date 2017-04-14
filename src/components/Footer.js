
import React, {Component} from 'react';
import {total} from '../checkout/CheckOut';
import PaypalButton from './PayPalButton';

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                 <div className="content-wrapper">
                    <button className="button" onClick={total}>Buy Now</button>
                    <p className="text">Pay Now </p>
                    <span></span>
                    <PaypalButton />
                    {/*<button className="button" onClick={buyCurrentProfile} >buy for 10$</button>*/}
                    <p className="text">You buy only one character (svg, png) </p>
                </div>
            </div>
        )
    }
};
export default Footer;

