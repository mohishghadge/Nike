import Nav from './components/Nav'
import {CustomerReviews,Footer,Services,Hero,PopularProducts,
        Subscribe,SpecialOffer,SuperQuality} from './sections'

function App() {


  return (
    <main className='relative'>
     <Nav/>
     <section className='xl:padding-l wide:padding-r padding-b'>
      <Hero/>
     </section>
     <section className='padding '>
      <PopularProducts/>
     </section>
     <section className='padding '>
      <SuperQuality/>
     </section>
     <section className='padding '>
     <Services/>
     </section>
     <section className='padding '>
      <SpecialOffer/>
     </section>
     <section className='bg-pale-blue padding'>
     <CustomerReviews/>
     </section>
     <section className='padding-x sm:py-32 w-full'>
     <Subscribe/>
     </section>
     <section className='bg-black padding-x padding-t pb-8'>
    <Footer/>
     </section>
    </main>
  )
}

export default App
