import React from "react";
import "../about.css";
import BackgroundImage from "../../images/cover-thac.jpg";

import NavBar from "../NavBar";

const ThacDatanla = () => {
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
                <h2>Thác Datanla</h2>
                  <p>Nổi tiếng với vẻ đẹp hoang sơ, thơ mộng mà dữ dội đặc trưng của đại ngàn Tây Nguyên, thác Datanla Đà Lạt là một trong những điểm tham quan du lịch có sức hút nhất tỉnh Lâm Đồng. Ngọn thác này tọa lạc giữa đèo Prenn, cách trung tâm thành phố Đà Lạt khoảng 5km về phía Nam, có lượng nước lớn đổ từ ghềnh 20m qua nhiều thềm đá, tạo thành dòng nước rất êm và trong. Chính vì lẽ này mà nơi đây còn gọi là Suối Tiên, còn vực thác sâu hun hút bên dưới chân thác được gọi là Vực Tử Thần Khu du lịch thác Datanla nằm trên quốc lộ 20, thuộc khu vực đèo Prenn, phường 3, thành phố Đà Lạt, tỉnh Lâm Đồng. Khu du lịch thác Datanla mở cửa từ 7h00 đến 17h00 tất cả các ngày trong tuần. Tuy nhiên, một số trò chơi sẽ tạm ngừng hoạt động khi đến lịch bảo trì; vì thế, bạn nên kiểm tra trước với ban quản lý khu du lịch hoặc phòng vé thác Datanla nhé.</p>
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
                        src="../../images/datanla.jpg"
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

export default ThacDatanla;
