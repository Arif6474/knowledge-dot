import React from 'react';

import Banner from '../../../../assets/images/banners/ms-overview-banner.png'

import CodeConduct from './CodeConduct/CodeConduct';
import MemberShipFees from './MemberShipFees/MemberShipFees';
import MemberShipBenefits from './MemberShip_Benefits/MemberShipBenefits';
import BannerTop from '../../../Partials/Sections/BannerTop/BannerTop';

import './MembershipOverview.css';
import MembershipGrade from './MembershipGrade/MembershipGrade';
import Header from '../../../Partials/Header/Header';

function MembershipOverview() {


    return (
        <div>
              <Header/>
            <div className='membership_overview_page'>
            <BannerTop
                image={Banner}
                title='Membership'
                subTitle='Be a part of our team'
            />

            {/* membership overview */}
            <section className="memership_overview">
                <div className="container">
                    <div className="sc_title_wrapper center">
                        <h1 className="sc_title">MEMBERSHIP OVERVIEW</h1>
                    </div>
                    <p className='desc'>The people are the key driving force that makes CILT BD what it is today. Whether you are a
                        student building a career or a professional trying to expand your business or skills, we
                        have something for everybody.</p>
                </div>
            </section>
            <MembershipGrade />
            <MemberShipBenefits />
            <CodeConduct />
            <MemberShipFees />
        </div>
        </div>
    )
}

export default MembershipOverview