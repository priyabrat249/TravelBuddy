import React from 'react'
import { Container, Row, Col, } from 'reactstrap'
import Subtitle from '../shared/Subtitle'
import NewsLetter from '../shared/NewsLetter'

import MasonryImageGallery from '../components/Image-Gallery/MasonryImageGallery'
import '../styles/Home.css'
const Gallery = () => {
    return (
      <>
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
        <NewsLetter/>

        </>    
  )
}

export default Gallery