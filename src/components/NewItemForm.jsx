import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import ReusableForm from './ReusableForm';

function NewItemForm(props) {

    function handleNewItemFormSubmission(e) {
        e.preventDefault();
        props.onNewItemCreation({
            imgSrc: e.target.image.value,
            description: e.target.description.value,
            price: e.target.price.value,
            qty: parseInt(e.target.qty.value), //this is an OBJ???
            id: v4(),
        });
    }
    return (
        <>
        <ReusableForm
            pageTitle="Use this form to add an item for sale"
            formSubmissionHandler={handleNewItemFormSubmission}
            buttonText="Create new item" />
        </>
    );
}
NewItemForm.propTypes = {
    onNewItemCreation: PropTypes.func
};

export default NewItemForm;


