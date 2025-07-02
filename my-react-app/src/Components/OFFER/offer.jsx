
import './offer.css'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import BG from '../../media/we-offer-bg.jpg'

import { FaShieldAlt, FaTools } from "react-icons/fa";
import { IoLayersOutline } from "react-icons/io5";
import { WiThermometer } from "react-icons/wi";
import { MdPrecisionManufacturing, MdOutlineFlipCameraAndroid } from "react-icons/md";

const OFFER = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 2 }
            },
            {
                breakpoint: 600,
                settings: { slidesToShow: 1 }
            }
        ]
    };

    const services = [
        {
            icons: <FaShieldAlt />,
            title: "Tempered Glass",
            desc: "Heat-treated glass that’s strong and safely shatters into blunt pieces. Ideal for doors, windows, and facades."
        },
        {
            icons: <IoLayersOutline />,
            title: "Laminated Glass",
            desc: "Glass layers bonded with a durable PVB interlayer. Offers added security, noise reduction, and UV protection."
        },
        {
            icons: <WiThermometer />,
            title: "Insulated Glass",
            desc: "Double-pane glass with sealed air or gas. Enhances thermal insulation, noise reduction, and energy efficiency."
        },
        {
            icons: <FaTools />,
            title: "Frosted Glass",
            desc: "Matte-finished translucent glass for added privacy and stylish decor. Used in offices, bathrooms, and partitions."
        },
        {
            icons: <MdPrecisionManufacturing />,
            title: "Mirror Glass",
            desc: "Reflective decorative glass used for aesthetics and utility. Common in wardrobes, wall panels, and furniture."
        },
        {
            icons: <MdOutlineFlipCameraAndroid />,
            title: "Smart Glass",
            desc: "Electronically controlled glass that switches between clear and opaque. Perfect for privacy, comfort, and design."
        }
    ];

    return (
        <div class="what-we-offer" style={{ backgroundImage: `url(${BG})` }}>
            <div class="container">

                <div className='offer-heading-content'>
                    <div>
                        <h2 class="offer-section-title">Services We Offer</h2>
                    </div>
                    <div className='offer-heading'>
                        <div className='heading'><h3>High Quality Glass Services For Every Industry</h3></div>
                        <div className='offer-heading-info'>
                            <p>Robust Glass Pvt. Ltd. is a leading processor of premium quality glass solutions. We serve industries including architecture, construction, interior design, retail, and commercial establishments — ensuring safety, precision, and durability in every product.</p>
                        </div>
                    </div>
                </div>


                <div class="service-carousel">
                    <Slider {...settings}>
                        {services.map((service, index) => (
                            <div key={index} className="service-card">
                                <div className='card-icons-bg'>
                                    <span className='card-icons'>{service.icons}</span></div>
                                <div><h4 className='card-title'>{service.title}</h4></div>
                                <div><p className='card-desc'>{service.desc}</p></div>
                                <div className='card-btns'>
                                    <button>Contact Us</button>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default OFFER;

