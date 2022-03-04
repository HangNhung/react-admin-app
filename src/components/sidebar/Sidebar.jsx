import {
  FeedbackOutlined,
  InsightsOutlined,
  Inventory2Outlined,
  LeaderboardOutlined,
  LineStyle,
  MailOutline,
  ManageAccountsOutlined,
  MessageOutlined,
  PaidOutlined,
  PersonOutline,
  Report,
  Timeline,
  TrendingUp,
} from "@mui/icons-material";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className={`sidebar ${isDark ? "" : "night"}`}>
      <div className="sidebarWrapper">
        {/* Dashboard */}
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to={"/"} className="link">
              <li className="sidebarListItem">
                <LineStyle className="sidebarIcon" />
                <span className="listItemText">Home</span>
              </li>
            </Link>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              <span className="listItemText">Analytics</span>
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon" />
              <span className="listItemText">Sales</span>
            </li>
          </ul>
        </div>
        {/* Quick Menu */}
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to={"/users"} className="link">
              <li className="sidebarListItem">
                <PersonOutline className="sidebarIcon" />
                <span className="listItemText">Users</span>
              </li>
            </Link>
            <Link to={"/products"} className="link">
              <li className="sidebarListItem">
                <Inventory2Outlined className="sidebarIcon" />
                <span className="listItemText">Products</span>
              </li>
            </Link>
            <li className="sidebarListItem">
              <PaidOutlined className="sidebarIcon" />
              <span className="listItemText">Transactions</span>
            </li>
            <li className="sidebarListItem">
              <LeaderboardOutlined className="sidebarIcon" />
              <span className="listItemText">Reports</span>
            </li>
          </ul>
        </div>
        {/* Notifications */}
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <MailOutline className="sidebarIcon" />
              <span className="listItemText">Mail</span>
            </li>
            <li className="sidebarListItem">
              <FeedbackOutlined className="sidebarIcon" />
              <span className="listItemText">Feeback</span>
            </li>
            <li className="sidebarListItem">
              <MessageOutlined className="sidebarIcon" />
              <span className="listItemText">Messages</span>
            </li>
          </ul>
        </div>
        {/* Staff */}
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <ManageAccountsOutlined className="sidebarIcon" />
              <span className="listItemText">Manage</span>
            </li>
            <li className="sidebarListItem">
              <InsightsOutlined className="sidebarIcon" />
              <span className="listItemText">Analytics</span>
            </li>
            <li className="sidebarListItem">
              <Report className="sidebarIcon" />
              <span className="listItemText">Reports</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="sidebarBottom">
        <div className="colorBox dark" onClick={() => setIsDark(true)}></div>
        <div className="colorBox night" onClick={() => setIsDark(false)}></div>
      </div>
    </div>
  );
}
