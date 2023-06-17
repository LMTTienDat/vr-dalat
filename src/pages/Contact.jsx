import React from 'react'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import BackgroundImage from "../images/cover_bg_3.jpg"

const Contact = () => {
  return (
    <div>
    <div id="fh5co-wrapper">
    <div id="fh5co-page">
    <NavBar/>
    
    
    <div class="fh5co-hero">
        <div class="fh5co-overlay"></div>
        <div class="fh5co-cover text-center" data-stellar-background-ratio="0.5" style={{background: `url(${BackgroundImage})` }}>
            <div class="desc ">
                <h2>LIÊN HỆ</h2>
                <span><a class="btn btn-primary btn-lg" href="#">Liên lạc với chúng tôi</a></span>
            </div>
        </div>

    </div>


    <div id="fh5co-contact" class="fh5co-section">
        <div class="container">
            <form action="#">
                <div class="row">
                    <div class="col-md-6">
                        <h3 class="section-title">Địa chỉ của chúng tôi</h3>
                        <p>Xa xôi, đằng sau những ngọn núi tại vùng núi phía nam Tây Nguyên Việt Nam, có thành phố chìm trong sương mù mang tên Đà Lạt. </p>
                        <ul class="contact-info">
                            <li><i class="icon-location-pin"></i>01 Trần Nhân Tông, P8, tp Đà Lạt</li>
                            <li><i class="icon-phone2"></i>+84 1235 2355</li>
                            <li><i class="icon-mail"></i><a href="#">2012393@dlu.edu.vn</a></li>
                        </ul>
                    </div>
                </div>
            </form>
        </div>
    </div>


    <Footer/>
    
    

    </div>

    </div>
</div>
  )
}

export default Contact
