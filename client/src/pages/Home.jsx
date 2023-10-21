import React from 'react'
import { Container, Row, Col, } from 'reactstrap'
import heroimg1 from '../assets/images/hero-img01.jpg'
import heroimg2 from '../assets/images/hero-img02.jpg'
import herovdo from '../assets/images/hero-video.mp4'
import worldimg from '../assets/images/world.png';
import Subtitle from '../shared/Subtitle'
import ServiceList from '../services/ServiceList'
import SearchBar from '../shared/SearchBar'
import Featuredtourlist from '../components/Featured-Tour/Featuredtourlist'
import experienceimg from '../assets/images/experience.png'
import MasonryImageGallery from '../components/Image-Gallery/MasonryImageGallery'
import Testimonial from '../components/Testimonials/Testimonial'
import NewsLetter from '../shared/NewsLetter'
import '../styles/Home.css';
const Home = () => {
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg='6'>
              <div className='hero__content'>
                <div className='hero__subtitle d-flex align-items-center'>
                  <Subtitle subtitle={'Know Before You Go'} />
                  <img src={worldimg} alt=''></img>
                </div>
                <h1>Travelling opens the door to create{" "}<span className='highlights'>memories</span></h1>
                <p>
                Traveling is the key to unlocking a treasure trove of unforgettable memories. It's a magical journey where moments become timeless keepsakes. Exploring new destinations, cultures, and landscapes is a canvas upon which we paint the vibrant strokes of our experiences. Whether it's the awe-inspiring vistas, the laughter shared with newfound friends, or the taste of exotic cuisines, each adventure leaves an indelible mark on our hearts. These memories are the jewels in the crown of our life's story, weaving a tapestry of joy and discovery. With every trip, we open doors to a world of precious moments that enrich our souls and endure through time.                </p>
              </div>
            </Col>
            <Col lg='2'>
              <div className='hero__img-box'>
                <img src={heroimg1} alt=''></img>
              </div>
            </Col>
            <Col lg='2'>
              <div className='hero__img-box mt-4'>
                <video src={herovdo} alt='' controls></video>
              </div>
            </Col>
            <Col lg='2'>
              <div className='hero__img-box mt-5'>
                <img src={heroimg2} alt=''></img>
              </div>
            </Col>
          </Row>
          <SearchBar/>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg='3'>
              <h5 className='services__subtitle'>What we serve</h5>
              <h2 className='services__title'>We offer our best services</h2>
            </Col>
            <ServiceList/>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg='12' className='mb-5'>
            <Subtitle subtitle={'Explore'} />
            <h2 className='featured__tour-title'>Our Featured Tours</h2>
            </Col>
           <Featuredtourlist/>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row className='justify-content-between'>
            <Col lg='6'>
              <div className='experiance d-flex align-items-center'>
                  <Subtitle subtitle={'Experiance'} />
              </div>
                <h2 className='experiance__title'>With our all experience we will serve you</h2>
                <p>
                With our wealth of experience and expertise, we are dedicated to serving you with the utmost care and precision. Our journey is marked by the wisdom of time, a journey that has honed our skills and sharpened our commitment. We understand that every interaction is unique, and we embrace the opportunity to tailor our services to your distinct needs. Rest assured, our experience is your assurance of a personalized, seamless, and exceptional experience that transcends expectation.
              </p>
              <Row>
                <Col><span className='experiance__num'>12K+</span><h6 className=' mt-3 experiance__text'>Successful trips</h6></Col>
                <Col><span className='experiance__num'>2K+</span><h6 className='mt-3 experiance__text'>Regular clients</h6></Col>
                <Col><span className='experiance__num'>15+</span><h6 className='mt-3 experiance__text'>Years experience</h6></Col>
              </Row>
            </Col>
            <Col lg='5'>
              <img src={experienceimg} alt=''></img>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <Subtitle subtitle={'Gallery'}/>
                <h2 className='gallery__title'>Visit our customers tour gallery</h2>
            </Col>
            <Col lg='12'>
                <MasonryImageGallery/>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <Subtitle subtitle={'Fans love'}/>
            </Col>
            <Col lg='12'>
              <h2 className='testimonial__title'>What our fans say about us</h2>
            </Col>
            <Col lg='12'>
              <Testimonial/>
            </Col>
          </Row>
        </Container>
      </section>

      <section className='newsletter'>
        <NewsLetter/>
      </section>
    </>
  )
}

export default Home