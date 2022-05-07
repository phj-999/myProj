import { observer } from "mobx-react";
import React, { useEffect } from "react";
import Form from "../Components/comment/Form";
import List from "../Components/comment/List";
import { useStore } from "../store";

const Comment = () => {
    const {comment} = useStore()
    useEffect(() => {
        comment.getList()
    }, [comment])
    
  return (
    <div className="comment-container">
      <div className="comment-head">
        <span>x 评 论 </span>
      </div>
      <Form />
      <List />
    </div>
  )
  
};

export default observer(Comment);
