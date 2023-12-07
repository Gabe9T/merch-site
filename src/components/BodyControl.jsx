import ItemsList from "./itemsList";
import React from 'react';
import NewItemForm from "./NewItemForm";
import { useState } from "react";

//declare useState somewhere?

class BodyControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formVisibleOnPage: false
            // itemVisibleOnPage: 'home' //btn click?
        };
    }
    handleClick = () => {
        this.setState(prevState => ({
            formVisibleOnPage: !prevState.formVisibleOnPage}));
    }
    render(){
        let currentlyVisibleState = null;
        let buttonText = null;
        if (this.state.formVisibleOnPage) {
            currentlyVisibleState = <NewItemForm />;
            buttonText = "Return to inventory for sale";
        } else {
            currentlyVisibleState = <ItemsList filter={"Apparel"}/>;
            buttonText = "Add New Item";
        }
        // if (this.state.itemVisibleOnPage === 'home') {
        //     currentlyVisibleState = <ItemsList />
        // } else if (this.state.itemVisibleOnPage === 'apparel') {  //want state to equal button click for category
        //     currentlyVisibleState = <ItemsList filter={"Apparel"} />
        // } else if (this.state.itemVisibleOnPage === 'vinyl') {
        //     currentlyVisibleState = <ItemsList filter={"Vinyl"} />
        // } else if (this.state.itemVisibleOnPage === 'digital') {
        //     <ItemsList filter={"Digital"} />
        // } else {
        //     <ItemsList filter={"Accesories"} />
        // }
    return (
        <>
             {currentlyVisibleState}
             <button onClick={this.handleClick}>{buttonText}</button>
        </>
    );
}
}

export default BodyControl;