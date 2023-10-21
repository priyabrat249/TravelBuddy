import React from 'react'
import Masonry,{ ResponsiveMasonry } from 'react-responsive-masonry';
import galleryImg from '../../assets/gallery_img';
const MasonryImageGallery = () => {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 768: 3, 992: 4}}>
        <Masonry gutter='1rem'>
            {
                galleryImg.map((item, index) => (
                    <img
                        className='masonry__img'
                        src={item}
                        key={index}
                        alt=''
                        style={{ 'width': '100%', 'display': 'block', 'borderRadius': '10px' }} />
                ))
            }
        </Masonry>
    </ResponsiveMasonry>
  )
}

export default MasonryImageGallery