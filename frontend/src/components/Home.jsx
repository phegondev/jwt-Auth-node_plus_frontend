import React, { useEffect, useState } from "react";
import axios from 'axios'

const Home = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {

        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:5500/products');
                setProducts(response.data);
            } catch (err) {
                console.log(err)
            }
        }

        fetchProducts();
    }, [])

    return(
        <div className="home-container">
            <h2>Our Products</h2>
            <div className="product-list">
                {products.map((product, index)=>(
                    <div className="product-item" key={index}>
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <p className="amount">${product.amount}</p>
                    </div>
                ))}
                
            </div>
        </div>
    )

}
export default Home;