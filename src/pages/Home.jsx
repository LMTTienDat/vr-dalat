import React from 'react'
import BackgroundImage from "../images/cover_bg_1.jpg"
import BackgroundImage1 from "../images/cover_bg_2.jpg"
import BackgroundImage2 from "../images/cover_bg_3.jpg"
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div>
		<div id="fh5co-wrapper">
		<div id="fh5co-page">

		<NavBar/>
		
		<div className="fh5co-hero">
			<div className="fh5co-overlay"></div>
			<div className="fh5co-cover text-center " data-stellar-background-ratio="0.5" style={{background: `url(${BackgroundImage})` }}>
				<div className="desc ">
					<h2>Khám phá thành phố Đà Lạt 360</h2>
					<span><a className="btn btn-primary btn-lg" href="../VR/index.html">Khám phá 360</a></span>
				</div>
			</div>

		</div>


		<div className="fh5co-listing">
			<div className="container">
				<div className="row">
					<div className="col-md-4 col-sm-4 fh5co-item-wrap">
						<Link to={"/duLich"}>
						<a className="fh5co-listing-item">
							<img src="images/img-1.jpg"  className="img-responsive"/>
							<div className="fh5co-listing-copy">
								<h2>Khu du lịch</h2>
								<span className="icon">
									<i className="icon-chevron-right"></i>
								</span>
							</div>
						</a>
						</Link>
					</div>
					<div className="col-md-4 col-sm-4 fh5co-item-wrap">
						<Link to={"/kienTruc"}>
						<a className="fh5co-listing-item">
							<img src="images/img-2.jpg"  className="img-responsive"/>
							<div className="fh5co-listing-copy">
								<h2>Kiến trúc</h2>
								<span className="icon">
									<i className="icon-chevron-right"></i>
								</span>
							</div>
						</a>
						</Link>
					</div>
					<div className="col-md-4 col-sm-4 fh5co-item-wrap">
						<Link to={"/thienNhien"}>
						<a className="fh5co-listing-item">
							<img src="images/img-3.jpg"  className="img-responsive"/>
							<div className="fh5co-listing-copy">
								<h2>Thiên nhiên</h2>
								<span className="icon">
									<i className="icon-chevron-right"></i>
								</span>
							</div>
						</a>
						</Link>
					</div>

					<div className="col-md-4 col-sm-4 fh5co-item-wrap">
						<Link to={"/caPhe"}>
						<a className="fh5co-listing-item">
							<img src="images/img-4.jpg"  className="img-responsive"/>
							<div className="fh5co-listing-copy">
								<h2>Cà phê</h2>
								<span className="icon">
									<i className="icon-chevron-right"></i>
								</span>
							</div>
						</a>
						</Link>
					</div>
					<div className="col-md-4 col-sm-4 fh5co-item-wrap">
						<Link to={"/amThuc"}>
						<a className="fh5co-listing-item">
							<img src="images/img-5.jpg"  className="img-responsive"/>
							<div className="fh5co-listing-copy">
								<h2>Ẩm thực</h2>
								<span className="icon">
									<i className="icon-chevron-right"></i>
								</span>
							</div>
						</a>
						</Link>
					</div>
					<div className="col-md-4 col-sm-4 fh5co-item-wrap">
						<Link to={"/luuTru"}>
						<a className="fh5co-listing-item">
							<img src="images/img-6.jpg"  className="img-responsive"/>
							<div className="fh5co-listing-copy">
								<h2>Lưu trú</h2>
								<span className="icon">
									<i className="icon-chevron-right"></i>
								</span>
							</div>
						</a>
						</Link>
					</div>

				</div>
			</div>
		</div>


		<div className="fh5co-section">
			<div className="container">
				<div className="row">
					<div className="col-md-6 fh5co-news">
						<h3>Tin tức</h3>
						<ul>
							<li>
								<a href="#">
									<span className="fh5co-date">Jan. 10, 2023</span>
									<h3>Top điểm đến</h3>
									<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus reprehenderit!</p>
								</a>
							</li>
							<li>
								<a href="#">
									<span className="fh5co-date">Jan. 10, 2023</span>
									<h3>Địa điểm đang hot</h3>
									<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus reprehenderit!</p>
								</a>
							</li>
							<li>
								<a href="#">
									<span className="fh5co-date">Jan. 10, 2023</span>
									<h3>Điểm đến săn mây</h3>
									<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus reprehenderit!</p>
								</a>
							</li>
						</ul>
					</div>
					<div className="col-md-6 fh5co-testimonial">
						<img src={BackgroundImage1}  className="img-responsive mb20"/>
						<img src={BackgroundImage2}   className="img-responsive"/>
					</div>
				</div>
			</div>
		</div>
	</div>

	</div>
	<Footer/>
{/* 
	<script src="js/jquery.min.js"></script>
	<!-- jQuery Easing -->
	<script src="js/jquery.easing.1.3.js"></script>
	<!-- Bootstrap -->
	<script src="js/bootstrap.min.js"></script>
	<!-- Waypoints -->
	<script src="js/jquery.waypoints.min.js"></script>
	<!-- Stellar -->
	<script src="js/jquery.stellar.min.js"></script>
	<!-- Superfish -->
	<script src="js/hoverIntent.js"></script>
	<script src="js/superfish.js"></script>

	<!-- Main JS -->
	<script src="js/main.js"></script> */}
	</div>
  )
}

export default Home
