import React from "react";
import "../about.css";
import BackgroundImage from "../../images/cover-amthuc.jpg";

import NavBar from "../NavBar";

const BanhCan = () => {
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
                  <h2>Bánh căn Nhà Chung</h2>
                  <p>
                  Bánh Căn là một món ăn sáng khá phổ biến ở Đà Lạt. Trên các con đường của thành phố bạn sẽ khá dễ dàng tìm được những quán bán bánh căn. Bởi vì bánh căn được xem làm một trong top 25 món ngon Đà Lạt nhất định phải thưởng thức, một món ăn quá là nổi tiếng.

                  
                  <br />Quán nằm ở đầu đường nên cũng khá dễ tìm. Bánh căn ở đây rất ngon, bạn có thể vừa ăn vừa ngồi học làm bánh luôn nhé. Đặc biệt, nước chấm của quán được làm từ xoài xanh, hành phi, mỡ hành cộng thêm chút đậu phộng rất ngon.
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
                    src="../../images/bancan.jpg"
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

export default BanhCan;
