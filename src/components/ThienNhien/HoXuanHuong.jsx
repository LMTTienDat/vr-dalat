import React from "react";
import "../about.css";
import BackgroundImage from "../../images/cover-hoxuanhuong.jpg";

import NavBar from "../NavBar";

const HoXuanHuong = () => {
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
                <h2>Hồ Xuân Hương</h2>
                  <p>
                    Hồ Xuân Hương là một hồ nước đẹp thuộc Phường 01, ngay trung
                    tâm thành phố Đà Lạt. Xung quanh hồ có rừng thông và các bãi
                    cỏ, vườn hoa. Đây là địa điểm du khách ưa thích đi dạo bộ
                    hoặc xe ngựa khi đến tham quan thành phố Đà Lạt. Hồ Xuân
                    Hương là hồ nhân tạo, có chu vi chừng 5 km, rộng 25ha, có
                    hình trăng lưỡi liềm kéo dài hơn 2 km đi qua nhiều địa danh
                    du lịch của thành phố Đà Lạt như: Vườn hoa thành phố, Công
                    viên Yersin, Đồi Cù, Quảng trường Lâm Viên.
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
                        src="../../images/hoxuanhuong.jpg"
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

export default HoXuanHuong;
