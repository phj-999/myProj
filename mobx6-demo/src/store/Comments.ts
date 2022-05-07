import axios from "axios";
import { makeAutoObservable, runInAction } from "mobx";
import { CommentType } from "../types/data";

const request = axios.create({
  baseURL: "http://localhost:8000",
  timeout: 5000,
});

class Comment {
  list = [] as CommentType[];
  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }
  async getList() {
    //const res = await request.get<XXX>('/list') 此处的泛型指的是函数的返回值类型，请求到的数据的类型

    const res = await request.get<Array<CommentType>>("/list");
    runInAction(() => {
      this.list = res.data;
    });
  }
  async add(content:string) {
       const newobj ={
           attitude:0,auth:'xx',avatar:'xx',commment:content,time: new Date().toLocaleString()
       }
       const res = await axios.post('/list',newobj)
  }
}

const comment = new Comment();

export default comment;
