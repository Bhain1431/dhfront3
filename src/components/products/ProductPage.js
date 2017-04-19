import React, {Component} from "react";
import {GridList, GridTile} from "material-ui/GridList";
import IconButton from "material-ui/IconButton";
import StarBorder from "material-ui/svg-icons/toggle/star-border";
import RaisedButton from "material-ui/RaisedButton";
import {Link} from "react-router";
import axios from "axios";
import DropDownMenu from "material-ui/DropDownMenu";
import MenuItem from "material-ui/MenuItem";
import Storage from "../localStorage.js";

const style = {
    margin: 12,
}

const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    gridList: {
        display: 'flex',
        flexWrap: 'nowrap',
        overflowX: 'auto',
    },
    titleStyle: {
        color: 'rgb(0, 188, 212)',
    },
};

const tilesData = [
    {
        img: '/Pics/IMG_box.jpg',
        title: '$19.99',
        author: 'brad',
    },
    {
        img: '/Pics/IMG_gleaf.jpg',
        title: '$14.99',
        author: 'brad',
    },
    {
        img: '/Pics/IMG_teapot.jpg',
        title: '$135.00',
        author: 'brad',
    },
    {
        img: '/Pics/IMG_glassbuterfly.jpg',
        title: '$19.99',
        author: 'brad',
    }
];


class ProductPage extends Component {


    constructor(props) {
        super(props);
        this.state = {potterySelected: 0, pottery: []};


    }
    handleAdd = (product) => {
        const cart = Storage.get('CART');

        if (cart !== null) {
            if (cart.some(c => c._id === product._id)) {
                const item = cart.filter(p => p._id === product._id)
                    .map(p => ({
                        ...p,
                        quantity: p.quantity + 1
                    }))
                    .reduce((prev, current) => current);

                Storage.set('CART', [...cart.filter(p => p._id !== product._id), item])
            } else {
                Storage.set('CART', [...cart, {...product, quantity: 1}]);
            }
        } else {
            Storage.set('CART', [{...product, quantity: 1}]);
        }
    };
    componentDidMount() {

        const cart = Storage.get('CART');
        if (cart === null){
            Storage.set('CART', [])
        };


        axios.get('https://agile-castle-74433.herokuapp.com/pottery')
            .then(result => this.setState({pottery: result.data, potterySelected: result.data[0]._id}))
            .catch(error => console.log(error))
    }
    render() {
        console.log(this.state)
        return (

            <div style={styles.root}>
                <Link to="checkout"> <RaisedButton label="Check Out" style={style}></RaisedButton></Link>
                <DropDownMenu value={this.state.potterySelected}
                              onChange={(e,index, value) => { this.setState({potterySelected:value})}}>
                    {this.state.pottery.map(p => (<MenuItem key={p._id} value={p._id} primaryText={`${p.pottype}  ${p.price}`}/>))}
                </DropDownMenu>
                <RaisedButton onClick={e => this.handleAdd(this.state.pottery.filter(p => p._id === this.state.potterySelected).reduce((prev, current) => current))} label="Add to Cart"></RaisedButton>
                <GridList style={styles.gridList} cols={2.2}>
                    {tilesData.map((tile) => (
                        <GridTile
                            key={tile.img}
                            title={tile.title}
                            actionIcon={<IconButton><StarBorder color="rgb(0, 188, 212)"/></IconButton>}
                            titleStyle={styles.titleStyle}
                            titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)">
                            <img src={tile.img}/>
                        </GridTile>
                    ))}
                </GridList>
                <Link to="home"> <RaisedButton label="Home" style={style}></RaisedButton></Link>
            </div>
        )
    }
}
;

export default ProductPage;