import PropTypes from 'prop-types';
// import { v4 } from 'uuid';

function NewItemForm(props) {

    function handleNewItemFormSubmission(e) {
        e.preventDefault();
        props.onNewItemCreation({
            imgSrc: e.target.image.value,
            description: e.target.description.value,
            price: (e.target.price.value), //parseINT
            qty: (e.target.qty.value), //parseINT
            // id: v4()
        });
    }
    return (
        <>
            <h3>Use this form to add an item for sale</h3>
            <form onSubmit={handleNewItemFormSubmission}>

                <label htmlFor="image">Image: </label>
                <input
                    type='text'
                    name='image'
                    placeholder='Image url here' />
                <br />

                <label htmlFor="description">Description: </label>
                <input
                    type='text'
                    name='description'
                    placeholder='Describe Item' />
                <br />

                <label htmlFor="price"> Price: </label>
                <input
                    type='number'
                    name='price'
                    placeholder='Price' />

                <br />
                <label htmlFor="qty"> Quanity: </label>
                <input
                    type='number'
                    name='qty'
                    placeholder='Enter the amount' />

                <br />


                <button type='submit'>Create!</button>
            </form>
        </>
    );
}
NewItemForm.propTypes = {
    onNewItemCreation: PropTypes.func
};

export default NewItemForm;


