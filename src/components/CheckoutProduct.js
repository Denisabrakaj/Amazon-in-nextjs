import React from 'react'
import Image from 'next/image'
import { StarIcon } from "@heroicons/react/24/solid"
import { useDispatch } from 'react-redux'
import { addToBasket, removeFromBasket } from '../slices/basketSlice';


function CheckoutProduct({
    id, 
    title,
    price,
    rating,
    description,
    category,
    image,
    hasPrime,
 }) {
    const dispatch = useDispatch ();
    const addItemToBasket = () => {
        const product = {  
            id, 
            title,
            price,
            rating,
            description,
            category,
            image,
            hasPrime, 
        }
        // push item to redux
        dispatch (addToBasket(product))
    }
    const removeItemFromBasket = () => {
        // remove the item from redux
     dispatch(removeFromBasket( {id}))
    }
    
  return (
    <div className='grid grid-cols-5 '>
        <Image src={image} height={200} width={200} objectFit='contain'/>

        {/* middle */}
        <div className='col-span-3 mx-5 px-5'>
            <p> {title}</p>
            <div className='flex '>
            {Array(rating).fill().map((_, i) => 
           <StarIcon className='h-5 text-yellow-500'/> 
          )}
            </div>
            <p className='text-xs my-2 line-clamp-3'>{description}</p>
            <div className='mb-5'>
                £ {price} 
            </div>  
            {hasPrime && (
                <div className='flex items-center space-x-2 -mt-5'>
                    <img className='w-12' src='https://links.papareact.com/fdw' alt=''/>
                    <p className='text-xs text-gray-500'>FREE Next-day Delivery</p> 
                </div>)
             }
        </div>
       {/* right add/remove button */}
       <div className='flex flex-col space-y-2 my-auto justify-self-end'>
            <button className='button mt-auto' onClick={addItemToBasket}> Add to Basket </button>
            <button className='button mt-auto' onClick={removeItemFromBasket}> Remove from Basket </button>
       </div>
    </div>
  )
}

export default CheckoutProduct