import React from "react";
import { ResponsiveContainer, PieChart, Pie, Tooltip } from "recharts";

export default function PieChartComp({ data, amount, name }) {
  return (
    <ResponsiveContainer width="100%" aspect={4 / 1}>
      <PieChart width={1000}>
        <Pie
          data={data}
          dataKey={amount}
          nameKey={name}
          cx="50%"
          cy="50%"
          outerRadius={90}
          fill="#82ca9d"
          label
        />
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
}
