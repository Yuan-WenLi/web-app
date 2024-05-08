import React from 'react'
import { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
//import Breadcrum from '../Components/breadcrums/Breadcrum'
import { ProductDisplay } from '../Components/ProductDisplay/ProductDisplay'

export const Product = () => {
  const {all_product} = useContext(ShopContex);
  const {productId} = useParams();
  const product = all_product.find((e)=> e.id === Number(productId));
  return (
    <ProductDisplay product={product} />
  )
}