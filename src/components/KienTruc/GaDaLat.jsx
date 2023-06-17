import React from "react";
import "../about.css";
import BackgroundImage from "../../images/cover-gadalat.jpg";

import NavBar from "../NavBar";

const GaDaLat = () => {
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
                <h2>Ga Đà Lạt</h2>
                  <p>Tưởng chừng như nằm cách xa thành phố, nhưng trên thực tế, Ga Đà Lạt chỉ cách trung tâm thành phố ngàn hoa khoảng 2,5km. Vì thế, du khách có thể dễ dàng di chuyển đến đây bằng nhiều phương tiện khác nhau.
                    <br/> Ga Đà Lạt được khởi công xây dựng bởi người Pháp vào năm 1932. Theo những lời chia sẻ của người dân địa phương, cái tên đầu tiên của nơi này là “Ga xe lửa Đà Lạt”. Cho đến thời điểm hiện tại, cái tên ấy vẫn được giữ nguyên vẹn như vậy, không có bất kỳ sự thay đổi nào.
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
                        src="../../images/img-2.jpg"
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

export default GaDaLat;
