import React from 'react';
import CartItem from './CartItem';

const Cart = (props) => {
    // Find all the required information using javascript
    const { products } = props;

    // return a JSX code which will gets converted as Html using Babel
    return (
        <div className="cart">
            {
                products.map((product) => {
                    return (
                        <CartItem
                            key={product.id}
                            product={product}
                            increaseQuantity={props.increaseQuantity}
                            decreaseQuantity={props.decreaseQuantity}
                            deleteProduct={props.deleteProduct} />
                    )
                }
                )
            }
        </div>
    );
}

export default Cart;