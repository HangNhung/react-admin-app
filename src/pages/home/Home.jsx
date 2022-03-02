import Chart from "components/chart/Chart";
import FeatureInfo from "components/featureInfo/FeatureInfo";
import "./home.css";
import { data } from "../../dummyData";
import WidgetLg from "components/widgetLg/WidgetLg";
import WidgetSm from "components/widgetSm/WidgetSm";

export default function Home() {
  return (
    <div className="home">
      <FeatureInfo />
      <Chart title="User Analytics" data={data} dataKey="Active User" grid />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}
