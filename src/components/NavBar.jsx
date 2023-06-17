import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div id="fh5co-header">
    <header id="fh5co-header-section">
        <div className="container">
            <div className="nav-header">
                <a href="#" className="js-fh5co-nav-toggle fh5co-nav-toggle"><i></i></a>
                <Link to={"/home"}><h1 id="fh5co-logo"><a>DaLat 360</a></h1></Link>
                <nav id="fh5co-menu-wrap" role="navigation">
                    <ul className="sf-menu" id="fh5co-primary-menu">
                        <li className="active">
                            <Link to={"/home"}>Trang chủ</Link>
                        </li>
                        <li>
                            <a href="" className="fh5co-sub-ddown">Địa điểm</a>
                            <ul className="fh5co-sub-menu">
                               <li> <Link to={"/duLich"}><a className='.pr-0' target="_blank">Du lịch</a></Link></li>
                               <li> <Link to={"/kienTruc"}><a className='.pr-0' target="_blank">Kiến trúc</a></Link></li>
                               <li> <Link to={"/thienNhien"}><a className='.pr-0' target="_blank">Thiên nhiên</a></Link></li>
                               <li> <Link to={"/caPhe"}><a className='.pr-0' target="_blank">Cà phê</a></Link></li>
                               <li> <Link to={"/amThuc"}><a className='.pr-0' target="_blank">Ẩm thực</a></Link></li>
                               <li> <Link to={"/luuTru"}><a className='.pr-0' target="_blank">Lưu trú</a></Link></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#" className="fh5co-sub-ddown">Tin tức</a>
                             <ul className="fh5co-sub-menu">
                                <li>
                                    <a href="#" className="fh5co-sub-ddown">Nổi bật</a>
                                    <ul className="fh5co-sub-menu">
                                        <li><a target="_blank">Top điểm đến</a></li>
                                        <li><a target="_blank">Địa điểm đang hot</a></li>
                                        <li><a target="_blank">Điểm đến săn mây</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li><Link to={"/contact"}>Liên hệ</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
    
</div>
  )
}

export default NavBar
