import React from "react";
import {
  ResponsiveContainer,
  Bar,
  XAxis,
  CartesianGrid,
  Tooltip,
  Area,
  Legend,
  ComposedChart,
  Line,
  YAxis
} from "recharts";

export default function HistogramComp({ data, amt, uv, pv, name }) {
  return (
    <ResponsiveContainer width="100%" aspect={4 / 1}>
      <ComposedChart data={data}>
        <XAxis dataKey={name} />
        <YAxis/>
        <Tooltip />
        <Legend />
        <CartesianGrid stroke="#f5f5f5" />
        <Area type="monotone" dataKey={amt} fill="#8884d8" stroke="#8884d8" />
        <Bar dataKey={pv} barSize={20} fill="#413ea0" />
        <Line type="monotone" dataKey={uv} stroke="#ff7300" />
      </ComposedChart>
    </ResponsiveContainer>
  );
}
