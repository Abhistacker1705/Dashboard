import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
const ActivitiesChart = ({data}) => {
  const lineColors = {
    Guest: "#E9A0A0",
    User: "#9BDD7C",
  };

  const lines = Object.keys(lineColors).map((key) => (
    <Line
      key={key}
      type="monotone"
      data={data.filter((d) => d.key === key)}
      dataKey="y"
      name={key}
      stroke={lineColors[key]}
      strokeWidth={3}
      intercept="natural"
    />
  ));

  return (
    <div className="flex flex-col p-8 bg-white h-[600px] w-[99.5%] rounded-[20px]">
      <h1 className="text-black text-lg font-bold">Activities</h1>
      <select
        className="w-fit h-[10%] border-none text-[#858585] text-sm"
        // onChange={(event) => setSelectedMonth(event.target.value)}
      >
        <option value="May">May-June 2021</option>
        <option value="June">June-July 2021</option>
        <option value="July">July-Aug 2021</option>
        <option value="Aug">Aug-Sep 2021</option>
      </select>
      <ResponsiveContainer width={"100%"} height={"100%"}>
        <LineChart data={data}>
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="x" />
          <YAxis display="none" dataKey="y" tickLine={true} />
          <Legend
            verticalAlign="top"
            align="right"
            height={36}
            iconType="circle"
            iconSize={12}
            formatter={(value, entry) => {
              const {color} = entry;
              return (
                <span style={{color}}>
                  <span
                    style={{
                      color: "black",
                      paddingLeft: "1rem",
                      marginRight: "2rem",
                    }}>
                    {value}
                  </span>
                </span>
              );
            }}
          />
          {lines}
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ActivitiesChart;
