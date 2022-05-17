### `<axesHelper />` 坐标轴
### OrbitControls轨道控制器
1. 可以像使用其他three objects一样来使用OrbitControls和react
2. 可以鼠标控制3维立体 缩放 放大 转动功能
```javascript
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
extend({ OrbitControls }); //现在可以像使用其他three objects一样来使用OrbitControls和react
const Orbit = () => {
  const { camera, gl } = useThree();
  return <orbitControls args={[camera, gl.domElement]} />;
};
export default Orbit;
// use ->  <Orbit /> 轨道控制 可以鼠标控制3维立体 缩放 放大 转动功能
```
### `<ambientLight> ` 环境光
intensity 光照的强度 color 颜色的rgb数值  `<ambientLight intensity={0.2}/>`

###  `<pointLight />` 光源设置-点光源
`<pointLight />`