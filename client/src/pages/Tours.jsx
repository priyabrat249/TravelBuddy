import React,{useState,useEffect} from 'react'
import CommonSection from '../shared/CommonSection'
import TourCard from '../shared/TourCard'
import NewsLetter from '../shared/NewsLetter'
import SearchBar from '../shared/SearchBar'
import tours from '../assets/data/tours'

import '../styles/Tours.css'
import { Container ,Row,Col} from 'reactstrap'

const Tours = () => {
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  
  useEffect(() => {
    const pages = Math.ceil(5 / 2);
    setPageCount(pages);
  }, [page]);
  return (
    <>
      <CommonSection title={'All Tours'}/>

      <section>
        <Container>
          <Row>
            <SearchBar />
          </Row>
        </Container>
      </section>
      <section className='pt-0'>
        <Container>
          <Row>
            {
              tours.map((item, index) => <Col key={item.id} className='mb-4' lg='3'><TourCard tour={item} /></Col>)
            }
            <Col lg='12'>
              <div className='pagination d-flex align-items-center justify-content-center mt-4 gap-3'>
                {
                  [...Array(pageCount).keys()].map(number => (
                    <span className={page===number ?'active_page':''} key={number} onClick={()=>setPage(number)}>{number+1}</span>
                  ))
                }
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <NewsLetter/>
    </>
  )
}

export default Tours