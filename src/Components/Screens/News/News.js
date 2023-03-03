import React, { useEffect, useState } from 'react'
import Banner from "../../../assets/images/banners/ms-overview-banner.png";
import NewsCart from './NewsCart/NewsCart'
import { NEWS_API } from '../../../Utilities/APIs'
import axios from 'axios'
import BannerTop from '../../Partials/Sections/BannerTop/BannerTop'
import './News.css'
import Header from '../../Partials/Header/Header';
function News() {

    const [newses, setNews] = useState([])
    useEffect(() => {

        async function getNews() {
            const { data } = await axios.get(NEWS_API)
            setNews(data)
        }
        getNews()

    }, [])

    return (
        <div>
              <Header/>
             <BannerTop 
             image={Banner} 
             title="News" 
            
             />
            <div>
                <div className="news_cards ">
                    <div className="container">
                        <div className="sc_title_wrapper border_bottom">
                            <h2 className="sc_title">News</h2>
                        </div>
                        <div className="news_card row-cols-1 row-cols-sm-2 row-cols-lg-3">
                            {
                                newses?.map(news => (
                                    <NewsCart key={news} news={news} />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default News