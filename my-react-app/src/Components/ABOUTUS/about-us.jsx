
import './about-us.css';

import AboutUs from '../../media/about-us.jpg'

const ABOUTUS = () => {

    return (
        <section className="about-us container">

            <div className="img-content">
                <img src={AboutUs} />
            </div>

            <div className="text-content">
                <div><h2>Welcome To The Best Glass Processing Unit</h2></div>
                <div><h3>Advanced Glass Processing Unit</h3></div>
                <div className='info'><p>Founded in [Year], Robust Glass Pvt. Ltd. has grown into a trusted name in the glass industry. With a modern processing facility, we convert raw float glass into strong, heat-resistant, and precisely cut toughened glass — ideal for both interiors and infrastructure projects.

                </p></div>
                <div>
                    <div className='lists'>
                        <div className='lists-heading'>We Deliver Excellence Through:</div>
                        <div>
                            <ul>
                                <li> <i className="fa-solid fa-square-check"></i> <h4>Heat Treatment for Toughened Safety</h4>   </li>
                                <li> <i className="fa-solid fa-square-check"></i>  <h4>Precision Cutting & Edge Polishing</h4></li>
                                <li> <i className="fa-solid fa-square-check"></i> <h4>Quality Inspection at Every Stage</h4></li>
                                <li><i className="fa-solid fa-square-check"></i> <h4>Thickness Range: 5mm, 8mm, 10mm, 12mm</h4></li>
                            </ul>
                        </div>
                    </div>
                    <div></div>
                </div>

                <div className='mission-vision-cards'>
                    <div className='card1'>
                        <div class="ag-courses_item">
                            <div class="ag-courses-item_link">
                                <div class="ag-courses-item_bg"></div>
                                <div class="ag-courses-item_title">Mission</div>
                                <div class="ag-courses-item_date-box">
                                    At Robust Glass Pvt. Ltd., our mission is to provide high-quality toughened glass solutions that ensure safety, durability, and design — meeting the needs of architectural, industrial, and interior applications. </div>
                            </div>
                        </div>
                    </div>

                    <div className='card2'>
                        <div class="ag-courses_item">

                            <div class="ag-courses-item_link" >
                                <div class="ag-courses-item_bg"></div>
                                <div class="ag-courses-item_title">Vision</div>
                                <div class="ag-courses-item_date-box">
                                    Our vision is to be a trusted leader in the glass processing industry, recognized for innovation, consistent quality, and a strong commitment to customer satisfaction across every project we serve.

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default ABOUTUS;
