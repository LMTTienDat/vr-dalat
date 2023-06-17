import React from "react";
import "../about.css";
import BackgroundImage from "../../images/cover-thac.jpg";

import NavBar from "../NavBar";

const LangBiang = () => {
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
                <h2>Thác Datanla</h2>
                  <p>Langbiang là đỉnh núi cao nhất của Đà Lạt, được ví là “nóc nhà” của Thành phố ngàn hoa. Langbiang là hai ngọn núi: Núi Ông và núi Bà nằm cách thành phố Đà Lạt 12km thuộc địa phận huyện Lạc Dương, tỉnh Lâm Đồng.
                    <br/> Núi Langbiang có độ cao 2167m so với mực nước biển, ngọn núi này không chỉ đơn thuần là là một điểm du lịch hấp dẫn mà bên trong đó còn chứa đựng một truyền thuyết tình yêu say đắm.
                    <br/> Ngày nay, khu du lịch núi Langbiang đã dần trở thành điểm đến được khách du lịch lựa chọn tham quan khi du lịch Đà Lạt. Đến với Langbiang du khách sẽ được nghe câu chuyện tình yêu đầy xúc động của K’lang và H’biang. Bên cạnh đó, Langbiang còn mang đến cho du khách nhiều điều tuyệt khác từ cảnh đẹp kì vĩ, không khí mát mẻ, trong lành... Chinh phục Langbiang để có thể chiêm ngưỡng vẻ đẹp của thiên nhiên ban tặng quả thực là một điều vô cùng tuyệt vời đối với du khách.
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
                        src="../../images/langbiang.jpg"
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

export default LangBiang;
