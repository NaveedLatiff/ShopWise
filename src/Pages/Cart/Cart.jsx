import React from "react"
import './Cart.css'
import { addItem, delItem, getCartItems } from "../../Store/CartSlice"
import { useDispatch, useSelector } from "react-redux"

const Cart = () => {
    let dispatch=useDispatch()
    let cartProducts = useSelector(getCartItems)
    const subtotal = cartProducts.reduce((total, item) => {
        return total + (item.price * item.quantity)
    }, 0)
    return (
        <div className="cart-container">
            {cartProducts.length?
            <>
              {cartProducts.map(({ id, title, image, price, quantity }) => {
                return <div key={id} className={`cont-${id}`}>
                    <img className='pro-image' src={image} />
                    <p className='pro-title'>{title}</p>
                    <p className='price'>Price:${price}</p>
                    <div className='buttons'>
                        <button className='increItem' onClick={()=>{
                            dispatch(addItem({id,quantity:1}))
                        }}>+</button>
                        <span>{quantity}</span>
                        <button className='decreItem' onClick={() => {
                            dispatch(delItem({id}))
                        }}>-</button>
                    </div>
                    <p className='total-price'>TotalPrice:${(price * quantity).toFixed(2)}</p>
                </div>
            })}
             <div className="subtotal">
                        <h3>Cart Summary</h3>
                        <p>${subtotal.toFixed(2)}</p>
                    </div>
                </>
            :<div>Your Cart is Empty</div>}
        </div>
    )
}

export default Cart