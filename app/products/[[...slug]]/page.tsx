import React from 'react'
interface Product { params : {slug : string[]}}
const ProductPage = ({params : {slug}} : Product) => {
  return (
    <div>ProductPage {slug}</div>
  )
}
export default ProductPage;