import React, { useRef, useState } from "react";
import ReactECharts from "echarts-for-react";

const Gauge = () => {
  const [speedVaalue, setspeedVaalue] = useState(20);
  const ref = useRef();
  setTimeout(async () => {
    await setspeedVaalue(Math.round(Math.random() * 20 + 25));
  }, 2000);

  // 返回仪表盘的配置对象
  let option = {
    tooltip: {
      formatter: "{a} <br/>{b} : {c}%",
    },
    series: [
      //left
      // {
      //   name: "Pressureleft",
      //   type: "gauge",
      //   min: -200,
      //   max: 250,
      //   startAngle: -30,
      //   endAngle: -315,
      //   splitNumber: 9, //刻度
      //   radius: "35%", //文字块的圆角
      //   center: ["21%", "55%"], //仪表盘中心的偏移位置，数组第一项是水平方向的偏移，第二项是垂直方向的偏移
      //   axisLine: {
      //     //仪表盘轴线相关配置
      //     roundCap: true, //两端显示成圆形
      //     show: true, //显示仪表盘轴线
      //     lineStyle: {
      //       //轴线样式
      //       color: [[1, "blue"]],
      //     },
      //   },
      //   // splitLine: { //分隔线样式
      //   //   show: true
      //   // },
      //   axisTick: {
      //     //刻度
      //     show: false,
      //   },
      //   axisLabel: {
      //     //刻度标签
      //     show: true,
      //   },
      //   anchor: {
      //     //中心圆点刻度点
      //     show: true,
      //     showAbove: true,
      //   },
      //   pointer: {
      //     show: true,
      //   },
      //   detail: {
      //     show: true,
      //   },
      //   title: {
      //     //仪表盘标题
      //     fontSize: 12,
      //     fontWeight: 800,
      //     fontFamily: "Arial",
      //     color: "#fff",
      //     offsetCenter: [0, "-60%"],
      //   },
      //   progress: {
      //     //展示当前进度。
      //     show: true,
      //     width: 3,
      //     itemStyle: {
      //       color: "#fff",
      //     },
      //   },
      //   data: [
      //     {
      //       value: 250,
      //       name: "km/h",
      //     },
      //   ],
      // },

      // {
      //   name: "gauge 1",
      //   type: "gauge",
      //   min: 0,
      //   max: 250,
      //   startAngle: -140,
      //   endAngle: -305,
      //   splitNumber: 5,
      //   radius: "35%",
      //   center: ["21%", "55%"],
      //   axisLine: {
      //     //仪表盘轴线相关配置
      //     lineStyle: {
      //       color: [[1, "#AE96A6"]],
      //     },
      //   },
      //   splitLine: {
      //     //分隔线样式
      //     distance: -7,
      //     length: 12,
      //     lineStyle: {
      //       color: "#fff",
      //       width: 4,
      //     },
      //   },
      //   axisTick: {
      //     distance: -8,
      //     length: 8,
      //     lineStyle: {
      //       color: "#fff",
      //       width: 2,
      //     },
      //   },
      //   axisLabel: {
      //     //刻度标签
      //     distance: 14,
      //     fontSize: 18,
      //     fontWeight: 800,
      //     fontFamily: "Arial",
      //     color: "#fff",
      //   },
      //   anchor: {},
      //   pointer: {
      //     width: 5,
      //     length: "40%",
      //     offsetCenter: [0, "-58%"],
      //     itemStyle: {
      //       color: "#f00",
      //       shadowColor: "rgba(255, 0, 0)",
      //       shadowBlur: 5,
      //       shadowOffsetY: 2,
      //     },
      //   },
      //   title: {
      //     color: "#25068b",
      //     fontSize: 14,
      //     fontWeight: 800,
      //     fontFamily: "Arial",
      //     offsetCenter: [0, 0],
      //   },
      //   detail: {
      //     show: false,
      //   },
      //   data: [
      //     {
      //       value: 0,
      //       name: "当前位置：\n \n 地球上空",
      //     },
      //   ],
      // },
      // middle
      {
        name: "Pressuremid",
        type: "gauge",
        min: 0,
        max: 8,
        z: 10,
        startAngle: 210,
        endAngle: -30,
        splitNumber: 8,
        radius: "50%",
        center: ["50%", "50%"],
        axisLine: {
          show: true,
          lineStyle: {
            width: 0,
            color: [
              [0.825, "#fff"],
              [1, "#f00"],
            ],
          },
        },
        splitLine: {
          distance: 20,
          length: 15,
          lineStyle: {
            color: "auto",
            width: 4,
            shadowColor: "rgba(255, 255, 255, 0.5)",
            shadowBlur: 15,
            shadowOffsetY: -10,
          },
        },
        axisTick: {
          distance: 20,
          length: 8,
          lineStyle: {
            color: "auto",
            width: 2,
            shadowColor: "rgba(255, 255, 255)",
            shadowBlur: 10,
            shadowOffsetY: -10,
          },
        },
        axisLabel: {
          distance: 10,
          fontSize: 15,
          fontWeight: 100,
          fontFamily: "Arial",
          color: "#fff",
        },
        anchor: {},
        pointer: {
          width: 10,
          offsetCenter: [0, "-10%"],
          length: "75%",
          itemStyle: {
            color: "#f00",
            shadowColor: "rgba(255, 0, 0)",
            shadowBlur: 5,
            shadowOffsetY: 3,
          },
        },
        title: {
          color: "#fff",
          fontSize: 12,
          fontWeight: 800,
          fontFamily: "Arial",
          offsetCenter: [0, "-50%"],
        },

        progress: {
          //展示当前进度。
          show: true,
        },
        detail: {
          show: false,
          // valueAnimation: true,
          // formatter: "{value}",
        },
        data: [
          {
            value: speedVaalue,
            name: "Speed",
          },
        ],
      },

      {
        name: "gauge 3",
        type: "gauge",
        min: 0,
        max: 8,
        z: 10,
        splitNumber: 8,
        radius: "50%",
        axisLine: {
          lineStyle: {
            width: 14,
            color: [[1, "#000"]],
          },
        },
        splitLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          show: false,
        },
        anchor: {},
        pointer: {
          show: false,
        },
        title: {
          show: false,
        },
        detail: {
          offsetCenter: ["25%", "70%"],
          formatter: "{a|{value}}{b|km/h}",
          rich: {
            a: {
              fontSize: 20,
              fontWeight: 600,
              fontFamily: "Arial",
              color: "#fff",
              align: "center",
              padding: [0, 5, 0, 0],
            },
            b: {
              fontSize: 10,
              fontWeight: 800,
              fontFamily: "Arial",
              color: "#fff",
              padding: [0, 0, 20, 0],
            },
          },
        },
        // value is speed
        data: [
          {
            value: speedVaalue,
            name: "Pressuremid",
          },
        ],
      },

      // right
      {
        name: "gauge 4",
        type: "gauge",
        min: 0,
        max: 8,
        startAngle: 135,
        endAngle: -150,
        splitNumber: 8,
        radius: "50%",
        center: ["79%", "55%"],
        axisLine: {
          lineStyle: {
            color: [[1, "#AE96A6"]],
          },
        },
        splitLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          show: false,
        },
        anchor: {},
        pointer: {
          show: false,
        },
        title: {},
        detail: {
          offsetCenter: ["-19%", -3],
          formatter: [
            "{a|                  00:00}",
            "{a|飞行时间       0:00}{b| h}",
            "{a|飞行距离        0.0}{b| km}",
            "{a|平均耗能        ---}{b| 1/100km}",
            "{a|飞行速度        ---}{b| km/h}",
          ].join("\n"),
          rich: {
            a: {
              fontSize: 14,
              fontWeight: 800,
              fontFamily: "Arial",
              lineHeight: 22,
              color: "#fff",
              align: "left",
            },
            b: {
              fontWeight: 600,
              fontFamily: "Arial",
              lineHeight: 22,
              color: "#fff",
              align: "left",
            },
          },
        },
        progress: {
          show: true,
          width: 3,
          itemStyle: {
            color: "#fff",
          },
        },
        data: [
          {
            value: 250,
            name: "",
          },
        ],
      },

      {
        name: "gauge 5",
        type: "gauge",
        min: 0,
        max: 1,
        startAngle: 125,
        endAngle: 55,
        splitNumber: 2,
        radius: "49%",
        center: ["79%", "55.3%"],
        axisLine: {
          lineStyle: {
            width: 9,
            color: [
              [0.15, "#f00"],
              [1, "rgba(255, 0, 0, 0)"],
            ],
          },
        },
        splitLine: {
          distance: -14,
          length: 16,
          lineStyle: {
            color: "#fff",
            width: 4,
          },
        },
        axisTick: {
          distance: -14,
          length: 10,
          lineStyle: {
            color: "#fff",
            width: 2,
          },
        },
        axisLabel: {
          distance: 12,
          fontSize: 15,
          fontWeight: 800,
          fontFamily: "Arial",
          color: "#fff",
          formatter: function (value) {
            if (value === 0.5) {
              return "2/4";
            }
            if (value === 1) {
              return "4/4";
            }
            return value + "";
          },
        },
        progress: {
          show: true,
          width: 5,
          itemStyle: {
            color: "#fff",
          },
        },
        pointer: {
          show: false,
        },
        title: {},
        detail: {
          offsetCenter: ["10%", "-56%"],
          formatter: "{a|831}{b| km}",
          rich: {
            a: {
              fontSize: 8,
              fontWeight: 500,
              fontFamily: "Arial",
              color: "#fff",
            },
            b: {
              fontWeight: 300,
              fontFamily: "Arial",
              color: "#fff",
            },
          },
        },
        data: [
          {
            value: 0.85,
            name: "",
          },
        ],
      },

      {
        name: "gauge 6",
        type: "gauge",
        min: -120,
        max: -60,
        startAngle: 230,
        endAngle: 310,
        clockwise: false,
        splitNumber: 2,
        radius: "50%",
        center: ["79%", "55%"],
        axisLine: {
          lineStyle: {
            color: [
              [1, "#AE96A6"],
              [1.1, "#f00"],
            ],
          },
        },
        splitLine: {
          distance: -8,
          length: 12,
          lineStyle: {
            color: "#fff",
            width: 4,
          },
        },
        axisTick: {
          splitNumber: 3,
          length: 8,
          distance: -8,
          lineStyle: {
            color: "#fff",
            width: 2,
          },
        },
        axisLabel: {
          distance: 14,
          fontSize: 9,
          fontWeight: 800,
          fontFamily: "Arial",
          color: "#fff",
          formatter: function (value) {
            return -value + "";
          },
        },
        pointer: {
          width: 15,
          length: "4",
          offsetCenter: [0, "-90%"],
          itemStyle: {
            color: "#f00",
          },
        },
        title: {},
        detail: {
          show: false,
        },
        data: [
          {
            value: -120,
            name: "",
          },
        ],
      },
    ],
  };
  const onChartzoom = () => {
    ref.current.resize();
  };
  return (
    <>
      <ReactECharts
        ref={ref}
        onEvents={{ datazoom: onChartzoom }}
        lazyUpdate={true}
        option={option}
      />
    </>
  );
};

export default Gauge;
