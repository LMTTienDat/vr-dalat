import React from 'react'
import BackgroundImage from "../../images/caphe.jpg"
import { Link } from 'react-router-dom'
const CaPhes = () => {
  return (
    <div>
		<div id="fh5co-wrapper">
		<div id="fh5co-page">

		
		
		<div class="fh5co-hero">
			<div class="fh5co-overlay"></div>
			<div class="fh5co-cover text-center" data-stellar-background-ratio="0.5" style={{background: `url(${BackgroundImage})` }}>
				<div class="desc">
					<h2>Cà phê</h2>
				</div>
			</div>
		</div>


		<div class="fh5co-listing">
			<div class="container">
				<div class="row">
					<div class="col-md-4 col-sm-4 fh5co-item-wrap">
						<Link to={"/caPhe/meLinh"}>

						<a class="fh5co-listing-item">
							<img src="images/melinh.jpg" alt="Free HTML5 Bootstrap Template by FreeHTML5.co" class="img-responsive"/>
							<div class="fh5co-listing-copy">
								<h2>Mê Linh Coffee</h2>
								<span class="icon">
									<i class="icon-chevron-right"></i>
								</span>
							</div>
						</a>
						</Link>
					</div>
					<div class="col-md-4 col-sm-4 fh5co-item-wrap">
					<Link to={"/caPhe/lululola"}>

                        <a class="fh5co-listing-item">
							<img src="images/lululola.png" alt="Free HTML5 Bootstrap Template by FreeHTML5.co" class="img-responsive"/>
							<div class="fh5co-listing-copy">
								<h2>Lululola Coffee</h2>
								<span class="icon">
									<i class="icon-chevron-right"></i>
								</span>
							</div>
						</a>
					</Link>
					</div>
					<div class="col-md-4 col-sm-4 fh5co-item-wrap">
					<Link to={"/caPhe/lungChung"}>

                        <a href="/About/Cafe/html/LungChung.html" class="fh5co-listing-item">
							<img src="images/lungchung.jpeg" alt="Free HTML5 Bootstrap Template by FreeHTML5.co" class="img-responsive"/>
							<div class="fh5co-listing-copy">
								<h2>Lưng chừng Coffee</h2>
								<span class="icon">
									<i class="icon-chevron-right"></i>
								</span>
							</div>
						</a>
					</Link>
					</div>


					<div class="col-md-4 col-sm-4 fh5co-item-wrap">
					<Link to={"/caPhe/tuiMoTo"}>
                        <a class="fh5co-listing-item">
							<img src="images/tuimoto.jpg" alt="Free HTML5 Bootstrap Template by FreeHTML5.co" class="img-responsive"/>
							<div class="fh5co-listing-copy">
								<h2>Túi mơ to Coffee</h2>
								<span class="icon">
									<i class="icon-chevron-right"></i>
								</span>
							</div>
						</a>
					</Link>
					</div>
					<div class="col-md-4 col-sm-4 fh5co-item-wrap">
					<Link to={"/caPhe/mountainView"}>
                        <a  class="fh5co-listing-item">
							<img src="images/dalatmoutian.jpg" alt="Free HTML5 Bootstrap Template by FreeHTML5.co" class="img-responsive"/>
							<div class="fh5co-listing-copy">
								<h2>Đà Lạt Mountain View</h2>
								<span class="icon">
									<i class="icon-chevron-right"></i>
								</span>
							</div>
						</a>
					</Link>
					</div>
					<div class="col-md-4 col-sm-4 fh5co-item-wrap">
					<Link to={"/caPhe/camp"}>

                        <a class="fh5co-listing-item">
							<img src="images/dalatcamp.jpeg" alt="Free HTML5 Bootstrap Template by FreeHTML5.co" class="img-responsive"/>
							<div class="fh5co-listing-copy">
								<h2>Dalat Camp</h2>
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

export default CaPhes
