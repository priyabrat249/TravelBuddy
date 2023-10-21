import React, { useState } from 'react'
import { useRef } from 'react';
import './Search-bar.css'
import { Col, Form, FormGroup } from 'reactstrap';
const SearchBar = () => {
    const locRef = useRef('');
    const disRef = useRef(0);
    const peopleRef = useRef(0)
    const submitHandler = () => { 
        const location = locRef.current.value ;
        const distance =disRef.current.value;
        const people = peopleRef.current.value;
        if (location === '' || distance === '' || people === '') { return alert("All fields are required!!"); }
        console.log(location, distance, people);
    }
  return (
      <Col lg='12'>
          <div className='search__bar mt-3'>
              
          <Form className='d-flex align-items-center gap-4'>
              <FormGroup className='d-flex gap-3 form__group form__group-fast'>
                  <span><i class="ri-map-pin-line"></i></span>
                  <div>
                      <h6>Location</h6>
                      <input type='text' placeholder='Where do you want to go' ref={locRef}></input>
                  </div>
              </FormGroup>
              <FormGroup className='d-flex gap-3 form__group form__group-fast'>
                  <span><i class="ri-pin-distance-line"></i></span>
                  <div>
                      <h6>Distance</h6>
                      <input type='number' placeholder='Distance K/m' ref={disRef}></input>
                  </div>
              </FormGroup>
              <FormGroup className='d-flex gap-3 form__group'>
                  <span><i class="ri-group-line"></i></span>
                  <div>
                      <h6>People</h6>
                      <input type='number' placeholder='0' ref={peopleRef}></input>
                  </div>
              </FormGroup>
              <span className='search__icon' type='submit' onClick={submitHandler}><i class="ri-search-line "></i></span>
          </Form>
          </div>
    </Col>
  )
}

export default SearchBar