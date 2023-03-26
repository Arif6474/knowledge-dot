import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./Banner.css";

// import required modules
import { Autoplay, Pagination } from "swiper";
import { Link } from "react-router-dom";
import axios from "axios";
import { IMAGE_URL, MAIN_SLIDER_API } from "../../../../Utilities/APIs";

function Banner() {
    const [banners, setBanners] = useState([]);
    console.log(banners);
    useEffect(() => {
        async function getEvent() {
            const { data } = await axios.get(MAIN_SLIDER_API);
            setBanners(data);
        }
        getEvent();
    }, []);

    const pagination = {
        clickable: true,

    };


    return (
        <div>
            <Swiper
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                loop={true}
                pagination={pagination}
                modules={[Autoplay, Pagination]}
                className="mySwiper"
            >
                {
                    banners?.map(banner => 
                        <SwiperSlide >
                            <div className="swiper-slide banner" >
                                <img src={IMAGE_URL + banner.image} alt="" />
                                <div className="hero-container homeContent">
                                    <div className="container">
                                        <h1 className="heroTitle">
                                        {banner.title}
                                        </h1>
                                        <p className="banner_desc">
                                        {banner.description}
                                        </p>
                                        <div className="banner_btn">
                                            <Link to="/aboutUs" className="btn">
                                                Read More
                                            </Link>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                    )
                }



            </Swiper>
        </div>
    )
}

export default Banner