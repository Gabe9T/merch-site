import Items from "./Items";
import PropTypes from 'prop-types';
import masterList from "./MasterList/MasterList";

const ItemsList = (props) => {
    
    const itemStyle = {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        width: '30%'
    }
    let inventory = props.inventory;
    if (props.filter) {
        inventory = props.inventory.filter(item => item.category === props.filter);
    } 
    console.log(props);
    return (
        <>
            <div className="row">
                <div style={itemStyle}>
                    {
                        inventory.map((item, index) => (<Items
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
                </div>
            </div>
        </>
    )
};

export default ItemsList;