// this is backend code  :)
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async (req, res) => {
    const {items, email} = req.body;
console.log(items, email);
    const transformedItems = items.map((item )=> ({
        
        quantity: 1,
        price_data: {
            currency: 'gbp',
            unit_amount: item.price * 100,
            product_data:{
                name: item.title,
                description: item.description,
                images: [item.image]
            },
        },
    }));
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        // shipping_options: ['shr_1MdEzyH70cPhf5nJUY1jalmH'],
        shipping_address_collection: {
            allowed_countries: ['GB', 'US', 'CA']
        },
        line_items: transformedItems,
        mode: 'payment',
        success_url: `${process.env.HOST}/success`,
        cancel_url: `${process.env.HOST}/checkout`,
        metadata: {
            email,
            images: JSON.stringify(items && items.map(item => item.image))
        }
    });
    res.status(200).json({ id: session.id})
}