import React, {Component} from 'react';
import Subheader from 'material-ui/Subheader';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from "react-router";
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import claystuff from "../../../public/Pics/IMG_claystuff.jpg";
import leaf from "../../../public/Pics/IMG_leaf.jpg";
import glassflower from "../../../public/Pics/IMG_glassflower.jpg";
import twocups from "../../../public/Pics/IMG_twocups.jpg";
import "./CreatePage.css";
import axios from "axios";

const styles = {
    customWidth: {
        width: 200,
    }
};
const style = {
    margin: 12,
};


class CreatePage extends Component {

    constructor(props) {
        super(props);
        this.state = {claytype: 1, moldtype: 1, glazetype: 1, glass: 1};
    }


    handleClay = (event, index, claytype) => this.setState({claytype});
    handleMold = (event, index, moldtype) => this.setState({moldtype});
    handleGlaze = (event, index, glazetype) => this.setState({glazetype});
    handleGlass = (event, index, glass) => this.setState({glass});
    handleSubmit = () => {
        alert('Your order for has been submitted');

        axios.post('https://agile-castle-74433.herokuapp.com/orders',this.state)
            .then(result => console.log(result))
            .catch(error => console.log(error))
    };

    render() {
        return <div style={styles.root}>

            <Subheader>Create Your Pottery Or Glass</Subheader>
            <img className="pic4" src={claystuff}/>
            <DropDownMenu value={this.state.claytype} onChange={this.handleClay}>
                <MenuItem value={1} primaryText="ClayType"/>
                <MenuItem value={2} primaryText="RedClay ^06"/>
                <MenuItem value={3} primaryText="WhiteSlip ^06"/>
                <MenuItem value={4} primaryText="StonewareWhite ^6"/>
            </DropDownMenu>
            <img className="pic5" src={leaf}/>
            <DropDownMenu value={this.state.moldtype} onChange={this.handleMold}>
                <MenuItem value={1} primaryText="MoldType"/>
                <MenuItem value={2} primaryText="JewelryBox"/>
                <MenuItem value={3} primaryText="Leaf"/>
                <MenuItem value={4} primaryText="Pitcher"/>
                <MenuItem value={5} primaryText="Tray"/>
            </DropDownMenu>
            <img className="pic6" src={twocups}/>
            <DropDownMenu value={this.state.glazetype} onChange={this.handleGlaze}>
                <MenuItem value={1} primaryText="GlazeType"/>
                <MenuItem value={2} primaryText="Red"/>
                <MenuItem value={3} primaryText="Yellow"/>
                <MenuItem value={4} primaryText="Otmeal"/>
                <MenuItem value={5} primaryText="IndigoFloat"/>
            </DropDownMenu>
            <img className="pic7" src={glassflower}/>
            <DropDownMenu value={this.state.glass} onChange={this.handleGlass}>
                <MenuItem value={1} primaryText="Glass"/>
                <MenuItem value={2} primaryText="Leaf"/>
                <MenuItem value={3} primaryText="Butterfly"/>
                <MenuItem value={4} primaryText="Flower"/>
                <MenuItem value={5} primaryText="Rose"/>
            </DropDownMenu><br />
            <RaisedButton label="Enter Choice" style={style} onClick={this.handleSubmit}></RaisedButton><br />
            <Link to="home"> <RaisedButton label="Home" style={style}></RaisedButton></Link>
        </div>
    }
}
export default CreatePage;