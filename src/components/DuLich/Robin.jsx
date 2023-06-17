import React from "react";
import "../about.css";
import BackgroundImage from "../../images/cover-thac.jpg";

import NavBar from "../NavBar";

const Robin = () => {
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
                <h2>Đồi Robin</h2>
                  <p>Đồi Robin Đà Lạt (hay còn được gọi là đồi Robin cáp treo) nằm trên trục đường đèo Prenn huyền thoại của thành phố. Nơi đây chính là tọa độ ngắm cảnh lý tưởng nhất của thành phố với hệ thống cáp treo dài khoảng 2.267m xuyên qua rừng thông bạt ngàn, nối từ đồi Robin tới Thiền viện Trúc Lâm. Du khách đến Đà Lạt thường không quên ghé đồi Robin tham quan, thưởng ngoạn phong cảnh thiên nhiên Đà Lạt nhìn từ trên cao.
                    <br />Tọa lạc trên cung đường đèo đẹp nhất của thành phố, ít ai biết được ngọn đồi này đã từng đóng vai trò quan trọng trong lịch sử. Trước năm 1975, vị trí đồi Robin được xây dựng là trận địa pháo Tân Lạc. Đây chính là hệ thống phòng thủ của quân đội ta trong kháng chiến chống đế quốc Mỹ. Hòa bình lặp lại, nơi đây được cải tạo và xây dựng thành công trình cáp treo đầu tiên của thành phố.
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
                        src="../../images/robin.jpg"
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

export default Robin;
