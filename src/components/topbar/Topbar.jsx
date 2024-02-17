import React from "react";
import {NotificationsNone, ManageAccounts } from '@mui/icons-material';
import "./topbar.css"

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">STIMIS</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone/>
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <ManageAccounts/>
          </div>
          <img src="https://images.pexels.com/photos/845457/pexels-photo-845457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}
