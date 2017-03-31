import React, {Component} from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import RaisedButton from 'material-ui/RaisedButton';
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
        width: 500,
        height: 450,
        overflowY: 'auto',
    },
};

const tilesData   = [
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
    },
];

class CreatePage extends Component {
    render() {
        return <div style={styles.root}>
            <GridList
                cellHeight={180}
                style={styles.gridList}>

                <Subheader>December</Subheader>
                {tilesData.map((tile) => (
                    <GridTile
                        key={tile.img}
                        title={tile.title}
                        subtitle={<span>by <b>{tile.author}</b></span>}
                        actionIcon={<IconButton><StarBorder color="white"/></IconButton>}>
                        <img src={tile.img}/>
                    </GridTile>
                ))}
            </GridList>
            <Link to="home"> <RaisedButton label="Home" style={style}></RaisedButton></Link>
        </div>
    }
};
export default CreatePage;