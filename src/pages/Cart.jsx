import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { emptyCart, removeFromCart } from '../redux/slice/cartslice';



function Cart() {
  const cartArray = useSelector((state) => state.cartReducer)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [price,setPrice]=useState(0)

  const totalprice=()=>{
    if(cartArray.length>0)
       {
       setPrice(cartArray.reduce((a,b)=>a+b.price,0))}
       else {setPrice(0)}
  }

useEffect(() => {
  totalprice()
} ,[cartArray])

const handleCart=()=>{
  dispatch(emptyCart())
  alert( "Your shopping has been successed")
  navigate('/')
  
}

 
  return (

    <div style={{ "marginTop": "100px" }} >

      {

        cartArray.length > 0 ?
          <div className=' row'>
            <div className='col-lg-8 d-flex' >
              <div className='table shadow rounded'>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Product</th>
                    <th>Image</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    cartArray.map((product, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{product.title}</td>
                        <td><img width={'100px'} height={'100px'} src={product.thumbnail} alt="" /></td>
                        <td>{product.price}</td>
                        <td><Button className='btn' onClick={() => dispatch(removeFromCart(product.id))} variant="outline-info"><i class="fa-solid fa-trash" style={{ color: '#d22014' }}></i></Button></td>

                      </tr>
                    ))
                  }


                </tbody>
              </Table>
              </div>
            </div>

            <div className='col-lg-3'>
              <div className='border mt-3 rounded shadow p-2 w-100'>
                <h1 className='text-primary p-2'>Cart Summary</h1>
                <h4>Total Products: <span>{cartArray.length}</span></h4>
                <h4 className='text-danger fs-2 fw-bolder'>Total: <span>${price}</span></h4>
                <div className='d-grid'>
                  <button onClick={handleCart} className='btn btn-success mt-5'>Checkout Now</button>
                </div>
              </div>

            </div>
          </div>











          : <div style={{ height: '100vh' }} className='w-100 d-flex dlex-column align-items-center justify-content-center'>

            <img height={'500px'} src="https://assets.lottiefiles.com/custom_og/lf20_dkc8tvbm.png" alt="hhh" />
            <Link className='btn btn-warning rounded' style={{ textDecoration: 'none' }} to={'/'}>Back to Home</Link>
          </div>

      }
    </div>
  )
}

export default Cart