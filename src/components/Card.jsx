import React from 'react'

const Card = ({
  image = "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
  alt = "Shoes",
  title = "Card Title",
  badge = "Featured",
  description = "A card component has a figure, a body part, and inside body there are title and actions parts",
  children,
}) => {
  return (
  <div className="card bg-gray-500 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg shadow-sm mb-10 ">
      <figure>
        <img src={image} alt={alt} className='h-70  '/>
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          {badge && <div className="badge badge-secondary">{badge}</div>}
        </h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Card
