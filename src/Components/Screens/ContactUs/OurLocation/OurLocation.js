import React from 'react';
import './OurLocation.css'

function OurLocation() {
  return (
    <section className="location_map">
        <div className="container">
            <div className="sc_title_wrapper border_bottom">
                <h2 className="sc_color_title">Find us on google maps</h2>
            </div>
            <div className="location_map_wrapper">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1826.0303393557735!2d90.39312080591012!3d23.745215508529686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b89614a3f92f%3A0x82ded544d2f7b670!2sMHK%20Terminal!5e0!3m2!1sen!2sbd!4v1639024490945!5m2!1sen!2sbd" title='1'></iframe>
            </div>

        </div>
    </section>
  )
}

export default OurLocation