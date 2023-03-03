import './BannerTop.css'

function BannerTop({ image, title, subTitle }) {
    return (
        <section className='banner_top'>
            <img src={image} alt="" />
            <div className="banner_top_content">
                <div className="container">
                    <h1 className='banner_title'>{title}</h1>
                    <p className='banner_sub_title'>{subTitle}</p>
                </div>
            </div>
        </section>
    )
}

export default BannerTop