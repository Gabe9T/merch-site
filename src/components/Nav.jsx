function Nav() {
   return (
      <>
      <h4>Navigation</h4>
         <button id="homeBtn">Home</button>
         {/* add onclick  */}
         <button id="allItemsBtn">All Items</button>
         <button id="apparelBtn">Apparel</button>
         <button id="vinylBtn">Vinyl</button>
         <button id="digitalBtn">Digital</button>
         <button id="accessoriesBtn">Accessories</button>
      </>
   )
}

export default Nav;

// import React from "react";
// import { useState } from "react";

// const Nav = () => {
//   const [selectNav, setSelectedNav] = useState('home');

//   const handleTabClick = (tab) => {
//     setSelectedTab(tab);
//   };

//   return (
//     <div>
//       <button onClick={() => handleTabClick(home)} className={selectedTab === 'home' ? 'active' : ''}>Home </button>
//     </div>
//   )
// }
// export default Nav;