import React from 'react';
import { Col } from 'reactstrap';
import weatherImg from '../assets/images/weather.png';
import customizationImg from '../assets/images/customization.png'
import guideImg from '../assets/images/guide.png';
import ServiceCard from './ServiceCard';

const servicesData = [
    {
        imgUrl: weatherImg,
        title: "Calculated Weather",
        desc: "data analysis and modeling to provide accurate weather forecasts and predictions.",
    },
    {
        imgUrl: guideImg,
        title: "Best Tour Guide",
        desc: "possesses in-depth local knowledge, language proficiency, and exceptional interpersonal skills.",
    },
    {
        imgUrl: customizationImg,
        title: "Customization",
        desc: "tailoring products, services, or software to meet specific individual or business requirements.",
    }

]
const ServiceList = () => {
    return (
    <>   
        {
            servicesData.map((item, index) => (
                <Col lg='3' key={index}>
                    <ServiceCard item={item} />
                </Col>
            ))
        }
    </>

  )
}

export default ServiceList