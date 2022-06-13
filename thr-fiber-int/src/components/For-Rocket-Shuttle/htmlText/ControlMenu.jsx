import React, { useCallback, useMemo, useState } from "react";
import { Button } from "antd";
import {
  PoweroffOutlined,
  BulbOutlined,
  CaretLeftOutlined,
  CaretRightOutlined,
  DoubleLeftOutlined,
  DoubleRightOutlined,
} from "@ant-design/icons";
import { useRingLampsStore, useRocket } from "@/store/store";
import Gauge from "./Gauge";
import { Html } from "@react-three/drei";
import * as THREE from "three";
import { useWindowSize } from "../../../hooks/useWindowSize";
import { useThree } from "@react-three/fiber";

const ControlMenu = (props) => {
  //光环灯操作
  const { isVisable } = useRingLampsStore((state) => state.ringLampsState);
  const closeLamps = useRingLampsStore((state) => state.closeLamps); //关闭
  const openLamps = useRingLampsStore((state) => state.openLamps); //打开
  const { width, height } = useWindowSize();
  const aposition = useMemo(
    () => new THREE.Vector3(300, -height / 35, -width / 8.3),
    [height, width]
  );
  // 视角操作
  const { changeposition, Pposition } = props;
  const newaposition = useMemo(() => new THREE.Vector3(-10, -8, 8), []);
  const oldposition = useMemo(() => new THREE.Vector3(10, 10, 10), []);
  const [angle, setAngle] = useState(true);
  const {camera} = useThree()

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
  //视角切换
  const changeAnglenew = useCallback(async () => {
    setAngle(false);
    await changeposition(newaposition,camera);
  }, [camera, changeposition, newaposition]);

  const changeAngleorg = useCallback(async () => {
    setAngle(true);
    await changeposition(oldposition,camera);
  }, [camera, changeposition, oldposition]);

  return (
    <Html prepend scale={1} position={aposition}>
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
       ring ring-indigo-300 gap-4
       z-20 "
      >
        {isVisable ? (
          <Button
            style={{ pointerEvents: "auto", color: "orange" }}
            onClick={CloseRingBule}
            className="text-amber-400"
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
            <CaretLeftOutlined />
            火箭前进
          </Button>
        ) : (
          <Button
            style={{ pointerEvents: "auto", color: "orange" }}
            onClick={MoveRocket}
            ghost
          >
            <CaretRightOutlined />
            火箭运动返回
          </Button>
        )}
        {angle ? (
          <Button
            style={{ pointerEvents: "auto", color: "orange" }}
            onClick={changeAnglenew}
            ghost
          >
            <DoubleLeftOutlined />
            切换后面视角
          </Button>
        ) : (
          <Button
            style={{ pointerEvents: "auto", color: "orange" }}
            onClick={changeAngleorg}
            ghost
          >
            <DoubleRightOutlined />
            切换回原视觉
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
    </Html>
  );
};

export default ControlMenu;
