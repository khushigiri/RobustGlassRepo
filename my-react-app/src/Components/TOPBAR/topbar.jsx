
import './topbar.css'

const TOPBAR = () => {
    return (

        <section>
            <div className="topbar">
                <div className="topbar-left">
                    <div><a href="#"><i class="fa-solid fa-location-dot"></i> Address</a></div>
                    <div><b>|</b></div>
                    <div><a href=""><i class="fa-solid fa-phone"></i> Contact No.</a></div>
                    <div><b>|</b></div>
                    <div> <a href="#"><i class="fa-solid fa-envelope"></i> Mail</a></div>
                </div>
                <div className="topbar-right">
                    <div><a href="#"><i class="fa-brands fa-facebook-f"></i></a></div>
                    <div><a href="#"><i class="fa-brands fa-whatsapp"></i></a></div>
                    <div><a href="#"><i class="fa-brands fa-instagram"></i></a></div>
                    <div><a href="#"><i class="fa-brands fa-youtube"></i></a></div>
                </div>
            </div>
        </section>

    );
}

export default TOPBAR;