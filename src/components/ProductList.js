import React from 'react';
import productList from '../productList';
import ProductCard from './ProductCard'

const ProductList = () => {
  return (
    productList.map((product) => <ProductCard product={product}/>)
  )
}


export default ProductList;