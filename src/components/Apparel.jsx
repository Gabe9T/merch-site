import Items from "./Items";
import PropTypes from 'prop-types';
// import masterlist from "./MasterList/MasterList";


const Apparel = (props) => {
    return (
        <>
            <p>{props.category}</p>
            <p>{props.imgSrc}</p>
            <p>{props.imgAlt}</p>
            <p>{props.description}</p>
            <p>{props.price}</p>
            {/* masterlist.map... */}
            
            <Items
                category="Apparel"
                image="https://picsum.photos/200/300"
                description="A t-shirt"
                price="$20.00" />
        </>
    )
}
export default Apparel;

const ProduceList = (props) => {
  return(
      <React.Fragment>
          <h2>{props.month}</h2>
          <ul>{props.selection.map((produceItem) => {
              return (
              <li>{produceItem}</li>
              );
          })}
          </ul>
      </React.Fragment>
  )
}