import ItemsList from "./itemsList";
import React from 'react';
import NewItemForm from "./NewItemForm";
import { useState } from "react";
import masterList from "./MasterList/MasterList";

class BodyControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formVisibleOnPage: false,
            mainNewItemList: masterList
        };
    }
    handleClick = () => {
        this.setState(prevState => ({
            formVisibleOnPage: !prevState.formVisibleOnPage
        }));
    }
    handleNewItem = (newItem) => {
        const newInventory = this.state.mainNewItemList.concat(newItem);
        this.setState({
            mainNewItemList: newInventory,
            formVisibleOnPage: false
        });
    }

    render() {
        let currentlyVisibleState = null;
        let buttonText = null;
        if (this.state.formVisibleOnPage) {
            currentlyVisibleState = <NewItemForm onNewItemCreation={this.handleNewItem}/>;
            buttonText = "Return to inventory for sale";
        } else {
            currentlyVisibleState =
                <ItemsList
                    inventory={this.state.mainNewItemList} />;  //filter={"Apparel"}
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