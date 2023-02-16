import React from 'react'
import Product from './Product'

function ProductFeed({products}) {
  return (
    <div className='grid grid-flow-row-dense sm: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto'>
        {products.slice(0, 4).map(({id, title, description, category, price, image}) => (
           <Product 
           key={id}
           id={id}
           price={price}
           title={title}
           description={description}
           category={category}
           image= {image}/>
        ))}
        <img className='md:col-span-full m-5 p-10' src='https://links.papareact.com/dyz' alt='' />
        <div className='md: col-span-2'>
        {products.slice(4, 5).map(({id, title, description, price, category, image}) => (
           <Product 
           key={id}
           price={price}
           id={id}
           title={title}
           description={description}
           category={category}
           image= {image}/>
        ))}
        </div>
        {products.slice(5, products.length).map(({id, title, price, description, category, image}) => (
           <Product 
           key={id.toString()}
           id={id}
           price={price}
           title={title}
           description={description}
           category={category}
           image= {image}/>
        ))}
    </div>
  )
}

export default ProductFeed