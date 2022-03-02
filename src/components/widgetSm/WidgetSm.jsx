import { Visibility } from "@mui/icons-material";
import "./widgetSm.css";
import avatar from "assets/images/avatar.jpeg";

export default function WidgetSm() {
  return (
    <div className="widget-sm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img src={avatar} alt="" className="widgetSmListImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Ellen Hang</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        {/* --- */}
        <li className="widgetSmListItem">
          <img src={avatar} alt="" className="widgetSmListImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Ellen Hang</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        {/* --- */}
        <li className="widgetSmListItem">
          <img src={avatar} alt="" className="widgetSmListImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Ellen Hang</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
}
