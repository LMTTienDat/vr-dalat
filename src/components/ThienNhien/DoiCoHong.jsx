import React from "react";
import "../about.css";
import BackgroundImage from "../../images/cover-cohong.jpg";

import NavBar from "../NavBar";

const DoiCoHong = () => {
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
                <h2>Đồi cỏ hồng</h2>
                <p>Đã từ lâu, thành phố mộng mơ Đà Lạt được ví như thành phố của du lịch. Bởi không những được thiên nhiên ưu ái ban tặng nền khí hậu ôn hòa quanh năm, nơi này còn ghi điểm với nhiều phong cảnh non nước hữu tình. Một trong số đó phải kể đến chính là đồi cỏ hồng. Cùng đọc ngay bài viết bên dưới đây để tìm hiểu review về đồi cỏ hồng Đà Lạt và kinh nghiệm check in tại nơi này nhé!
          <br/> Khi ánh bình minh bắt đầu len lỏi và chiếu rọi vào không gian nơi đây, những giọt sương mai đọng trên loài cỏ này dần dần tan biến như bong bóng nước. Lúc này, loại cỏ nhỏ xinh đẹp mới bắt đầu để lộ màu sắc thật sự của mình – sắc hồng phấn ngọt ngào khiến ai cũng cảm thấy “tan chảy” khi nhìn ngắm. Dưới ánh nắng vàng ươm dịu nhẹ của buổi sáng, nơi này bỗng chốc hóa thành chốn “bồng lai tiên cảnh”. 

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
                        src="../../images/cohong.jpg"
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

export default DoiCoHong;
