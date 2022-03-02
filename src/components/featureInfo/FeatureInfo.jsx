import "./featureInfo.css";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";

export default function FeatureInfo() {
  return (
    <div className="featured">
      {/* Revenue */}
      <div className="featuredItem">
        <span className="featuredTitle">Revenue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$13,121</span>
          <span className="featuredMoneyRate">
            - 11.4
            <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      {/* Sales */}
      <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$11,121</span>
          <span className="featuredMoneyRate">
            -11.4
            <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      {/* Cost */}
      <div className="featuredItem">
        <span className="featuredTitle">Cost</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$1,121</span>
          <span className="featuredMoneyRate">
            11.4
            <ArrowUpward className="featuredIcon" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  );
}
