import './Card.css'
import mobile from '../assets/a.png'
import data from '../data.json'
import ImageSlider from './ImageSlider'
import { Link } from 'react-router-dom'

const Card = () => {
    const products = data.products
  return (
    products.map((product =>(
    <div className='card' key={product.id}>
<div className='brand'>
    <p>{product.category}</p>
    <p>{product.brand}</p>
</div>
<ImageSlider images={product.images} className='image'/>
<div className='content'>
    <p className='title'>{product.title}</p>
    <p className='dis'>{product.description}</p>
    <div className='price'>
        <p>Price:{product.price}$</p>
        <p>DiscountPrice:{product.price-(product.price*13/(100))}$</p>
    </div>
</div>
<div className='detail'>
    <p>Stock:{product.stock}</p>
    <Link to={`/product/${product.id}`}>
    <button className='btn'>Detail</button>
    </Link>
    <p>{product.rating}/5</p>
</div>
    </div>

  )))

        )
  
}

export default Card