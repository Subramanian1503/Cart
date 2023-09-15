import './App.css';
import React from 'react'
import Cart from './Cart'
import NavBar from './NavBar'
import db from './index'

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      products: [
        // {
        //   id: 1,
        //   name: 'Iphone 13',
        //   qty: 2,
        //   price: 65000,
        //   img: 'https://www.myg.in/images/thumbnails/624/460/detailed/21/APPLE_iPhone_13-2.jpeg'
        // },
        // {
        //   id: 2,
        //   name: 'Iphone 14',
        //   qty: 1,
        //   price: 90000,
        //   img: 'https://assets.sangeethamobiles.com/product_img/6974/1663134480_JEm.jpg'
        // },
        // {
        //   id: 3,
        //   name: 'Iphone 14 pro max',
        //   qty: 2,
        //   price: 172000,
        //   img: 'https://storage.yandexcloud.net/the-istore.ru-backup/iblock/4e2/4e239fbb9015580fe2f81c70b6417422/a9aae5d7b6cc927f8728fa6a1ab18a30.jpeg'
        // }
      ],
      loading: true
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

  getCartCount = () => {
    const { products } = this.state;

    let count = 0;

    products.forEach((product) => {
      count += product.qty;
    })

    return count;
  }

  getTotalAmount = () => {

    const { products } = this.state;

    let totalAmount = 0;

    products.forEach((product) => {
      totalAmount += (product.qty * product.price);
    })

    return totalAmount;
  }

  componentDidMount() {
    // Get all the data from firebase
    // db.collection("products").get().then((snapshots) => {

    //   // Getting the products from snapshot
    //   const products = snapshots.docs.map((doc) => {
    //     console.log(doc);
    //     const data = doc.data();
    //     data["id"] = doc.id;
    //     return data;
    //   });

    //   // Set the products as state of the component
    //   this.setState({
    //     products,
    //     loading: false,
    //   })
    // })

    // Get all data from DB whenever there is a update in data of DB
    db.collection("products").onSnapshot((snapshots) => {

      // Getting the products from snapshot
      const products = snapshots.docs.map((doc) => {
        console.log(doc);
        const data = doc.data();
        data["id"] = doc.id;
        return data;
      });

      // Set the products as state of the component
      this.setState({
        products,
        loading: false,
      })
    })

  }

  addProduct = () => {

    //Get the collection from firestore to add products
    db.collection("products").add({
      img: "https://www.91-img.com/pictures/148162-v4-apple-iphone-15-pro-max-mobile-phone-large-10.jpg",
      name: "Iphone 15 pro max",
      price: 175000,
      qty: 1
    }).then((addedDocument) => {
      console.log("Product added successfully", addedDocument);
    }).catch((error) => {
      console.log("Error occured while trying to add products", error);
    })

  }

  render() {

    // Extarct required informations to populate in JSX
    const { products, loading } = this.state;
    const cartCount = this.getCartCount();
    const totalAmount = this.getTotalAmount();

    // Define JSX with extracted information from above
    return (
      <div className="App">
        <NavBar cartCount={cartCount} />
        <img onClick={this.addProduct} style={{height: '50px', width: '50px', marginLeft: '1450px', cursor:'pointer', borderRadius: '50%'}} src="https://w7.pngwing.com/pngs/68/239/png-transparent-number-computer-icons-plus-miscellaneous-game-plus.png"></img>
        {loading && <h1>Loading products..</h1>}
        <Cart
          products={products}
          increaseQuantity={this.handleIncreaseQuantity}
          decreaseQuantity={this.handleDecreaseQuantity}
          deleteProduct={this.handleDeleteProduct} />
        <div style={{ fontSize: 20, padding: 20 }}>
          TOTAL: {totalAmount}
        </div>
      </div>
    );
  }
}

export default App;
