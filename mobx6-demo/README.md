observable 定义一个存储state的可追踪字段（proxy）

action 将一个方法标记为可修改state的action

computed 标记一个可以由satte派生出新的值 并且缓存其输出的计算属性

observer是一个高阶组件  需要包裹一个组件 这个组件才会变成响应式的 才会更新（从'mobx-react或者'mobx-react-lite中导入）

流程：

触发事件  action派发  更新observable状态  ，计算属性重新计算  页面中渲染 

基本使用

创建store

store/counter.ts 通过class创建一个counter类

使用makeObservable将类的属性和方法变成响应式

导出counter实例

