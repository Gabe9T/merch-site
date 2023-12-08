import PropTypes from 'prop-types';

const Items = (props) => {
    const styleImg = {
        width: '200px',
        height: '300px',
        overflow: 'hidden',
        height: 'auto'
    }
    const buttonStyle = {
        // width: '15%'
    }
    const styleItem = {
        border: '2px solid black',
        justifyContent: 'evenly-spaced',
        padding: "1%",
        margin: "1%",
    }
    return (
        <>
            <div style={styleItem} onClick={() => props.whenItemClicked(props.id)}>
                <p>Category: {props.category}</p>
                <img src={props.imgSrc} alt={props.imgAlt} style={styleImg} />
                <p>Description: {props.description}</p>
                <p>Price: {props.price}</p>
                <p>Quantity: {props.qty}</p>
                <div style={buttonStyle}>
                    <button>Buy</button> 
                    <button>Restock</button>
                </div>
            </div>
        </>
    )
}

Items.propTypes = {
    category: PropTypes.string,
    imgSrc: PropTypes.string,
    imgAlt: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.string,
    qty: PropTypes.number,
    id: PropTypes.string,
    whenItemClicked: PropTypes.func
};

export default Items;