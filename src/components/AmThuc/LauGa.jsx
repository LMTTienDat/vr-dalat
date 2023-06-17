import React from "react";
import "../about.css";
import BackgroundImage from "../../images/cover-amthuc.jpg";

import NavBar from "../NavBar";

const LauGa = () => {
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
                  <h2>Lẩu gà lá é</h2>
                  <p>
                  Lẩu gà lá é với vị ngọt thanh của nước dùng hòa cùng vị cay cay nồng nồng của lá é, ớt xiêm xanh tạo nên một hương vị rất riêng vừa hấp dẫn vừa khó quên. Lá é là một loại gia vị đặc trưng của các tỉnh Nam Trung Bộ và Tây Nguyên đặc biệt là vùng đất Phú Yên. Người dân nơi đây sử dụng lá é trong rất nhiều các món ăn, phổ biến là giã nhuyễn để làm muối ăn với cơm nóng, hay làm thức chấm cho các món hải sản, thịt nướng.
                  </p>
                  <h3 class="my-3">Liên quan</h3>
                  <ul>
                    <li>Nem nướng bà Hùng</li>
                    <li>Lẩu bò ba toa</li>
                    <li>Lẩu gà lá é</li>
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
                    src="../../images/lauga.jpg"
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

export default LauGa;
