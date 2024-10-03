import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
const Post = () => {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      setUserList(res.data);
    });
  }, []);
  toast.success("Post added successfully!");
  return (
    <section className="py-10 px-4">
      <div className="container">
        <ToastContainer position="top-right" autoClose={5000} />
        <ToastContainer />
        <h1 className="text-5xl border-b pb-2">User list</h1>
        {userList.map((item) => (
          <div key={item.id}>
            <h2 className="text-4xl">Name : {item?.title}</h2>
            <p className="font-medium w-[500px] py-5">{item?.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Post;
