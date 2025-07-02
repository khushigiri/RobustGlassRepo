import './products.css';

import glass1 from '../../media/glass1.png';
import glass2 from '../../media/glass2.png';
import glass3 from '../../media/glass3.png';
import glass4 from '../../media/glass4.png';


const PRODUCTS = () => {
    return (
        <section className="our-products container">
            <div className='product-heading'>
                <h2>Our Range of Glass Thicknesses</h2>
            </div>
            <div className='offer-heading'>
                <div className='heading' ><h3 style={{ color: 'black' }}>Engineered to Meet Diverse Industry Demands</h3></div>
                <div className='offer-heading-info'>
                    <p>At Robust Glass Pvt. Ltd., we offer a tailored range of toughened glass thicknesses — from 5mm to 10mm — to suit a variety of structural, functional, and aesthetic needs. Each panel is crafted for optimal performance, safety, and clarity.</p>
                </div>
            </div>
            <div className='cc'>
                <div class="card">
                    <div className='card-content'>
                        <svg class="check" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">

                            <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"></path>
                        </svg>
                        <img src={glass1} alt='5mm Glass ' /><hr />
                        <button className='card-btn'>
                            5mm Toughened Glass
                        </button>
                        <div className="overlay"></div>
                        <div className='hover-actions'>
                            <h5>Lightweight Precision</h5>
                            <h6>Ideal for shelves, cabinet doors, and showcases. Our 5mm toughened glass offers crystal clarity and strength for light-duty applications without compromising on safety.
                            </h6>
                        </div>


                    </div>
                </div>
                <div class="card">
                    <div className='card-content'>
                        <svg class="check" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                            <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"></path>
                        </svg>
                        <img src={glass2} alt='6mm Glass ' /><hr />
                        <button className='card-btn'>
                            6mm Toughened Glass
                        </button>
                        <div className="overlay"></div>
                        <div className='hover-actions'>
                            <h5>Standard for Everyday Use</h5>
                            <h6>A popular choice for doors, windows, and partition walls. The 6mm toughened glass balances strength and style — perfect for both residential and office interiors.
                            </h6>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div className='card-content'>
                        <svg class="check" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                            <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"></path>
                        </svg>
                        <img src={glass3} alt='8mm Glass ' /><hr />
                        <button className='card-btn'>
                            8mm Toughened Glass
                        </button>
                        <div className="overlay"></div>
                        <div className='hover-actions'>
                            <h5>Versatile & Durable</h5>
                            <p>Designed for moderate structural use — from cabin doors to shower enclosures. The 8mm glass ensures impact resistance, visual appeal, and stability.                            </p>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div className='card-content'>
                        <svg class="check" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                            <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"></path>
                        </svg>
                        <img src={glass4} alt='10mm Glass ' /><hr />
                        <button className='card-btn'>
                            10mm Toughened Glass
                        </button>
                        <div className="overlay"></div>
                        <div className='hover-actions'>
                            <h5>Strength for Structural Elegance</h5>
                            <p>Ideal for frameless doors, glass facades, and stair panels. The 10mm toughened glass offers increased load-bearing capacity and clean-edge aesthetics.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PRODUCTS;
