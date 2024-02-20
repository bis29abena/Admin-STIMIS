import { useState } from "react";
import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import Toolbar from "../../components/toolbar/Toolbar";
import "./home.css";

export default function Home() {
  const [type, setType] = useState("Graph");
  const [chart, setChartType] = useState("Line");

  return (
    <div className="home">
      <Toolbar setType={setType} type={type} setChartType={setChartType} />
      <FeaturedInfo />
      <Chart type={type} chart={chart} />
    </div>
  );
}
