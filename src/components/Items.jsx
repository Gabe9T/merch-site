import PropTypes from 'prop-types';

const Items = (props) => {
    return(
        <>
        <p>Category: {props.category}</p>
        <img src={props.image}/>
        <p>Description: {props.description}</p>
        <p>Price: {props.price}</p>
        </>
    )
}

Items.propTypes = {
    category: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.string
}

export default Items;