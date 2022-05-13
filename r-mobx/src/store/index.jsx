import React from 'react';
import LoginStore from "./model/userModel";

const { useContext } = require("react")

class RootStore {
    constructor() {
       this.loginStore = new LoginStore();
    }
}
//实例化
const rootStore = new RootStore()
const rootStoreContext = React.createContext(rootStore)

//拿到里面的值
export const useStore = () => useContext(rootStoreContext)
