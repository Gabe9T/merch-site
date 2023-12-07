import React from "react";
import PropTypes from "prop-types";

function ItemDetail(props) {
    const { item, onClickingDelete } = props;
    const styleImg = {
        width: '20rem',
        height: '20rem'
    }
    return (
        <>
            <h1>Ticket Detail</h1>
            <img src={item.imgSrc} alt={item.imgAlt} style={styleImg} />
            <p>Description: {item.description}</p>
            <p>Price: {item.price}</p>
            <p>Quantity: {item.qty}</p>
            <button onClick={()=> onClickingDelete(item.id) }>Delete Item</button>
            <hr />
        </>

    );
}
ItemDetail.propTypes = {
    item: PropTypes.object,
    onClickingDelete: PropTypes.func
};

export default ItemDetail;