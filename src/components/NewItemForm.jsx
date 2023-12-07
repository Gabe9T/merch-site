function NewItemForm() {
    function handleNewItemFormSubmission(e) {
        e.preventDefault();
        console.log(e.target.image.value);
        console.log(e.target.description.value);
        console.log(e.target.price.value);
        console.log(e.target.qty.value);
  
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
                
                <label htmlFor = "price"> Price: </label>
                <input
                    type='number'
                    name='price'
                    placeholder='Price'/>
                    
                    <br />
                    <label htmlFor = "qty"> Quanity: </label>
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