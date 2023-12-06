import Items from "./Items";
import masterlist from "./MasterList/MasterList";


const Apparel = () => {
    return (
        <>
            <h2>Apparel</h2>
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