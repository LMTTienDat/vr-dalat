import React from "react";
import "../about.css";
import BackgroundImage from "../../images/cover-doiche.jpg";

import NavBar from "../NavBar";

const DoiChe = () => {
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
                <h2>Đồi chè Cầu Đất</h2>
                  <p>Đồi chè Cầu Đất là một địa điểm du lịch Đà Lạt nổi tiếng thu hút nhiều du khách. Bởi cảnh quan thiên nhiên đẹp hút hồn của những ngọn núi đồi trùng điệp. Toạ lạc ở một vùng khá cao xa trung tâm thành phố. Dù vậy vẫn không thể cản được bước chân muốn được chiêm ngưỡng cảnh vật hữu tình nơi đây.
Đồi chè Đà Lạt nổi tiếng là địa điểm săn mây số 1 trong lòng nhiều bạn trẻ khi đến đây. Với vị trí cao, thuận lợi ngắm nhìn toàn cảnh. Mở ra một không gian thiên nhiên đẹp đến mê hoặc lòng người. Là nơi mà nhiều bạn chọn để đến ngắm bình minh hay hoàng hôn. Thời điểm nào đều có một nét đẹp rất riêng.
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
                        src="../../images/doiche.jpg"
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

export default DoiChe;
