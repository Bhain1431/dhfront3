/**
 * Created by bradhain on 3/29/17.
 */
import React, { Component} from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import RaisedButton from "material-ui/RaisedButton";
import { Link } from "react-router";

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
        img: 'images/grid-list/00-52-29-429_640.jpg',
        title: 'Breakfast',
        author: 'jill111',
    },
    {
        img: 'images/grid-list/burger-827309_640.jpg',
        title: 'Tasty burger',
        author: 'pashminu',
    },
    {
        img: 'images/grid-list/camera-813814_640.jpg',
        title: 'Camera',
        author: 'Danson67',
    },
    {
        img: 'images/grid-list/morning-819362_640.jpg',
        title: 'Morning',
        author: 'fancycrave1',
    }
];

class ProductPage extends Component {
    render() {
        return(

        <div style={styles.root}>
            <GridList style={styles.gridList} cols={2.2}>
                {tilesData.map((tile) => (
                    <GridTile
                        key={tile.img}
                        title={tile.title}
                        actionIcon={<IconButton><StarBorder color="rgb(0, 188, 212)"/></IconButton>}
                        titleStyle={styles.titleStyle}
                        titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
                    >
                        <img src={tile.img}/>
                    </GridTile>
                ))}
            </GridList>
            <Link to="home"> <RaisedButton label="Home" style={style}></RaisedButton></Link>
        </div>
        )
    }
};

export default ProductPage;
