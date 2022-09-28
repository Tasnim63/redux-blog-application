import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Buttons from "../../components/Buttons";
import TextField from "../../components/TextField";

import { addComment } from "./CommentSlice";

export default function AddComments() {
    const dispatch = useDispatch();
    const navigate=useNavigate();
  const [values, setValues] = useState({
 
    comment: "",
  });
  const handleAddComments = () => {
dispatch(addComment({
    id:'3',
    name:values.name,
    comment:values.comment
}))
 setValues({ comment:''});
 navigate('/')
  };
  return (
    <div className=" flex items-center justify-center h-screen">
        <div className=" mt-10 max-w-xl mx-auto ">
         
         <TextField
      label="Blogs"
      value={values.comment}
      onChange={(e) => setValues({ ...values, comment: e.target.value })}
      inputProps={{ type: "text", placeholder: "Write Blogs" }}
    />
    <Buttons onClick={handleAddComments}>Submit</Buttons>
  </div>
    </div>
  
  );
}
