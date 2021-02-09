import React from "react";
import styles from "./ChartCard.module.css";
import { VictoryChart, VictoryBar, VictoryLabel } from "victory";

const PercentageCard = () => {
  const graph = [
    {
      x: "Comida",
      y: "10",
      label: "10",
    },
    {
      x: "Games",
      y: "96",
      label: "96",
    },
    {
      x: "Sla",
      y: "955",
      label: "955",
    },
  ];

  return (
    <article className={styles.chart}>
      Chart
      <VictoryChart domainPadding={{ x: 15 }}>
        <VictoryBar
          style={{
            data: {
              fill: ({ datum }) => (datum.x === "Comida" ? "red" : "blue"),
            },
            labels: {
              fontSize: 20,
            },
          }}
          // labels={({ datum }) => datum.y}
          animate={{
            duration: 2000,
            onLoad: { duration: 1000 },
          }}
          alignment="start"
          labelComponent={
            <VictoryLabel
              style={[{ fontSize: 16 }]}
              angle={-30}
              textAnchor="start"
              dx={3}
              dy={0}
            />
          }
          data={graph}
        />
      </VictoryChart>
    </article>
  );
};

export default PercentageCard;
