import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component {

    render() {
        // Find all the required information using javascript

        // return a JSX code which will gets converted as Html using Babel
        return (
            <div className="cart">
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
            </div>
        );
    }
}

export default Cart;