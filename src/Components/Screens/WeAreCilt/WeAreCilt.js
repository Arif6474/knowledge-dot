import React from 'react'
import BannerTop from '../../Partials/Sections/BannerTop/BannerTop'
import Banner from '../../../assets/images/about-us/ms-overview-banner.png'
import Partners from '../../Partials/Sections/Partners/Partners'
import Header from '../../Partials/Header/Header'


function WeAreCilt() {
  return (
    <div>
        <Header/>
         <BannerTop
                image={Banner}
                title='We Are CILT'
                subTitle='Celebrating 100 years supporting
                transport and logistics professional'
            />
            <Partners/>
    </div>
  )
}

export default WeAreCilt