import React from "react";
import "../about.css";
import BackgroundImage from "../../images/cover-luutru.jpg";

import NavBar from "../NavBar";

const Wonder = () => {
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
                <h2>Dalat Wonder Resort</h2>
                  <p>Được mệnh danh như một ngôi làng Châu u thu nhỏ ngay giữa lòng Đà Lạt, Dalat Wonder Resort nằm xinh xắn trong khuôn viên của khu du lịch Quốc gia Hồ Tuyền Lâm với diện tích hồ nước, đồi thông bao quanh thơ mộng, trữ tình. Với công suất phục vụ lên tới 312 phòng nghỉ của khối building và 38 căn villa, tiêu chuẩn chất lượng dịch vụ 4 sao đẳng cấp quốc tế, nơi đây sẽ là sự lựa chọn hoàn hảo cho chuyến nghỉ dưỡng của Quý khách và người thân.
                  <br />Không chỉ phục vụ hoạt động nghỉ dưỡng, đến với chúng tôi, Quý khách có thể dễ dàng thiết kế các hoạt động vui chơi cùng gia đình, bạn bè, người thân ngay tại Resort khi tham quan Khu Vui chơi Giải trí WonderLand. Với các hoạt động trò chơi mạo hiểm phong phú như đua xe địa hình, xe trượt, cưỡi đà điểu, hay các hoạt động trải nghiệm độc đáo như: tham quan nhà tuyết với cái lạnh âm độ duy nhất tại Đà Lạt, hết hồn trải nghiệm nhà ma, hay phiêu lưu với thế giới games thực tế ảo, du ngoạn cưỡi ngựa, sôi động cùng cuộc đua chó, cưỡi đà điểu... Đây là môi trường lí tưởng cho mọi độ tuổi, mọi thành viên đều có thể tham gia và ghi dấu kỷ niệm. </p>
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
                        src="../../images/DalatWonder.png"
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

export default Wonder;
