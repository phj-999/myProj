import React from "react";
import { Button } from "antd";
import { PoweroffOutlined, BulbOutlined } from "@ant-design/icons";
import { useRingLampsStore, useRocket } from "@/store/store";
import Gauge from "./Gauge";

const ControlMenu = (props) => {
  //光环灯操作
  const { isVisable } = useRingLampsStore((state) => state.ringLampsState);
  const closeLamps = useRingLampsStore((state) => state.closeLamps); //关闭
  const openLamps = useRingLampsStore((state) => state.openLamps); //打开
  const CloseRingBule = async () => {
    await closeLamps();
  }; //光环灯光关闭
  const OpenRingBule = async () => {
    await openLamps();
  }; // 光环灯光打开

  //火箭操作
  const { isactive } = useRocket((state) => state.rocketState);
  const move = useRocket((state) => state.move);
  const back = useRocket((state) => state.back);
  const MoveRocket = async () => {
    await move();
  };
  const BackRocket = async () => {
    await back();
  };

  return (
    <>
      <div
        className="
       flex 
       md:flex-row md:justify-between md:content-center
       sm:flex-col
       w-auto h-auto
       absolute 
       top-10 right-10
       opacity-60
       bg-optblue 
       pointer-events-auto
       ring ring-indigo-300 
       z-20 "
      >
        {isVisable ? (
          <Button
            style={{ pointerEvents: "auto", color: "orange" }}
            onClick={CloseRingBule}
            ghost
          >
            <PoweroffOutlined />
            关闭光环灯光
          </Button>
        ) : (
          <Button
            style={{ pointerEvents: "auto", color: "orange" }}
            onClick={OpenRingBule}
            ghost
          >
            <BulbOutlined />
            打开光环灯光
          </Button>
        )}

        {isactive ? (
          <Button
            style={{ pointerEvents: "auto", color: "orange" }}
            onClick={BackRocket}
            ghost
          >
            <PoweroffOutlined />
            火箭前进
          </Button>
        ) : (
          <Button
            style={{ pointerEvents: "auto", color: "orange" }}
            onClick={MoveRocket}
            ghost
          >
            <BulbOutlined />
            火箭运动返回
          </Button>
        )}
      </div>
      <div
        className="
       opacity-60 bg-optblue
    text-orange-500 absolute  top-28 right-10 w-60 h-auto 
    antialiased font-serif text-lg font-semibold tracking-wider break-all
    md:block
    sm:hidden
    "
      >
        <div className="text-center">Rocket功能</div>
        <div>
          鼠标滑过Rocketb部件,部件颜色改变成金黄色,同时显示对应的html内容介绍
          <br />
          鼠标划出,HTML介绍内容消失,Rocket部件颜色取消
        </div>
      </div>
      <div className=" absolute bottom-0 right-6 w-[20vw] h-auto bg-optblue opacity-60 rounded-lg">
        <Gauge />
      </div>
    </>
  );
};

export default ControlMenu;
