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

import Head from 'next/head';
import ProductCarousel from '../components/Carousel';
import Intro from '../components/Intro';
import Intro2 from '../components/Intro2';
import RandomProducts from '../components/RandomProducts';

export default function Home({ products }) {
    return (
        <>
            <Head>
                <title>FakeStore - Your one-stop-shop for fake products</title>
            </Head>
            <div>
                <Intro />
                <ProductCarousel products={products} />
                <Intro2 />
                <RandomProducts />
            </div>
        </>
    );
}

export async function getServerSideProps() {
    const res = await fetch('https://fakestoreapi.com/products');
    const products = await res.json();

    return {
        props: {
            products,
        },
    };
}
