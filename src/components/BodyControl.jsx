import ItemsList from "./itemsList"

// need to turn to class with state for visitiblity of nav options

const BodyControl = () => {

    return (
        <>
            <ItemsList filter={"Apparel"}/>
            <ItemsList filter={"Vinyl"}/>
            <ItemsList filter={"Digital"}/>
            <ItemsList filter={"Accesories"}/>
        </>
    )
}


export default BodyControl;