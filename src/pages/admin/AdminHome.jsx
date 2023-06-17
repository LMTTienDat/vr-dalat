import React from "react";
import "./admin.css"
import Sidebar from "../../components/admin/sidebar/Sidebar";
import BackgroundImage from "../../images/cover_bg_3.jpg"



function AdminHome() {
  return (
    <div>
		<div class="fh5co-hero">
			<div class="fh5co-overlay"></div>
			<div class="fh5co-cover " data-stellar-background-ratio="0.5" style={{background: `url(${BackgroundImage})` }}>
				<div class="side ">
					<Sidebar/>
				</div>
			</div>
		</div>
        </div>
  );
}
export default AdminHome;
