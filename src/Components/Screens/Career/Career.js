import React from 'react';
// import CardDetails from '../CareerCard/CardDetails';
import Banner from '../../../assets/images/about-us/aboutUs.png'
import CareerCard from './CareerCard/CareerCard';
import BannerTop from '../../Partials/Sections/BannerTop/BannerTop';
import './Career.css'
import Header from '../../Partials/Header/Header';
function Career() {
    return (
        <div>
            <Header />
            <BannerTop
                image={Banner}
                title='Career'
                subTitle=''
            />

            <section className="title_desc">
                <div className="container">
                    <div className="sc_title_wrapper center">
                        <h1 className="sc_title">It is important in today’s world to plan ahead if you want to be successful!</h1>
                    </div>
                    <p className='desc desc_top'>Our careers service offers members personalised coaching for work appraisals, job interviews and
                        job search techniques, delivered by qualified careers consultants. This service not only gives
                        our members a competitive advantage when applying for new roles and promotions, but also ensures
                        access to the best opportunities in the industry.</p>
                </div>

            </section>
            <CareerCard />
        </div>
    )
}

export default Career