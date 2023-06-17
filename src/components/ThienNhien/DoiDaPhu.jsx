import React from "react";
import "../about.css";
import BackgroundImage from "../../images/cover-daphu.jpg";

import NavBar from "../NavBar";

const DoiDaPhu = () => {
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
                <h2>Đồi Đa Phú</h2>
                  <p>
                  Với những phượt thủ hay những bạn trẻ có cá tính mạnh mẽ thì việc lên Đà Lạt, lập team săn mây thật sự là một trải nghiệm thú vị. Đà Lạt có rất nhiều địa điểm đẹp để bạn có thể chọn làm chỗ săn mây, ngắm hoàng hôn… Và một trong những chốn bồng lai tiên cảnh đó chính là đồi Đa Phú Đà Lạt.
Nằm ở khu vực trung tâm Thành phố khoảng 9km, đồi Đa Phú được xem là một điểm đến được rất nhiều bạn trẻ yêu thích. Đứng từ trên đỉnh đồi bạn sẽ ngắm được view săn mây, ngắm bình minh và ngắm hoàng hôn đẹp mãn nhãn luôn nhé.

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
                        src="../../images/daphu.jpg"
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

export default DoiDaPhu;
