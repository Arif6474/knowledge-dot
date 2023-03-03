// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./Partners.css";
import { Navigation } from "swiper";
import { useEffect, useState } from "react";
import { IMAGE_URL, PARTNERS_API } from "../../../../Utilities/APIs";
import axios from "axios";

function Partners() {
  const [partners, setPartners] = useState(null);

  useEffect(() => {
    async function getPartners() {
      const { data } = await axios.get(PARTNERS_API);
      setPartners(data);
    }
    getPartners();
  }, []);

  return (
    <div className="container">
      <div className="partners">
        <div className="stronger_together">
          <div className="sc_title_wrapper center">
            <p className="sm_title">PARTNERS</p>
            <h1 className="sc_title">Partners</h1>
          </div>
        
        </div>
        <Swiper
          navigation={true}
          modules={[Navigation]}
          slidesPerView={2}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 40,
            },
          }}
          className="mySwiper"
        >
          {partners?.map((partner) => (
            <SwiperSlide>
              <div className="item" key={partner._id}>
                <div className="logo_wrapper">
                  <img
                    src={IMAGE_URL + partner.image}
                    alt="partner"
                    className="img-fluid w-100"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Partners;
