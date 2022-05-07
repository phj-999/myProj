1. observable 定义一个存储state的可追踪字段（proxy）
2. makeObservable 参数1： 指定谁变成响应式  参数2：指定哪些属性或者方法变成可观察的

```js
class Counter {
    //...
  counter = 0;
  constructor() {
    //参数1： 指定谁变成响应式
    //参数2：指定哪些属性或者方法变成可观察的
    makeObservable(this, {
      counter: observable, //counter是可观察的
      increment: action, //修改counter的方法是个action
      resset: action,
      decrement: action.bound,//加了bound，onClick时候不用写()=>
      double: computed,
    });
  }
    //...
}
```

1. makeAutoObservable: 加强版的makeObservable 

   如上代码块，在`makeObservable` 里面要一一指定属性，方法是observable还是action，computed，比较麻烦，于是有了`makeAutoObservable`

   规则：所有属性自动变成obsevable，

   ​            所有方法自动都成为action

   ​             所有get自动成为computed  

   所以直接 `constructor() {makeAutoObservable(this)}`就好了

   如果有不想被追踪观察的属性和方法，利用overrides排除 `constructor() {makeAutoObservable(this,{不想被观察的方法/属性:false})}`

   通过autoBind可以绑定this的指向`constructor() {makeAutoObservable(this,{不想被观察的方法/属性:false},{autoBind:true})}`

   那以上代码来举例，

   ```jsx
    <h3>计数器</h3>
         <div>点击次数:{counter.counter}</div>
         <div>double:{counter.double}</div>
         <div>
           <button onClick={() => counter.increment()}>+1</button>
           <button onClick={() => counter.resset()}>restart</button>
           <button
             onClick={counter.decrement}
           >{`-1（不用()=>的写法，store下属性加bound）`}</button>
         </div>
   ```

   加autoBind:true与不加的区别：

   如果用的是以上代码块，`constructor() {makeAutoObservable(this}`，increment和resset不会报错，但是-1的时候会报错，如果加上`{autoBind:true})`，`constructor() {makeAutoObservable(this,{},{autoBind:true})}`，则以上方法都不会报错

2. action 将一个方法标记为可修改state的action

3. computed 标记一个可以由satte派生出新的值 并且缓存其输出的计算属性

4. observer是一个高阶组件  需要包裹一个组件 这个组件才会变成响应式的 才会更新（从'mobx-react或者'mobx-react-lite中导入）

流程：

触发事件  action派发  更新observable状态  ，计算属性重新计算  页面中渲染 

基本使用

创建store

store/counter.ts 通过class创建一个counter类

使用makeObservable将类的属性和方法变成响应式

导出counter实例



makeAuto

