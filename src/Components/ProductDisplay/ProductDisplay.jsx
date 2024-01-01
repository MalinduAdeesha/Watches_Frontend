import React, { useContext, useState } from 'react'
import star_icn from '../Assets/star_icon.png'
import star_dull_icn from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
  const { product } = props;
  //cart
  const {addToCart}=useContext(ShopContext);
  //swapimg
  const [selectedImage, setSelectedImage] = useState(product.image);

  const handleThumbnailClick = (newImage) => {
    setSelectedImage(newImage);
  };

  return (
    <div className='grid items-center grid-rows-2 lg:m-10  mb-10 lg:h-[70vh] lg:grid-cols-2 lg:mt-32 h-screen md:h-[80vh] md:mb-20'>
      <div className='flex justify-center gap-5 left'>
        <div className="prdisplay-img lg:w-[500px] w-[300px] lg:h-[500px] h-[300px] md:w-[400px] md:h-[400px] ">
          <img onClick={window.scrollTo(0,0)} className='main-img' src={selectedImage} alt="" />
        </div>

        <div className="grid w-12 h-12 mr-10 cursor-pointer mt-14 lg:mt-20 lg:h-20 lg:w-20 imgList">
          {product.image && (
            <img
              src={product.image}
              alt=""
              className='m-1 border-2 border-gray-500 rounded-lg w-15 h-15 active:border-orange-500'
              onClick={() => handleThumbnailClick(product.image)}
            />
          )}
          {product.image2 && (
            <img
              src={product.image2}
              alt=""
              className='m-1 border-2 border-gray-500 rounded-lg w-15 h-15 active:border-orange-500'
              onClick={() => handleThumbnailClick(product.image2)}
            />
          )}
          {product.image3 && (
            <img
              src={product.image3}
              alt=""
              className='m-1 border-2 border-gray-500 rounded-lg w-15 h-15 active:border-orange-500'
              onClick={() => handleThumbnailClick(product.image3)}
            />
          )}
          {product.image4 && (
            <img
              src={product.image4}
              alt=""
              className='m-1 border-2 border-gray-500 rounded-lg w-15 h-15 active:border-orange-500'
              onClick={() => handleThumbnailClick(product.image4)}
            />
          )}
        </div>
      </div>

        <div className='flex flex-col items-center right'>
          <div>
                 <h1 className='mb-8 text-xl font-bold lg:text-4xl md:text-4xl'>{product.name}</h1>
                 <p className='text-sm w-80 lg:text-base md:text-base'>Lorem ipsum dolor sit amet consectetur 
                     adipisicing elit. Voluptatum vel alias incidunt, illo pariatur
                     deserunt impedit est autem quis esse saepe, culpa repudiandae
                     nulla officiis mollitia. Animi accusamus quaerat Lorem ipsum dolor sit amet consectetur 
                     adipisicing elit. Voluptatum vel alias incidunt, illo pariatur
                     deserunt impedit est autem quis esse saepe, culpa repudiandae
                     nulla officiis mollitia. Animi accusamus quaerat maximemaxime.
                 </p>
                
                 <div className="rating">
                    
                     <div className="flex gap-2 m-10 prdisplay-right-star">
                         <img src={star_icn} alt="" />
                         <img src={star_icn} alt="" />
                         <img src={star_icn} alt="" />
                         <img src={star_icn} alt="" />
                         <img src={star_dull_icn} alt="" />
                         <p>(122)</p>
                     </div>
                 </div>
          </div>
          <div>
            <button onClick={()=>{addToCart(product.id)}} className='w-40 h-10 font-semibold bg-yellow-400 rounded-md active:bg-yellow-600'>ADD TO CART</button>
          </div>
        </div>
    </div>
  )
}

export default ProductDisplay