module.exports = {
  reactStrictMode: true,
  experimental:{appDir: true},
    images : {
        // domains: ['links.papareact.com', 'fakestoreapi.com']
        domains: ['fakestoreapi.com', 'links.papareact.com'],
    },
    env: {
      stripe_public_key: process.env.STRIPE_PUBLIC_KEY
    }
}