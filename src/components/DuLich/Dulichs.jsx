import React from 'react'
import BackgroundImage from "../../images/khudulich.jpg"
import { Link } from 'react-router-dom'

const Dulichs = () => {
  return (
    <div>
    <div id="fh5co-wrapper">
    <div id="fh5co-page">
    
    <div class="fh5co-hero">
        <div class="fh5co-overlay"></div>
        <div class="fh5co-cover text-center" data-stellar-background-ratio="0.5"  style={{background: `url(${BackgroundImage})` }}>
            <div class="desc ">
                <h2>Khu du lịch</h2>
            </div>
        </div>
    </div>


    <div class="fh5co-listing">
        <div class="container">
            <div class="row">
                <div class="col-md-4 col-sm-4 fh5co-item-wrap">
                    <Link to={"/duLich/queGarden"}>
                    <a class="fh5co-listing-item">
                        <img src="images/quegarden.jpg" alt="Free HTML5 Bootstrap Template by FreeHTML5.co" class="img-responsive"/>
                        <div class="fh5co-listing-copy">
                            <h2>Que Garden</h2>
                            <span class="icon">
                                <i class="icon-chevron-right"></i>
                            </span>
                        </div>
                    </a>
                    </Link>
                </div>
                <div class="col-md-4 col-sm-4 fh5co-item-wrap">
                <Link to={"/duLich/thacDatanla"}> 
                    <a class="fh5co-listing-item">
                        <img src="images/datanla.jpg" alt="Free HTML5 Bootstrap Template by FreeHTML5.co" class="img-responsive"/>
                        <div class="fh5co-listing-copy">
                            <h2>Thác Datanla</h2>
                            <span class="icon">
                                <i class="icon-chevron-right"></i>
                            </span>
                        </div>
                    </a>
                </Link>
                </div>
                <div class="col-md-4 col-sm-4 fh5co-item-wrap">
                <Link to={"/duLich/langbiang"}> 
                    <a class="fh5co-listing-item">
                        <img src="images/langbiang.jpg" alt="Free HTML5 Bootstrap Template by FreeHTML5.co" class="img-responsive"/>
                        <div class="fh5co-listing-copy">
                            <h2>Langbiang</h2>
                            <span class="icon">
                                <i class="icon-chevron-right"></i>
                            </span>
                        </div>
                    </a>
                </Link>
                </div>

           

                <div class="col-md-4 col-sm-4 fh5co-item-wrap">
                <Link to={"/duLich/thungLungTinhYeu"}> 
                    <a  class="fh5co-listing-item">
                        <img src="images/thunglung.jpg" alt="Free HTML5 Bootstrap Template by FreeHTML5.co" class="img-responsive"/>
                        <div class="fh5co-listing-copy">
                            <h2>Thung lũng tình yêu</h2>
                            <span class="icon">
                                <i class="icon-chevron-right"></i>
                            </span>
                        </div>
                    </a>
                </Link>
                </div>
                <div class="col-md-4 col-sm-4 fh5co-item-wrap">
                <Link to={"/duLich/vuonAnhSang"}> 
                    <a  class="fh5co-listing-item">
                        <img src="images/vuonanhsang.png" alt="Free HTML5 Bootstrap Template by FreeHTML5.co" class="img-responsive"/>
                        <div class="fh5co-listing-copy">
                            <h2>Vườn ánh sáng</h2>
                            <span class="icon">
                                <i class="icon-chevron-right"></i>
                            </span>
                        </div>
                    </a>
                </Link>
                </div>
                <div class="col-md-4 col-sm-4 fh5co-item-wrap">
                <Link to={"/duLich/robin"}> 
                    <a class="fh5co-listing-item">
                        <img src="images/robin.jpg" alt="Free HTML5 Bootstrap Template by FreeHTML5.co" class="img-responsive"/>
                        <div class="fh5co-listing-copy">
                            <h2>Đồi Robin</h2>
                            <span class="icon">
                                <i class="icon-chevron-right"></i>
                            </span>
                        </div>
                    </a>
                </Link>
                </div>
              
            </div>
        </div>
    </div>
    
    


</div>

</div>


</div>
  )
}

export default Dulichs
