import ItemsList from "./itemsList";
import React from 'react';
import { useState } from "react";

//declare useState somewhere?

class BodyControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemVisibleOnPage: 'home' //btn click?
        };
    }
    render(){
        let currentlyVisibleState = null;
        if (this.state.itemVisibleOnPage === 'home') {
            currentlyVisibleState = <ItemsList />
        } else if (this.state.itemVisibleOnPage === 'apparel') {  //want state to equal button click for category
            currentlyVisibleState = <ItemsList filter={"Apparel"} />
        } else if (this.state.itemVisibleOnPage === 'vinyl') {
            currentlyVisibleState = <ItemsList filter={"Vinyl"} />
        } else if (this.state.itemVisibleOnPage === 'digital') {
            <ItemsList filter={"Digital"} />
        } else {
            <ItemsList filter={"Accesories"} />
        }
    

    return (
        <>
             {currentlyVisibleState}
        </>
    )
}
}

export default BodyControl;