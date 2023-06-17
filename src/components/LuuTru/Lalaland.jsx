import React from "react";
import "../about.css";
import BackgroundImage from "../../images/cover-luutru.jpg";

import NavBar from "../NavBar";

const Lalaland = () => {
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
                  <h2>Lalaland Homestay</h2>
                  <p>
                    Nằm giữa những khu vườn xanh tốt, Lalaland Homestay là điểm
                    đến hấp dẫn đối với những du khách đã mệt mỏi với cuộc sống
                    vội vã, mong muốn lánh mình tại một không gian bình yên,
                    tĩnh lặng. Mọi thứ tại homestay này đều mang đến cảm giác
                    nhẹ nhàng, thư giãn. Chủ homestay dịu dàng, tinh tế cùng
                    phong cách phục vụ bình dị, gần gũi sẽ đem đến cảm giác thân
                    thiết từ những lần lưu trú đầu tiên.
                  
                  <br />
                  Lalaland Homestay Đà Lạt có địa chỉ tại số 10A Đường Triệu
                  Việt Vương, Phường 3, Thành phố Đà Lạt, Lâm Đồng. Từ homestay
                  quý khách có thể thăm thú thành phố Đà Lạt một cách dễ dàng,
                  có hai sự lựa chọn cho city tour đó là đi bằng xe máy hoặc đi
                  bộ. Đặc biệt, vị trí này còn rất gần Dốc Nhà Bò, một địa điểm
                  check – in siêu “hot hit” trên các trang mạng xã hội thời gian
                  gần đây. Từ khu homestay tại đường Triệu Việt Vương, quý khách
                  chỉ cần rẽ vào Đào Duy Từ là sẽ thấy điểm check in nổi tiếng
                  này.</p>
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
                    src="../../images/lalaland.jpg"
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

export default Lalaland;
