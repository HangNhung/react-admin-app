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
import { Link } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        {/* Dashboard */}
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to={"/"} className="link">
              <li className="sidebarListItem">
                <LineStyle className="sidebarIcon" />
                Home
              </li>
            </Link>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon" />
              Sales
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
                Users
              </li>
            </Link>
            <Link to={"/products"} className="link">
              <li className="sidebarListItem">
                <Inventory2Outlined className="sidebarIcon" />
                Products
              </li>
            </Link>
            <li className="sidebarListItem">
              <PaidOutlined className="sidebarIcon" />
              Transactions
            </li>
            <li className="sidebarListItem">
              <LeaderboardOutlined className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
        {/* Notifications */}
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <MailOutline className="sidebarIcon" />
              Mail
            </li>
            <li className="sidebarListItem">
              <FeedbackOutlined className="sidebarIcon" />
              Feeback
            </li>
            <li className="sidebarListItem">
              <MessageOutlined className="sidebarIcon" />
              Messages
            </li>
          </ul>
        </div>
        {/* Staff */}
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <ManageAccountsOutlined className="sidebarIcon" />
              Manage
            </li>
            <li className="sidebarListItem">
              <InsightsOutlined className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <Report className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
