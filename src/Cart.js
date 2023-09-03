import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component {

    constructor() {
        super();
        this.state = {
            products: [
                {
                    id: 1,
                    name: 'Iphone 13',
                    qty: 2,
                    price: 65000,
                    img: 'https://www.myg.in/images/thumbnails/624/460/detailed/21/APPLE_iPhone_13-2.jpeg'
                },
                {
                    id: 2,
                    name: 'Iphone 14',
                    qty: 1,
                    price: 90000,
                    img: 'https://assets.sangeethamobiles.com/product_img/6974/1663134480_JEm.jpg'
                },
                {
                    id: 3,
                    name: 'Iphone 14 pro max',
                    qty: 2,
                    price: 172000,
                    img: 'https://storage.yandexcloud.net/the-istore.ru-backup/iblock/4e2/4e239fbb9015580fe2f81c70b6417422/a9aae5d7b6cc927f8728fa6a1ab18a30.jpeg'
                }
            ]
        }
    }

    handleIncreaseQuantity = (product) => {

        // Get all the products 
        const { products } = this.state;

        // Find the index of the requested product from the products
        const index = products.indexOf(product);

        // Increase the quantity of that product
        products[index].qty += 1;

        // Set the state of that products
        this.setState({
            products: products
        });
    }

    handleDecreaseQuantity = (product) => {

        if (product.qty > 0) {
            // Get all the products 
            const { products } = this.state;

            // Find the index of the requested product from the products
            const index = products.indexOf(product);

            // Decrease the quantity of that product
            products[index].qty -= 1;

            // Set the state of that products
            this.setState({
                products: products
            });
        }
    }

    handleDeleteProduct = (productId) => {

        // Get the total product lists
        const { products } = this.state;

        // Filter the products that are not having the argument product id
        const filteredProducts = products.filter((product) => product.id !== productId);

        // Set the filtered products as total products using state
        this.setState({
            products: filteredProducts,
        })
    }

    render() {
        // Find all the required information using javascript
        const { products } = this.state;

        // return a JSX code which will gets converted as Html using Babel
        return (
            <div className="cart">
                {
                    products.map((product) => {
                        return (
                            <CartItem
                                key={product.id}
                                product={product}
                                increaseQuantity={this.handleIncreaseQuantity}
                                decreaseQuantity={this.handleDecreaseQuantity}
                                deleteProduct = {this.handleDeleteProduct} />
                        )
                    }
                    )
                }
            </div>
        );
    }
}

export default Cart;