import React, { useState} from 'react'
import './Booking.css';
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { useNavigate } from 'react-router-dom';

const Booking = ({ tour, avgRating }) => {
    const navigate = useNavigate();

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
    
    const [credentials, setCredentials] = useState({
        userId: '01',
        fullName: '',
        aadharNum:'',
        phone: '',
        checkIn: '',
        checkOut: '',
        guestSize: '1',
        rooms: '01',
        userEmail: 'test@example.com',

    })
    
    const totalAmount = Number(price) * Number(credentials.guestSize) + 10;
    const HandleChange = (e) => {
        setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }));
    }
    const HandleClick = (e) => {
        e.preventDefault();
        console.log(credentials);
        navigate('/thank-you')
    }
    return (
      <div className='booking'>
            <div className='booking__top d-flex align-items-center justify-content-between'>
                <h3>${price} <span>/per person</span></h3>
                <span className='tour__rating d-flex align-items-center'>
                    <i style={{'color':'var(--secondary-color)'}}class="ri-star-fill"></i>{avgRating === 0 ? null : avgRating}({reviews?.length})
                </span>
            </div>
            <div className='booking__form'>
                <h5>Information</h5>
                <Form className='booking__info-form'>
                    <FormGroup>
                        <input type='text' placeholder='Full Name' id='fullName' required onChange={HandleChange}/>
                    </FormGroup>
                    <FormGroup>
                        <input type='Text' placeholder='Aadhar Number' id='aadharNum' required onChange={HandleChange}/>
                    </FormGroup>
                    
                    <FormGroup>
                        <input type='number' placeholder='Phone' id='phone' required onChange={HandleChange}/>
                    </FormGroup>
                    <FormGroup className='d-flex justify-content-between'>
                        <div className='form__date d-flex align-items-center justify-content-between gap-3'>{" "}Checkin: <input type='date' placeholder='Checkout date' id='checkIn' required onChange={HandleChange}/> </div>                      
                    </FormGroup>
                    <FormGroup className='d-flex justify-content-between'>
                        <div className='form__date d-flex align-items-center justify-content-between gap-3'>{" "}Checkout: <input type='date' placeholder='Checkout date' id='checkOut' required onChange={HandleChange}/> </div>                      
                    </FormGroup>
                    <FormGroup className='d-flex justify-content-between gap-2'>
                        <input type='number' placeholder='Guests' id='guestSize' required onChange={HandleChange} />
                        <input type='number' placeholder='Rooms' id='rooms' required onChange={HandleChange} />                        
                    </FormGroup>

                </Form>
            </div>
            <div className='booking__bottom'>
                <ListGroup>
                    <ListGroupItem className='border-0 px-0 d-flex align-items-center justify-content-between mb-1'>
                        <h5>${price}<i class="ri-close-line"></i> {credentials.guestSize} person</h5>
                        <span>${price*credentials.guestSize}</span>
                    </ListGroupItem>
                    <ListGroupItem className='border-0 px-0 d-flex align-items-center justify-content-between mb-1'>
                        <h5>Service Charge</h5>
                        <span>$10</span>
                    </ListGroupItem>
                    <ListGroupItem className='total border-0 px-0 d-flex align-items-center justify-content-between mb-1'>
                        <h5>Total</h5>
                        <span>${totalAmount}</span>
                    </ListGroupItem>
                </ListGroup>
                <Button className='p__btn btn primary__btn' onClick={HandleClick}>Payment</Button>
            </div>
      </div>

      
  )
}

export default Booking