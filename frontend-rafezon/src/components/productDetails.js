import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { productDetails } from '../actions/productDetailsActions';


export default function ProductDetails(props) {

  const [Qty, setQty] = useState(1);

  const productDetailsState = useSelector(state => state.productDetails);
  const { error, loading, product } = productDetailsState;
  const productId = props.match.params.id;
  const dispatch = useDispatch();

  const hanldeAddToCart = () => {
    props.history.push(`/cart/${productId}?qty=${Qty}`)
  }

  useEffect(() => {
    // effect
    dispatch(productDetails(productId));
    return () => {
      // cleanup
    }
  }, [])


  return (
    <div>
      <div className="back-to-result">
        <Link to="/">Back to results</Link>
      </div>
      {loading ? <div> loading..... </div> :
        error ? <div> {error} </div> : (
          <div className="details">
            <div className="details-image">
              <img src={product.image} alt="product" />
            </div>
            <div className="details-info">
              <ul>
                <li>
                  <h4>{product.name}</h4>
                </li>
                <li>
                  {product.rating} Stars ({product.numReviews} Reviews)
          </li>
                <li>
                  Description:
            <div>
                    {product.description}
                  </div>
                </li>
              </ul>
            </div>
            <div className="details-action">
              <ul>
                <li>
                  Price: <b>${product.price}</b>
                </li>
                <li>
                  Status: {product.status > 0 ? "In Stock" : "Out of Stock"}
                </li>
                <li>
                  Qty: <select value={Qty} onChange={(e) => setQty(e.target.value)}>
                    {[...Array(product.countInStock).keys()].map(num =>
                      <option value={num + 1}>{num + 1}</option>
                    )}
                  </select>
                </li>
                <li>
                  {
                    product.countInStock > 0 && <button onClick={hanldeAddToCart} className="button primary"> Add to Cart</button>
                  }
                </li>
              </ul>
            </div>

          </div>
        )
      }
    </div>

  )
}
