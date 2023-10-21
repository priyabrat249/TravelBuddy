import React from 'react'
import Slider from 'react-slick'
import ava01 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-2.jpg'
import ava03 from '../../assets/images/ava-3.jpg'

const Testimonial = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        autoplay: true,
        swipeToSlide: true,
        autoplaySpeed: 2000,
        slidesToShow:3,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return (
        

            <Slider {...settings}>
                <div className='testimonial py-4 px-3'>
                    <p>
                    TravelBuddy, your services inspire us to explore new horizons. Your dedication is our inspiration.                    </p>
                    <div className='d-flex align-items-center gap-4 mt-3'>
                        <img src={ava01} className='w-25 h-25 rounded-2' alt=''></img>
                        <div>
                            <h5 className='mb-0 mt3'>John Doe</h5>
                            <p>Customer</p>
                        </div>
                    </div>
                </div>
                <div className='testimonial py-4 px-3'>
                    <p>
We adore TravelBuddy for curating unforgettable adventures. Your passion fuels our wanderlust.</p>                    <div className='d-flex align-items-center gap-4 mt-3'>
                        <img src={ava02} className='w-25 h-25 rounded-2' alt=''></img>
                        <div>
                            <h5 className='mb-0 mt3'>John Doe</h5>
                            <p>Customer</p>
                        </div>
                    </div>
                </div>
                <div className='testimonial py-4 px-3'>
                <p>
                With TravelBuddy, we experience the world like never before. Your commitment to excellence shines.
                    </p>
                    <div className='d-flex align-items-center gap-4 mt-3'>
                        <img src={ava03} className='w-25 h-25 rounded-2' alt=''></img>
                        <div>
                            <h5 className='mb-0 mt3'>John Doe</h5>
                            <p>Customer</p>
                        </div>
                    </div>
                </div>
                <div className='testimonial py-4 px-3'>
                    <p>
                    TravelBuddy, your guides are like friends on our travels. Your warmth makes every trip special.</p>
                    <div className='d-flex align-items-center gap-4 mt-3'>
                        <img src={ava01} className='w-25 h-25 rounded-2' alt=''></img>
                        <div>
                            <h5 className='mb-0 mt3'>John Doe</h5>
                            <p>Customer</p>
                        </div>
                    </div>
                </div>
                <div className='testimonial py-4 px-3'>
                    <p>
                    We cherish TravelBuddy's role in creating our most cherished memories. Your love for travel is our joy.</p>
                    <div className='d-flex align-items-center gap-4 mt-3'>
                        <img src={ava02} className='w-25 h-25 rounded-2' alt=''></img>
                        <div>
                            <h5 className='mb-0 mt3'>John Doe</h5>
                            <p>Customer</p>
                        </div>
                    </div>
                </div>
                <div className='testimonial py-4 px-3'>
                    <p>
                    TravelBuddy, you turn our travel dreams into reality. Your commitment to excellence and love for exploration is a beacon of inspiration. </p>
                    <div className='d-flex align-items-center gap-4 mt-3'>
                        <img src={ava03} className='w-25 h-25 rounded-2' alt=''></img>
                        <div>
                            <h5 className='mb-0 mt3'>John Doe</h5>
                            <p>Customer</p>
                        </div>
                    </div>
                </div>
            </Slider>
            
    
    )
}

export default Testimonial