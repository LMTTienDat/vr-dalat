import React from "react";
import "../about.css";
import BackgroundImage from "../../images/cover-amthuc.jpg";

import NavBar from "../NavBar";

const ChoDem = () => {
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
                  <h2>Chợ đêm</h2>
                  <p>
                  Chợ Đêm Đà Lạt – Với khung cảnh non nước trữ tình, núi đồi hùng vĩ. Đà Lạt đang dần trở thành một điểm đến du lịch được nhiều du khách trong và ngoài nước yêu thích. Đến Đà Lạt buổi ngày du khách có thể đến tham quan các danh lam thắng cảnh. Vào buổi tối thì đi dạo, khám phá Đà Lạt sôi động về đêm.

                  
                  <br />Được thành lập được hơn 50 năm, Chợ đêm Đà Lạt hay còn gọi là Chợ Âm Phủ”. Là một nét đặc trưng tiêu biểu cho “thành phố buồn”. “Chợ Âm Phủ” chính là cái tên xa xưa của Chợ đêm Đà Lạt. Vì sao ngôi chợ này lại có cái tên kinh dị như thế? Lý do là ngày mới lập chợ, nơi đây chuyên bán đồ ăn đêm với rải rác vài quán hàng rong trong. Vài ngọn đèn dầu le lói bập bùng giữa màn sương lạnh. Mang đến cảm giác mờ mờ ảo ảo, đó chính là sự tích của tên chợ Âm Phủ.
                  </p>
                  <h3 class="my-3">Liên quan</h3>
                  <ul>
                    <li>Nem nướng bà Hùng</li>
                    <li>Lẩu bò ba toa</li>
                    <li>Lẩu gà lá é</li>
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
                    src="../../images/chodem.jpg"
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

export default ChoDem;
