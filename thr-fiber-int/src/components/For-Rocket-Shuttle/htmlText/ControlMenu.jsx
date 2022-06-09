import React, { useCallback } from "react";
import { Button } from "antd";
import { PoweroffOutlined, BulbOutlined } from "@ant-design/icons";
import { useRingLampsStore, useRocket } from "@/store/store";

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
    <div
      className="
       flex 
       md:flex-row md:justify-between md:content-center
       sm:flex-col
       w-auto h-auto
       absolute 
       top-20 right-10
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
  );
};

export default ControlMenu;
