import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
// import axios from "axios";
import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../actions/productActions';

export default function HomeScreen() {

  const productList = useSelector(state => state.productsList);

  const { loading, error, products } = productList;

  const dispatch = useDispatch();

  useEffect(() => {
    // effect 

    dispatch(listProducts());

    return () => {
      // cleanup
    }
  }, [])
  return (
    loading ? <div>loading....</div> :
      error ? <div>Error: {error}</div> :
        <ul className="products">
          {
            products.map(product =>
              <li key={product._id}>
                <div className="product">
                  <Link to={`/product/${product._id}`}>
                    <img className="product-image" src={product.image} alt="product" />
                  </Link>
                  <div className="product-name">
                    <Link to={`/product/${product._id}`}>{product.name}</Link>
                  </div>
                  <div className="product-brand">{product.brand}</div>
                  <div className="product-price">${product.price}</div>
                  <div className="product-rating">{product.rating} Stars ({product.numReviews} review)</div>
                </div>
              </li>)
          }

        </ul>
  )
}
