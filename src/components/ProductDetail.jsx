import React from 'react';
import data from '../data.json'
import "./ProductDetail.css"
import ImageSlider from './ImageSlider'

const ProductDetail = ({ match }) => {
  const productId = parseInt(match.params.id);
  const product = data.products.find((p) => p.id === productId);

  
  return (
    <>
    <div className='container'>

      <div className='information'>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <h3>Final Price:{product.price-(product.price*13/(100))}$</h3>
      </div>

      </div>
    </>
  );
}

export default ProductDetail;
