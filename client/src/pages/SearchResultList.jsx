import React, { useState } from 'react'
import CommonSection from '../shared/CommonSection';
import TourCard from '../shared/TourCard'
import NewsLetter from '../shared/NewsLetter'
import '../styles/Tours.css'
import { Container ,Row,Col} from 'reactstrap'
import { useLocation } from 'react-router-dom';
const SearchResultList = ({ tours }) => {
  
  const location = useLocation();
  const [data] = useState(location.state);
  console.log(data);
  return (
    <>
      <CommonSection title={'Tour Search Result'} />
      <section className='mt-4 pt-0'>
        <Container>
          <Row>
            {
              data.length===0? <h4 className='text-center'>No tour found</h4>:data.map((item, index) => <Col key={item._id} className='mb-4' lg='3'><TourCard tour={item} /></Col>)
            }

          </Row>
        </Container>
      </section>
      <NewsLetter/>
    </>
  )
}

export default SearchResultList