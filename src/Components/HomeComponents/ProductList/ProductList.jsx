import React, { useEffect, useState } from 'react'
import ProductCard from '../ProductCard/ProductCard'
import { getProducts } from '../../Services/products'
import './ProductList.css'

const ProductList = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const getProductList = async () => {
    try {
      const response = await getProducts()
      if(response) {
        setProducts(response)
      } else {
        setError('No se encontraron productos')
      }
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    // Simular carga con timeout solo para demostración
    const timer = setTimeout(() => {
      getProductList()
    }, 1500)
    
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <h2>Cargando catálogo...</h2>
      </div>
    )
  }

  if (error) {
    return (
      <div className="error-container">
        <div className="error-icon">⚠️</div>
        <h2>{error}</h2>
        <button onClick={getProductList} className="retry-button">
          Reintentar
        </button>
      </div>
    )
  }

  return (
    <section className="marketplace-section">
      <h1 className="marketplace-title">Nuestros Productos</h1>
      <div className="products-grid">
        {products.map(product => (
          <ProductCard 
            key={product.id}
            {...product}
          />
        ))}
      </div>
    </section>
  )
}

export default ProductList