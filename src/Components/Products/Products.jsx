import React, { useEffect, useState } from 'react'
import './Products.css'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { loadingFailed, loadingProducts, showProducts } from '../../Store/productSlice'
import { addItem } from '../../Store/CartSlice'

const Products = () => {
    let [desc,setDesc]=useState([])
    let dispatch=useDispatch()
    let products=useSelector(store=>store.products)
    
    useEffect(() => {
        
        async function fetch() {
                try{
                dispatch(loadingProducts())
                let response = await axios.get("https://fakestoreapi.com/products")
                dispatch(showProducts(response.data))
                
            }
            catch(error){
                dispatch(loadingFailed())
            }
        }
        fetch()
    }, [])

     function toggleDescription(id) {
        setDesc(prev => 
            prev.includes(id)
                ? prev.filter(i => i !== id) 
                : [...prev, id]              
        )
    }
    return (
        <div className='products-cont'>
            {products.error?<div className='error'>Something Went Wrong...</div>:""}
            {products.loading?<div className='loader'></div>:products.list.map(({ id, title, description, price, image, rating }) => {
                return (
                    <div className='product' key={id}>
                        <div className='product-image'>
                            <img src={image} alt={title} />
                        </div>
                        <div className='product-info'>
                            <h3 className='product-title'>{title}</h3>
                            <p onClick={()=>{
                                toggleDescription(id)
                            }} className='product-description'>
                                { desc.includes(id)? description:description.substring(0,30) + '......' 
                                }
                            </p>
                            <div className='product-rating'>
                                <span className='stars'>★★★★☆</span>
                                <span className='rating-count'>({rating.count})</span>
                            </div>
                            <div className='product-footer'>
                                <span className='product-price'>${price}</span>
                                <button className='add-to-cart' onClick={()=>{
                                    dispatch(addItem({id,quantity:1}))
                                }}>Add to Cart</button>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Products