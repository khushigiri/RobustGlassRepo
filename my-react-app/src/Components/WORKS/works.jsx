import './works.css';

import creation1 from '../../media/creation1.jpg';
import creation2 from '../../media/creation2.jpg';
import creation3 from '../../media/creation3.jpg';

const WORKS = () => {
    return (
        <section className="our-work-section ">
            <div className="container">
                <div className="work-container ">
                    <div className='product-heading' >
                        <h2>Our Creations</h2>
                    </div>
                    <div className='offer-heading'>
                        <div className='heading' ><h3 style={{ color: 'black' }}>Where Every Glass Project Reflects Our Excellence</h3></div>
                        <div className='offer-heading-info'>
                            <p>Our portfolio showcases a wide array of completed works — from office facades to customized interior glass installations. With every project, Robust Glass Pvt. Ltd. focuses on quality craftsmanship, on-time delivery, and complete customer satisfaction.</p>
                        </div>
                    </div>
                    <div className="work-cards">
                        <div className="work-card">
                            <img src={creation1} alt="Office Glass Facade" />
                            <h3>Office Glass Facade</h3>
                            <p>Bangalore | 12mm Toughened Glass</p>
                            <span>Modern & high-durability facade for a commercial building.</span>
                            <div className="client-feedback">
                                <p>"Robust Glass delivered exactly what we envisioned. Excellent clarity and strength!"</p>
                                <h4>- Anjali Mehta</h4>
                            </div>
                        </div>

                        <div className="work-card">
                            <img src={creation2} alt="Interior Glass Partition" />
                            <h3>Interior Glass Partition</h3>
                            <p>Mumbai | 8mm Toughened Glass</p>
                            <span>Stylish workspace glass dividers with sound insulation.</span>
                            <div className="client-feedback">
                                <p>"The partitions elevated our office interior — sleek, functional, and durable."</p>
                                <h4>- Rahul Verma</h4>
                            </div>
                        </div>

                        <div className="work-card">
                            <img src={creation3} alt="Retail Glass Doors" />
                            <h3>Retail Glass Doors</h3>
                            <p>Kolkata | 6mm Toughened Glass</p>
                            <span>Elegant sliding doors for a boutique retail space.</span>
                            <div className="client-feedback">
                                <p>"Our customers love the new look. The glass quality is top-notch and reliable, sleek, durable."</p>
                                <h4>- Sneha Kapoor</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WORKS;
