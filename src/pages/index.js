import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import ProductFeed from "../components/ProductFeed";

export default function Home({ products }) {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon 2.0</title>
      </Head>
       {/* <Header/> */}
       <Header/>

       <div className="max-w-screen-2xl mx-auto">

         {/* banner */}
        <Banner/>

        {/* products */}
        <ProductFeed products={products}/>
    
       </div>
       
       {/* My footer */}
      <div className="grid place-items-center mt-10">
        <p className="mt-24">Built with 💙 by 
          <a href="https://its-denas-portofolio.pages.dev/"   className="text-blue-400 font-bold"> Denisa Brakaj </a> 
           with the help of   
          <a href="https://www.youtube.com/watch?v=DF68MNDxVwU"   className="text-blue-400 font-bold"> Sonny Sangha </a>
          video tutorials
        </p>
        <p>Tech stack: Next.js / Tailwind CSS / Redux / Firebase / NextAuth</p>
      </div>
    </div>
  );
}

export async function getServerSideProps (context)  {
  const products = await fetch('https://fakestoreapi.com/products').then
  ((res) => res.json());

return {
  props: {
    products,
  }
}
}