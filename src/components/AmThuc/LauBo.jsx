import React from "react";
import "../about.css";
import BackgroundImage from "../../images/cover-amthuc.jpg";

import NavBar from "../NavBar";

const LauBo = () => {
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
                  <h2>Lẩu bò ba toa</h2>
                  <p>
                  Lẩu bò Ba Toa – Đà Lạt là địa điểm du lịch được yêu thích của rất nhiều người dân Việt Nam. Có rất nhiều lý do để người ta “phải lòng” Đà Lạt. Không chỉ vì cảnh đẹp thiên nhiên, hay vì thời tiết mát mẻ se lạnh. Mà người ta còn đắm say xứ sở sương mù vì sự đa dạng văn hóa tạo nên nét đẹp riêng biệt cho ẩm thực nơi đây.

                  
                  <br />Nhắc đến ẩm thực Đà Lạt chắc chắn không thể bỏ qua món ăn quá đỗi phù hợp với thời tiết nơi đây. Đó không gì ngoài món lẩu bò, món ăn góp phần tạo nên thương hiệu cho ẩm thực địa phương. Trong tiết trời se lạnh, không gì tuyệt bằng việc quây quần bên nồi lẩu bò Ba Toa nóng hổi trứ danh rồi.
                  </p>
                  <h3 class="my-3">Liên quan</h3>
                  <ul>
                    <li>Nem nướng bà Hùng</li>
                    <li>Lẩu bò ba toa</li>
                    <li>Lẩu gà lá é</li>
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
                    src="../../images/laubo.jpg"
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

export default LauBo;
