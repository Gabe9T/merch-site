import Items from "./Items";
import PropTypes from 'prop-types';
import masterList from "./MasterList/MasterList";
import { useState } from 'react';


const ItemsList = (props) => {
        const filteredList = masterList.filter(item => item.category === props.filter);
        return (
            <>
            
            {
                filteredList.map((item, index) => (<Items 
                category={item.category}
                imgSrc={item.imgSrc}
                imgAlt={item.imgAlt}
                description={item.description}
                price={item.price}
                qty={item.qty}
                key={index}
                />)
                )
            }
            </>
        )
    };

export default ItemsList;

// const apparelList = masterList.filter((item) => {
//     return item.category === "Apparel"
// });
//     };

// const Apparel = (props) => {
//     const filteredItems = masterList.filter(item => item.category === props.category);

//     return (
//         <>
//             {filteredItems.map(item => (
//                 <div key={item.id}>
//                     <p>{item.category}</p>
//                 </div>
//             ))}
//         </>
//     );
// }
