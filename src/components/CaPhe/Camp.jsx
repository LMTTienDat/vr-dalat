import React from "react";
import "../about.css";
import BackgroundImage from "../../images/caphe.jpg";

import NavBar from "../NavBar";

const Camp = () => {
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
                  <h2>Đà Lạt Camp</h2>
                  <p>
                  Muốn thưởng thức một buổi cắm trại mộc mạc mang đậm chất Đà Lạt thì có lẽ nơi đây là một nơi bạn không thể bỏ qua khi đến với Đà Lạt . Được nổi lên nhờ việc làm bối cảnh trong bản nhạc nổi tiếng của nữ ca sỹ Amee song ca cùng Hoàng Dũng , được dân mạng săn lùng địa điểm điên cuồng và vô cùng nổi tiếng.
                  
                  <br />Phong cảnh nơi đây mang vẻ mộc mạc , bình yên và giản dị bên cạnh đó bên trong DaLat Camp còn có một ngôi nhà gỗ mang phong cách Châu Âu mang đậm chất như trong truyện cổ tích .
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
                    src="../../images/dalatcamp.jpeg"
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

export default Camp;
