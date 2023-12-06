import React from "react";
import Nav from './Nav';
// import Cart from '/Cart';

function Header() {
    const styleHeader = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
    
    return (
        <>
            <title>Site</title>
            <h1>🐌Rage Against The Slug🐌</h1>
            <div style={styleHeader}>
            <button id="navBtn" onclick='<Nav />'>☰</button> {/*add onClick for Nav Component */  }
            <form id="searchForm"  name="searchForm">
                <input type="text" name="searchForm" placeholder="search"></input>
                <button>Search for merch 🔍</button> {/*add onClick later */}
            </form>
            <button id="shopCart">🛒 Cart</button>
            </div>
        </>
    );
}

export default Header;