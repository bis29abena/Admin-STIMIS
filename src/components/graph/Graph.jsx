import { ResponsiveContainer } from "recharts";
import LineChartComp from "../linchartcomp/LineChartComp";
import AreaChartComp from "../areachartcomp/AreaChartComp";
import BarChartComp from "../barchartcomp/BarChartComp";
import PieChartComp from "../piechartcomp/PieChartComp";
import HistogramComp from "../histogramcomp/HistogramComp";

export default function Graph({ chart }) {
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  if (chart == "Line") {
    return <LineChartComp data={data} uv="uv" pv="pv" name="name" />;
  } else if (chart == "Bar") {
    return <BarChartComp data={data} uv="uv" pv="pv" name="name" />;
  } else if (chart == "Pie Chart") {
    return <PieChartComp data={data} amount="amt" name="name" />;
  } else if (chart == "Area") {
    return <AreaChartComp data={data} uv="uv" pv="pv" name="name" />;
  } else {
    return <HistogramComp data={data} amt="amt" pv="pv" uv="uv" name="name"/>;
  }

  // return (
  //   <div>
  //     <LineChartComp data={data} uv="uv" pv="pv" name="name"/>
  //     <AreaChartComp data={data} uv="uv" pv="pv" name="name"/>
  //     <BarChartComp data={data} uv="uv" pv="pv" name="name"/>
  //     <PieChartComp data={data} amount="amt" name="name"/>
  //   </div>
  // );
}
