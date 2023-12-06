import Items from "./Items";

const Apparel = () => {
    return (
        <>
            <h2>Apparel</h2>
            <Items
                category="Apparel"
                image="https://picsum.photos/200/300"
                description="A t-shirt"
                price="$20.00" />
        </>
    )
}
export default Apparel;