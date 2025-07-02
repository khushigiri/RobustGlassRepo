import './hero-section.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import slide1 from '../../media/hero-section-slide1.jpg';
import slide2 from '../../media/hero-section-slide2.jpg';
import slide3 from '../../media/hero-section-slide3.jpg';

const HEROSECTION = () => {
    return (
        <section className='hero-section'>
            <div id="carouselExampleFade" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>

                <div className="carousel-inner">

                    <div className="carousel-item active">

                        <div className=' slide-contents' style={{ backgroundImage: `url(${slide1})` }}>
                            <div className='container'>
                                <div className=" slide-container" >
                                    <div className='quote'>Ready to transform your space?</div>
                                    <div className='slide-heading'>Premium Toughened Glass</div>
                                    <div>Robust Glass Pvt. Ltd. delivers precision-crafted toughened glass solutions for architecture, interiors, and industrial needs — combining safety, durability, and elegance in every panel.</div>
                                    <div>
                                        <ul>
                                            <li>
                                                <i className="fa-regular fa-circle-check"></i> High Durability & Thermal Resistance
                                            </li>
                                            <li>
                                                <i className="fa-regular fa-circle-check"></i> Strict Quality & Processing Standards
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='slide-btns'>
                                        <button>Get in Touch With Us</button>
                                        <button>Explore Products</button>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className="carousel-item">

                        <div className=' slide-contents' style={{ backgroundImage: `url(${slide2})` }}>
                            <div className='container'>
                                <div className=" slide-container" >
                                    <div className='quote'>Looking for tailor-made precision?</div>
                                    <div className='slide-heading'>Customized Glass Solutions</div>
                                    <div>We specialize in crafting custom-sized, finely finished glass solutions to meet the specific needs of architects, interior designers, and project developers — with precise cuts, finishes, and edge treatments.</div>
                                    <div className='slide-btns'>
                                        <button className="diagonal-bar-fill" style={{ marginTop: '20px' }}>About Us</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="carousel-item">

                        <div className=' slide-contents ' style={{ backgroundImage: `url(${slide3})` }}>
                            <div className='container'>
                                <div className=" slide-container" >
                                    <div className='quote'>Need dependable supply for your projects?</div>
                                    <div className='slide-heading'>Reliable Delivery &  Support</div>
                                    <div className='slide-info'>Robust Glass Pvt. Ltd. ensures safe packaging, timely dispatch, and full support for dealers and distributors. We are committed to delivering glass products with zero compromise on quality, wherever you are.</div>
                                    <div>
                                        <ul>
                                            <li>
                                                <i className="fa-regular fa-circle-check"></i> Timely Delivery with Secure Packaging
                                            </li>
                                            <li>
                                                <i className="fa-regular fa-circle-check"></i> Dealer Partnerships & Regional Distribution
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='slide-btns'>
                                        <button className="diagonal-bar-fill">Contact Support</button>
                                        <button className="diagonal-bar-fill">View Services</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HEROSECTION;
