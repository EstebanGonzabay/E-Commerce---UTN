import React from "react";
import "./DetailProduct.css";
import { useLocation } from "react-router-dom";

const DetailProduct = () => {
  const location = useLocation();
  const { title, price, description, image } = location.state || {};

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="detalle-producto">
      <div className="detalle-card">
        <img
          src={image || "/placeholder-image.jpg"}
          alt={title}
          className="detalle-img"
        />
        <div className="detalle-info">
          <h2 className="detalle-title">{title}</h2>
          <p className="detalle-description">{description}</p>
          <strong className="detalle-price">
            {price !== undefined ? `$${price.toFixed(2)}` : "Precio no disponible"}
          </strong>
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;
