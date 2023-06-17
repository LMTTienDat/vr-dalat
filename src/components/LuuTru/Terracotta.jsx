import React from "react";
import "../about.css";
import BackgroundImage from "../../images/cover-luutru.jpg";

import NavBar from "../NavBar";

const Terracotta = () => {
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
                <h2>Terracotta Hotel & Resort Dalat</h2>
                  <p>Khu nghỉ dưỡng Terracotta Đà Lạt rộng hơn 17 hecta, toạ lạc trên bán đảo ven hồ Tuyền Lâm, cách trung tâm Đà Lạt 6km, gồm 240 phòng nghỉ và 90 căn biệt thự bên hồ với tổng thể kiến trúc đậm nét đương đại hoà trong không gian lãng mạn của rừng thông, mây núi ở vùng thiên nhiên quanh năm khí hậu ôn hoà bậc nhất Việt Nam.

Mỗi căn biệt thự gồm 3 - 5 phòng ngủ, phòng khách, phòng làm việc và bếp ăn, đảm bảo phù hợp với nhu cầu sử dụng của đại gia đình hoặc các nhóm bạn đi nghỉ dưỡng.
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
                        src="../../images/terracota.jpg"
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

export default Terracotta;
