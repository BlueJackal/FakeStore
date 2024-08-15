/********************************************************************************
*  WEB422 – Assignment 4
*  
*  I declare that this assignment is my own work in accordance with Seneca's 
*  Academic Integrity Policy: 
*  
*  https://www.senecapolytechnic.ca/about/policies/academic-integrity-policy.html 
*  `
*  Name: Christopher Simon   Student ID: 123382228   Date: July 13th, 2024
*
********************************************************************************/


import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/Layout';
import { CartProvider } from '../contexts/CartContext';
import { AuthProvider } from '../contexts/AuthContext';

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <CartProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CartProvider>
    </AuthProvider>
  );
}

export default MyApp;