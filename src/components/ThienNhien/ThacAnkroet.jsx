import React from "react";
import "../about.css";
import BackgroundImage from "../../images/cover-thac.jpg";

import NavBar from "../NavBar";

const ThacAnkroet = () => {
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
                <h2>Thác Ankroet</h2>
                  <p>Thác Ankroet là một cảnh đẹp ở Đà Lạt vẫn còn giữ được nét hoang sơ của núi rừng. Chính vẻ đẹp hoang dã của sông suối nơi đây là một trong những điều thu hút đối với du khách. Cùng MIA.vn khám phá địa điểm thú vị này nhé!
Thác Ankroet là một trong những nơi đẹp ở Đà Lạt đầu tiên mà bác sĩ Yersin bị cuốn hút và cho rằng vùng đất cao nguyên này quả đúng là một nơi nghỉ dưỡng tuyệt vời trong tương lai. Cái tên thác Ankroet được người Pháp đặt cho ngọn thác này bởi khi nhắc đến đây người ta sẽ nghĩ ngay đến một nơi hoang sơ cùng cốc, thanh bình, suối reo rì rào suốt ngày đêm
<br/> Địa chỉ: Lát, Lạc Dương, Lâm Đồng, Việt Nam</p>
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
                        src="../../images/thacankroet.jpg"
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

export default ThacAnkroet;
