import React from 'react'


const NavBar = (props) => {
    // Get required informations to render the Nav bar
    const { cartCount } = props;

    // Return the JSX code for the navbar structure which can be converted into javascript object represents HTML using Babel
    return (
        // navbar component
        <div style={styles.navBar}>

            {/* cart icon container */}
            <div style={styles.cartIconContainer}>

                {/* Cart icon */}
                <img style={styles.cartIcon} src="https://cdn-icons-png.flaticon.com/128/1170/1170678.png" alt="Cart_icon"></img>

                {/* Number of quantities in cart */}
                <span style={styles.cartCount}>{cartCount}</span>

            </div>
        </div>
    )
}

export default NavBar;

const styles = {
    navBar: {
        height: 70,
        background: "#4267b2",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: 'center'
    },
    cartIconContainer: {
        position: "relative",
    },
    cartIcon: {
        height: 32,
        marginRight: 20,
    },
    cartCount: {
        background: 'yellow',
        borderRadius: '50%',
        padding: '4px 8px',
        position: 'absolute',
        right: 0,
        top: -9,
    }
}