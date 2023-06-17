import React from "react";
import "../about.css";
import BackgroundImage from "../../images/cover-thac.jpg";

import NavBar from "../NavBar";

const QueGarden = () => {
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
                <h2>Que Garden</h2>
                  <p>
                    QUE Garden Đà Lạt là một trong những địa điểm tham quan, du
                    lịch hấp dẫn nhất tại Đà Lạt trong năm 2020. Tuy đây chỉ là
                    một địa điểm du lịch chỉ mới được đưa vào hoạt động trong
                    những ngày đầu năm 2020. Nhưng với độ HOT của nó và đặc biệt
                    đây chính là nơi được đánh giá. Chính là địa điểm “check in”
                    và “sống ảo” không góc chết. Cũng chính vì vậy mà Quê Garden
                    Đà Lạt nhận được rất nhiều sự quan tâm của quý du khách. Que
                    Garden tọa lạc trên đèo Mimosa, Phường 10, Thành phố Đà Lạt.
                  </p>
                  <h3 class="my-3">Liên quan</h3>
                  <ul>
                    <li>Thác Datanla</li>
                    <li>Đồi Robin</li>
                    <li>Thung lũng tình yêu</li>
                  </ul>
                  <h3 class="my-4">Hình ảnh liên quan</h3>

                  <div class="row">
                    <div class="col-md-3 col-sm-6 mb-4">
                      <a href="#">
                        <img
                          class="img-fluid"
                          src="../../images/datanla.jpg"
                          alt=""
                        />
                      </a>
                    </div>

                    <div class="col-md-3 col-sm-6 mb-4">
                      <a href="#">
                        <img
                          class="img-fluid"
                          src="../../images/quegarden.jpg"
                          alt=""
                        />
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QueGarden;
