import React from 'react'
import BackgroundImage from "../../images/kientruc.jpg"
import { Link } from 'react-router-dom'

const KienTrucs = () => {
  return (
    <div>
		<div id="fh5co-wrapper">
		<div id="fh5co-page">
		
		<div class="fh5co-hero">
			<div class="fh5co-overlay"></div>
			<div class="fh5co-cover text-center" data-stellar-background-ratio="0.5" style={{background: `url(${BackgroundImage})` }}>
				<div class="desc ">
					<h2>Kiến trúc</h2>
				</div>
			</div>
		</div>


		<div class="fh5co-listing">
			<div class="container">
				<div class="row">
					<div class="col-md-4 col-sm-4 fh5co-item-wrap">
						<Link to={"/kienTruc/dinh1"} >
						<a  class="fh5co-listing-item">
							<img src="images/dinh1.jpg" alt="Free HTML5 Bootstrap Template by FreeHTML5.co" class="img-responsive"/>
							<div class="fh5co-listing-copy">
								<h2>Dinh 1</h2>
								<span class="icon">
									<i class="icon-chevron-right"></i>
								</span>
							</div>
						</a>
						</Link>
					</div>
					<div class="col-md-4 col-sm-4 fh5co-item-wrap">
					<Link to={"/kienTruc/bietThuHN"} > 
                        <a class="fh5co-listing-item">
							<img src="images/bietthuHN.png" alt="Free HTML5 Bootstrap Template by FreeHTML5.co" class="img-responsive"/>
							<div class="fh5co-listing-copy">
								<h2>Biệt thự hằng nga</h2>
								<span class="icon">
									<i class="icon-chevron-right"></i>
								</span>
							</div>
						</a>
					</Link>
					</div>
					<div class="col-md-4 col-sm-4 fh5co-item-wrap">
					<Link to={"/kienTruc/dinh3"} > 
                        <a class="fh5co-listing-item">
							<img src="images/dinh3.jpg" alt="Free HTML5 Bootstrap Template by FreeHTML5.co" class="img-responsive"/>
							<div class="fh5co-listing-copy">
								<h2>Dinh 3</h2>
								<span class="icon">
									<i class="icon-chevron-right"></i>
								</span>
							</div>
						</a>
					</Link>
					</div>


					<div class="col-md-4 col-sm-4 fh5co-item-wrap">
					<Link to={"/kienTruc/nhaThoConGa"} > 
                        <a class="fh5co-listing-item">
							<img src="images/nhathoconga.jpg" alt="Free HTML5 Bootstrap Template by FreeHTML5.co" class="img-responsive"/>
							<div class="fh5co-listing-copy">
								<h2>Nhà thờ con gà</h2>
								<span class="icon">
									<i class="icon-chevron-right"></i>
								</span>
							</div>
						</a>
					</Link>
					</div>
					<div class="col-md-4 col-sm-4 fh5co-item-wrap">
					<Link to={"/kienTruc/gaDaLat"} > 
                        <a class="fh5co-listing-item">
							<img src="images/img-2.jpg" alt="Free HTML5 Bootstrap Template by FreeHTML5.co" class="img-responsive"/>
							<div class="fh5co-listing-copy">
								<h2>Ga Đà Lạt</h2>
								<span class="icon">
									<i class="icon-chevron-right"></i>
								</span>
							</div>
						</a>
					</Link>
					</div>
					<div class="col-md-4 col-sm-4 fh5co-item-wrap">
					<Link to={"/kienTruc/chuaLinhPhuoc"} > 
                        <a  class="fh5co-listing-item">
							<img src="images/chualp.jpg" alt="Free HTML5 Bootstrap Template by FreeHTML5.co" class="img-responsive"/>
							<div class="fh5co-listing-copy">
								<h2>Chùa Linh Phước</h2>
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

export default KienTrucs
