import React from "react";
import "../about.css";
import BackgroundImage from "../../images/caphe.jpg";

import NavBar from "../NavBar";

const MeLinh = () => {
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
                  <h2>Mê Linh</h2>
                  <p>Mê Linh Coffee Garden từ lâu đã trở thành một địa điểm du lịch tuyệt vời dành cho tất cả mọi người khi đặt chân tới Đà Lạt.


                   
                  
                  <br />Cafe Mê Linh Đà Lạt là một trong những địa điểm nổi tiếng bậc nhất ở Đà Lạt. Một không gian thư giãn và yên tĩnh. Cùng với những vườn cafe moka trải dài trên sườn đồi của thành phố ngàn hoa. Khi bạn đến với quán cafe này, bạn sẽ cảm nhận hương vị cafe đậm chất phố núi Đà Lạt. Và hơn cả thế bạn còn được thả mình với cảnh thơ mộng, yên bình, cảm thấy tinh thần tốt hơn. Xua tan được mọi áp lực trong công việc, học hành.
                </p>
                  <h3 class="my-3">Liên quan</h3>
                  <ul>
                    <li>Lalaland Homestay</li>
                    <li>Terracotta Hotel & Resort Dalat</li>
                    <li>Ladalat Hotel</li>
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
                    src="../../images/melinh.jpg"
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

export default MeLinh;
