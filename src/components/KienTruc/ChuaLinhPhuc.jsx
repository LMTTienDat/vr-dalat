import React from "react";
import "../about.css";
import BackgroundImage from "../../images/cover-chualinhphuoc.jpg";

import NavBar from "../NavBar";

const ChuaLinhPhuc = () => {
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
                <h2>Chùa Linh Phước</h2>
                  <p>Chùa Linh Phước (hay Chùa Ve Chai) nằm cách trung tâm thành phố Đà Lạt khoảng 20km, ngay trên Quốc Lộ 1A, thuộc địa bàn Trại Mát. Địa chỉ chính xác là số 120, đường Tự Phước, Trại Mát, phường 11, , Lâm Đồng. Địa điểm này từng không ít lần “làm mưa làm gió” mạng xã hội với loạt hình ảnh check-in đẹp, độc, lạ trên Instagram và Facebook; dần dà trở thành nơi lui tới quen thuộc của du khách vi vu vùng đất sương mù, dù có phải là người theo đạo Phật hay không.
                    <br/> Chùa Ve Chai Đà Lạt được khởi công xây dựng vào năm 1949 và hoàn thiện trong năm 1951. Đến năm 1990, chùa được thiết kế và xây dựng lại dưới sự chỉ huy thi công của Thượng Tọa Thích Tâm Vị - tức vị Trụ Trì đời thứ Năm - và tâm huyết đóng góp của quý Phật tử đến từ nhiều tỉnh thành trên khắp đất nước.
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
                        src="../../images/chualp.jpg"
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

export default ChuaLinhPhuc;
