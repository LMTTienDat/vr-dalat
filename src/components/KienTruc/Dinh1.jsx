import React from "react";
import "../about.css";
import BackgroundImage from "../../images/cover-kientruc.jpg";

import NavBar from "../NavBar";

const Dinh1 = () => {
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
                <h2>Dinh 1</h2>
                  <p>Dinh 1 Đà Lạt hay còn được du khách biết đến với tên gọi là Dinh Bảo Đại 1. Đà Lạt là một thành phố có khí hậu quanh năm mát mẻ, dễ chịu. Nơi đây không khác gì một thiêng đường trong mơ mà ai ai cũng ao ước được sống ở đây. Chính vì thế mà vua Bảo Đại đã chọn xây dựng nên 3 dinh thự xa hoa tráng lệ tại mảnh đất Tây Nguyên Lâm Viên này.
                    <br/> Dinh 1 Đà Lạt là một trong những địa điểm du lịch mà du khách không thể nào bỏ qua khi đến với Đà Lạt. Nơi đây được bình chọn là một trong top 10 địa điểm du lịch mà bạn không thể nào bỏ qua khi đến với Đà Lạt. Dinh Bảo Đại 1 là cái tên luôn được nằm trong danh sách tham quan của hầu hết các tour du lịch khi đến với Đà Lạt.
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
                        src="../../images/dinh1.jpg"
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

export default Dinh1;
