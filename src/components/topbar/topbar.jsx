import React from "react";
import { NotificationsNone, Language, Settings } from "@mui/icons-material";
import "./topbar.css";
import avatar from "assets/images/avatar.jpeg";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Ellenadmin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img src={avatar} alt="avatar" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}
