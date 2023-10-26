import React, { useState,useContext} from 'react'
import './Booking.css';
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { BASE_URL } from '../../utils/config';

const Booking = ({ tour, avgRating }) => {
    const navigate = useNavigate();

    const {price,reviews } = tour;
    const { user } = useContext(AuthContext);

    const [booking, setBooking] = useState({
        userId:user._id,
        fullName: '',
        aadharNum:'',
        phone: '',
        checkIn: '',
        checkOut: '',
        guestSize: '1',
        rooms: '01',
        userEmail: user.email,

    })
    const totalAmount = Number(price) * Number(booking.guestSize) + 10;
    const HandleChange = (e) => {
        setBooking(prev => ({ ...prev, [e.target.id]: e.target.value }));
    }
    const HandleClick = async(e) => {
        e.preventDefault();
        // console.log(user)

        console.log(booking);
        try {
            if (!user || user === undefined || user === null) {
                return alert('Please sign in')
            }

            const res = await fetch(`${BASE_URL}/booking`, {
                method: 'post',
                headers: {
                    'content-type': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify(booking)
            })
            const result = await res.json()
            if (!res.ok) {
                return alert(result.message);
            }
            else navigate('/thank-you')
        } catch (err) {
            return alert(err.message);
        }
        
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
                        <h5>${price}<i class="ri-close-line"></i> {booking.guestSize} person</h5>
                        <span>${price*booking.guestSize}</span>
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
                <Button className='p__btn btn primary__btn' onClick={HandleClick}>Book</Button>
            </div>
      </div>

      
  )
}

export default Booking