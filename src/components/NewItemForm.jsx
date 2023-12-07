function NewItemForm() {
    function handleNewItemFormSubmission(e) {
        e.preventDefault();
        console.log(e.target.names.value);
        console.log(e.target.location.value);
        console.log(e.target.issue.value);
    }
    return (
        <>
            <h3>Use this form to add an item for sale</h3>
            <form onSubmit={handleNewItemFormSubmission}>

                <label for="image">Image: </label>
                <input
                    type='text'
                    name='image'
                    placeholder='Image url here' />
                <br />

                <label for="description">Description: </label>
                <input
                    type='text'
                    name='description'
                    placeholder='Describe Item' />
                    <br />
                
                <label for = "price"> Price: </label>
                <input
                    type='number'
                    name='price'
                    placeholder='Price'/>
                    
                    <br />
                    <label for = "qty"> Quanity: </label>
                    <input
                    type='number'
                    name='qty'
                    placeholder='Enter the amount'/>
                    
                    <br />
                    

                <button type='submit'>Create!</button>
            </form>
        </>
    );
}

export default NewItemForm;


// category: "Apparel",
//         imgSrc: "https://picsum.photos/200/300",
//         imgAlt: "A Picture",
//         description: "Shirt",
//         price: "$15.00",
//         qty: 5,