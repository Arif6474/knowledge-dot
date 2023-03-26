import React from 'react'
import Header from '../../Partials/Header/Header'
import Banner from './Banner/Banner'
import CiltBangladesh from './CiltBangladesh/CiltBangladesh'

import Events from './Events/Events'
import Forums from './Forums/Forums'
import './Home.css'
import Partners from '../../Partials/Sections/Partners/Partners'
import Together from './Together/Together'
function Home() {
    return (
        <div >
            <div className='home_banner_nav'>
                <Header />
                <Banner />
            </div>
            <Together />
            <CiltBangladesh />
            <Forums />
            <Events />
            <Partners />
        </div>
    )
}

export default Home