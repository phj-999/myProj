import React from "react";
import { useStore } from "../../store";

const List = () => {
  const { comment } = useStore();
  return (
    <div>
      {comment.list.map((item) => (
        <div className="list-item" key={item.id}>
          <div className="user-face">
            <img src={item.avatar} alt="" />
          </div>
          {/* ... */}
        </div>
      ))}
    </div>
  );
};

export default List;
