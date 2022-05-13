import {flow, makeAutoObservable} from 'mobx'
import Axios from '@/utils/axios';
import Api from '@/api/index'

class LoginStore {
    token= ''
    user
    resdata
    constructor() {
        makeAutoObservable(this, {userLogin:flow})
    }
    get userSession() {
        return JSON.parse(sessionStorage.getItem('user')||'{}')
    }

    get tokenSession () {
      return  sessionStorage.getItem('token'||'')
    }

    // 登录 
    *userLogin({username,password}){
       try {
        const response = yield Axios.post(Api.user.UserLogin,{username,password})
        console.log('====================================');
        console.log(response);
        console.log('====================================');
        if (response.data.returnCode === 200) {
            //存储起来
            this.user = response.data.data
            this.token = response.data.token
            this.resdata=response.data
        }
       } catch (error) {
            console.log(error);
       }

    }
}

export default LoginStore