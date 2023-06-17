import React from "react";
import "../about.css";
import BackgroundImage from "../../images/cover-cohong.jpg";

import NavBar from "../NavBar";

const BietThuHangNga = () => {
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
                <h2>Biệt thự Hằng Nga</h2>
                  <p>Biệt thự Hằng Nga còn được người ta gọi với tên khác là crazy house dalat. Nó nằm trên một con đường nhỏ trực thuộc thành phố Đà Lạt. Giữa những rừng cây ôm đồm xum xuê ríu rít tiếng chim ca. Đối lập ở bên trong đó là một công trình kiến trúc vô cùng mới mẻ độc đáo và đầy sáng tạo. Nếu bạn là kiểu người thích khám phá độc đáo và mới lạ. Thì nơi đây chính là một địa điểm vô cùng thích hợp. Luôn chờ đợi những bước chân của du khách đến khám phá.
                  <br />Crazy house Đà Lạt này khi du khách đến lần đầu tiên. Tôi chắc hẳn rằng các bạn sẽ vô cùng ngạc nhiên. Trước vẻ đẹp kỳ bí pha vào đó là một chút nét đẹp hoang sơ thời tiền sử của các công trình kiến trúc cổ xưa. Khi bước chân vào căn biệt thự cổ kính này chắc hẳn rằng các bạn sẽ rất ngạc nhiên về cấu trúc kì dị cũng không kém phần thú vị của căn biệt thự này.
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
                        src="../../images/bietthuHN.png"
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

export default BietThuHangNga;
