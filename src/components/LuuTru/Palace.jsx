import React from "react";
import "../about.css";
import BackgroundImage from "../../images/cover-luutru.jpg";

import NavBar from "../NavBar";

const Palace = () => {
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
                <h2>Khách Sạn Đà Lạt Palace Heritage</h2>
                  <p>Khách sạn Dalat Palace là một hotel khá là thân thuộc đối với hầu hết các du khách du lịch tại Đà Lạt. Khách sạn sở hữu một nét cổ kính của thời kỳ Pháp nhưng lại pha trộn thêm phong cách hiện đại. Ngoài ra khách sạn đạt đúng tiêu chuẩn 5 sao, được bố trí trang thiết bị và các tiện nghi vô cùng hiện đại cùng với đó là những dịch vụ vô cùng đẳng cấp.
                  <br />Chắc chắn nơi đây sẽ là nơi nghỉ dưỡng tốt nhất dành cho những ai muốn đến tham quan khám phá tận hưởng bầu không khí trong lành của Phố núi Đà Lạt.</p>
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
                        src="../../images/dalatpalace.jpg"
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

export default Palace;
