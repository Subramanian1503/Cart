import React from 'react'

class CartItem extends React.Component {

    // Defining the constructor to maintain state for the component
    constructor() {
        super();
        this.state = {
            title: 'Phone',
            price: 999,
            qty: 4,
            img: ''
        }
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
                        <img alt="Add" className='action-icons' src="https://cdn-icons-png.flaticon.com/128/992/992651.png" />
                        <img alt="Remove" className='action-icons' src="https://cdn-icons-png.flaticon.com/128/1828/1828906.png" />
                        <img alt="Delete" className='action-icons' src="https://cdn-icons-png.flaticon.com/128/1828/1828906.png" />
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