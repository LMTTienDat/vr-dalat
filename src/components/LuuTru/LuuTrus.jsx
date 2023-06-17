import React from 'react'
import BackgroundImage from "../../images/luutru.jpg"
import { Link } from 'react-router-dom'
const LuuTrus = () => {
  return (
    <div>
		<div id="fh5co-wrapper">
		<div id="fh5co-page">

		
		
		<div class="fh5co-hero">
			<div class="fh5co-overlay"></div>
			<div class="fh5co-cover text-center" data-stellar-background-ratio="0.5" style={{background: `url(${BackgroundImage})` }}>
				<div class="desc ">
					<h2>Lưu trú</h2>
				</div>
			</div>
		</div>


		<div class="fh5co-listing">
			<div class="container">
				<div class="row">
					<div class="col-md-4 col-sm-4 fh5co-item-wrap">
						<Link to={"/luuTru/palace"}>

						<a class="fh5co-listing-item">
							<img src="images/dalatpalace.jpg" alt="Free HTML5 Bootstrap Template by FreeHTML5.co" class="img-responsive"/>
							<div class="fh5co-listing-copy">
								<h2>Khách Sạn Đà Lạt Palace Heritage</h2>
								<span class="icon">
									<i class="icon-chevron-right"></i>
								</span>
							</div>
						</a>
						</Link>
					</div>
					<div class="col-md-4 col-sm-4 fh5co-item-wrap">
					<Link to={"/luuTru/colline"}>
                        <a class="fh5co-listing-item">
							<img src="images/colline.jpg" alt="Free HTML5 Bootstrap Template by FreeHTML5.co" class="img-responsive"/>
							<div class="fh5co-listing-copy">
								<h2>Khách sạn Colline</h2>
								<span class="icon">
									<i class="icon-chevron-right"></i>
								</span>
							</div>
						</a>
					</Link>
					</div>
					<div class="col-md-4 col-sm-4 fh5co-item-wrap">
					<Link to={"/luuTru/woder"}>

                        <a class="fh5co-listing-item">
							<img src="images/DalatWonder.png" alt="Free HTML5 Bootstrap Template by FreeHTML5.co" class="img-responsive"/>
							<div class="fh5co-listing-copy">
								<h2>Dalat Wonder Resort</h2>
								<span class="icon">
									<i class="icon-chevron-right"></i>
								</span>
							</div>
						</a>
					</Link>
					</div>

					<div class="col-md-4 col-sm-4 fh5co-item-wrap">
					<Link to={"/luuTru/terracotta"}>
                        <a class="fh5co-listing-item">
							<img src="images/terracota.jpg" alt="Free HTML5 Bootstrap Template by FreeHTML5.co" class="img-responsive"/>
							<div class="fh5co-listing-copy">
								<h2>Terracotta Hotel & Resort Dalat</h2>
								<span class="icon">
									<i class="icon-chevron-right"></i>
								</span>
							</div>
						</a>

					</Link>
					</div>
					<div class="col-md-4 col-sm-4 fh5co-item-wrap">
					<Link to={"/luuTru/lalaland"}>

                        <a class="fh5co-listing-item">
							<img src="images/lalaland.jpg" alt="Free HTML5 Bootstrap Template by FreeHTML5.co" class="img-responsive"/>
							<div class="fh5co-listing-copy">
								<h2>Lalaland Homestay</h2>
								<span class="icon">
									<i class="icon-chevron-right"></i>
								</span>
							</div>
						</a>
					</Link>
					</div>
					<div class="col-md-4 col-sm-4 fh5co-item-wrap">
					<Link to={"/luuTru/ladalat"}>

                        <a class="fh5co-listing-item">
							<img src="images/ladalat.jpg" alt="Free HTML5 Bootstrap Template by FreeHTML5.co" class="img-responsive"/>
							<div class="fh5co-listing-copy">
								<h2>Ladalat Hotel</h2>
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

export default LuuTrus
