import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import banner from '../../../../assets/images/banners/banner.jpeg'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./Banner.css";

// import required modules
import { Autoplay, Pagination } from "swiper";
import { Link } from "react-router-dom";
// import axios from "axios";
// import { IMAGE_URL, MAINSLIDER_API } from "../../../../Utilities/APIs";
function Banner() {
    // const [mainSliders, setMainSliders] = useState([]);
    // console.log(mainSliders);

    // useEffect(() =>{
    //     async function getMainSliderDec (){
    //         const {data} = await axios.get(MAINSLIDER_API)
    //         setMainSliders(data)
    //     }
    //     getMainSliderDec()
    // }, [])
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

                <SwiperSlide >
                    <div className="swiper-slide banner" >
                        <img  src={banner} alt="" />
                        <div className="hero-container homeContent">
                            <div className="container">
                                <h1 className="heroTitle">
                                    Together we’re shaping
                                    the future of logistics
                                    and transport
                                </h1>
                                <p className="banner_desc">
                                    Celebrating 100 years supporting transport and logistics professional
                                </p>
                                <div className="banner_btn">
                                    <Link to="#" className="btn">
                                        Read More
                                    </Link>
                                </div>

                            </div>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    )
}

export default Banner