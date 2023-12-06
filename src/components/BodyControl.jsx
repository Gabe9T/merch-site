import Apparel from "./Apparel";
import Vinyl from "./Vinyl";
import Digital from "./Digital";
import Accesories from "./Accesories";

// need to turn to class with state for visitiblity of nav options

const BodyControl = () => {

    return (
        <>
            <Apparel />
            <Vinyl />
            <Digital />
            <Accesories />
        </>
    )
}


export default BodyControl;