import React from "react";
import "../about.css";
import BackgroundImage from "../../images/cover-hotuyenlam.jpg";

import NavBar from "../NavBar";

const HoTuyenLam = () => {
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
                <h2>Hồ Tuyền Lâm</h2>
                  <p>
                  Hồ Tuyền Lâm được du khách biết đến là một trong những hồ lớn nhất của thành phố sương mù Đà Lạt. Hồ được đặt trong khu du lịch quốc gia Hồ Tuyền Lâm, uốn lượn mềm mại qua những triền thông xanh bạt ngàn, có diện tích lên đến 320 ha. Cùng với sức hấp dẫn của hồ với màu xanh bạt ngàn của thiên nhiên núi rừng, của mây trời trong lành. Tất cả những yếu tố đó hội tụ lại làm nên một khung cảnh thiên nhiên đất trời hữu tình.
Ngoài ra, hình ảnh Hồ Tuyền Lâm còn được nâng tầm. Bởi điểm xuyết bên trong những cánh rừng xanh mướt, bên trên vô số ốc đảo nhỏ của hồ nước. Là những khu nghỉ dưỡng được xây dựng kỳ công và duyên dáng, nằm ẩn mình dưới những ngọn núi tuyệt đẹp.
                  </p>
                  <h3 class="my-3">Liên quan</h3>
                  <ul>
                    <li>Đồi cỏ hồng</li>
                    <li>Hồ Xuân Hương</li>
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
                        src="../../images/hotuyenlam.jpg"
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

export default HoTuyenLam;
