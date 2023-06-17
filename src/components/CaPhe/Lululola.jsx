import React from "react";
import "../about.css";
import BackgroundImage from "../../images/caphe.jpg";

import NavBar from "../NavBar";

const Lululola = () => {
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
                  <h2>Lululola</h2>
                  <p>
                  Lululoha Coffee – Với phong trào thưởng thức âm nhạc tại vùng phố núi Đà Lạt đang nở rộ như hiện nay. Không ít những quán cà phê đang và sẽ đưa hình thức kinh doanh mới mẻ này vào menu phục vụ du khách. Trong đó, nắm bắt thị trường khá sớm và có sự đầu tư chuẩn nhất từ trước đến nay có thể kể đến Lululoha Coffee Đà Lạt.

                  <br />Với vị trí khá thuận lợi giữa ngay đầu đèo Prenn, đường 3/4, đồi Cà Ri Dê, phường 3, thành phố Đà Lạt. Lululoha Coffee được biết đến là một trong quán cà phê Đà Lạt tiên phong trong phong trào phục vụ dân nghệ. Đây là địa điểm thường xuyên tổ chức mini show cho của giới nghệ sĩ nổi tiếng.
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
                    src="../../images/lululola.png"
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

export default Lululola;
