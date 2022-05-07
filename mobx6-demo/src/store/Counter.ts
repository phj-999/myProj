import { action, makeObservable, observable } from "mobx"


class Counter {
    counter = 0
    constructor(){
        //参数1： 指定谁变成响应式
        //参数2：指定哪些属性或者方法变成可观察的
        makeObservable(this,{
            counter: observable, //counter是可观察的
            increment: action, //修改counter的方法是个action
            resset: action
        })
    }
    increment() {
        this.counter++
    }
    resset(){
        this.counter = 0
    }
}
export default new Counter()