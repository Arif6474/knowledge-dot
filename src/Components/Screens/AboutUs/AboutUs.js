import React, { useEffect, useState } from 'react'
import BannerTop from '../../Partials/Sections/BannerTop/BannerTop'
import Banner from "../../../assets/images/banners/aboutUs.png";
import axios from 'axios';
import { COREVALUE_API } from '../../../Utilities/APIs';
import WhoWeAre from './WhoWeAre/WhoWeAre';
import WhatWeDo from './WhatWeDo/WhatWeDo';
import WhyJoinCilt from './WhyJoinCilt/WhyJoinCilt';
import OurHistory from './OurHistory/OurHistory';
import Header from '../../Partials/Header/Header';
function AboutUs() {
  const [coreValues, setCoreValues] = useState(null);
  useEffect(() => {
    async function getCoreValues() {
      const { data } = await axios.get(COREVALUE_API);
      setCoreValues(data);
    }
    getCoreValues();
  }, []);
  return (
    <>
      <Header/>
      <BannerTop
        image={Banner}
        title="About CILT"
        subTitle="Know about our team"
      />
      <div className="title_desc">
        <div className="sc_title_wrapper center">
          <h1 className="sc_title">{coreValues && coreValues[0].title}</h1>
        </div>
        <p className="desc desc_top">
          {coreValues && coreValues[0].description}
        </p>
      </div>
      <WhoWeAre/>
      <WhatWeDo/>
      <WhyJoinCilt/>
      <OurHistory/>
    </>
  )
}

export default AboutUs