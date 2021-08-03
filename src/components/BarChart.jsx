import React from "react";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Example = ({ stats, isLoading }) => {
  const added = parseInt(stats.total);
  const edited = parseInt(stats.edited);
  const deleted = parseInt(stats.deleted);

  const data = [
    {
      name: "Total Clients",
      current_number: added,
    },
    {
      name: "Deleted Clients",
      current_number: deleted,
    },
    {
      name: "Modified Clients",
      current_number: edited,
    },
  ];
  return (
    <ResponsiveContainer width="100%" aspect={3}>
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="current_number" fill="#34cdeb" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Example;
