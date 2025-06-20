import { collection, getDocs } from 'firebase/firestore';
import database from '../../config/firebase';


// Obtener todos los productos desde Firebase Firestore
export const getProducts = async () => {
  try {
    const productsCollection = collection(database, 'products');
    const snapshot = await getDocs(productsCollection);

    const products = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    }));

    return products;
  } catch (error) {
    console.error('Error al obtener productos desde Firestore:', error);
    return []; 
  }
};

// Obtener un producto específico por ID
export const getProductById = async (product_id) => {
  const products = await getProducts();
  return products.find(product => product.id === product_id);
};
