import React, { useRef, useState } from "react";
import ReactECharts from "echarts-for-react";

const Gauge = () => {
  const [speedVaalue, setspeedVaalue] = useState(20);
  const ref = useRef()
  setTimeout(async () => {
    await setspeedVaalue(Math.round(Math.random() * 20 + 25));
  }, 2000);

  // 返回仪表盘的配置对象
  let option = {
    tooltip: {
      formatter: "{a} <br/>{b} : {c}%",
    },
    series: [
      {
        name: "Pressure",
        type: "gauge",
        progress: {
          show: true,
        },
        detail: {
          valueAnimation: true,
          formatter: "{value}",
        },
        data: [
          {
            value: speedVaalue,
            name: "Speed",
          },
        ],
      },
    ],
  };
  const onChartzoom = () => {
    ref.current.resize()
  }
  return (
    <>
      <ReactECharts ref={ref} onEvents={{'datazoom': onChartzoom}} lazyUpdate={true} option={option} />
    </>
  );
};

export default Gauge;
