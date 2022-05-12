import {flow, makeAutoObservable} from 'mobx'

class LoginStore {
    token= ''
    constructor() {
        makeAutoObservable(this, {login:flow})
    }
    // 登录 
    *login(){
        const response = yield axios
    }
}