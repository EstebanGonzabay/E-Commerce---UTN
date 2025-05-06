import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './ProductCard.css'

const ProductCard = ({ id, title, price, description, image, category }) => {
  const [isBought, setIsBought] = useState(false)

  const handleClickBuyButton = (e) => {
    e.preventDefault()
    alert(`¡Gracias por comprar ${title}!`)
    setIsBought(true)
  }

  return (
    <div className="product-card">
      <Link to={`/login`} className="product-link">
        <div className="product-image-container">
          <img 
            src={image || '/placeholder-image.jpg'} 
            alt={title}
            className="product-image"
          />
          {category && (
            <span className="product-category-badge">{category}</span>
          )}
        </div>

        <div className="product-info">
          <h3 className="product-title">{title}</h3>
          <p className="product-description">{description}</p>
          
          <div className="product-meta">
            <span className="product-price">${price.toFixed(2)}</span>
            {isBought ? (
              <button className="buy-button bought" disabled>
                ✓ Comprado
              </button>
            ) : (
              <button 
                className="buy-button"
                onClick={handleClickBuyButton}
              >
                Comprar
              </button>
            )}
          </div>
        </div>
      </Link>
    </div>
  )
}

export default ProductCard