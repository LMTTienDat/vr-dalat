import React from "react";
import "../about.css";
import BackgroundImage from "../../images/cover-amthuc.jpg";

import NavBar from "../NavBar";

const NemNuong = () => {
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
                  <h2>Nem nướng bà Hùng</h2>
                  <p>
                  Nem nướng bà Hùng ở Đà Lạt trở thành một món ăn gần như bắt buộc phải thử khi bạn đến với thành phố sương mù.
                  
                  <br />Một món ăn mà buổi nào cũng thưởng thức được, vừa có thịt vừa có rau lại còn kết hợp với đồ chua, tạo cảm giác kích thích ăn mãi không ngán. Làm xao xuyến bao tâm hồn yêu ẩm thực Đà Lạt.
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
                    src="../../images/nemnuong.jpg"
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

export default NemNuong;
