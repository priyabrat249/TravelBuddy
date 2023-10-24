import React, {useRef,useState,useEffect} from 'react'
import '../styles/Tour-Details.css';
import { Container,Row,Col,Form,ListGroup } from 'reactstrap';
import { useParams } from 'react-router-dom';
import tours from '../assets/data/tours';
import avatar from '../assets/images/avatar.jpg';
import Booking from '../components/Booking/Booking';
const TourDetails = () => {
  const { id } = useParams();
  const tour = tours.find(tour => tour.id === id);
  const {
    title,
    city,
    distance,
    price,
    maxGroupSize,
    desc,
    address,
    reviews,

    photo,
    featured } = tour;
  // console.log(tour);
  const totalRating = reviews?.reduce((acc, item) => acc + item.rating, 0);

  var avgRating = totalRating === 0 ? '' : totalRating === 1 ? totalRating : (totalRating / reviews?.length).toFixed(1);
  const options = { day: 'numeric', month: 'long', year: 'numeric' };

  const reviewMsgRef = useRef('');
  console.log(reviewMsgRef);
  const [tourRating, setTourRating] = useState(1)
  const HandleSubmit = (e) => {
    e.preventDefault();
    const reviewText = reviewMsgRef.current.value;
    
  }
  
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg='8'>
              <div className='tour__content'>
                <img src={photo} alt="" />
                <div className='tour__info'>
                  <h2>{title}</h2>
                  <div className='d-flex align-items-center gap-5'>
                    <span className='tour__rating d-flex align-items-center gap-1'>
                      <i style={{'color':'var(--secondary-color)'}}class="ri-star-fill"></i>{avgRating === 0 ? null : avgRating}
                    {totalRating===0? "Not rated":<span>({reviews ?.length})</span>}
                    </span>
                    <span>
                    <i class="ri-map-pin-user-fill"></i>{address}
                    </span>
                    
                  </div>
                  <div className='tour__extra-details'>
                    <span><i class="ri-map-pin-2-line"></i>{city}</span>
                    <span>
                    <i class="ri-map-pin-time-line"></i>{distance} K/m
                    </span>
                      <span><i class="ri-money-dollar-circle-line"></i>${price}/per person</span>
                      <span><span><i class="ri-group-line"></i></span>{maxGroupSize} people</span>

                      
                  </div>
                  <h5>Description</h5>
                  <p>{desc}</p>
                </div>
                <div className='tour__reviews mt-4 mb-3'>
                  <h4>Reviews ({reviews?.length} reviews)</h4>
                  <Form >
                    <div className='rating__group d-flex align-items-center gap-3 mb-2'>
                      <span onClick={()=>setTourRating(1)}>1 <i class="ri-star-s-fill"></i></span>
                      <span onClick={()=>setTourRating(2)}>2 <i class="ri-star-s-fill"></i></span>
                      <span onClick={()=>setTourRating(3)}>3 <i class="ri-star-s-fill"></i></span>
                      <span onClick={()=>setTourRating(4)}>4 <i class="ri-star-s-fill"></i></span>
                      <span onClick={()=>setTourRating(5)}>5 <i class="ri-star-s-fill"></i></span>
                    </div>
                    <div className='review__input'>
                      <input type='text' ref={reviewMsgRef} placeholder="Share your thoughts" required/>
                      <button className='btn primary__btn text-white' onClick={HandleSubmit} type='submit'>Submit</button>
                    </div>
                  </Form>
                  <ListGroup className='user__reviews'>
                    {
                      reviews?.map(review => (
                        <div className='review__item'><img src={avatar} />
                          <div className='w-100'>
                            <div className='d-flex align-items-center justify-content-between'>
                              <div>
                                <h5>Priyabrat</h5>
                                  <p>
                                    {new Date("01-18-2023").toLocaleDateString("en-US",options)}
                                  </p>
                                
                              </div>
                              <span className='d-flex align-items-center'>5 <i class="ri-star-s-fill"></i></span>
                            </div>
                            <h6>Amazing tour</h6>
                          </div>
                        </div>
                      ))
                    }
                  </ListGroup>
                </div>
              </div>
            </Col>
            <Col lg='4'><Booking tour={tour} avgRating={avgRating}/></Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default TourDetails