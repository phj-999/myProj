import React from "react";
import { observer } from "mobx-react";
import counter from "../store/Counter";

const FucComponentsDemo = () => {
  return (
    <div>
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
    </div>
  );
};

export default observer(FucComponentsDemo);
