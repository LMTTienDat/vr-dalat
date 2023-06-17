import React from 'react'
import BackgroundImage from "../../images/amthuc.jpg"
import { Link } from 'react-router-dom'
const AmThucs = () => {
  return (
    <div>
		<div id="fh5co-wrapper">
		<div id="fh5co-page">
		
		
		<div class="fh5co-hero">
			<div class="fh5co-overlay"></div>
			<div class="fh5co-cover text-center" data-stellar-background-ratio="0.5" style={{background: `url(${BackgroundImage})` }} >
				<div class="desc ">
					<h2>Ẩm thực</h2>
				</div>
			</div>
		</div>


		<div class="fh5co-listing">
			<div class="container">
				<div class="row">
					<div class="col-md-4 col-sm-4 fh5co-item-wrap">
						<Link to={"/amThuc/banhCan"}>

						<a  class="fh5co-listing-item">
							<img src="images/bancan.jpg" alt="Free HTML5 Bootstrap Template by FreeHTML5.co" class="img-responsive"/>
							<div class="fh5co-listing-copy">
								<h2>Bánh căn Nhà Chung</h2>
								<span class="icon">
									<i class="icon-chevron-right"></i>
								</span>
							</div>
						</a>
						</Link>
					</div>
					<div class="col-md-4 col-sm-4 fh5co-item-wrap">
					<Link to={"/amThuc/nemNuong"}>

                        <a  class="fh5co-listing-item">
							<img src="images/nemnuong.jpg" alt="Free HTML5 Bootstrap Template by FreeHTML5.co" class="img-responsive"/>
							<div class="fh5co-listing-copy">
								<h2>Nem nướng bà Hùng</h2>
								<span class="icon">
									<i class="icon-chevron-right"></i>
								</span>
							</div>
						</a>
					</Link>
					</div>
					<div class="col-md-4 col-sm-4 fh5co-item-wrap">
					<Link to={"/amThuc/choDem"}>

                        <a  class="fh5co-listing-item">
							<img src="images/chodem.jpg" alt="Free HTML5 Bootstrap Template by FreeHTML5.co" class="img-responsive"/>
							<div class="fh5co-listing-copy">
								<h2>Chợ đêm</h2>
								<span class="icon">
									<i class="icon-chevron-right"></i>
								</span>
							</div>
						</a>
					</Link>
					</div>

					<div class="col-md-4 col-sm-4 fh5co-item-wrap">
					<Link to={"/amThuc/leguda"}>

                        <a  class="fh5co-listing-item">
							<img src="images/leguda.jpg" alt="Free HTML5 Bootstrap Template by FreeHTML5.co" class="img-responsive"/>
							<div class="fh5co-listing-copy">
								<h2>Buffet rau Leguda</h2>
								<span class="icon">
									<i class="icon-chevron-right"></i>
								</span>
							</div>
						</a>
					</Link>
					</div>
					<div class="col-md-4 col-sm-4 fh5co-item-wrap">
					<Link to={"/amThuc/lauBo"}>

                        <a class="fh5co-listing-item">
							<img src="images/laubo.jpg" alt="Free HTML5 Bootstrap Template by FreeHTML5.co" class="img-responsive"/>
							<div class="fh5co-listing-copy">
								<h2>Lẩu bò ba toa</h2>
								<span class="icon">
									<i class="icon-chevron-right"></i>
								</span>
							</div>
						</a>
					</Link>
					</div>
					<div class="col-md-4 col-sm-4 fh5co-item-wrap">
					<Link to={"/amThuc/lauGa"}>

                        <a class="fh5co-listing-item">
							<img src="images/lauga.jpg" alt="Free HTML5 Bootstrap Template by FreeHTML5.co" class="img-responsive"/>
							<div class="fh5co-listing-copy">
								<h2>Lẩu gà lá é</h2>
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

export default AmThucs
