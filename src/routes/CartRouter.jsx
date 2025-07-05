
import { Navigate, Route, Routes } from 'react-router-dom'

import Layout from '../pages/layouts/Layout'
import Cart from '../pages/cart/Cart'


const CartRouter = () => {
  return (
    <div>
        <Routes>
        <Route path="" element={<Layout />}>
        <Route path='cart' element={<Cart></Cart>}/>
        {/* <Route path='create' element={<FormProducts></FormProducts>}/>
        <Route path=':id/edit' element={<FormEditProducts></FormEditProducts>}/>
        <Route path=':id/show' element={<ShowProducts></ShowProducts>}/>
        <Route path="/*" element={<Navigate to="" />} /> */}
        </Route>
        </Routes>
    </div>
  )
}

export default CartRouter