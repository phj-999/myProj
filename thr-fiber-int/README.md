# 材质和模型的对应关系

> - 点材质 ---  点模型Points
>
> - 线材质 ---  线条类型模型  ---  Line，LineLoop，LineSegments 
> - 网格材质  ---  网格模型  ---  Mesh
>  ​                 ---  骨骼网格模型  ---  SkinnedMesh
> - 精灵材质  ---  精灵模型 ---  Sprite
>
### 高光网格材质   <meshPhongMaterial />
除了和MeshLambertMaterial一样可以实现光源和网格表面的漫反射光照计算，还可以产生高光效果(镜面反射)。

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
`<pointLight castShadow />` 
#### 阴影
Object3D中  .castShadow : Boolean  对象是否被渲染到阴影贴图中。默认值为false。
receiveshadow 是接收阴影  也就是阴影存在哪个面

### BufferGeometry
BoxBufferGeometry、PlaneBufferGeometry、sphereBufferGeometry等几何体类的基类是BufferGeometry
比如创建一个灯泡💡

```js
 <mesh>
        <sphereBufferGeometry />
        <meshPhongMaterial emissive={'yellow'}/>
 </mesh>
```

