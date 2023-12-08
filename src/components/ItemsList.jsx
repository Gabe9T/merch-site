import Items from "./Items";
import PropTypes from 'prop-types';
//import masterList from "./MasterList/MasterList";

const ItemsList = (props) => {
    
    const itemStyle = {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
    }

    let currentInventory = props.inventory;
    if (props.filter) {
        currentInventory = props.inventory.filter(item => item.category === props.filter);
    } 
    // console.log(props);
    return (
        <>
        <hr />
            
                <div style={itemStyle}>
                    {
                        currentInventory.map((item) => 
                        (<Items
                            whenItemClicked = { props.onItemSelection }
                            category={item.category}
                            imgSrc={item.imgSrc}
                            imgAlt={item.imgAlt}
                            description={item.description}
                            price={item.price}
                            qty={item.qty}
                            id={item.id}
                            key={item.id} />
                            )
                        )
                    }
                </div>
            
        </>
    )
};

ItemsList.propTypes = {
    currentInventory: PropTypes.array,
    onItemSelection: PropTypes.func
};

export default ItemsList;