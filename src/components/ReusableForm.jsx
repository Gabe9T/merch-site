import PropTypes from "prop-types";

function ReusableForm(props) {
    return (
        <>
            <form onSubmit={props.formSubmissionHandler}>
                <h3>{props.pageTitle}</h3>
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
                <label htmlFor="price">Price: </label>
                <input
                    type='text'
                    name='price'
                    placeholder='Price' />
                <br />
                <label htmlFor="qty">Quantity: </label>
                <input
                    type='number'
                    name='qty'
                    placeholder='Enter the amount' />
                <br />
                <button type='submit'>{props.buttonText}</button>
            </form>
        </>
    );
}
ReusableForm.propTypes = {
    pageTitle: Proptypes.string,
    formSubmissionHandler: PropTypes.func,
    buttonText: PropTypes.string
};
export default ReusableForm;