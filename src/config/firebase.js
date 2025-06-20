
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCN_IGjwi3hopbZdONBuSsvYUaFApnu9NU",
  authDomain: "productos-ecommerce-utn.firebaseapp.com",
  projectId: "productos-ecommerce-utn",
  storageBucket: "productos-ecommerce-utn.firebasestorage.app",
  messagingSenderId: "308929384857",
  appId: "1:308929384857:web:fdd0d9fac6b06ebc42c308"
};

const app = initializeApp(firebaseConfig);

const database = getFirestore(app)

export default database

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCN_IGjwi3hopbZdONBuSsvYUaFApnu9NU",
//   authDomain: "productos-ecommerce-utn.firebaseapp.com",
//   projectId: "productos-ecommerce-utn",
//   storageBucket: "productos-ecommerce-utn.firebasestorage.app",
//   messagingSenderId: "308929384857",
//   appId: "1:308929384857:web:fdd0d9fac6b06ebc42c308"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);