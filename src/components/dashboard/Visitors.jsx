import React, { useEffect } from "react";
import HeadTitle from "./HeadTitle";
import { useSelector, useDispatch } from "react-redux";
import { fetchVisitors } from "../../redux/slices/apiSlice";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Visitors = () => {
  const state = useSelector((state) => state.apis.visitorsData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchVisitors());
  }, [dispatch]); // dispatch가 변경될 때 한번 실행

  console.log(state);
  return (
    <div className="block-wrap">
      <HeadTitle title="Visitors Insights" />
      <div className="line-chart w-full h-[230px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={state}
            margin={{
              top: 10,
              right: 5,
              left: -20,
              bottom: 0,
            }}
          >
            <CartesianGrid
              strokeDasharray="3 0"
              stroke="#333"
              vertical={false}
              horizontal={true}
            />
            <XAxis
              dataKey="month"
              tickSize={0}
              axisLine={false}
              padding={{ left: 0 }}
              tick={({ payload, x, y, dy }) => (
                <text
                  x={x}
                  y={y + 20}
                  dy={dy}
                  fill="#777"
                  fontSize={14}
                  textAnchor="middle"
                >
                  {payload.value}
                </text>
              )}
            />
            <YAxis
              tickSize={0}
              axisLine={false}
              ticks={[0, 100, 200, 300, 400]}
              tick={{
                fill: "#777",
                fontSize: 14,
              }}
            />
            <Tooltip />
            <Legend />
            <Line
              dot={false}
              type="basis"
              dataKey="new_customers"
              stroke="#f64e60"
              strockWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Visitors;
