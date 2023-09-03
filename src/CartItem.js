import React from 'react'

// Defining the constructor to maintain state for the component
// constructor() {
//     super();
//     this.state = {
//         title: 'IPhone',
//         price: 999,
//         qty: 1,
//         img: ''
//     }
// }

// Utility methods
// Here we defined a lambda function instead of normal function to bind the required object with it
// increaseQuantity = () => {
//     // Get the current quantity
//     // const current_qty = this.state.qty;
//     // Increase the quantity value and re-render the JSX
//     // Set state will do shallow merge the given object with current state and re render the JSX
//     // form - 1 when no previous state required
//     // this.setState({
//     //     qty: current_qty + 1,
//     // });

//     // form - 2 when previous state required
//     this.setState((prevState) => {
//         return {
//             qty: prevState.qty + 1,
//         }
//     })
// }

// decreaseQuantity = () => {
//     // Get the current quantity 
//     // Decrease the value and re render the JSX

//     this.setState((previousState) => {
//         if (previousState.qty > 0) {
//             return {
//                 qty: previousState.qty - 1,
//             }
//         }
//         else{
//             return;
//         }
//     })
// }
const CartItem = (props) => {
    const { name, price, qty, img } = props.product;
    const { product, increaseQuantity, decreaseQuantity, deleteProduct } = props;

    return (
        <div className='cart-item'>

            <div className="left-block">
                <img style={style.image} src={img} alt="product_image" />
            </div>

            <div className="right-block">
                <div style={{ fontSize: 25 }}>
                    {name}
                </div>
                <div style={{ color: '#777' }}>
                    <b>Price:</b> {price}
                </div>
                <div style={{ color: '#777' }}>
                    <b>Qty:</b> {qty}
                </div>
                <div className='cart-item-action'>
                    {/* Buttons to alter quantity */}
                    <img alt="Add" className='action-icons' src="https://cdn-icons-png.flaticon.com/128/992/992651.png" onClick={() => increaseQuantity(product)} />
                    <img alt="Remove" className='action-icons' src="https://cdn-icons-png.flaticon.com/128/1828/1828906.png" onClick={() => decreaseQuantity(product)} />
                    <img alt="Delete" className='action-icons' src="https://cdn-icons-png.flaticon.com/128/1214/1214428.png" onClick={() => deleteProduct(product.id)} />
                </div>

            </div>

        </div>
    );
}

// Defining the styles for component
const style = {
    image: {
        height: 110,
        width: 120,
        borderRadius: 4,
        backgroundColor: '#ccc'
    }
}

export default CartItem;