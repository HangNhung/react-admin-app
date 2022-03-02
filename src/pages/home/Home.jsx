import Chart from "components/chart/Chart";
import FeatureInfo from "components/featureInfo/FeatureInfo";
import "./home.css";
import { data } from "../../dummyData";

export default function Home() {
  return (
    <div className="home">
      <FeatureInfo />
      <Chart title="User Analytics" data={data} dataKey="Active User" grid />
    </div>
  );
}
