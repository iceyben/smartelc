import React from 'react'
import Landing from '../components/Landing'
import Card from '../components/Card'
import headphone from '../assets/headphone.png';
import iphone from '../assets/iphone.png';
import samsung from '../assets/samsung.png';
import smartwatches from '../assets/smartwatches.png';

const Layout = () => {
  return (
    <div className='lg:px-20 '>
      <Landing />
      <h3 className='text-center mt-10 mb-10 text-2xl font-bold uppercase'>Featured Categories</h3>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-auto justify-items-center w-full px-4">
        {[
          {
            image: headphone,
            alt: "Headphones",
            title: "Headphones",
            badge: "Featured",
            description: "High quality wireless headphones.",
          },
          {
            image: iphone,
            alt: "iPhone",
            title: "iPhone",
            badge: "New",
            description: "Latest model smartphone.",
          },
          {
            image: samsung,
            alt: "Samsung",
            title: "Samsung Phone",
            badge: "Sale",
            description: "Popular Android phone.",
          },
          {
            image: smartwatches,
            alt: "Smartwatch",
            title: "Smartwatch",
            badge: "Limited",
            description: "Modern smartwatch for fitness and more.",
          },
        ].map((card, idx) => (
          <Card
            key={idx}
            image={card.image}
            alt={card.alt}
            title={card.title}
            badge={card.badge}
            description={card.description}
          >
          </Card>
        ))}
        </div>
        <h3 className='text-center mb-6 text-2xl font-bold uppercase'>Featured Products</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10 mx-auto justify-items-center w-full px-4">
        {[
          {
            image: headphone,
            alt: "Headphones",
            title: "Headphones",
            badge: "Featured",
            description: "High quality wireless headphones.",
          },
          {
            image: iphone,
            alt: "iPhone",
            title: "iPhone",
            badge: "New",
            description: "Latest model smartphone.",
          },
          {
            image: samsung,
            alt: "Samsung",
            title: "Samsung Phone",
            badge: "Sale",
            description: "Popular Android phone.",
          },
          {
            image: smartwatches,
            alt: "Smartwatch",
            title: "Smartwatch",
            badge: "Limited",
            description: "Modern smartwatch for fitness and more.",
          },
        ].map((card, idx) => (
          <Card
            key={idx}
            image={card.image}
            alt={card.alt}
            title={card.title}
            badge={card.badge}
            description={card.description}
          >
            <button className="btn btn-primary">Buy Now</button>
          </Card>
        ))}
        </div>
    </div>
  )
}

export default Layout
