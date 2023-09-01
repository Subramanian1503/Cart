import React from 'react'

class CartItem extends React.Component {

    // Defining the constructor to maintain state for the component
    constructor() {
        super();
        this.state = {
            title: 'Phone',
            price: 999,
            qty: 1,
            img: ''
        }
    }

    // Utility methods
    // Here we defined a lambda function instead of normal function to bind the required object with it
    increaseQuantity = () => {
        // Get the current quantity
        // const current_qty = this.state.qty;
        // Increase the quantity value and re-render the JSX
        // Set state will do shallow merge the given object with current state and re render the JSX
        // form - 1 when no previous state required
        // this.setState({
        //     qty: current_qty + 1,
        // });

        // form - 2 when previous state required
        this.setState((prevState) => {
            return {
                qty: prevState.qty + 1,
            }
        })
    }

    decreaseQuantity = () => {
        // Get the current quantity 
        // Decrease the value and re render the JSX
        this.setState((previousState) => {
            return {
                qty: previousState.qty - 1,
            }
        })
    }


    render() {
        const { title, price, qty } = this.state;

        return (
            <div className='cart-items'>
                <div className="left-block">
                    <img style={style.image} />
                </div>
                <div className="right-block">
                    <div style={{ fontSize: 25 }}>
                        {title}
                    </div>
                    <div style={{ color: '#777' }}>
                        {price}
                    </div>
                    <div style={{ color: '#777' }}>
                        Qty: {qty}
                    </div>
                    <div className='cart-item-action'>
                        {/* Buttons to alter quantity */}
                        <img alt="Add" className='action-icons' src="https://cdn-icons-png.flaticon.com/128/992/992651.png" onClick={this.increaseQuantity} />
                        <img alt="Remove" className='action-icons' src="https://cdn-icons-png.flaticon.com/128/1828/1828906.png" onClick={this.decreaseQuantity}/>
                        <img alt="Delete" className='action-icons' src="https://cdn-icons-png.flaticon.com/128/1214/1214428.png" />
                    </div>
                </div>
            </div>
        );
    }
}

// Defining the styles for component
const style = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        backgroundColor: '#ccc'
    }
}

export default CartItem;