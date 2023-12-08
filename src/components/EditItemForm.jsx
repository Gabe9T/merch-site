import ReusableForm from "./ReusableForm";
import PropTypes from 'prop-types';



function EditItemForm(props) {
    const { item } = props;
    function handleEditItemSubmission(e){
        e.preventDefault();
        props.onEditItem({
            imgSrc: e.target.image.value,
            description: e.target.description.value,
            price: e.target.price.value,
            qty: parseInt(e.target.qty.value), 
            id: item.id
        });
    }
    return (
        <>
            <ReusableForm
                pageTitle="Edit your item"
                formSubmissionHandler={handleEditItemSubmission}
                buttonText="Update Ticket" />
        </>
    );
}
EditItemForm.propTypes = {
    item: PropTypes.object,
    onEditItem: PropTypes.func
};
export default EditItemForm;