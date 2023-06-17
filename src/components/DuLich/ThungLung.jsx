import React from "react";
import "../about.css";
import BackgroundImage from "../../images/cover-thac.jpg";

import NavBar from "../NavBar";

const ThungLung = () => {
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
                <h2>Thung Lũng Tình yêu</h2>
                  <p>Thung Lũng Tình yêu Đà Lạt là một địa điểm nổi tiếng nhất nước ta. Với cảnh đẹp nhất và thu hút nhiều du khách trong và ngoài nước đến đây. Nhờ không gian rộng rãi, thoáng mát và nhiều góc sống ảo. Vừa được nhiều “shoot ảnh nghìn like” vừa được hoà mình với thiên nhiên, cây cỏ.
                    <br/> Đường đến Thung Lũng Tình Yêu không quá khó, chỉ cách trung tâm 7 km theo hướng Bắc. Cụ thể là số 7, đường Mai Anh Đào, phường 8, Đà Lạt. Hiện nay, có rất nhiều phương tiện để di chuyển đến địa điểm này như máy, xe taxi,ô tô.
                  </p>
                  <h3 class="my-3">Liên quan</h3>
                  <ul>
                    <li>Đồi cỏ hồng</li>
                    <li>Hồ Tuyền Lâm</li>
                    <li>Đồi đa phú</li>
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
                        src="../../images/thunglung.jpg"
                        alt=""
                        style={{borderRadius: 5}}
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

export default ThungLung;
