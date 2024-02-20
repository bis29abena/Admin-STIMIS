import React from "react";
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

function LineChartComp({ data, uv, pv, name }) {
  return (
    <ResponsiveContainer width="100%" aspect={4 / 1}>
      <LineChart data={data}>
        <XAxis dataKey={name} stroke="#5550bd" />
        <Line type="monotone" dataKey={uv} stroke="#5550bd" />
        <Line
          type="monotone"
          dataKey={pv}
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Tooltip />
        <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default LineChartComp;
