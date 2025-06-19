export const getProducts = async() =>{

  try {
    const response = await fetch('/api/products.json');
    if (!response.ok) {
      throw new Error('Error al obtener los productos');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

export const getProductById = async (product_id) => {
  const products = await getProducts();
  return products.find(product => product.id === product_id);
};