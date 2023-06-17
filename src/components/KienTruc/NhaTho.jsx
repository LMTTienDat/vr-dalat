import React from "react";
import "../about.css";
import BackgroundImage from "../../images/cover-nhathoconga.jpg";

import NavBar from "../NavBar";

const NhaTho = () => {
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
                <h2>Nhà Thờ Con Gà</h2>
                  <p>Nhà thờ Con Gà hay còn được gọi với cái tên khác là nhà thờ chính tòa Đà Lạt. Tên tiếng Anh là nhà thờ chính toà Thánh Nicôla Bari. Nhà thờ này được xây dựng năm 1931 đến năm 1942 thì hoàn thành. Nhà thờ đã trải qua 3 lần thi công xây dựng. Và trở thành một trong những công trình công giáo lớn nhất ở thành phố Đà Lạt. Nơi đây còn là địa điểm tham quan được nhiều du khách yêu thích khi đến với thành phố mộng mơ.
                    <br/> Nhà thờ Con gà nằm ngay tại một vị trí đắc địa tại trung tâm thành phố. Nơi tập trung nhiều khách sạn ở Đà Lạt nhất. Nhà thờ còn gần với nhiều địa điểm tham quan nổi tiếng khác như quảng trường Lâm Viên, chợ Đà Lạt và nhiều địa điểm ăn uống nổi tiếng,…
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
                        src="../../images/nhathoconga.jpg"
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

export default NhaTho;
