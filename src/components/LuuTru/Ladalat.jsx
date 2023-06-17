import React from "react";
import "../about.css";
import BackgroundImage from "../../images/cover-luutru.jpg";

import NavBar from "../NavBar";

const Ladalat = () => {
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
                <h2>Ladalat Hotel</h2>
                  <p>Ladalat là sự pha trộn hài hòa giữa nền kiến trúc bán cổ điển sang trọng và nét duyên dáng của cảnh quan xung quanh. Phong cách phương Tây được bao bọc bởi khung cảnh thiên nhiên nên thơ của thị trấn miền núi giúp cho du khách gần gũi hơn với thiên nhiên và cảm nhận sự trong lành, khác xa với cuộc sống đầy khói bụi trên thành thị.
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
                        src="../../images/ladalat.jpg"
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

export default Ladalat;
