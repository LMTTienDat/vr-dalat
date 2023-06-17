import React from 'react'
import BackgroundImage from "../../images/thiennhien.jpg"
import { Link } from 'react-router-dom'
const ThienNhiens = () => {
  return (
    <div>
		<div id="fh5co-wrapper">
		<div id="fh5co-page">
		
		
		<div class="fh5co-hero">
			<div class="fh5co-overlay"></div>
			<div class="fh5co-cover text-center" data-stellar-background-ratio="0.5" style={{background: `url(${BackgroundImage})` }}>
				<div class="desc">
					<h2>Thiên nhiên</h2>
				</div>
			</div>
		</div>


		<div class="fh5co-listing">
			<div class="container">
				<div class="row">
					<div class="col-md-4 col-sm-4 fh5co-item-wrap">
					<Link to={"/thienNhien/doiCheCauDat"}> 
						<a class="fh5co-listing-item">
							<img src="images/doiche.jpg" alt="Free HTML5 Bootstrap Template by FreeHTML5.co" class="img-responsive"/>
							<div class="fh5co-listing-copy">
								<h2>Đồi chè Cầu Đất</h2>
								<span class="icon">
									<i class="icon-chevron-right"></i>
								</span>
							</div>
						</a>
					</Link>
					</div>
					<div class="col-md-4 col-sm-4 fh5co-item-wrap">
					<Link to={"/thienNhien/DoiCoHong"}> 
                        <a class="fh5co-listing-item">
							<img src="images/cohong.jpg" alt="Free HTML5 Bootstrap Template by FreeHTML5.co" class="img-responsive"/>
							<div class="fh5co-listing-copy">
								<h2>Đồi cỏ hồng</h2>
								<span class="icon">
									<i class="icon-chevron-right"></i>
								</span>
							</div>
						</a>
					</Link>
					</div>
					<div class="col-md-4 col-sm-4 fh5co-item-wrap">
					<Link to={"/thienNhien/hoTuyenLam"}> 
					<a class="fh5co-listing-item">
							<img src="images/hotuyenlam.jpg" alt="Free HTML5 Bootstrap Template by FreeHTML5.co" class="img-responsive"/>
							<div class="fh5co-listing-copy">
								<h2>Hồ Tuyền Lâm</h2>
								<span class="icon">
									<i class="icon-chevron-right"></i>
								</span>
							</div>
						</a>
					</Link>
                       
					</div>


					<div class="col-md-4 col-sm-4 fh5co-item-wrap">
                        <Link to={"/thienNhien/hoXuanHuong"}>
						<a class="fh5co-listing-item">
							<img src="images/hoxuanhuong.jpg" alt="Free HTML5 Bootstrap Template by FreeHTML5.co" class="img-responsive"/>
							<div class="fh5co-listing-copy">
								<h2>Hồ Xuân Hương</h2>
								<span class="icon">
									<i class="icon-chevron-right"></i>
								</span>
							</div>
						</a>
						</Link>
					</div>
					<div class="col-md-4 col-sm-4 fh5co-item-wrap">
					<Link to={"/thienNhien/thacAnkroet"}>
					<a class="fh5co-listing-item">
							<img src="images/thacankroet.jpg" alt="Free HTML5 Bootstrap Template by FreeHTML5.co" class="img-responsive"/>
							<div class="fh5co-listing-copy">
								<h2>Thác ankroet</h2>
								<span class="icon">
									<i class="icon-chevron-right"></i>
								</span>
							</div>
						</a>
					</Link> 
					</div>
					<div class="col-md-4 col-sm-4 fh5co-item-wrap">
					<Link to={"/thienNhien/doiDaPhu"}> 
                        <a class="fh5co-listing-item">
							<img src="images/daphu.jpg" alt="Free HTML5 Bootstrap Template by FreeHTML5.co" class="img-responsive"/>
							<div class="fh5co-listing-copy">
								<h2>Đồi Đa Phú</h2>
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

export default ThienNhiens
