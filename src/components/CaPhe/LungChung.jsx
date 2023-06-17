import React from "react";
import "../about.css";
import BackgroundImage from "../../images/caphe.jpg";

import NavBar from "../NavBar";

const LungChung = () => {
  return (
    <div>
      <div id="fh5co-wrapper">
        <div id="fh5co-page">
          <NavBar />

          <div class="fh5co-hero">
            <div class="fh5co-overlay"></div>
            <div
              class="fh5co-cover "
              data-stellar-background-ratio="0.5"
              style={{ background: `url(${BackgroundImage})` }}
            >
              <div class="desc container">
                <div class="col-md-6">
                  <h2>Lưng chừng</h2>
                  <p>
                  Lưng Chừng Cafe chắc hẳn không còn là một địa điểm xa lạ đối với giới trẻ nói chung, với những người yêu thích Đà Lạt nói riêng. Đây là một quán cà phê mà hầu hết du khách ghé thăm Đà Lạt đều đã từng đến.
                  
                  <br />Lưng Chừng Cafe Đà Lạt cách trung tâm thành phố Đà Lạt khoảng 7 phút di chuyển, nó nằm trên một cái thung lũng nhỏ, tĩnh mịch, xung quanh là những hàng thông bạt ngàn.
Lưng Chừng Cafe nằm ở Hẻm 31/8, đường 3/4, phường 3, Thành Phố Đà Lạt
                </p>
                  <h3 class="my-3">Liên quan</h3>
                  <ul>
                    <li>Lalaland Homestay</li>
                    <li>Terracotta Hotel & Resort Dalat</li>
                    <li>Ladalat Hotel</li>
                  </ul>
                  <h3 class="my-4">Hình ảnh liên quan</h3>
                  <div class="row">
                    <div class="col-md-3 col-sm-6 mb-4">
                      <a href="#">
                        <img class="img-fluid" src="../../images" alt="" />
                      </a>
                    </div>

                    <div class="col-md-3 col-sm-6 mb-4">
                      <a href="#">
                        <img class="img-fluid" src="../../images" alt="" />
                      </a>
                    </div>

                    <div class="col-md-3 col-sm-6 mb-4">
                      <a href="#">
                        <img
                          class="img-fluid"
                          src="./img/imb-photos-warrior-medium.jpg"
                          alt=""
                        />
                      </a>
                    </div>

                    <div class="col-md-3 col-sm-6 mb-4">
                      <a href="#">
                        <img class="img-fluid" src="./img/photo1.jpg" alt="" />
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <img
                    class="img-fluid"
                    src="../../images/lungchung.jpeg"
                    alt=""
                    style={{ borderRadius: 5 }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LungChung;
