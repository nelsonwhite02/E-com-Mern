import './Products.css';
import {Link} from 'react-router-dom';

const img = require('../image/phone.jpg');
const Product = ({ imageUrl, description, price, name, productId }) => {
   
    return (
        <div className="hproductscreen">
            <img src={imageUrl} alt={name} />
           <div className="product__info">
           <p className="info__name">{name}</p>
           <p className="info__description">{description.substring(0, 100)}...</p>
           <p className="info__price">${price}</p>
           <Link to={`/product/${productId}`} className="info__button">View
                
                </Link>
           </div>
        </div>
    )
}

export default Product;