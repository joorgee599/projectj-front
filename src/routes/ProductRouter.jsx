import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Products from '../pages/products/Products'
import Layout from '../pages/layouts/Layout'
import FormProducts from '../components/products/FormProducts'
import FormEditProducts from '../components/products/FormEditProducts'
import ShowProducts from '../components/products/ShowProducts'

const ProductRouter = () => {
  return (
    <div>
        <Routes>
        <Route path="" element={<Layout />}>
        <Route path='products' element={<Products></Products>}/>
        <Route path='create' element={<FormProducts></FormProducts>}/>
        <Route path=':id/edit' element={<FormEditProducts></FormEditProducts>}/>
        <Route path=':id/show' element={<ShowProducts></ShowProducts>}/>
        <Route path="/*" element={<Navigate to="" />} />
        </Route>
        </Routes>
    </div>
  )
}

export default ProductRouter