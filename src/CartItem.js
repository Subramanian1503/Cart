import React from 'react'

class CartItem extends React.Component {

    render() {
        return (
            <div className='cart-items'>
                <div className="left-block">
                    <img style={style.image} />
                </div>
                <div className="right-block">
                    <div style={{ fontSize: 25 }}>
                        Phone
                    </div>
                    <div style={{ color : '#777' }}>
                        999
                    </div>
                    <div style={{ color: '#777'}}>
                        Qty: 4
                    </div>
                    <div>
                        {/* Buttons to alter quantity */}
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