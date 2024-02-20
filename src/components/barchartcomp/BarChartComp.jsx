import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from "recharts";

export default function BarChartComp({ data, uv, pv, name }) {
  return (
    <ResponsiveContainer width="100%" aspect={4 / 1}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={name} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey={uv} fill="#8884d8" />
        <Bar dataKey={pv} fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  );
}
