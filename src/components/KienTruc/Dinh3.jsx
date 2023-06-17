import React from "react";
import "../about.css";
import BackgroundImage from "../../images/cover-kientruc.jpg";

import NavBar from "../NavBar";

const Dinh3 = () => {
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
                <h2>Dinh 3</h2>
                  <p>Công trình Biệt điện Vua Bảo Đại hay còn gọi là Dinh 3 Đà Lạt được mệnh danh là một Paris thu nhỏ giữa đồi thông Đà Lạt, được xây dựng vào năm 1933 cho đến năm 1938 thì hoàn thành. Công trình là một trong những dự án của Ernest Hébrard dành cho dinh toàn quyền, được thiết kế bởi 2 vị kiến trúc sư tài ba là Huỳnh Tấn Phát và kiến trúc sư người pháp Paul Veysseyre.
                    <br/>Nằm trên cao nguyên Lâm Viên, có độ cao 1.500 m so với mặt nước biển, thời tiết Đà Lạt mát mẻ quanh năm và chia làm 2 mùa rõ rệt là mùa mưa, mùa khô với nhiệt độ không quá 20 độ C. Mỗi mùa ở Đà Lạt mang nét đẹp đặc trưng riêng để gây thương nhớ cho những ai đã một lần đặt chân đến đây.
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
                        src="../../images/dinh3.jpg"
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

export default Dinh3;
