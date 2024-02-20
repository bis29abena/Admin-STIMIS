import Graph from "../graph/Graph";
import BasicTable from "../table/BasicTable";
import "./chart.css";

export default function Chart({ type, chart }) {

  return (
    <div className="chart">
      <h3 className="chartTitle">Analytics</h3>
      {type == "Graph" ? <Graph chart={chart} /> : <BasicTable />}
    </div>
  );
}
