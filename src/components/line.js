import React from "react";
import { ResponsiveLine } from "@nivo/line";
import data from "../data";

// make sure parent container have a defined height when using responsive component,
// otherwise height will be 0 and no chart will be rendered.
// website examples showcase many properties, you'll often use just a few of them.
const Line = () => (
  <ResponsiveLine
    data={data}
    margin={{
      top: 50,
      right: 110,
      bottom: 50,
      left: 60
    }}
    xScale={{
      type: "time",
      format: "%Y-%m-%d"
    }}
    xFormat="time:%Y-%m-%d"
    yScale={{
      type: "linear",
      stacked: false
    }}
    axisLeft={{
      legend: "linear scale",
      legendOffset: -50
    }}
    axisBottom={{
      format: "%b %d",
      tickValues: "every month",
      legend: "time scale",
      legendOffset: 40
    }}
    curve="monotoneX"
    markers={[
      {
        axis: "x",
        value: data[0].data[7].x,
        lineStyle: { stroke: "#babafe", strokeWidth: 5 },
        legend: "x marker"
      }
    ]}
    enablePointLabel={true}
    pointSize={16}
    pointBorderWidth={1}
    pointBorderColor={{
      from: "color",
      modifiers: [["darker", 0.3]]
    }}
    enableSlices={false}
    legends={[
      {
        anchor: "bottom-right",
        direction: "column",
        justify: false,
        translateX: 100,
        translateY: 0,
        itemsSpacing: 0,
        itemDirection: "left-to-right",
        itemWidth: 80,
        itemHeight: 20,
        itemOpacity: 0.75,
        symbolSize: 12,
        symbolShape: "circle",
        symbolBorderColor: "rgba(0, 0, 0, .5)",
        effects: [
          {
            on: "hover",
            style: {
              itemBackground: "rgba(0, 0, 0, .03)",
              itemOpacity: 1
            }
          }
        ]
      }
    ]}
  />
);

export default Line;
