import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Product.css'

const Product = (props) => {
    const {addToCartItem, product} = props;
    const {img, name, price, seller, ratings} = product;
    return (
        <div className='product'>
            <div>
                <div className='image-container'>
                    <img src={img} alt=""></img>
                </div>
                <div className='product-detail'>
                    <h3>{name}</h3>
                    <h5 className='porduct-price'>Price: ${price}</h5>
                    <div className='seller-rating'>
                    <p>Manufacturer: {seller} </p>
                    <p>Ratings: {ratings} star</p>
                    </div>
                    <div className='cart-btn'>
                        <button onClick={() => addToCartItem(product)}>Add to Cart <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;