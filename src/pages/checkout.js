import React from 'react'
import { useSelector } from 'react-redux'
import Header from '../components/Header'
import CheckoutProduct from '../components/CheckoutProduct'
import { selectItems, selectTotal } from '../slices/basketSlice'
import { useSession } from "next-auth/react"
import { loadStripe } from '@stripe/stripe-js/pure'
import axios from 'axios'; 
const stripePromise = loadStripe(`${process.env.stripe_public_key}`);

function Checkout() {
    const items = useSelector(selectItems)
    const total = useSelector(selectTotal)
    const { data: session } = useSession();

    const createCheckoutSession = async () => {
        const stripe = await stripePromise;

        // call the backend to create a checkout session
        const checkoutSession = await axios.post("/api/create-checkout-session", 
        {
            items: items,
            email: session.user.email,
        });

        // redirect user to stripe checkout
        const result = await stripe.redirectToCheckout({
            sessionId: checkoutSession.data.id
        })

        if(result.error) {
            // alert(result.error.message)
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        }
        
    }
  return (
    <div className='bg-gray-100'>
        <Header/>

        <main className='lg:flex max-w-screen-2xl mx-auto'>

            {/* left  */}
            <div className='flex-grow m-5 shadow-sm'>
                <img 
                    src='https://links.papareact.com/ikj'
                    width={1020}
                    height={250}
                    objectfit="contain"
                    className=''/>

                <div className='flex flex-col p-5 space-y-10 bg-white'>
                    <h1 className='text-3xl border-b pb-4'>
                        {items.length === 0 ? 'Your Amazon Basket is empty' : 'Shopping Basket'}
                    </h1>

                    {items.map((item, i)=> 
                        <CheckoutProduct
                        key={i}
                        id={item.id}
                        title={item.title}
                        rating={item.rating}
                        price={item.price}
                        description={item.description}
                        category={item.category}
                        image={item.image}
                        hasPrime={item.hasPrime}
                        />
                     )}

                </div>

            </div>

            {/* right */}
            <div className='flex flex-col bg-white p-10 shadow-md'>
                {items.length > 0 && (
                    <>
                        <h2> Subtotal ({items.length} items):
                            <span> £{total} </span>
                        </h2>
                        <button 
                            role="link"
                            onClick={createCheckoutSession}
                            disabled={!session}
                            className={`button mt-2 ${!session && 
                            'from-gray-300 to-gray-500 border-gray-200 text-gray-200 cursor-not-allowed' } `}>
                            {!session ? 'Sign in to checkout' : 'Proceed to checkout '}
                        </button>
                    </>
                )}
            </div>
        </main>
    </div>
  )
}

export default Checkout
