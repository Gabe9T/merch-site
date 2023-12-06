import PropTypes from 'prop-types';

const Items = (props) => {
    return(
        <>
        <p>Category: {props.category}</p>
        <img src={props.imgSrc} alt={props.imgAlt}/>
        <p>Description: {props.description}</p>
        <p>Price: {props.price}</p>
        <p>Quantity: {props.qty}</p>
        </>
    )
}

Items.propTypes = {
    category: PropTypes.string,
    imgSrc: PropTypes.string,
    imgAlt: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.string,
    qty: PropTypes.number
}

export default Items;