import ItemsList from "./itemsList";
import React from 'react';
import NewItemForm from "./NewItemForm";
import { useState } from "react";
import masterList from "./MasterList/MasterList";
import ItemDetail from "./ItemDetail";

class BodyControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formVisibleOnPage: false,
            mainNewItemList: masterList,
            selectedItem: null
        };
    }
    handleClick = () => {
        if (this.state.selectedItem != null) {
            this.setState({
                formVisibleOnPage: false,
                selectedItem: null
            });
        } else {
            this.setState(prevState => ({
                formVisibleOnPage: !prevState.formVisibleOnPage
            }));
        }

    }
    handleNewItem = (newItem) => {
        const newInventory = this.state.mainNewItemList.concat(newItem);
        this.setState({
            mainNewItemList: newInventory,
            formVisibleOnPage: false
        });
    }
    //
    handleChangingSelectedItem = (id) => {
        const selectedItem = this.state.mainNewItemList.filter(item => item.id === id)[0];
        this.setState({ selectedItem: selectedItem });

    }
    handleDeletingItem = (id) => {
        const newItemList = this.state.mainNewItemList.filter(item => item.id !== id);
        this.setState({
            mainNewItemList: newItemList,
            selectedItem: null
    });
    }
    render() {
        let currentlyVisibleState = null;
        let buttonText = null;

        if (this.state.selectedItem != null) {
            currentlyVisibleState = <ItemDetail item={this.state.selectedItem} onClickingDelete = {this.handleDeletingItem} />
            buttonText = "Return to items for sale";
        } else if (this.state.formVisibleOnPage) {
            currentlyVisibleState = <NewItemForm onNewItemCreation={this.handleNewItem} />;
            buttonText = "Return to inventory for sale";
        } else {
            currentlyVisibleState =
                <ItemsList
                    inventory={this.state.mainNewItemList} onItemSelection={this.handleChangingSelectedItem} />;  //filter={"Apparel"}
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